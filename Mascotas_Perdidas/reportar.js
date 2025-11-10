const div = document.querySelector(".div-reportar-mascota");
const reportarButton = document.querySelector(".section-buttom-adopcion");
const publicarReporte = document.querySelector(".section-button-reportar-mascota-publicar");
const cancelarReporte = document.querySelector(".section-button-reportar-mascota-cancelar");

reportarButton.addEventListener("click",(event)=>{
    event.preventDefault();
    div.style.display = "block";
})

publicarReporte.addEventListener("click",()=>{
    div.style.display = "none";
})

cancelarReporte.addEventListener("click",()=>{
    div.style.display = "none";
})