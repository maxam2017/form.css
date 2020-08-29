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

- Support two common color scheme: `light` and `dark`.
- By default, we use [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).
- Simply put attribute `data-theme` on `<body/>` for override default theme.

  - Ex. override to dark mode
    ```html
    <body data-theme="dark"></body>
    ```

### Components

#### Switch

- material-ui style
- simply add attribute `data-type="switch"` on checkbox input
- Ex.
  ```html
  <input type="checkbox" data-type="switch" />
  ```

## License

Distributed under the MIT License. See `LICENSE` for more information.
