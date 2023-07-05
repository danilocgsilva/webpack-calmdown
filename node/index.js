import Utils from "./Utils.js"
import GenerateFilesStructure from "./GenerateFilesStructure.js"

const folderPrefix = Utils.getTimeString()

const fileStructureGenerator = new GenerateFilesStructure()
fileStructureGenerator.writeFileStructure(process.argv[2])
