import HtmlGenerator from "../ContentGenerators/HtmlGenerator.js"

describe('HtmlGenerator', () => {

    const htmlGenerator = new HtmlGenerator()
    htmlGenerator.prefixPath = ".."

    test('Basic', () => {

        const expectedContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js"></script>
</head>
<body>
    
    <h1>Document</h1>

</body>
</html>`

        expect(htmlGenerator.generate()).toEqual(expectedContent)
    })

    test('Document title', () => {
        htmlGenerator.documentTitle = "My Document Title"

        const expectedContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Document Title</title>
    <script src="script.js"></script>
</head>
<body>
    
    <h1>My Document Title</h1>

</body>
</html>`

        expect(htmlGenerator.generate()).toEqual(expectedContent)
    })
})