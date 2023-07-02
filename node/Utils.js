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
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const seconds = ('0' + (date.getSeconds())).slice(-2)

        return `${fullYear}${month}${day}-${hour}${minutes}${seconds}`
    }
}