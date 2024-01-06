document.addEventListener('DOMContentLoaded', showNotes);

function showNotes() {
    const notesCon = document.getElementById('notes');
    notesCon.innerHTML = localStorage.getItem('notes') || '';
}

function createNote() {
    const notesCon = document.getElementById('notes');
    const inputBox = document.createElement('div');
    const deleteBtn = document.createElement('span');

    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    inputBox.addEventListener('input', setStorage);

    deleteBtn.innerHTML = '❌';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        inputBox.remove();
        setStorage();
    });

    inputBox.appendChild(deleteBtn);
    notesCon.appendChild(inputBox);
}

function setStorage() {
    const notesCon = document.getElementById('notes');
    localStorage.setItem('notes', notesCon.innerHTML);
}
