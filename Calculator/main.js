document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let inputString = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'AC') {
                inputString = '';
            } else if (value === 'DEL') {
                inputString = inputString.slice(0, -1);
            } else if (value === '=') {
                try {
                    inputString = eval(inputString).toString();
                } catch (e) {
                    inputString = 'Error';
                }
            } else if (value === '%') {
                inputString = (parseFloat(inputString) / 100).toString();
            } else {
                inputString += value;
            }

            inputBox.value = inputString;
        });
    });
});
