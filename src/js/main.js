import "./lib/data-page";

const siteNav = document.getElementById("site-nav").querySelector("nav");
document.getElementById("click-outside").onclick = e => {
  const { navState } = document.documentElement.dataset;
  document.documentElement.dataset.navState = navState ? "" : "open";
};

window.setColor = e => {
  const v = e.target.value.toString();
  localStorage.setItem("hue", v);
  document.documentElement.style.setProperty("--hue", v);
};
