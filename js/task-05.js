const inputName = document.getElementById('name-input');
const viewName = document.getElementById('name-output');

function inputChange() {
    if (inputName.value.length > 1) {
        viewName.textContent = inputName.value
    }
    else (viewName.textContent = 'Anonymous')
}

inputName.addEventListener('input',inputChange)