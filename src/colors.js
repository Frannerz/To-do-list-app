const buttonElements = document.getElementsByTagName('button');

//This generates a random RGB colour
//It limits the colours to lighter colours so you can see the text
export function randomRGB(){
    let redColor = Math.ceil(Math.random()*127)+128;
    let greenColor = Math.ceil(Math.random()*127)+128;
    let blueColor = Math.ceil(Math.random()*127)+128;
    let rgb = `RGB(${redColor},${greenColor},${blueColor})`;
    return rgb;
}

//This loops through the button elements and changes the background colour of each

for(let i=0; i<buttonElements.length; i++){
    let randColor = randomRGB();
    buttonElements[i].style.backgroundColor = randColor;
 };

// I originally generated a hex code for the button colours 
//but some of the colours were too dark

// function randomHex(){
//     let hexCode = '#'
//     const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     while (hexCode.length <7){
//         let randomIndex = Math.floor(Math.random() * 16)
//         hexCode+=chars[randomIndex]
//     }
//     console.log(hexCode)
//     return hexCode;
// }

// for(let i=0; i<buttonElements.length; i++){
//     let randColor = randomHex();
//     buttonElements[i].style.backgroundColor = randColor;
// };