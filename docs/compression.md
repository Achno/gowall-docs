---
sidebar_position: 5
---

# Image Compression

Image compression reduces the size of images  by reducing the amount of data required to represent the image while visually staying the same. Gowall  <u>supports `png`, `jpeg`, `jpg`, `webp` compression</u>.

PHOTO HERE

### Lossy and Lossless Compression

Before you proceed you need to understand these 2 things : 

- `Lossless` : You reduce the size of the image without losing any quality at all. (Reduces size by a little)
- `Lossy` : You lose some quality and because the human eye is forgiving you won't notice it. (Reduces size by a lot)

I could go into more detail but that's all you need to know for you to use the cli flags really. Essentially with 
`lossless` you will get a little reduction and your image will look exactly the same as before and with `lossy` you get a massive reduction and the image will look slightly different (well depending on the `Quality` flag you set).


### Usage & Options

```bash
gowall compress ~/Pictures/img.png

gowall compress ~/Pictures/img.png --output ~/Newdir/img.png
gowall compress --batch img1.png,img2.png
gowall compress --dir ~/Pictures/Pictures/Mydir --output ~/Newdir
```

 ➤ **Available Methods**

The `-m` flag is used to specify the method for an image format. You can view the available methods with : 

```bash
gowall compress 

...

-m, --method Available methods: pngquant, losslesspng, lossllyjpeg, lossllyjpg, lossllywebp <---

```

We can see the `png` format has 2 methods available to us, `pngquant` and `losslesspng`. Since `pngquant` is 
the default lets switch to the second method for our example to showcase the `-m` flag.

```bash
gowall compress ~/Pictures/img.png -m losslesspng
```

➤ **Quality**

The `-q` flag is used to specify the quality of the image. The quality is an integer from `0-100`.
(Default is `80`).  

You can always play around and see how much you can compress the image while you still can't notice any difference from the original.

```bash
gowall compress ~/Pictures/img.png -q 80
```

➤ **Speed**

The `-s` speed flag is only used to change the speed for the `pngquant` compression method. (default is `4`).

- `-s 1` : Slow but good compression.
- `-s 11` : Insanely fast and rough compression.

```bash
gowall compress ~/Pictures/img.png -s 1 # default png method is pngquant so it will apply

gowall compress ~/Pictures/img.png -s 11 -m losslesspng # Here the -s flag has no effect because we aren't using pngquant
```
