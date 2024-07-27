const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", ,"py", "java", "cpp"]

for (const key in programming){
    //console.log(programming[key]);
}

const map = new Map()
map.set('NP', "Nepal")
map.set('USA', "United States Of America")
map.set('UK', "United Kingdom")

for (const key in map) {
    console.log(key);
    
}
