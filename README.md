# WebPack Configurations:

1. Download this repository.
2. Copy the content of it to your own newly-created repo and run the following commands consecutively.
3. Initialize `npm`:

```sh
npm init -y
```

4. Install WebPack

```sh
npm install webpack webpack-cli --save-dev
```

5. Install style-loader and css-loader.

```sh
npm install --save-dev style-loader css-loader
```

6. install HtmlWebpackPlugin plugin:

```sh
npm install --save-dev html-webpack-plugin
```

7. Install webpack-dev-server:

```sh
npm install --save-dev webpack-dev-server
```

8. Go to the `package.json` file and in the script property replace the following code with its previous value:

```sh
"test": "echo \"Error: no test specified\" && exit 1",
"start": "webpack serve --open",
"build": "webpack"
```

9. Run following command to generate dist directory and its necessary file:

```sh
npm run build
```

10. Run following command to run project on the default browser using webpack-dev-server:

```sh
npm start
```

# Linters Configurations:

1. Install Webhint:

```sh
npm install --save-dev hint@7.x
```

2. Install stylelint:

```sh
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

3. Install ESLint:

```sh
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
