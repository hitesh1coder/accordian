const accordians = document.querySelectorAll(".accordion");

accordians.forEach((accodian) => {
  const icon = accodian.querySelector(".icon");
  const answer = accodian.querySelector(".answer");
  const question = accodian.querySelector(".question");

  let isOpen = true;

  accodian.addEventListener("click", () => {
    isOpen
      ? (icon.src = "./assets/images/icon-minus.svg")
      : (icon.src = "./assets/images/icon-plus.svg");
    answer.classList.toggle("active");
    question.classList.toggle("active");
    isOpen = !isOpen;
  });
});
