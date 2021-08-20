# Eslint

## Configurar Eslint para react js.

Dentro del terminal debemos agregar el siguiente comando

```
npm install -g eslint
```

Escogemos ‘Use a popular style guide’ y damos enter.

Luego vamos a escoger ‘Airbnb’.

Por último pregunta lo siguiente ‘What format do you want your config file to be in?’ vamos a escoger ‘JSON’.

Los pasos anteriores van a generar un archivo .eslintrc.json en el vamos a incluir el siguiente bloque de código el cual contiene las reglas para estilar nuestro proyecto:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "parser": "babel-eslint",
  "extends": ["plugin:react/recommended", "airbnb"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "no-trailing-spaces": "off",
    "no-irregular-whitespace": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    //"linebreak-style": ["error", "windows"],
    "linebreak-style": 0,
    "react/jsx-filename-extension": "off",
    "comma-dangle": "off",
    "arrow-body-style": "off",
    "no-unused-vars": "warn",
    "jsx-a11y/click-events-have-key-events": "off",
    "sx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/no-array-index-key": "off",
    "react/button-has-type": "off",
    "spaced-comment": "off",
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-closing-tag-location": "off",
    "operator-linebreak": "off",
    "no-nested-ternary": "off",
    "react/jsx-props-no-spreading": "off",
    "radix": "off",
    "object-curly-newline": "off",
    "indent": "off",
    "react/jsx-wrap-multilines": "off",
    "max-len": "warn",
    "semi": "off",
    "lines-between-class-members": "off",
    "jsx-a11y/alt-text": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
}
```
Posteriormente instalaremos una extensión `Prettier - Code formatter`

Configuraremos un nuevo archivo `.prettierrc` y agregaremos el siguiente json

```json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2
}
```