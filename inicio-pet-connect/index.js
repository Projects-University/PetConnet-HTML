const boton_mobil = document.querySelector(".boton-mobil");
const aside = document.querySelector(".aside");
const sectionAsidebar = document.querySelector(".section-asidebar");


boton_mobil.addEventListener("click",()=>{
    if (aside.style.display === "flex") {
    aside.style.display = "none";
  } else {
    aside.style.display = "flex";
    aside.style.flexDirection = "column";
    aside.style.height = "844px";
    sectionAsidebar.style.paddingTop = "400px";
  }
})