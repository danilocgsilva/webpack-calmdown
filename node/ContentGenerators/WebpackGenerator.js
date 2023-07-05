import Utils from "../Utils.js"
import fs from 'fs'
import GeneratorAbstract from './GeneratorAbstract.js'

export default class WebpackGenerator extends GeneratorAbstract {

    generate() {
        const filePieces = this.generateGeneric("webpack.config.js", ["full.txt"])
        return filePieces[0]
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
