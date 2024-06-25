const path=require("path");

const fullpath=path.join('some','work','ex.txt');
console.log(fullpath);  // some\work\ex.txt

console.log(`파일 절대 경로 : ${__filename}`);

const dir=path.dirname(__filename);
console.log(`경로만:${dir}`);

const fn=path.basename(__filename);
const fn2=path.basename(__filename,'.js');
console.log(`파일 이름:${fn}`);
console.log(`파일 이름(확장자 제외):${fn2}`);

const ext=path.extname(__filename);
console.log(`파일 확장자: ${ext}`);
console.log(path.basename(__filename,ext));

const parsedPath=path.parse(__filename);
console.log(parsedPath);