const content = require('./content.js');

// console.log(content);

// emergencyName = "Heart Attack";
// degreeType = "First Degree";
// // let name = Object.keys(content).includes(emergencyName.toLowerCase());
// // console.log(name);
// // if(content.keys())
// const name = emergencyName.toLowerCase();
// console.log(name);
// console.log(content[name]);
// if (Object.keys(content).includes(name)) {
//     console.log(content[name][degreeType.toLowerCase()]);
// }

// console.log(content);
const tag = "heart attack";
for (let obj in content) {
    // if (obj.tag == "heart attack")
    //     console.log(obj.tag);

    // if (obj.hasOwnProperty(obj.tag)) {
    // Do things here
    console.log(content[obj].tag)
    if (content[obj].tag == "heart attack") {
        console.log(content[obj][text[0]]);
        break;
    }
    // }
}