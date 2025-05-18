const str = "hello world"
const regex = /d/g;
const matches = str.matchAll(regex);
for (let match of matches) {
    console.log(match);
    
}
