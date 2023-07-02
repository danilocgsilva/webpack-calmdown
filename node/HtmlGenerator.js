import fs from 'fs'
import getScriptPath from './getScriptPath.js'

export default class HtmlGenerator {

    constructor() {
        this._title = null
    }

    set title(titleString) {
        this._title = titleString
    }

    generate() {
        const head = fs.readFileSync(`${getScriptPath()}/../assets/index.html/head.txt`)
        const tail = fs.readFileSync(`${getScriptPath()}/../assets/index.html/tail.txt`)

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