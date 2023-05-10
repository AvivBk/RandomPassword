const password1EL = document.getElementById("password1-el");
const password2EL = document.getElementById("password2-el");
let passwordsLength = 12;

const characters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

function onClick_GeneratePassword() 
{
    password1EL.textContent = GenerateRandomPassword();
    password2EL.textContent = GenerateRandomPassword();
}

function GenerateRandomPassword()
{
    let str = "";
    for (let i = 0; i < passwordsLength; i++) {
        let randIndex = Math.floor(Math.random() * characters.length);
        let charToAdd = characters[randIndex];
        str += charToAdd;
    }
    return str;
}
async function onClick_Password1() 
{
    fallbackCopyTextToClipboard(password1EL.textContent);
}


async function onClick_Password2() 
{
    fallbackCopyTextToClipboard(password2EL.textContent);
}

function fallbackCopyTextToClipboard(text) 
{
    var textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try 
    {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert('Fallback: Copying text command was ' + msg);
    } 
    catch (err) 
    {
        alert('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
}

async function copyTextToClipboard(text) 
{
    if (!navigator.clipboard) 
    {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        alert('Copying to clipboard was successful!');
    }, function (err) {
        alert('Could not copy text: ', text);
    });
}

