---
sidebar_position: 3
---

# Around the Color Wheel

This section essentially focuses on solving the below questions:
 
- "What color pops against this background"
- "What text color is readable on this?" 
- "How do i feed it one color and get some colors in return which look good together?"

![wheel](./img/wheel.png)
```bash
gowall color wheel "#FF5733" -t triadic
gowall color wheel "#FF5733" -t quadratic
gowall color wheel "#FF5733" -t analogous
gowall color wheel "#FF5733" -t split-complementary
gowall color wheel "#FF5733" -t complementary
gowall color wheel "#FF5733" -t contrast
```


## Usage & Options

➤ **Type**

The `-t` (or `--type`) flag specifies the color scheme type to generate. You have 4 available options:

- `triadic` (default) - Three colors evenly spaced around the color wheel (120° apart)
- `quadratic` - Four colors evenly spaced around the color wheel (90° apart)
- `analogous` - Colors adjacent to each other on the color wheel.
- `split-complementary` - SplitComplementary schemes created by using colors next to the complementary value of a given color
- `complementary` - a complementary color is the color directly opposite another color on the color wheel
- `contrast` - returns the color with the highest contrast to a given color, either black or white

```bash
gowall color wheel "#FF5733" -t triadic
gowall color wheel "#FF5733" -t quadratic
gowall color wheel "#FF5733" -t analogous
gowall color wheel "#FF5733" -t split-complementary
gowall color wheel "#FF5733" -t complementary
gowall color wheel "#FF5733" -t contrast
```

You can pass colors in any format that `gowall` understands (for example `hex`, `rgb`, `hsl`, `lab`) as shown in [here](./convert.md).

