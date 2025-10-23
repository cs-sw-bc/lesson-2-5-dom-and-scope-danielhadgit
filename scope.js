// ---------------------------------------------
// LESSON 5 – VARIABLE SCOPE STARTER FILE
// ---------------------------------------------
//
// Each button in the HTML calls one of these
// functions. Use console.log() or write output
// inside the #output div to demonstrate scope.
// ---------------------------------------------

const output = document.getElementById("output");
let training="Software Bootcamp"; // global variable , can be used anywhere
// 🧩 STEP 1: GLOBAL SCOPE
// Goal: Declare a global variable and use it inside a function.
function globalScopeDemo() {
  let name = "Scope Lesson";
  console.log("The Value of name is",name);
 // name dies at the end of the function
  // Example: let message = "I am global!";
  // console.log() inside and outside a function
  // Observe which logs work.
}



// 🧩 STEP 2: LOCAL (FUNCTION) SCOPE
// Goal: Declare variable inside a function and try to use it outside.
function localScopeDemo() {
  console.log("The Value of name is", name);
  // Example: let note = "I live inside this function!";
  // console.log(note) here works.
  // Try console.log(note) outside → should give ReferenceError.
}



// 🧩 STEP 3: BLOCK SCOPE
// Goal: Show that let/const are block scoped and var is not.
function blockScopeDemo() {
  let score = 95;
  if(score>80){
    let grade ="A";
    var status = "Pass";
  } // grade dies here but status leaks outside
   //console.log(`Grade is ${grade}`
    console.log(`Status is ${status}`)
 } // Status dies here
  // Example: inside if(true){ let inside = "Block var"; }
  // console.log(inside) outside block → ReferenceError




// 🧩 STEP 4: VAR BEHAVIOR
// Goal: Show how var leaks out of blocks.
function varScopeDemo() {
  // Example: if(true){ var oldWay = "I escape the block!"; }
  // console.log(oldWay) → works (var ignores block)
}



// 🧱 HELPER FUNCTION (optional)
// You can use this to display results visually instead of console.
function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.appendChild(line);
}