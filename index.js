let calscreen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenValue = ' '
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText
        console.log('Button text is ', buttonText)

        if (buttonText === 'X') {
            buttonText = '*'
            screenValue += buttonText
            calscreen.value = screenValue
        }
        else if (buttonText === 'C') {
            screenValue = ' '
            calscreen.value = screenValue
        }
        else if (buttonText === '=') {
            calscreen.value = eval(screenValue)
        }
        else {
            screenValue += buttonText
            calscreen.value = screenValue
        }
    })
}