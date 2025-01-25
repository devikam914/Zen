// Array to store notes
let notes = [];

// Function to add a new note
function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Please write something!");
    return;
  }

  // Add the note to the notes array
  notes.push(noteText);

  // Save to LocalStorage
  localStorage.setItem("notes", JSON.stringify(notes));

  // Clear the input field
  noteInput.value = "";

  // Update the notes list
  displayNotes();
}

// Function to display all notes
function displayNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    notesList.innerHTML += `
      <div class="note">
        <p>${note}</p>
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

// Function to delete a note
function deleteNote(index) {
  notes.splice(index, 1);

  // Save to LocalStorage
  localStorage.setItem("notes", JSON.stringify(notes));

  // Update the notes list
  displayNotes();
}

// Load notes from LocalStorage when the page loads
window.onload = function () {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notes = JSON.parse(savedNotes);
  }
  displayNotes();
};
