export default class GeneratorAbstract {
    set prefixPath(prefixPath) {
        this._prefixPath = prefixPath
    }

    get suffixPath() {
        const partsPrefixPath = this._prefixPath.split("/").length
        if (partsPrefixPath == 2) {
            return ""
        }
        return "../"
    }
}