---
sidebar_position: 5
---
# Unix Pipe (Stdin,Stdout)

Do you want to combine gowall with other tools? Good, as of `v.0.2.1` and above you can! 
Let's get you familiar with how gowall reads from `stdin` and writes to `stdout` first.

This feature is used in [Convert your icon's theme ](./conversions/convertIconTheme.md)  You can find more uses here.
All of the commands can use `stdout` except for `gowall upscale` command and `gowall extract`

## Learn how gowall does stdin/stdout

### Read from `Stdin`

Gowall reads from `stdin` if the 1st argument is a dash : `-` notice that dash after the convert word?


```bash
cat ~/Pictures/img.png | gowall convert - -t catppuccin
cat ~/Pictures/img.png | gowall convert - -t catppuccin --output ~/Pictures/gowall/test.png
```

### Write to `Stdout`

Gowall writes to `stdout` if the 2nd argument is a dash : `-`   

Let's analyze the example below. The 1st argument is `~/Pictures/girl.png` and the 2nd argument is `-` so gowall will write the image data after it was processed to `stdout` for other tools to consume.


```
gowall convert ~/Pictures/girl.png - -t catppuccin | magick display -
```

### Read from `Stdin` & Write to `Stdout` at the same time

The first argument is `-` and the second argument is `-` in gowall, this means read from stdin and write to stdout :)

```bash
cat ~/Pictures/girl.png | gowall convert - - -t catppuccin | magick display -
```

## Some uses for stdin/stdout

### Pipelines

Chain together a bunch of gowall commands in 1 line.

```bash
gowall invert waves.png - | gowall convert - -t catppuccin --output ~/Pictures/gowall 
```

### Convert your Icon's theme

Check out this feature which takes advantage of `stdin` and `stdout` [here](./conversions/convertIconTheme.md)