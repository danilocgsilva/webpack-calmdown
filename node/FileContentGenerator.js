import fs from 'fs'
import Utils from './Utils.js'

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
        const folderPathToSave = Utils.getScriptPath() + "/../output/" + prefixPath
        const cleanedFolderPathToSave = folderPathToSave.replace(/node\/\.\.\//, "")
        if (!fs.existsSync([cleanedFolderPathToSave])) {
            fs.mkdirSync(cleanedFolderPathToSave, { recursive: true });
        }
        return cleanedFolderPathToSave + "/" + this.generator.fileName
    }
}
