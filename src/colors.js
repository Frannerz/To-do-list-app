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

