---
sidebar_position: 2
---

# Installation

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

### Build from source

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