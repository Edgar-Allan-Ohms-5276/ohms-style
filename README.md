# Ohms Style

This repo is a collection of stylesheets used by Edgar Allan Ohms projects and related materials.

## Usage

This project is meant to be included as a git submodule.

```bash
git submodule add https://github.com/Edgar-Allan-Ohms-5276/ohms-style.git path/to/desired/location
```

Then, include the `main.scss` file (project must support SASS):

```javascript
import "./path/to/ohms-style/scss/main.scss"
```

Now you can use the components! We currently have documentation for HTML and React (Vue will be added in the future!)

| Documentation            |
|--------------------------|
| [html](html/README.md)   |
| [react](react/README.md) |