let numbersArray = [2, 4, 6, 8, 10, 12, 14]
let v=0;
function numbers() {
    if (v<numbersArray.length) {
        let nextValue = numbersArray[v];
        v++
        console.log(nextValue);
        display.value=nextValue
    }
    else{
        v = 0;
    }
}

let btn= document.querySelector('[data-btn]')
btn.addEventListener('click', numbers)
let display= document.querySelector('[data-display]')