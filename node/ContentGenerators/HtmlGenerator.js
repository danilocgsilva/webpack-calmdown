import fs from 'fs'
import Utils from '../Utils.js'
import GeneratorAbstract from './GeneratorAbstract.js'

export default class HtmlGenerator extends GeneratorAbstract {

    constructor() {
        super()
        this._title = null
    }

    get fileName() {
        return "index.html"
    }

    get description() {
        return "A raw html file has been created."
    }

    get prefix() {
        return "";
    }

    generate() {
        const assetsNavigation = this.suffixPath

        const head = fs.readFileSync(`${Utils.getScriptPath(process)}/${assetsNavigation}assets/index.html/head.txt`)
        const tail = fs.readFileSync(`${Utils.getScriptPath(process)}/${assetsNavigation}assets/index.html/tail.txt`)

        const htmlTitle = this._title == null ? "Document" : this._title

        const readValued = head.toString().replace(
            /{documentTitle}/g,
            htmlTitle
        )

        return readValued + this._addH1(htmlTitle) + tail
    }

    _addH1(htmlTitle) {
        return `    <h1>${htmlTitle}</h1>\n\n`
    }
}