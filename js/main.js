const notepad = document.getElementById('notepad');
const fontColor = document.getElementById('fontColor');
const bgColor = document.getElementById('bgColor');
const fontFamily = document.getElementById('fontFamily');
const fontSize = document.getElementById('fontSize');

function makeBold() {
    if (notepad.style.fontWeight === 'bold') {
        notepad.style.fontWeight = 'normal';
    } else {
        notepad.style.fontWeight = 'bold';
    }
}

function makeItalic() {
    if (notepad.style.fontStyle === 'italic') {
        notepad.style.fontStyle = 'normal';
    } else {
        notepad.style.fontStyle = 'italic';
    }
}

function alignText(direction) {
    notepad.style.textAlign = direction;
}

function makeUpperCase() {
    notepad.value = notepad.value.toUpperCase();
}

function makeLowerCase() {
    notepad.value = notepad.value.toLowerCase();
}

function makeCapitalized() {
    notepad.value = notepad.value.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function changeFontColor() {
    notepad.style.color = fontColor.value;
}

function changeBgColor() {
    notepad.style.backgroundColor = bgColor.value;
}

function changeFontFamily() {
    notepad.style.fontFamily = fontFamily.value;
}

function changeFontSize() {
    notepad.style.fontSize = fontSize.value;
}

function clearText() {
    notepad.value = '';
    notepad.style = ''; 
}

function printText() {
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(`<pre>${notepad.value}</pre>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
