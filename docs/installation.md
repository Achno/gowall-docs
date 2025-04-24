---
sidebar_position: 2
---

Make sure to do `gowall -v` and compare it against the release page version, since the docs only show the commands/flags and capabilities of the latest released version. You can find the **currently released version** [here](https://github.com/Achno/gowall/releases)

# Installation

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

### Grab the binary from the release section (Stable Release)

Head over to the [release section](https://github.com/Achno/gowall/releases)

Choose the latest version of gowall. You should see a `.tar.gz` for your operating system and architecture. Simply Extract the binary inside and place it inside your `$PATH` 

```
sudo cp gowall /usr/local/bin/
```

### Build from source (Cutting Edge)

🔨 Clone the repo, build the project and move it inside your `$PATH`

```
git clone https://github.com/Achno/gowall
cd gowall
go build
sudo cp gowall /usr/local/bin/
gowall
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