const siteNav = document.getElementById("site-nav").querySelector("nav");
document.getElementById("click-outside").onclick = e => {
  const { navState } = document.documentElement.dataset;
  document.documentElement.dataset.navState = navState ? "" : "open";
};