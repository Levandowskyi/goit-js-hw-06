const inputRange = document.getElementById('font-size-control');
const textValue = document.getElementById('text');

function changeFontSize() {
    textValue.style.fontSize = `${inputRange.value}px`;
    
}

inputRange.addEventListener('input',changeFontSize)