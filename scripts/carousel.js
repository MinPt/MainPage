let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}


function showSlides(n){
  let slides = document.getElementsByClassName("carousel__item");
  let dots = document.getElementsByClassName("dot");

  if(n > slides.length){
    slideIndex = 1;
  }else if(n < 1)
  {
    slideIndex = slides.length;
  }
  for(let i = 0; i < slides.length;i++){
    slides[i].classList.remove("active");
  }
  for(let i = 0; i < dots.length;i++){
    dots[i].classList.remove("active");
  }
  console.log(slideIndex);
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].classList.add("active");
}