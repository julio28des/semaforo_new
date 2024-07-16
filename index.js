const img = document.getElementById("img");
const button = document.getElementById("button");
let colorIndex = 0;
const trafficlight = (event) => {
turnOn [event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2){
    colorIndex++
   
}else {
    colorIndex = 0;
}
  }

  
const changecolor = () => {
const colors = ["red", "yellow", "green"]
const color = colors[ colorIndex ];
turnOn[color] ();
nextIndex();

  }

  const turnOn = {
    "red": () => img.src = "./imagem/vermelho.png",
    "yellow": () => img.src = "./imagem/amarelo.png",
    "green": () => img.src = "./imagem/verde.png",
    "automatic" : () => setInterval(changecolor, 1000)
   
}

button.addEventListener("click", trafficlight );
