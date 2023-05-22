const cursor = document.querySelector(".cursor");

const mouseMove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

document.addEventListener("mousemove", mouseMove);