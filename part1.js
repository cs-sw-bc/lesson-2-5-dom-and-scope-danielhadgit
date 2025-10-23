// ---------------------------------------------
// PHASE 1 – DIRECT DOM MANIPULATION
// ---------------------------------------------
//
// This code runs automatically when page loads.
// Students experiment line-by-line here first.
// ---------------------------------------------

// 🧩 STEP 1: Access the container
let container = document.getElementById("container")
 //container = document.querySelector("#container") // both do same thing, use personal preference


// 🧩 STEP 2: Change container text content
container.innerHTML = "<b>Hey</b>, This is text!"
// or container.textContent (cant use styles with this)




// 🧩 STEP 3: Create and add a new paragraph
 // create the element that you need to store in variable
 // Customize the element
 // attach it to a preferred place in document.
let para = document.createElement("P");
para.innerHTML = " yes yes <br> io9djw <b>dwouhd</b>"
container.appendChild(para);
para.style.color="blue";
para.style.backgroundColor="yellow"; // inline styles
// <p style = "color:red">
//<p class="error">

document.body.appendChild(para) // method 2 of adding elements




// 🧩 STEP 4: Update paragraph text
document.body.style.backgroundColor="green";




// 🧩 STEP 5: Add HTML formatting to paragraph





// 🧩 STEP 6: Style paragraph (color, background, font)





// 🧩 STEP 7: Use if–else logic to display “Passed / Failed”





// 🧩 STEP 8: Change entire page background or add a new heading

let head1 = document.createElement("h1");
head1.innerHTML="Header";
document.body.appendChild(head1);



// ---------------------------------------------
// End of Direct DOM Manipulation
// ---------------------------------------------
