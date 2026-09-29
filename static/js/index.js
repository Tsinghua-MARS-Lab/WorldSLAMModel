const resultImage = document.getElementById("result-image");
const resultTabs = document.querySelectorAll(".result-tabs .button");

resultTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    resultTabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    resultImage.src = tab.dataset.src;
  });
});
