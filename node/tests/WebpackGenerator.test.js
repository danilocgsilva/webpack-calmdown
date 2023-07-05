import WebpackGenerator from "../ContentGenerators/WebpackGenerator.js"

describe('WebpackGenerator', () => {
    test('Basic', () => {
        const webpackGenerator = new WebpackGenerator()
        webpackGenerator.prefixPath = ".."

        const expectedContent = `const path = require("path")

module.exports = {
    entry: "./src/script.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "js"),
        filename: "script.js"
    }
}`
        const generatedContent = webpackGenerator.generate()

        expect(generatedContent).toEqual(expectedContent)
    })
})
