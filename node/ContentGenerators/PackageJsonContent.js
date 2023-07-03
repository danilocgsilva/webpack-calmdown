import Utils from "../Utils.js"
import fs from 'fs'

export default class PackageJsonContent {
    generate() {
        return fs.readFileSync(`${Utils.getScriptPath()}/../assets/package.json/full.txt`)
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