const contenedor=document.getElementById("mensajes");
const cantidad=500;
const particulas=document.getElementById("particulas");
const seccionFinal=document.getElementById("final");
const botonCelebrar=document.getElementById("celebrar");

// El ciclo for crea las 500 frases sin escribirlas una por una.
for(let i=0;i<cantidad;i++){
    const mensaje=document.createElement("p");
    mensaje.classList.add("mensaje");
    mensaje.textContent="Te Quiero Mi Viejito 💙";
    contenedor.appendChild(mensaje);
}

// Crea estrellas y destellos que suben por la pantalla.
function crearParticula(){
    const figura=document.createElement("span");
    const simbolos=["✦","✧","⋆","·","💙"];
    figura.classList.add("particula");
    figura.textContent=simbolos[Math.floor(Math.random()*simbolos.length)];
    figura.style.left=Math.random()*100+"vw";
    figura.style.setProperty("--duracion",(3+Math.random()*3)+"s");
    figura.style.setProperty("--desvio",(Math.random()*120-60)+"px");
    figura.style.fontSize=(12+Math.random()*17)+"px";
    particulas.appendChild(figura);
    figura.addEventListener("animationend",()=>figura.remove());
}

// Cuando Rodrigo llega al final, comienza la celebración una sola vez.
let yaCelebro=false;
const observador=new IntersectionObserver((entradas)=>{
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting&&!yaCelebro){
            celebrarFinal();
            yaCelebro=true;
        }
    });
},{threshold:0.45});
observador.observe(seccionFinal);

function celebrarFinal(){
    seccionFinal.classList.add("celebrado");
    // Lluvia de estrellas y corazones azules.
    for(let i=0;i<35;i++){
        setTimeout(crearParticula,i*90);
    }
}

// El botón permite repetir el efecto cuando quiera.
botonCelebrar.addEventListener("click",celebrarFinal);

// Algunas estrellas flotan suavemente durante toda la visita.
setInterval(()=>{
    if(document.visibilityState==="visible") crearParticula();
},1100);