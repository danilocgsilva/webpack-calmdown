import FileContentGenerator from "./FileContentGenerator.js"
import HtmlGenerator from './HtmlGenerator.js'
import WebpackGenerator from './WebpackGenerator.js'
import Utils from "./Utils.js"

const folderPrefix = Utils.getTimeString()

const htmlGenerator = new FileContentGenerator(new HtmlGenerator())
const webpackGenerator = new FileContentGenerator(new WebpackGenerator())

htmlGenerator.writeFile(folderPrefix)
webpackGenerator.writeFile(folderPrefix)
