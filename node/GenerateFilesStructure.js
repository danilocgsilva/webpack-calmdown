import FileContentGenerator from "./FileContentGenerator.js"
import HtmlGenerator from './ContentGenerators/HtmlGenerator.js'
import WebpackGenerator from './ContentGenerators/WebpackGenerator.js'
import IndexScriptGenerator from "./ContentGenerators/IndexScriptGenerator.js"
import PackageJsonContent from "./ContentGenerators/PackageJsonContent.js"
import Utils from "./Utils.js"
import path from "path"

export default class GenerateFilesStructure {
    writeFileStructure(directoryOffset = "") {
        
        // const directoryTarget =
        //     directoryOffset == "" ? 
        //     Utils.getTimeString() : 
        //     directoryOffset + "/" + Utils.getTimeString()

        let directoryTarget = path.resolve(directoryOffset, Utils.getTimeString())

        directoryTarget = directoryTarget.replace(/node\//, "output/")

        console.log("10-- " + directoryTarget + " --10")

        const htmlGenerator = new FileContentGenerator(new HtmlGenerator())
        const webpackGenerator = new FileContentGenerator(new WebpackGenerator())
        const scriptGenerator = new FileContentGenerator(new IndexScriptGenerator())
        const packageJsonGenerator = new FileContentGenerator(new PackageJsonContent())

        htmlGenerator.writeFile(directoryTarget)
        webpackGenerator.writeFile(directoryTarget)
        scriptGenerator.writeFile(directoryTarget)
        packageJsonGenerator.writeFile(directoryTarget)
    }
}
