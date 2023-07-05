import Utils from "../Utils.js"
import fs from 'fs'
import GeneratorAbstract from './GeneratorAbstract.js'

export default class IndexScriptGenerator extends GeneratorAbstract  {

    generate() {
        const filePieces = this.generateGeneric("script.js", ["full.txt"])
        return filePieces[0]
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