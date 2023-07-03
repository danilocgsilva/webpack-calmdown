import Utils from "../Utils.js"
import fs from 'fs'

export default class IndexScriptGenerator {
    generate() {
        return fs.readFileSync(`${Utils.getScriptPath()}/../assets/script.js/full.txt`)
    }

    get fileName() {
        return "script.js"
    }

    get description() {
        return "The production script goes here!"
    }
}