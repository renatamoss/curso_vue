## Como utilizar o Google Fonts no VUE JS

**O Plug-in do Google Fonts para Webpack é o caminho:**

```
npm i google-fonts-webpack-plugin -D
```

**Vá até seu *webpack.config.js* e adicione as seguintes linhas:**

```
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "index.js",
    /* ... */
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Source Sans Pro" },
                { family: "Roboto", variants: [ "400", "700italic" ] }
            ]
        })
    ]
}
```

**O Google Fonts poderá ser utilizado em qualquer lugar dentro do seu projeto do VueJS.**