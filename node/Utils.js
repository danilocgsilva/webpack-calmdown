import { fileURLToPath } from 'url';
import path from 'path';

export default class Utils {

    static getScriptPath() {
        const __filename = fileURLToPath(import.meta.url);
        return path.dirname(__filename);
    }

    static getTimeString() {
        const date = new Date()

        const fullYear = date.getFullYear()
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const day =  ('0' + (date.getDate())).slice(-2)
        const hour = ('0' + (date.getHours())).slice(-2)
        const minutes = ('0' + (date.getMinutes())).slice(-2)
        const seconds = ('0' + (date.getSeconds())).slice(-2)

        const stringToReturn = `${fullYear}${month}${day}-${hour}${minutes}${seconds}`

        return stringToReturn
    }
}