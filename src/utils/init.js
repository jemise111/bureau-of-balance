export const initModals = () => {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".modal");
    window.M.Modal.init(elems);
  });
};

export const initSmoothScroll = () => {
  new window.SmoothScroll('a.scroller[href*="#"]');
};
