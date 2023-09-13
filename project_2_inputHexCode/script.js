const hexColorInput = document.getElementById('hexColor');
const changeColorButton = document.getElementById('changeColorButton');

changeColorButton.addEventListener('click', function() {
    const hexColor = hexColorInput.value.trim();

    if (/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
        document.body.style.backgroundColor = hexColor;
    } else {
        alert('Invalid Hex Color Code. Please use a valid 6-digit hex code (e.g., #RRGGBB).');
    }
});
