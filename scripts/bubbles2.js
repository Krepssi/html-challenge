let bubblesStyle = [
  {
    "color": "#ff00004d",
    "size": "200",
    "x": "10",
    "y": "20",
    "animation": "bubbleMove"
  },
  {
    "color": "#003cff40",
    "size": "150",
    "x": "200",
    "y": "100",
    "animation": "bubbleMove2"
  },
  {
    "color": "#ea00ff40",
    "size": "100",
    "x": "280",
    "y": "10",
    "animation": "bubbleMove3"
  },
  {
    "color": "#00ffff86",
    "size": "130",
    "x": "380",
    "y": "30",
    "animation": "bubbleMove"
  },
  {
    "color": "#e197eb86",
    "size": "230",
    "x": "500",
    "y": "10",
    "animation": "bubbleMove"
  },
  {
    "color": "#ebe39786",
    "size": "170",
    "x": "750",
    "y": "10",
    "animation": "bubbleMove"
  },
  {
    "color": "#eb97ac86",
    "size": "220",
    "x": "900",
    "y": "120",
    "animation": "bubbleMove"
  },

]
 bubblesStyle = [
  { color: "#ff6b8a88", size: 180, x: 1, y: 1,  animation: "bubbleMove" },   // rosa intenso
  { color: "#4fc3f788", size: 150, x: 15, y: 5,  animation: "bubbleMove2" },  // azul vivo
  { color: "#ffd54f88", size: 210, x: 30, y: 10,  animation: "bubbleMove3" },  // amarillo
  { color: "#81c78488", size: 160, x: 45, y: 7,  animation: "bubbleMove" },   // verde
  { color: "#e5737388", size: 200, x: 60, y: 0,  animation: "bubbleMove2" },  // coral
  { color: "#64b5f688", size: 170, x: 80, y: 10,  animation: "bubbleMove3" },  // azul cielo
  { color: "#ffb74d88", size: 220, x: 100, y: 3,  animation: "bubbleMove" },   // naranja
  { color: "#9575cd88", size: 155, x: 1, y: 25,  animation: "bubbleMove2" },  // púrpura
  { color: "#f0629288", size: 190, x: 12, y: 26,  animation: "bubbleMove3" },  // rosa fuerte
  { color: "#4dd0e188", size: 165, x: 30, y: 30,  animation: "bubbleMove" },   // turquesa

  { color: "#a1887f88", size: 215, x: 45, y: 27,  animation: "bubbleMove2" },  // marrón claro
  { color: "#ba68c888", size: 175, x: 60, y: 25,  animation: "bubbleMove3" },  // violeta
  { color: "#ffcc0288", size: 185, x: 75, y: 27,  animation: "bubbleMove" },   // amarillo mostaza
  { color: "#4db6ac88", size: 220, x: 87, y: 22,  animation: "bubbleMove2" },  // verde azulado
  { color: "#ec407a88", size: 195, x: 100,  y: 36,  animation: "bubbleMove3" },  // magenta
  { color: "#7e57c288", size: 150, x: 13, y: 50,  animation: "bubbleMove" },   // púrpura oscuro
  { color: "#ff8a6588", size: 240, x: 27, y: 45,   animation: "bubbleMove2" },  // salmón
  { color: "#26c6da88", size: 160, x: 47, y: 48,  animation: "bubbleMove3" },  // cian
  { color: "#d4e15788", size: 200, x: 60, y: 47,  animation: "bubbleMove" },   // lima
  { color: "#ab47bc88", size: 170, x: 75, y: 45,  animation: "bubbleMove2" },  // orquídea

  { color: "#ef535088", size: 220, x: 85, y: 47,  animation: "bubbleMove3" },  // rojo
  { color: "#66bb6a88", size: 155, x: 1, y: 63,  animation: "bubbleMove" },   // verde hoja
  { color: "#ffa72688", size: 190, x: 15, y: 67,  animation: "bubbleMove2" },  // naranja
  { color: "#78909c88", size: 165, x: 30, y: 75,  animation: "bubbleMove3" },  // gris azulado
  { color: "#f48fb188", size: 215, x: 42, y: 64,  animation: "bubbleMove" },   // rosa pastel
  { color: "#29b6f688", size: 180, x: 60, y: 70,  animation: "bubbleMove2" },  // azul brillante
  { color: "#ff704388", size: 250, x: 75,  y: 65,  animation: "bubbleMove3" },  // naranja intenso
  { color: "#9ccc6588", size: 160, x: 90, y: 65,   animation: "bubbleMove" },   // verde oliva
  { color: "#ce93d888", size: 210, x: 100, y: 55,  animation: "bubbleMove2" },  // lila
  { color: "#42a5f588", size: 175, x: 100, y: 75,  animation: "bubbleMove3" },  // azul
];

const bubblesIndex = document.querySelectorAll(".bubbles-2 a");

function setBubblesStyle(bubbles) {
  bubbles.forEach((bubble, index) => {
    bubble.style.setProperty("width", `${bubblesStyle[index].size}px`);
    bubble.style.setProperty("height", `${bubblesStyle[index].size}px`);
    bubble.style.setProperty("left", `${bubblesStyle[index].x}%`);
    bubble.style.setProperty("top", `${bubblesStyle[index].y}%`);
    bubble.style.setProperty("background-image",
      `radial-gradient(circle at 30% 30%,
        #ffffffe6 0%,
        ${bubblesStyle[index].color} 30%,
        transparent 70%)`);
    bubble.style.setProperty("border", `0.5px solid ${bubblesStyle[index].color}`);
    bubble.style.setProperty("animation", `${bubblesStyle[index].animation} 7s infinite`);
    bubble.style.setProperty("color", `color-mix(in srgb, #fff 50%, ${bubblesStyle[index].color})`);










  });
}

setBubblesStyle(bubblesIndex)
/* .challenge-1 {

       }

       .challenge-2 {
           width: 200px;
           height: 200px;
           top: 100px;
           left: 100px;
           background: radial-gradient(circle at 30% 30%,
                   rgba(255, 255, 255, 0.9) 0%,
                   #003cff40 30%,
                   transparent 70%);
           animation: bubbleMove2 7s ease infinite;
           border: 0.5px solid rgba(0, 60, 255, 0.25);
       }

       .challenge-3 {
           width: 100px;
           height: 100px;
           top: 10px;
           left: 280px;
           background: radial-gradient(circle at 30% 30%,
                   rgba(255, 255, 255, 0.9) 0%,
                   rgba(234, 0, 255, 0.25) 30%,
                   transparent 70%);
           animation: bubbleMove 7s ease infinite;
           border: 0.5px solid rgba(234, 0, 255, 0.25);
       }

       .challenge-4 {
           width: 170px;
           height: 170px;
           top: 10px;
           left: 280px;
           background: radial-gradient(circle at 30% 30%,
                   rgba(255, 255, 255, 0.9) 0%,
                   rgba(234, 0, 255, 0.25) 30%,
                   transparent 70%);
           animation: bubbleMove 7s ease infinite;
           border: 0.5px solid rgba(234, 0, 255, 0.25);
       } */