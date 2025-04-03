# Create a Gif from Images

➤ Creates a gif from images. You specify all the path to the images you want to create a gif for with `,` as the seperator. 
If you dont specify any flags the defaults are set so it loops forever and it has a 2 second delay between frames.

```bash
gowall gif --batch ~/Pictures/NOBORDER.png,~/Pictures/girl.png 
gowall gif --batch ~/Pictures/NOBORDER.png,~/Pictures/girl.png --output ~/Pictures/gowall/gifs/name.gif
```
:::note 
Do not leave any spaces between the path to the images.The `-b` flag is necessary 
:::

![gif](./img/gif.png)


### Delay between Frames

To change the delay between the frames you can use the `-d` flag followed by an integer. 100 is 1 second.

```bash
gowall gif -b ~/Pictures/NOBORDER.png,~/Pictures/girl.png -d 100
```

### Loops of the frames

The `l` flag is used to specify the number of loops to show the frames of the gif.

1. `l=0` If you want the frames of your gif to show forever (default). 
2. `l=-1` If you only want to show the frames of your gif only once.
3. `l=n` This will show the frames of the gif n+1 times.


```bash
gowall gif -b ~/Pictures/NOBORDER.png,~/Pictures/girl.png -l -1
```

### Disable Automatic resize of the Images

If you know your images are all the same dimensions, you can gain a decent speed-up by just telling gowall
that your images have the same dimensions and to not automatically resize them. Do that by setting `-r 0` which means turn off resizing

```bash
gowall gif --dir ~/Pictures/vtest -r 0 --output ~/Pictures/gowall/gifs/name.gif
```

If you see a `gif: image block is out of bounds` error though, that means that they aren't the same size 
so remove that `-r 0`.

### ➤  `Directory conversion`

```bash
gowall gif --dir ~/Pictures/Dir
gowall gif --dir ~/Pictures/Dir --ouput ~/Pictures/gowall/gifs/name.gif
```
