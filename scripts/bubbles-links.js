const bubblesStyle = [
  { color: "#ff6b8a88", size: 180, x: 1, y: 1,  animation: "bubbleMove" },
  { color: "#4fc3f788", size: 150, x: 15, y: 5,  animation: "bubbleMove2" },
  { color: "#ffd54f88", size: 210, x: 30, y: 10,  animation: "bubbleMove3" },
  { color: "#81c78488", size: 160, x: 45, y: 7,  animation: "bubbleMove" },
  { color: "#e5737388", size: 200, x: 60, y: 0,  animation: "bubbleMove2" },
  { color: "#64b5f688", size: 170, x: 80, y: 10,  animation: "bubbleMove3" },
  { color: "#ffb74d88", size: 220, x: 100, y: 3,  animation: "bubbleMove" },
  { color: "#9575cd88", size: 155, x: 1, y: 25,  animation: "bubbleMove2" },
  { color: "#f0629288", size: 190, x: 12, y: 26,  animation: "bubbleMove3" },
  { color: "#4dd0e188", size: 165, x: 30, y: 30,  animation: "bubbleMove" },
  { color: "#a1887f88", size: 215, x: 45, y: 27,  animation: "bubbleMove2" },
  { color: "#ba68c888", size: 175, x: 60, y: 25,  animation: "bubbleMove3" },
  { color: "#ffcc0288", size: 185, x: 75, y: 27,  animation: "bubbleMove" },
  { color: "#4db6ac88", size: 220, x: 87, y: 22,  animation: "bubbleMove2" },
  { color: "#ec407a88", size: 195, x: 100,  y: 36,  animation: "bubbleMove3" },
  { color: "#7e57c288", size: 150, x: 13, y: 50,  animation: "bubbleMove" },
  { color: "#ff8a6588", size: 240, x: 27, y: 45,   animation: "bubbleMove2" },
  { color: "#26c6da88", size: 160, x: 47, y: 48,  animation: "bubbleMove3" },
  { color: "#d4e15788", size: 200, x: 60, y: 47,  animation: "bubbleMove" },
  { color: "#ab47bc88", size: 170, x: 75, y: 45,  animation: "bubbleMove2" },
  { color: "#ef535088", size: 220, x: 85, y: 47,  animation: "bubbleMove3" },
  { color: "#66bb6a88", size: 155, x: 1, y: 63,  animation: "bubbleMove" },
  { color: "#ffa72688", size: 190, x: 15, y: 67,  animation: "bubbleMove2" },
  { color: "#78909c88", size: 165, x: 30, y: 75,  animation: "bubbleMove3" },
  { color: "#f48fb188", size: 215, x: 42, y: 64,  animation: "bubbleMove" },
  { color: "#29b6f688", size: 180, x: 60, y: 70,  animation: "bubbleMove2" },
  { color: "#ff704388", size: 250, x: 75,  y: 65,  animation: "bubbleMove3" },
  { color: "#9ccc6588", size: 160, x: 90, y: 65,   animation: "bubbleMove" },
  { color: "#ce93d888", size: 210, x: 100, y: 55,  animation: "bubbleMove2" },
  { color: "#42a5f588", size: 175, x: 100, y: 75,  animation: "bubbleMove3" },
];

const bubblesIndex = document.querySelectorAll(".bubbles-2 a");

function setBubblesStyle(bubbles) {
  bubbles.forEach((bubble, index) => {
    const s = bubblesStyle[index];
    bubble.style.setProperty("width", `${s.size}px`);
    bubble.style.setProperty("height", `${s.size}px`);
    bubble.style.setProperty("left", `${s.x}%`);
    bubble.style.setProperty("top", `${s.y}%`);
    bubble.style.setProperty("background-image",
      `radial-gradient(circle at 30% 30%,
        #ffffffe6 0%,
        ${s.color} 30%,
        transparent 70%)`);
    bubble.style.setProperty("border", `0.5px solid ${s.color}`);
    bubble.style.setProperty("animation", `${s.animation} 7s infinite`);
    bubble.style.setProperty("color", `color-mix(in srgb, #fff 50%, ${s.color})`);
  });
}

setBubblesStyle(bubblesIndex);
