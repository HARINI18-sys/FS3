const para = document.getElementById("msg"); // Fixed: getElementById, not getElementByIdById
console.log(para.innerText);
para.innerText = "this is set via javascript";

const hiButton = document.querySelector(".jsbutton");

// Fixed: arrow function syntax and empty parameter list
hiButton.addEventListener("click", () => {
    console.log("Hi");
});
