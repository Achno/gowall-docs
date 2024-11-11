---
slug: /
sidebar_position: 1
---

# Introduction (Important)

## What is gowall?

Gowall is a CLI and started as a way to convert images ( specifically wallpapers ) to your favourite color scheme ex. catppuccin,everforest,solarized ...  

From then gowall has come a long way and i have transformed it to a tool that has a lot more cool image processing capabilities.



## Gowall's Features explained quickly

❗ Gowall although a CLI has an `Image preview` feature, you can see the next section for more information.

| Feature                            | Explanation                                                                                                                |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Convert a Wallpaper's theme        | Transforms the color scheme of the image to your favorite theme (catppuccin, everforest, tokyo...) to match your system's theme |
| Convert an image to pixel art      | Transforms your image to the typical blocky appearance of pixel art                                                        |
| Change Image format                | Change format from `.webp` to `.png`, for example                                                                          |
| Invert image colors                | Flips the colors of an image (a very underrated feature)                                                                   |
| Replace a specific color in an image | Changes a specific color in the image to another                                                                          |
| Extract the color palette          | Finds the dominant or all colors in an image (similar to pywal)                                                            |
| Draw on the Image                  | Draw borders, shapes, and effects                                                                                          |
| Remove the background of the image | Removes the background from an image                                                                                       |
| Daily wallpapers                   | Explore community-voted wallpapers that reset daily                                                                        |



## Image preview

Gowall  supports  `image preview`  by printing the image on the terminal on `kitty`. If you are running on an terminal emulator other than kitty it will just open your default image viewing application no matter the operating system. 

`Image preview` is `ON` by default. You can disable it by adding the following inside your `~/.config/gowall/config.yml` : 

   ```yaml title="~/.config/gowall/config.yml"
   EnableImagePreviewing: false
   ```
## Shell completions

### What are completions?

in cli's completions help you finish typing commands and their options (flags,subcommands) quickly by pressing `[TAB]`,for example 

```bash
gowall [TAB] 
```
would show you the options below

```
Available Commands:
  bg          Removes the background of the image
  completion  Generate the autocompletion script for the specified shell
  convert     Convert an img's color scheme
  draw        draw a border with a color and thickness (currently)
  extract     Returns the color pallete of the image you specificed (like pywal)
  help        Help about any command
  invert      Inverts the color's of an image
  list        Lists available themes
  pixelate    Turns an image to pixel art depending on the scale flag

Flags:
  -h, --help      help for gowall
  -t, --toggle    Help message for toggle
  -v, --version   show gowall version
  -w, --wall      fetches the wallpaper of the day!
```
<br />
### How do i add shell completions?

Shell completions are available for `zsh` `bash` `fish` `powershell`. Lets see how to add `zsh` shell completions, all the other can be added the same way.

Generate the completion and save it as `_gowall`
```bash
gowall completion zsh > ~/_gowall
```
Add the following  to your `.zshrc` to make sure zsh can use shell completions
```bash title=".zshrc"
fpath=(~/ $fpath)

autoload -Uz compinit
compinit
```

Lastly source your `.zshrc`
```bash
source ~/.zshrc
```

