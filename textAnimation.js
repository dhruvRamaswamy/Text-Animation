"use strict"
// HOW LONG YOU WANT THE SPACE TO BE:
let spaceBetweenNextLetterInMilliseconds = 50
const text = Array.from(document.querySelectorAll(".text-animation-one"))
convertTextOfElementToSpans(text[0])
let duplicateOfText = text[0].textContent.slice()
const spansOfText = Array.from(document.querySelector(".text-animation-one").children)
console.log(spansOfText)
function convertTextOfElementToSpans(element){
    // This copies by value
    let textToCreate = element.textContent.slice()
    element.textContent = ""
    for (let character of textToCreate){
        // innerHtml and text content are different here
        element.innerHTML += `<span>${character}</span>`
    }
    return element.innerHTML;
}
    const clear = setInterval(triggerAnimation, spaceBetweenNextLetterInMilliseconds)
let counter = 0;
let givenSpan;
function triggerAnimation(){
    givenSpan = spansOfText[counter]
    givenSpan.classList.add('active')
    counter++;
    if(counter >= spansOfText.length){
        clearInterval(clear)
        setTimeout(then, 1000)
    }
}
function then() {
    text[0].textContent = duplicateOfText
    text[0].classList.add("animation-gradient")
}




