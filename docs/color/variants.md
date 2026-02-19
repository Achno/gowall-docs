---
sidebar_position: 1
---

# Generate color variants

`monochrome`, `shades`, `tints`, and `tones` are all variants. All affect one color and mutate it in some way to create variations of it. Check out [the usage section below to visually understand](./variants.md#usage--options)

```bash
gowall color variants "#ff23ff" -t shades 
gowall color variants "#ff23ff" -t shades -n 8

gowall color variants "#ff23ff" -t tones -n 8
gowall color variants "#ff23ff" -t tints -n 8 
gowall color variants "#ff23ff" -t monochrome -n 8
```

## Usage & Options

➤ **Type**

The `-t` (or `--type`) flag specifies the variant type to generate. 

Lets take the color ![#331D8D](./img/purple.png) as an example so you can understand what they do.
Remeber that color is the input for all these different variant types.


1) `monochrome` returns colors of the same hue, but with a different saturation/lightness:

![monochrome](./img/monochrome.png)

2) `shades` (default) - Darker versions of the color (mixed with black)

![shades](./img/shades.png)

3) `tints` - Lighter versions of the color (mixed with white)

![tints](./img/tints.png)

4) `tones` - Muted versions of the color (mixed with gray)

![tones](./img/tones.png)

```bash
gowall color variants "#ff23ff" -t shades
```

➤ **Number**

The `-n` (or `--number`) flag controls how many variants to generate.

- **Default**: `5` (generates 5 variants)

```bash
# Generate 5 shades (default)
gowall color variants "#ff23ff" -t shades

# Generate 8 shades of this color
gowall color variants "#ff23ff" -t shades -n 8
```

You can pass colors in any format that `gowall` understands (for example `hex`, `rgb`, `hsl`, `lab`) as shown in [here](./convert.md).

