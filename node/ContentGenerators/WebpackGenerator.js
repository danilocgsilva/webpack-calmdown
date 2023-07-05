import Utils from "../Utils.js"
import fs from 'fs'
import GeneratorAbstract from './GeneratorAbstract.js'

export default class WebpackGenerator extends GeneratorAbstract {

    generate() {
        const assetsNavigation = this.suffixPath
        const fileBuffer = fs.readFileSync(`${Utils.getScriptPath(process, this._scriptPath)}/${assetsNavigation}assets/webpack.config.js/full.txt`)
        return fileBuffer.toString()
    }

    get fileName() {
        return "webpack.config.js"
    }

    get description() {
        return "A basic webpack.config.js file."
    }

    get prefix() {
        return "";
    }
}
