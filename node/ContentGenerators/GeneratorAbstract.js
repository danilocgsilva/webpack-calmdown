import Utils from '../Utils.js'
import fs from 'fs'

export default class GeneratorAbstract {
    set prefixPath(prefixPath) {
        this._prefixPath = prefixPath
    }

    get suffixPath() {
        const partsPrefixPath = this._prefixPath.split("/").length
        if (partsPrefixPath == 2) {
            return ""
        }
        return "../"
    }

    generateGeneric(fileName, filePieces) {
        const assetsNavigation = this.suffixPath

        let htmlBasePath = `${Utils.getScriptPath(process)}/${assetsNavigation}assets/${fileName}/`

        const regexPath = /\/node\//
        if (!regexPath.test(htmlBasePath)) {
            htmlBasePath = htmlBasePath.replace(/\/\.\./, "")
        }

        const results = filePieces.map(element => {
            const fileBuffer = fs.readFileSync(`${htmlBasePath}${element}`)
            return fileBuffer.toString()
        })

        return results
    }
}