if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((event) => {
      console.log("Service workder : registerd");
    })
    .catch((error) => {
      console.log("Service worker registration error:", error.event);
    });
}
window.addEventListener("load", () => {
  const cats = [
    "cat0.jpg",
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg",
    "cat4.jpg",
    "cat5.jpg",
  ];
  catIndex = 0;
  const nextButton = document.querySelector(".next");
  const img = document.querySelector("img");
  nextButton.addEventListener("click", () => {
    catIndex = (catIndex + 1) % cats.length;
    img.src = "img/" + cats[catIndex];
  });
});
