<p align="center">
  <h3 align="center">Form.css ⚡️</h3>
</p>

<p align="center">
   <img src="https://img.shields.io/badge/language-CSS-563d7c"/>
   <img src="https://img.shields.io/github/license/maxam2017/form.css"/>
</p>

## Overview

> This project is still under construction 🚧

A CSS library for form fields. It's simple and **classless**.

[Demo 👨🏻‍💻](https://maxam2017.github.io/form.css/)

## Installation

```html
<link rel="stylesheet" href="https://maxam2017.github.io/form.css/css/form.css" />
```

## Documentation

### Theme

#### Scheme

- Support two common color scheme: `light` and `dark`.
- By default, we use [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).
- Simply put attribute `data-theme` on `<body/>` for override default theme.

  - Ex. override to dark mode
    ```html
    <body data-theme="dark"></body>
    ```

#### Customize your own theme

We provide some css-variables to customize theme color.

| css-variable                 | default value(light) | default value(dark) |
| ---------------------------- | :------------------: | :-----------------: |
| `--primary-color`            |    `51, 151, 207`    |   `51, 151, 207`    |
| `--default-text-color`       |      `0, 0, 0`       |   `255, 255, 255`   |
| `--default-background-color` |   `255, 255, 255`    |      `0, 0, 0`      |

> For easily modify theme color without compiling by sass processor, we only put `r,b,a` parameters into css-variable

### Components

#### Normal Input

- Ex.
  ```html
  <input />
  ```

#### Switch

- material-ui style
- simply add attribute `data-type="switch"` on checkbox input
- Ex.
  ```html
  <input type="checkbox" data-type="switch" />
  ```

#### Checkbox

- material-ui style
- Ex.
  ```html
  <input type="checkbox" />
  ```

## License

Distributed under the MIT License. See `LICENSE` for more information.
