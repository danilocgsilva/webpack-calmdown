import { fileURLToPath } from 'url';
import path from 'path';

export default function getScriptPath() {
    const __filename = fileURLToPath(import.meta.url);
    return path.dirname(__filename);
}