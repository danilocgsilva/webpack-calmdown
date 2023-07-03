import Utils from "../Utils.js"
import fs from 'fs'

export default class WebpackGenerator {
    generate() {
        return fs.readFileSync(`${Utils.getScriptPath()}/../assets/webpack.config.js/full.txt`)
    }

    get fileName() {
        return "webpack.config.js"
    }

    get description() {
        return "A basic webpack.config.js file."
    }
}