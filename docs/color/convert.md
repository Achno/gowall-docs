---
sidebar_position: 6
---

# Convert color to different formats

Do you wish to convert a color to a different format? (color space)  
Like `hex` -> `rgb` or `hex` -> `lab` or vice versa? Well this has you covered.


```bash
gowall color convert "#8A3033" -t rgb

gowall color convert "lab(33.47,38.53,18.86)" -t hex
gowall color convert "lab(33,39,19)"

gowall color convert "rgb(138,48,51)" -t lab

gowall color convert "hsl(358,48,36)" -t hex
```

## Usage & Options

➤ **Type**

The `-t` flag is used to specify the type of color space. You have 4 available options:
- `rgb` (default)
- `hex`
- `hsl`
- `lab`


```bash
gowall color convert "#8A3033" -t hsl
```
