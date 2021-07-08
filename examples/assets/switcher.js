window.addEventListener("DOMContentLoaded", event => {
  const switcher = document.querySelector("#switchDark");
  const body = document.querySelector("body");

  let mode = localStorage.getItem("mode");
  body.classList = mode;

  if (mode === "dark") {
    switcher.checked = true;
  } else {
    switcher.checked = false;
  }

  switcher.addEventListener("click", function(e) {
    if (e.target.checked) {
      localStorage.setItem("mode", "dark");
      body.classList = "dark";
    } else {
      localStorage.setItem("mode", "");
      body.classList = "";
    }
  });
});
