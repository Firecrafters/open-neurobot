import { writeFile, readFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";

export async function setData(key: string, value: string): Promise<void> {
    try {
        const filePath = `./data/${key}.txt`;
        const dir = dirname(filePath);
        
        // Ensure directory exists
        await mkdir(dir, { recursive: true });
        
        await writeFile(filePath, value, 'utf8');
    } catch (err) {
        console.error(`Error setting data for key '${key}':`, err);
    }
}

export async function getData(key: string): Promise<string> {
    try {
        const filePath = resolve(`./data/${key}.txt`);
        const contents = await readFile(filePath, { encoding: "utf-8" });

        return contents;
    } catch {
        return "NotFound"
    }
}