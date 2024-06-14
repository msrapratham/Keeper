var count = 0;
var dbArray = [];
const textArea = document.getElementById("textbox");
const noteArea = document.getElementById("notearea");
const button = document.getElementById("button");
const cardContainer = document.getElementById("card-container");

// Adding/removing classes of searchbar
noteArea.addEventListener("focus", function () {
  textArea.classList.add("text-area-focus-text-box");
  textArea.placeholder = "Title";
});

// Adding/removing classes of searchbar
textArea.addEventListener("focus", function () {
  textArea.placeholder = "Title";
  textArea.classList.add("text-area-focus-text-box");
  noteArea.classList.remove("invisible");
  button.classList.remove("invisible");
});

button.addEventListener("click", function () {
  // Adding/removing classes of searchbar
  textArea.classList.remove("text-area-focus-text-box");
  textArea.placeholder = "Take a note...";
  textArea.placeholder = "Take a note...";
  noteArea.classList.add("invisible");
  button.classList.add("invisible");
});

button.addEventListener("click", function () {
  // Get the values of textArea and noteArea
  const title = textArea.value.trim();
  const note = noteArea.value.trim();

  // Validate inputs
  if (title !== "" && note !== "") {
    // Add the note to dbArray
    dbArray = [...dbArray, { title: title, note: note }];

    // Clear the card container
    cardContainer.innerHTML = "";

    // Render the cards
    dbArray.forEach((elem, index) => {
      var key = index;
      var card_div = document.createElement("div");
      card_div.classList.add("card");

      card_div.innerHTML = `
        <div>
          <p class="title">${elem.title}</p>
          <p class="para">${elem.note}</p>
        </div>

        <i class="material-icons delete-icon invisible">delete</i>`;
      cardContainer.appendChild(card_div);

      function deletefun() {
        card_div.remove();
        dbArray = dbArray.filter((item, index) => key !== index);
        console.log(dbArray)
      }
      const deleteBtn = card_div.querySelector("i");
      deleteBtn.addEventListener("click", deletefun);
    });

    // Reset the input fields
    textArea.value = "";
    noteArea.value = "";
  }
});
