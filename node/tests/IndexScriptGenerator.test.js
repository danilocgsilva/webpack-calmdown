import IndexScriptGenerator from "../ContentGenerators/IndexScriptGenerator.js"

describe('IndexScriptGenerator', () => {
    test('Basic', () => {
        const indexScriptGenerator = new IndexScriptGenerator()
        indexScriptGenerator.prefixPath = ".."
        const expectedContent = "alert('Hello world!')"
        const generatedContent = indexScriptGenerator.generate()

        expect(generatedContent).toEqual(expectedContent)
    })
})
