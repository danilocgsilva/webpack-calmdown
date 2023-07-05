import Utils from "../Utils.js"
import fs from 'fs'
import GeneratorAbstract from './GeneratorAbstract.js'

export default class IndexScriptGenerator extends GeneratorAbstract  {

    generate() {
        const assetsNavigation = this.suffixPath

        return fs.readFileSync(`${Utils.getScriptPath(process, this._scriptPath)}/${assetsNavigation}assets/script.js/full.txt`)
    }

    get fileName() {
        return "script.js"
    }

    get description() {
        return "The production script goes here!"
    }

    get prefix() {
        return "src";
    }
}