
const content = require("./content");

module.exports.function = function getInfo (emergencyName) {
  let step  = 0;
  let help = []
  const name = emergencyName.toLowerCase();
  
for (let obj in content) {
  if (content[obj].tag == name)  {
    var messageToSpeak = content[obj].text[0];
    help = content[obj]
    let messageToDisplay = "Here's the help for "+emergencyName;
    for(var i = 1; i < content[obj].text.length; i++){
      messageToSpeak +=  ' ... ' + content[obj].text[i]
    }
    console.log(
      {
      messageToDisplay:messageToDisplay,
      messageToSpeak:messageToSpeak,
      help:help.text
    }
    )
    return {
      messageToDisplay:messageToDisplay,
      messageToSpeak:messageToSpeak,
      help:help.text
    }
    
  }}
}  

