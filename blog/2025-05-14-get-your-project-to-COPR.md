---
title: Fedora COPR & gowall
description: The best guide on Fedora COPR
slug: Fedora-COPR-gowall
authors:
  - name: Achno
    title: I'm just a silly little guy who likes Go, Image processing and Computer Vision 
    url: https://github.com/Achno
    image_url: https://avatars.githubusercontent.com/u/129212519?s=400&v=4
    socials:
      github: https://github.com/Achno
tags: [go, Fedora-COPR,docker]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

The best guide where i hold your hand from 0-100 to get your project on Fedora COPR.
Work within docker and learn how [gowall](../docs/intro) was put on Fedora COPR.

<!-- truncate -->

## Before we start
---

I) When i was trying to put my project on Fedora COPR, i struggled quite a bit because the documentation was, well... nonexistent . 

II) What didn't help was that i had zero idea how to even make a Linux RPM package (probably like your dear reader).

III) Even worse i have never played around with Fedora before.

To address `I)` & `II` i will make sure to hold your hand throughout this article from 0 to 100 and explain things as best as i can. To address problem `III)` we will use `docker` to build the project since Fedora is not my daily driver and this allows everyone to participate with a clean environment no matter their distro from the same starting point.

**Prerequisites** : `Docker`

If you are on Fedora and you don't want to use `Docker` that's fine as well.
Lastly this guide was created from my notes in Obsidian so there may be some inconsistencies.

## TLDR

You grab your project from your `tarballs` (ex. github release section),write a `.spec` file, build the `.rpm`, test its working as expected with `dnf` and then you just push your project to the COPR repositories via the `copr-cli`.


## Getting Started : Environment & .spec file
---

1. Run Fedora in docker so we can  build the `.rpm` there and test that its working.

Here i also install `go` since you know gowall is writen in `go` ... `go-wall`, yea anyway
```bash
docker run -it fedora:latest
sudo dnf update -y
sudo dnf install rpm-build rpmdevtools git dnf-plugins-core golang -y
```

2. Set up the RPM build directory

Some tools expect you to be running as not-root so we have to create a user. This builder user is a pleb for now. We will give him sudo permissions later.

```
useradd -m builder
su - builder
```

```bash
rpmdev-setuptree
```

The directory structure should look something like this : 

```
rpmbuild/
├── BUILD
├── RPMS
├── SOURCES
├── SPECS
├── SRPMS
```

3. Put your tarball `tar.gz` (ex. from github releases) within the `SOURCES` folder

```bash
cd ~/rpmbuild/SOURCES

curl -L -o gowall-0.2.0.tar.gz 
https://github.com/Achno/gowall/archive/refs/tags/v0.2.0.tar.gz
```

4. Navigate to the `SPECS` directory,Create a spec file for your project, if you happen to be building a `go` project like me you can easily copy-paste the below `.spec` provided your project does not depend on other packages.

```bash
cd ~/rpmbuild/SPECS
touch gowall.spec
vi gowall.spec
```

You could also try the `rpmdev-newspec` utility if you want for the `.spec` file. Check [this](https://rpm-packaging-guide.github.io/#working-with-spec-files) resource if you want to understand what all these fields mean.

```bash title:"gowall.spec"
Name:           gowall
Version:        0.2.1
Release:        1%{?dist}
Summary:        An image processing toolbox CLI, Convert wallpapers color theme...

License:        MIT
URL:            https://github.com/Achno/gowall
Source0:        %{name}-%{version}.tar.gz

BuildRequires:  golang
BuildRequires: git
Requires:       glibc

%description
%{summary}

%prep
%setup -q

%build
export CGO_CPPFLAGS="${CPPFLAGS}"
export CGO_CFLAGS="${CFLAGS}"
export CGO_CXXFLAGS="${CXXFLAGS}"
export CGO_LDFLAGS="${LDFLAGS}"
export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

go mod tidy
go build -v -o gowall

%install
install -Dm0755 %{name} %{buildroot}%{_bindir}/%{name}

%files
%{_bindir}/%{name}
%license LICENSE
%doc README.md

```


## Build the RPM 
---

1. Build the package, you should see a `.rpm` and a `SRPM` `src.rpm`. For example

```bash
rpmbuild -ba gowall.spec
```

- RPM: `~/rpmbuild/RPMS/x86_64/PackageName-0.1.9-1.fc38.x86_64.rpm`
- SRPM: `~/rpmbuild/SRPMS/PackageName-0.1.9-1.src.rpm`

###### Test the RPM locally in the Docker container

Type `exit` to go back to the root user and make the builder have sudo permissions `usermod -aG wheel builder` and change his password `passwd builder` and lastly change back to the builder user `su - builder`. Now we can test our package

```bash
sudo dnf install ~/rpmbuild/RPMS/x86_64/gowall-0.2.0-1.fc$(rpm -E %fedora).x86_64.rpm
```

Now lets test our application. You will see the gowall version if you run it and that confirms that its working just fine.
```
gowall -v 
```

Then just remove it with the following, after you are done testing it : 

```bash
sudo dnf remove gowall
```


## Upload your RPM to Fedora COPR
---

###### Create a Fedora account 

 Visit [here](https://copr.fedorainfracloud.org/) and sign up. Then visit the fedora COPR website and login,once logged in, scroll down to the page footer. You will see `Site navigation` and `API` on the center. You will then see a code block with some configuration **copy** that.

Next install `copr-cli`.

```bash
sudo dnf install copr-cli
```

- Create the below file and **paste** that configuration there. The config is just an auth token so we can push our project to the COPR servers.

```bash
vi ~/.config/copr
```


###### Create a New Project & Upload it

1. Create a new project

The `--chroot` is important and are the architectures you want to build for as well as the fedora versions. If Fedora upgrades you also need to update your COPR package as well.

Everything can be changed BUT the package name so be careful.
```bash
copr-cli create gowall --chroot fedora-41-x86_64 --description "A tool to convert a Wallpaper's color scheme & more image processing features"
```


2. Create the `.src.rpm` 

```bash
rpmbuild -bs ~/rpmbuild/SPECS/gowall.spec
```

:::warning

You need to enable internet access during builds. 
Go to the fedora COPR website and then check that checkbox :  Settings>Enable Internet Access during builds.

:::

3. Upload the  `.src.rpm` to COPR. Now we uploaded a build

```bash
copr-cli build gowall ~/rpmbuild/SRPMS/gowall-0.2.0-1.fc41.src.rpm
```


4. Go to the COPR dashboard and monitor the build status and enjoy the fruit of your labor.


## How Users will download your package
---

Installation is incredibly easy. Enable the repository and install the package.

```bash
sudo dnf copr enable <your_fedora_username>/<PackageName>
sudo dnf install <PackageName>
```

You can see your username in the `~/.config/copr` file we created earlier.

Now in the COPR package section head over to setting and fill in the Instructions on how your project can be installed

## Automate all of this with Github actions

Check [here](https://docs.pagure.org/copr.copr/user_documentation.html#triggerring-builds-by-tag-events) on how to automate all of this by triggering builds on push by tag events on a CI pipeline

## How to get your package to the official Fedora repositories

It's a really back and forth time consuming process, this [video](https://www.youtube.com/watch?app=desktop&v=w3e3W00KqVI) is the best i have seen in explaining it.

I hope you liked my style of writing :) Check out [gowall](https://github.com/Achno/gowall) if like you like features like converting wallpapers or icons to your favourite color scheme, OCR powered via Local Vision LLM's Tesseract + LLM's along with other providers ( scheduled for the **v0.2.2** release, well whenever i release that) and other image processing features. 