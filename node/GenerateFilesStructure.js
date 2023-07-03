import FileContentGenerator from "./FileContentGenerator.js"
import HtmlGenerator from './ContentGenerators/HtmlGenerator.js'
import WebpackGenerator from './ContentGenerators/WebpackGenerator.js'
import IndexScriptGenerator from "./ContentGenerators/IndexScriptGenerator.js"
import PackageJsonContent from "./ContentGenerators/PackageJsonContent.js"

export default class GenerateFilesStructure {

    constructor(folderPrefix) {
        this.folderPrefix = folderPrefix
    }

    writeFileStructure() {
        const htmlGenerator = new FileContentGenerator(new HtmlGenerator())
        const webpackGenerator = new FileContentGenerator(new WebpackGenerator())
        const scriptGenerator = new FileContentGenerator(new IndexScriptGenerator())
        const packageJsonGenerator = new FileContentGenerator(new PackageJsonContent())
    
        htmlGenerator.writeFile(this.folderPrefix)
        webpackGenerator.writeFile(this.folderPrefix)
        scriptGenerator.writeFile(this.folderPrefix)
        packageJsonGenerator.writeFile(this.folderPrefix)
    }
}
