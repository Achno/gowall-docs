---
sidebar_position: 2
---
# Installation

Make sure to do `gowall -v` and compare it against the release page version, since the docs only show the commands/flags and capabilities of the latest released version. You can find the **currently released version** [here](https://github.com/Achno/gowall/releases)


### Grab the binary from the release section (Stable Release)

Head over to the [release section](https://github.com/Achno/gowall/releases)

Choose the latest version of gowall. You should see a `.tar.gz` for your operating system and architecture. Simply Extract the binary inside and place it inside your `$PATH` 

```
sudo cp gowall /usr/local/bin/
```

Otherwise you can also just build the project yourself check the [section below](#build-from-source-cutting-edge)

### MacOS (currently behind on v0.2.0)

A special thank you to `chenrui333` for making this possible.
```
brew install gowall
```

### Arch linux - AUR

```bash
yay -S gowall
```
### NixOS - ( Maintainer : [Emily Trau](https://github.com/emilytrau) )

```
  environment.systemPackages = [
    pkgs.gowall
  ];
```
More installation options : [here](https://search.nixos.org/packages?channel=24.05&from=0&size=50&sort=relevance&type=packages&query=gowall)

### Fedora - COPR

```bash
sudo dnf copr enable achno/gowall
sudo dnf install gowall
```

### Void Linux - XBPS-SRC ( Maintainer : [elbachir-one](https://github.com/elbachir-one/)  ) 

Assuming you have [void-packages](https://github.com/void-linux/void-packages)

```bash
git clone https://github.com/elbachir-one/void-templates
cd void-templates/ && cp -r gowall/ void-packages/srcpkgs/
cd void-packages/
./xbps-src pkg gowall
sudo xbps-install -R hostdir/binpkgs gowall
```


### Build from source (Cutting Edge)

🔨 Clone the repo, build the project and move it inside your `$PATH`

#### Linux & MacOS

```bash
git clone https://github.com/Achno/gowall
cd gowall
go build -v
sudo cp gowall /usr/local/bin/
gowall
```

#### Windows (Or any OS if git cloning and go build did not work)

For Windows we need to install `zig` & `go` to build it. I advise you to use a package manager like [scoop](https://scoop.sh/) to install it. Obviously you can just go the zig website and download the installer, it doesn't really matter, the zig binary needs to be in your `$PATH`.

```bash
scoop install main/zig # or just go to the website and download zig if you don't want to use a package manager
```

```bash
git clone https://github.com/Achno/gowall
cd gowall

export CGO_ENABLED=1 # if you are using powershell : $env:CGO_ENABLED=1
export CC="zig cc" # if you are using powershell : $env:CC="zig cc"
export CXX="zig c++" # if you are using powershell : $env:CXX="zig c++"

go clean -cache 
go build -v

# then simply add the binary to your PATH
```

### Go install
 if you have `$GOPATH` setup correctly Eg. you have the following in your .zshrc / .bashrc
```bash
export GOPATH=$(go env GOPATH)
export GOBIN=$GOPATH/bin
export PATH=$PATH:$GOBIN
```
And simply use `go install`
```bash
go install github.com/Achno/gowall@latest
```