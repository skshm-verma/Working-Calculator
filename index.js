const inputField = document.getElementById('input');
const buttons = document.querySelectorAll('.btn');
const resetButton = document.getElementById('reset');
const resultButton = document.getElementById('result');

/* Calculator Functionality*/
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        const value = button.value;

        switch (value) {
            case 'RESET':
                inputField.value = '0';
                break;
            case '=':
                try {
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = 'Error';
                }
                break;
            case 'DEL':
                inputField.value = inputField.value.slice(0, -1);
                break;
            default:
                if (inputField.value === '0') {
                    inputField.value = value;
                } else {
                    inputField.value += value;
                }
        }
    });
});
