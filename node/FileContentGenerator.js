import fs from 'fs'
import Utils from './Utils.js'
import path from "path"

export default class FileContentGenerator {

    constructor(generator) {
        this.generator = generator
    }
    
    writeFile(prefix) {
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
        const folderPathToSave = path.resolve(Utils.getScriptPath(), "..", "output", prefixPath, this.generator.prefix)
        const cleanedFolderPathToSave = folderPathToSave.replace(/node\/\.\.\//, "")
        if (!fs.existsSync([cleanedFolderPathToSave])) {
            fs.mkdirSync(cleanedFolderPathToSave, { recursive: true });
        }
        return cleanedFolderPathToSave + "/" + this.generator.fileName
    }
}
