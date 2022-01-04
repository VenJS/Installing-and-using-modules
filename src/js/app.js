import "../scss/app.scss";
import * as R from "ramda";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const articles = document.querySelectorAll("article");
  let getClasses = R.pluck("class");
  getClasses([
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ]);
  console.log(getClasses);
  for (let i = 0; i < getClasses.length; i++) {
    const element = getClasses[i];
    articles.classList.add(element);
  }
});
