document.addEventListener('mousemove', showPosition);


function showPosition(event){
  if(event.clientY < 100){
    header.classList.remove("hide");
  }
  
}