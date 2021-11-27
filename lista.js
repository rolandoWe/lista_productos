


let sup=document.querySelectorAll(".sup");

function va(){
    for(l=0;l<sup.length;l++){
        let ver=  sup[l].innerHTML.toLowerCase();

      if(ver=="producto disponible"){
          sup[l].style.background="rgb(165, 245, 151)"
      }else{
          sup[l].style.textDecoration="line-through";
          sup[l].style.background="rgb(255, 148, 148)";
      
      }
      }
}
va()
// ****************************Light-box**********************
let imagenes=document.querySelectorAll(".product_img img");
let ver_img=document.querySelector(".ver_img");
let light=document.querySelector(".cont_light")
let cerrar=document.querySelector(".cerrar")

for(i=0;i<imagenes.length;i++){
    imagenes[i].addEventListener("click",function(im){
        light.classList.toggle("ver_light");
        ver_img.src=im.target.src
    })
}

cerrar.addEventListener("click",function(){
    light.classList.toggle("ver_light")

})

