# Brightness

➤ Lighten or Darken an image by changing its brightness. The `-f` flag is used for that, it is a float between (0.0,10.0]  

    1. If `f>1` then it lightens the image. For example : `-f 1.2` increases the brightness by 20%  

    2. If `0<f<1` then it darkens the image. For example : `-f 0.8` decreases the brightness by 20%

```bash
gowall effects br ~/Pictures/girl.png -f 1.2
```
![brightness](./img/brightness.png)
