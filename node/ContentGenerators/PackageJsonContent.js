import Utils from "../Utils.js"
import fs from 'fs'
import GeneratorAbstract from './GeneratorAbstract.js'

export default class PackageJsonContent extends GeneratorAbstract  {

    generate() {
        const assetsNavigation = this.suffixPath
        const fileBuffer = fs.readFileSync(`${Utils.getScriptPath(process, this._scriptPath)}/${assetsNavigation}assets/package.json/full.txt`)
        return fileBuffer.toString()
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