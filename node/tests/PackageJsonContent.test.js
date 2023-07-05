import PackageJsonContent from "../ContentGenerators/PackageJsonContent.js"

describe('PackageJsonContent', () => {
    test('Basic', () => {
        const packageJsonContent = new PackageJsonContent()
        packageJsonContent.prefixPath = ".."

        const expectedContent = `{
  "name": "20230703-084807",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "build": "node node_modules/webpack/bin/webpack.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.88.1",
    "webpack-cli": "^5.1.4"
  }
}
`
        const generatedContent = packageJsonContent.generate()

        expect(generatedContent).toEqual(expectedContent)
    })
})
