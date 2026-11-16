// SAMPLE CODE ONLY. It works, but it holds sample data on a sample page.
// Add these parts to the site you are building. Submitting the sample unchanged
// earns at most 12 of 20 points, because rows 2 and 7 need your own data and page.
//
// Each "Checklist" comment matches a row of the Assignment 5 checklist. Put the
// same comments in your own files, so each part is easy to find.
// Every line below has a comment that says what it does. Read them before you
// copy anything. Typing these explaining comments into your own file is optional.
//

// Checklist 2: the array. Replace the sample data with 4 or more items of your own.
const skills = ["Solving Problems", "Customer Service", "Helping Others", "Achieving My Goals"];

// Checklist 4: querySelector finds the empty <ul id="list">. The # means id, as in CSS.
const list = document.querySelector("#list");

if (list) {
  // Checklist 3: forEach runs this function once for each item. On each pass,
  // skill holds the next item: "Excel", then "SQL", then "Public speaking", then "Teamwork".
  skills.forEach(function (skill) {
    // Checklist 4: createElement makes a new, empty <li>. It is NOT on the page yet.
    const li = document.createElement("li");
    // textContent puts the item's words inside the new <li>.
    li.textContent = skill;
    // appendChild adds the <li> to the end of the list. NOW it shows on the page.
    list.appendChild(li);
  });

  // Checklist 5: getElementById finds the empty <p id="count">. It takes the id with no #.
  const count = document.getElementById("count");
  // textContent writes the sentence. skills.length counts the items, so it is 4 here.
  count.textContent = "I have " + skills.length + " Passions.";
}

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  function updateBackToTopVisibility() {
    backToTop.hidden = window.scrollY < 300;
  }

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();

  backToTop.addEventListener("click", function () {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: 0, behavior: behavior });
  });
}
