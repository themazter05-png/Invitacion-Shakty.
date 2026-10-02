/* ================================
   ✏️ EDITA SOLO ESTA CONFIGURACIÓN
   ================================ */
const invitacion = {
  nombre: "TU NOMBRE",
  edad: 25,

  // AAAA-MM-DDTHH:MM:SS
  fechaEvento: "2026-12-20T20:00:00",

  fechaTexto: "20 DE DICIEMBRE DE 2026",
  horaTexto: "8:00 PM",
  lugar: "EL GALEÓN",
  direccion: "DIRECCIÓN DEL EVENTO",

  mapa: "https://www.google.com/maps",

  whatsapp: "521XXXXXXXXXX",
  mensajeWhatsapp: "¡Hola! Confirmo mi asistencia al cumpleaños."
};
/* ================================ */

const $ = id => document.getElementById(id);

$("heroName").textContent = invitacion.nombre;
$("heroAge").textContent = invitacion.edad;
$("dateText").textContent = invitacion.fechaTexto;
$("timeText").textContent = invitacion.horaTexto;
$("placeText").textContent = invitacion.lugar;
$("addressText").textContent = invitacion.direccion;
$("mapBtn").href = invitacion.mapa;
$("whatsappBtn").href = `https://wa.me/${invitacion.whatsapp}?text=${encodeURIComponent(invitacion.mensajeWhatsapp)}`;

const target = new Date(invitacion.fechaEvento).getTime();
const pad = n => String(Math.max(0,n)).padStart(2,"0");

function updateTimer(){
  const d = target-Date.now();
  if(d<=0){
    ["days","hours","minutes","seconds"].forEach(x=>$(x).textContent="00");
    $("timerMessage").textContent="🏴‍☠️ ¡HOY ES EL GRAN DÍA! 🏴‍☠️";
    return;
  }
  $("days").textContent=pad(Math.floor(d/86400000));
  $("hours").textContent=pad(Math.floor(d%86400000/3600000));
  $("minutes").textContent=pad(Math.floor(d%3600000/60000));
  $("seconds").textContent=pad(Math.floor(d%60000/1000));
}
updateTimer(); setInterval(updateTimer,1000);

const audio=$("music"), musicBtn=$("musicBtn");
musicBtn.addEventListener("click",async()=>{
  if(audio.paused){try{await audio.play();musicBtn.textContent="🔊"}catch(e){alert("Revisa que exista assets/audio/musica.mp3");}}
  else{audio.pause();musicBtn.textContent="♫";}
});

$("openInvite").addEventListener("click",()=>{
  $("opening").classList.add("hidden");
  $("mapReveal").classList.remove("hidden");
  setTimeout(()=>window.scrollTo(0,0),50);
});
$("continueBtn").addEventListener("click",()=>{
  $("mapReveal").classList.add("hidden");
  $("site").classList.remove("hidden");
  document.body.style.overflowX="hidden";
});
