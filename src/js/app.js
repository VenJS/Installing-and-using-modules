import "../scss/app.scss";
const R = require("ramda");

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const articles = document.querySelectorAll("article");
  let getClasses = R.pluck("class");
  getClasses([
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ]);
  for (let i = 0; i < getClasses.length; i++) {
    const element = getClasses[i];
    console.log(element);
    articles.classList.add(element);
  }

  // for (let i = 0; i < getClasses.length; i++) {
  //   const element = arrayToPluck[i];
  // }
});
