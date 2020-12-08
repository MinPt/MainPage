let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}
let dots = document.getElementsByClassName("dot");

  for(let i = 0;i < dots.length; i++){
    for(let j = 0; j < dots[i].attributes.length; j++){
      if(dots[i].attributes[j].name == "checked"){
        console.log(i);
        dots[i + 1].attributes+= "checked : '' "
      }
    }
  }

  for(let i = 0;i < dots.length; i++){
    for(let j = 0; j < dots[i].attributes.length; j++){
      if(dots[i].attributes[j].name == "checked"){
        console.log("TRUE");
      }
    }
  }

function showSlides(n){
  
  
 
}