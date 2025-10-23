// ---------------------------------------------
// EVENT-DRIVEN DOM MANIPULATION (Starter)
// ---------------------------------------------
// const container = document.getElementById("container");
const scoreInput = document.getElementById("scoreInput");

// STEP 1: Add Paragraph
function addParagraph() {
  let para = document.createElement("P");
para.innerHTML = " yes yes <br> io9djw <b>dwouhd</b>"
container.appendChild(para);
para.id="mypara"
  // create and append a <p>
}

// STEP 2: Update Paragraph
function updateParagraph() {
  let para = document.getElementById("mypara");
  para.innerHTML = "Updated Text"
// no position needed since its already located in doc and is just updating it
  // find <p> and update text
}

// STEP 3: Style Paragraph
// change color / background / font
function styleParagraph() {
  let para = document.getElementById("mypara");
 // para.style.color="blue"; // method 1
// method 2 add style class
para.classList.add("passed"); // using the class from css
}

// STEP 4: Check Score from textbox
function checkScore() {
  // alert(`I am here`);
// if u dont put value it prints the whole line
  // Check if we already added a paragraph with id "studentResult"

let score = Number(document.getElementById("scoreInput").value);
let result = document.querySelector("#studentResult")
  
  if(score>=50){
    //pass
    result.textContent="The Student has passed"
    result.className = "passed";
  }else{
    //fail
    result.textContent="Sorry, Try again next time"
    result.className = "failed";
  }

  // 1. Read value from scoreInput
  // 2. Convert to number
  // 3. Create <p> element for result
  // 4. If score >= 50 → Passed (green)
  //    else → Failed (red)
  // 5. Append to container
  // 6. Optionally clear textbox
}

// STEP 5: Toggle Theme
function toggleTheme() {
  // switch light ↔ dark background
}

// STEP 6: Add Note with timestamp
function addNote() {
  // create <p> showing current time
}
