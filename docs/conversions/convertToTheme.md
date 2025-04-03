---
sidebar_position: 1
---

# Convert Wallpaper's Theme

 ### ➤ `Singe conversion` 

Convert any image to your favourite color scheme. Do `gowall list` for a list of available themes.  
The folders with `--output` are automatically created for your convenience if they don't exist.

  ```bash
gowall convert path/to/img.png -t <theme-name> # gets saved to `Pictures/gowall`(can be changed)
gowall convert path/to/img.png -t catppuccin --output ~/NewFolder/newName.jpg
gowall convert path/to/img.png -t catppuccin --output ~/NewFolder #you dont have to specify the name or ext
 ```
 
![Singe conversion](./img/catppuccin.png)

Notes 🗒️ :

:::info
- `path/to/img.png` does not have to be an absolute path. You can use a relative path with the `~` ex. `~/Pictures/img.png` 
- `gowall list` shows the 25 built in themes along with any custom theme you created in `~/.config/gowall/config.yml`
- `-t` accepts a `.json` file with hex colors in the runtime see more info [here](../scripts.md#load-a-theme-dynamically-in-the-runtime-via-json-file)
:::

<br />

### ➤ `Batch conversion`

Processes more than 1 image at a time.

   ```bash
gowall convert --batch img1.png,img2.png -t <theme-name> # saved to the default dir
gowall convert --batch img1.png,img2.png -t <theme-name> --output ~/NewFolder
   ```
⚠️ Do not leave any white spaces between the comma `,`

<br />


### ➤ `Convert a whole Directory`

   Use the `#` delimiter to convert every image file under that directory.
   
   ```bash
gowall convert --dir ~/Pictures/Wallpapers -t catppuccin # saved to the default dir 
gowall convert --dir ~/Pictures/Wallpapers -t catppuccin --output ~/NewFolderAutomaticallyCreated
   ```

:::info
 Only `png` `jpeg` `jpg` `webp` images will be converted any other directory or  file will be ignored
:::

## New Algorithm v.0.2.0

![improvements](./img/convertImp-min.png)

As you can see the new backend for color correction offers big improvements in :
1. `speed`
2. `smoothness` (getting rid of the sharp color changing)

### Use the old backend

Optionally, if some users want to use the old backend, they can by using specifying the option in `~/.config/gowall/config.yml`. It should
be at the top level where `themes:` is.

```yml title="~/.config/gowall/config.yml"
ColorCorrectionBackend : nn
```
