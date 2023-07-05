# Webpack caldown

Generates a node web app based on Webpack.

You can do it by two means:

1. Make the root file `createenv` executable. Then, execute it!

2. Go to the `node` folder and execute `index.js` using node.

## Tips for developing

Besides app having the Jest to perform unittests, always is good to know to to test manually. So, you need to test the script activation through two differets ways:

1. Running `createenv` from root project directory,
2. Running `node index.js` inside the `node` directory.

In either way, the script MUST output the same result and behave in the same way.
