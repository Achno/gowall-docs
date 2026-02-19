---
sidebar_position: 5
---

# Lighten & darken a color

Lighten or darken a color by a specific amount, essentially change its brightness. You know when you want to tweak
a color in an image, for example when the background color is a bit too light for your liking and you want the
same color but a bit darker so you dont burn your retina?

The `light` and `dark` subcommands help you do exactly that using a simple `-f` (or `--factor`) flag.

```bash
# Lighten a color by 30% (default factor with no flag)
gowall color light "#FF5733"
gowall color light "#FF5733" -f 0.45

# Darken a color by 30% (default factor with no flag)
gowall color dark "#FF5733"
gowall color dark "#FF5733" -f 0.2
```

You can pass colors in any format that `gowall` understands (for example `hex`, `rgb`, `hsl`, `lab`) as shown in [here](./convert.md) and it will output a lightened or darkened version.

```bash
gowall color dark "rgb(255,255,255)" -f 0.3
```

## Usage & Options

➤ **Factor**

The `--factor` (or `-f`) flag controls how much to lighten or darken the color.
You can use a negative factor 

- **Range**: `-1.0` to `1.0` For example if you use the `gowall color dark` command a positive factor darkens the color and a negative factor lightens the color. The opposite is true for the `gowall color light` command.
- **Default**: `0.3` (i.e. 30% lighter or darker)

```bash
# 30% lighter (implicit default)
gowall color light "#FF5733"

# 60% lighter
gowall color light "#FF5733" -f 0.6

# 20% darker
gowall color dark "#FF5733" -f 0.2
```

