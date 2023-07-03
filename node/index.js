import FileContentGenerator from "./FileContentGenerator.js"
import HtmlGenerator from './ContentGenerators/HtmlGenerator.js'
import WebpackGenerator from './ContentGenerators/WebpackGenerator.js'
import IndexScriptGenerator from "./ContentGenerators/IndexScriptGenerator.js"
import Utils from "./Utils.js"

const folderPrefix = Utils.getTimeString()

const htmlGenerator = new FileContentGenerator(new HtmlGenerator())
const webpackGenerator = new FileContentGenerator(new WebpackGenerator())
const scriptGenerator = new FileContentGenerator(new IndexScriptGenerator())

htmlGenerator.writeFile(folderPrefix)
webpackGenerator.writeFile(folderPrefix)
scriptGenerator.writeFile(folderPrefix)
