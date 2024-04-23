window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  }, 1000);
});
