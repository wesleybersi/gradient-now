# gradient-now

**gradient-now** is a command-line tool that generates a gradient of colors based on the input provided. You can specify any number of colors in hexadecimal format or color names, followed by a number indicating the steps in the gradient.

## Installation

To install **gradient-now**, use the following npm command:

```
$ npm install -g gradient-now
```

## Usage

```
$ gradient-now color1 color2 ... colorN steps
```

- **color1, color2, ..., colorN:** Hexadecimal color codes or color names.
- **steps:** The number of steps in the gradient.

**Optional:**

- **--list**: Will make it return an array/list of string values instead.
<!-- - **--rgb**: Will return RGB values instead of hexadecimals.
- **--hsl**: Will return HSL values instead of hexadecimals. -->

#### Example 1

```
$ gradient-now red blue 8
```

Will return eight hexadecimals colors starting the gradient at red and ending at blue:

```
#ff0000 #db0024 #b60049 #92006d #6d0092 #4900b6 #2400db #0000ff
```

#### Example 2

```
$ gradient-now aquamarine #912798 #abd778 12 --list
```

Will return an array of hexadecimal string values:

```
[
  '#7fffd4', '#82d8c9', '#86b0be', '#8989b3', '#8c62a8', '#8f3b9d',
  '#933795', '#98578f', '#9d7789', '#a29784', '#a6b77e', '#abd778'
]
```

In both cases, the tool will output a set of colors representing the requested gradient.

## Average color

This of course also makes **gradient-now** a convenient tool to quickly return an average of two colors.

#### Example

```
$ gradient-now yellow red 3
```

Will return three colors where the average color will be the second one:

```
#ffff00 #ff8000 #ff0000
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
