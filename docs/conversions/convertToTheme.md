---
sidebar_position: 1
---

# Convert Wallpaper's Theme

1.  `Singe conversion`

Convert any image to your favourite color scheme. Do `gowall list` for a list of available themes

  ```bash
    gowall convert path/to/img.png -t <theme-name>
  ```
![Singe conversion](./img/catppuccin.png)

Notes 🗒️ :

:::info
- `path/to/img.png` does not have to be an absolute path. You can use a relative path with the `~` ex. `~/Pictures/img.png` 
- `gowall list` shows the 25 built in themes along with any custom theme you created in `~/.config/gowall/config.yml`
:::

\
\

2. `Batch conversion`

Processes more than 1 image at a time.

   ```bash
     gowall convert -b path/img.png,path/im2.png -t <theme-name>
   ```
⚠️ Do not leave any white spaces between the comma `,`

\
\
3. `Convert a whole Directory`

   Use the `#` delimiter to convert every image file under that directory.
   
   ```bash
    gowall convert ~/Pictures/# -t catppuccin

    gowall invert ~/Pictures/test/# 
   ```
Notes 🗒️ :

:::info
 Only `png` `jpeg` `jpg` `webp` images will be converted any other directory or  file will be ignored
:::