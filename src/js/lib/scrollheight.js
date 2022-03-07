let scrollDistance = 0;
window.scrollo = e => {
  console.log(e);
  if (e.target.scrollTop > 300) {
    document.documentElement.classList.add("scrolling");
  } else if (e.target.scrollTop < 300) {
    document.documentElement.classList.remove("scrolling");
  } else {
  }
};
