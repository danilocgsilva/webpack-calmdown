import Utils from "../Utils.js"
import fs from 'fs'
import GeneratorAbstract from './GeneratorAbstract.js'

export default class PackageJsonContent extends GeneratorAbstract  {

    generate() {
        const filePieces = this.generateGeneric("package.json", ["full.txt"])
        return filePieces[0]
    }

    get fileName() {
        return "package.json"
    }

    get description() {
        return "Package recepts."
    }

    get prefix() {
        return "";
    }
}