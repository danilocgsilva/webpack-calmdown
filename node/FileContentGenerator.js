import fs from 'fs'
import HtmlGenerator from './HtmlGenerator.js'
// import { fileURLToPath } from 'url';
// import path from 'path';
import getScriptPath from './getScriptPath.js'

export default class FileContentGenerator {

    constructor() {
        this.generator = new HtmlGenerator()
        // const __filename = fileURLToPath(import.meta.url);
        // this.scriptPath = path.dirname(__filename);
    }
    
    html() {
        return this.generator.generate()
    }

    writeHtmlFile() {
        const fullFilePathAndName = this.resolvePath(this.getTimeString())
        
        fs.writeFile(fullFilePathAndName, this.html(), function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved: " + fullFilePathAndName);
        }); 
    }

    set title(documentTitle) {
        this.generator.title = documentTitle
    }

    resolvePath(prefixPath) {
        const folderPathToSave = getScriptPath() + "/../output/" + prefixPath
        if (!fs.existsSync([folderPathToSave])) {
            fs.mkdirSync(folderPathToSave, { recursive: true });
        }
        return folderPathToSave + "/index.html"
    }

    getTimeString() {
        const date = new Date()

        const fullYear = date.getFullYear()
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const seconds = ('0' + (date.getSeconds())).slice(-2)

        return `${fullYear}${month}${day}-${hour}${minutes}${seconds}`
    }
}
