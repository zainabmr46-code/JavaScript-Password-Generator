let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let inpuBox = document.getElementById("inputBox");
let Lowercase = document.getElementById("Lowercase");
let Uppercase = document.getElementById("Uppercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let btn = document.getElementById("btn");
let copyIcon = document.getElementById("copyIcon");

inputSlider.addEventListener('input' ,() =>{
    sliderValue.textContent = inputSlider.value;
});
 
btn.addEventListener('click', ()=>{
    inpuBox.value = generatePassword();
})

let lowerChar = "abcdefghijklmnopqrstuvwxyz ";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymboln= "!@#$%^&*";

//function to generate password
function generatePassword(){
    let genPAssword = " ";
    let allChar = " ";

    allChar += Lowercase.checked? lowerChar : " ";
    allChar += Uppercase.checked? upperChar : " ";
    allChar += Numbers.checked? allNumbers : " ";
    allChar += Symbols.checked? allSymboln : " ";

if(allChar==" "|| allChar.length==0){
    return genPAssword;
}


let i = 1;
while(i<=inputSlider.value){
 genPAssword += allChar[Math.floor(Math.random() * allChar.length)];
 i++;
}

 return genPAssword;
}

copyIcon.addEventListener('click', ()=>{
    navigator.clipboard.writeText(inputBox.value);
    copyIcon.innerText = 'check'
    copyIcon.title = "Password Copied";
});