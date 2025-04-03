
# Replace a specific color in an Image

As the title suggests you can use a color picker to select a color in an image and replace it with something else.
Maybe the image is just fine and you want to change the background which consists of a single color.

```bash
gowall convert ~/Pictures/bird.png -r #313244,#1D1C2D
gowall convert ~/Pictures/bird.png -r #313244,#1D1C2D --output ~/NewFolder/bird2.png
```
The above replaces the `#313244` color in the image with `#1D1C2D`
After converting an image to my favorite theme i dont like the background color being so bright.Lets fix that 🔨
Make sure to check out the [threshold option](./replaceColor.md/#threshold) too 


![replace color example](./img/replaceColor.png)

## Threshold

You can mess with the threshold that is accepted for a color to be replaced. To exaplin it simply, you see those petals in the image which look pink? Well you might think they are 1 color `#F4BDCC` but they might be different colors that are very close like `#F4BDCD`. By modifying the threshold value you can cover them as well.

```bash
gowall convert ~/Pictures/pixel_sakura_static.png -r #F4BDCC,#FF0000,30
```

The threshold is the third parameter in `-r` : `#F4BDCC,#FF0000,30 <--` == `#FromColor,#ToColor,Threshold (int)`

- The higher the threshold > 0  the more you accept nearby colors.
- if the threshold is 0, then the image remains unchanged

| Original Image | Modified Image (Look at the red petals) |
|----------|----------|
| ![original](./img/before_sakura.png)  | ![modified](./img/after_sakura.png)   |



### ➤  `Batch conversion`

```bash
gowall convert --batch bird.png,img2.png -r #313244,#1D1C2D
gowall convert --batch bird.png,img2.png -r #313244,#1D1C2D --output ~/NewFolder
```

### ➤  `Directory conversion`

```bash
gowall convert --dir ~/Pictures/Dir -r #313244,#1D1C2D
gowall convert --dir ~/Pictures/Dir -r #313244,#1D1C2D --output ~/NewFolder
```