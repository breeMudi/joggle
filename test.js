const inputs = document.getElementById('word')
let wordCount;
let placeHolder = []
let finalWord;

function animate(){
    requestAnimationFrame(animate)
    combineString()
    document.getElementById('answer').innerText = finalWord
    document.getElementById('wordCount').innerText = wordCount
}

function strToArray () {
    return inputs.value.split('')
}

function convertString () {
    // console.log('inputval;', inputs.value)
    const answer = strToArray(inputs)
    // console.log(answer, 'answer')

    answer.forEach((element, index) => {
        index%2==0? placeHolder.push(element.toUpperCase()) : placeHolder.push(element)
    });
}

function combineString () {
    strToArray()
    convertString()
    placeHolder.length > 0? finalWord=placeHolder.join(''): finalWord = 'no words'
    wordCount = placeHolder.length 
    placeHolder.length = 0
}
animate()