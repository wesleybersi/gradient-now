# gradient-now

**gradient-now** is a command-line tool that generates a gradient of colors based on the input provided. You can specify any number of colors in hexadecimal format or color names, followed by a number indicating the steps in the gradient.

## Installation

To install **gradient-now**, use the following npm command:

`npm install -g gradient-now`

## Usage

`gradient-now color1 color2 color3 ... colorN steps`

- **color1, color2, ..., colorN:** Hexadecimal color codes or color names.
- **steps:** The number of steps in the gradient.

Example usage with hexadecimal colors:

`gradient-now #102E9C #F52828 15`

Will return:

`[
  '#102e9c', '#202e94',
  '#312d8b', '#412d83',
  '#512c7b', '#622c73',
  '#722b6a', '#832b62',
  '#932b5a', '#a32a51',
  '#b42a49', '#c42941',
  '#d42939', '#e52830',
  '#f52828'
]`

Example usage with color names and hexadecimal colors:

`gradient-now red #345EEE aquamarine 10`

Will return:

`[
  '#ff0000', '#d21535',
  '#a52a6a', '#783f9f',
  '#4b54d4', '#3c70eb',
  '#4d94e5', '#5eb7e0',
  '#6edbda', '#7fffd4'
]`

In both cases, the tool will output an array of color strings representing the gradient.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
