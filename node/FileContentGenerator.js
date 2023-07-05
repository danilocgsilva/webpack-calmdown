import fs from 'fs'
import Utils from './Utils.js'
import path from "path"

export default class FileContentGenerator {

    constructor(generator) {
        this.generator = generator
        this.currentTime = Utils.getTimeString()
    }

    writeFile(prefix) {
        this.generator.prefixPath = prefix

        const fullFilePathAndName = this.resolvePath(prefix)

        fs.writeFile(fullFilePathAndName, this.generator.generate(), err => {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved: " + fullFilePathAndName);
            console.log(this.generator.description)
            console.log("---")
        });
    }

    set title(documentTitle) {
        this.generator.title = documentTitle
    }

    resolvePath(prefixPath) {

        const countPathParts = prefixPath.split("/").length

        const rootScriptPath = Utils.getScriptPath(
            process,
            this.prefixPath
        )

        console.log("9--" + rootScriptPath + "--9")

        const folderPathToSave = path.resolve(
            rootScriptPath,
            "output",
            prefixPath,
            this.generator.prefix
        )

        console.log("8--" + folderPathToSave + "--8")

        if (!fs.existsSync([folderPathToSave])) {
            fs.mkdirSync(folderPathToSave, { recursive: true });
        }
        return folderPathToSave + "/" + this.generator.fileName
    }
}
