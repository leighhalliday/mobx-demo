- Create new react app with `create-react-app`
- Initialize git repository, then add files and do initial commit.
-
  Follow the gist we have for past projects to get sass set up and use concurrently
  Steps:
  - run `yarn add concurrently --dev`
  - create `src/css` folder, and add `styles.scss` file
  -
    add these lines to package.json in scripts section
    ```json
    "watch-styles": "sass --watch src/css/styles.scss:src/css/styles.css",
    "watch": "concurrently --prefix \"[{name}]\" --names \"REACT,SASS\" -c \"bgBlue.bold,bgMagenta.bold\" \"npm run start\" \"npm run watch-styles\""
    ```
  - Change `src/index.js` to import `import './css/styles.css';` not the css it is currently importing.
-
  We need to "eject" from create-react-app... this is because by default it
  does not support something called "decorators", which is when you see
  something like `@observer` or `@observable`.

  For this I followed the article: https://swizec.com/blog/mobx-with-create-react-app/swizec/7158
  So, run the command: `yarn run eject`

- Add these files and commit again.
-
  Run this line to install the babel package to support decorators.
  `yarn add babel-plugin-transform-decorators-legacy --dev`
-
  We now have to tell babel that we want to use this decorator plugin. In the
  `package.json` file, go find the spot which talks about the babel presets...
  it should end up looking like this once we add the plugins section:

  ```js
  "babel": {
    "plugins": [
      "transform-decorators-legacy"
    ],
    "presets": [
      "react-app"
    ]
  }
  ```

- Install `mobx` and `mobx-react` package with yarn, then commit :)
-
  Create `stores` folder in `src` folder... here is where all of our mobx
  stores will live. Each store will be in its own file. I am creating one
  called `ShoeStore`, for tracking info about all my favourite shoes. Review
  the `src/stores/ShoeStore.js` file which contains comments about how mobx works.
-
  In the `src/index.js` file there are comments explaining the changes from a normal create-react-app installation.
-
  In `App.js` file there are comments explaining how to "inject" and use the store
  to both display its values and also call its actions.
