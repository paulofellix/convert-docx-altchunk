import { spawnSync } from "child_process";
import { join } from "path";

/**
 * Converts an altchunk to a normal paragraph
 * @param inputFile full path to the input file
 * @param outputFile full path to the output file, if null will generate input file name with suffix _converted.docx
 * @returns a promise that resolves to true if the conversion was successful
 * @example
 * convertAltchunk("/some/path/to/input.docx", "/some/path/to/output.docx")
 * .then(() => console.log("done"))
 * .catch(() => console.error("error"));
 * @example
 * convertAltchunk("/some/path/to/input.docx")
 * .then(() => console.log("done"))
 * .catch(() => console.error("error"));
*/
export function convertAltchunk(inputFile: string, outputFile?: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const args = [
      "-jar",
      join(__dirname,"ConvertAltChunk.jar"),
      "-f",
      inputFile
    ];
    if (outputFile) {
      args.push("-o", outputFile);
    }
    const child = spawnSync("java", args);

    if (child.status !== 0) {
      console.error(child.stderr.toString());
      reject(false);
    }

    return resolve(true);
  })
}
