---
sidebar_position: 2
---

# Convert Image to Pixel art

### ➤  `Singe conversion`

Convert an image to pixel art by applying a pixelation effect.

  ```bash
gowall pixelate ~/Pictures/img.png -s 15
gowall pixelate ~/Pictures/img.png -s 15 --output ~/NewFolder/newName.jpg
  ```

The `-s` is the `scale` flag, an integer from [1-25]. The higher the number the less pixelated (blocky) the image is.
The lower you set it the more the pixel effect will become apparent. Start from 25 and decrement it slowly till you get to the desired number. 

:::tip
The higher resolution image you have, the lower the `scale` flag must be set.
:::

![First img to pixel example](./img/pixel2.png)
\
\
![Second img to pixel example](./img/pixel1.png)

### ➤  `Batch conversion`

```bash
gowall pixelate --batch img1.png,img2.png -s 15
gowall pixelate --batch img1.png,img2.png -s 15 --output ~/NewFolder
```

### ➤  `Directory conversion`

  ```bash
gowall pixelate --dir ~/Pictures/Dir1 -s 15
gowall pixelate --dir ~/Pictures/Dir1 -s 15 --output ~/NewFolder
  ```