

let doc = document.documentElement;
let w = window;

let curScroll = prevScroll = w.scrollY || doc.scrollTop;
let curDirection = prevDirection = 0;

let header = document.getElementById('page-header');

function checkScroll(){

  curScroll = w.scrollY || doc.scrollTop;
  if(curScroll > prevScroll){
    curDirection = 2
  }else{
    curDirection = 1;
  }

  if(curDirection !== prevDirection){
    toggleHeader();
  }
  prevDirection = curDirection;
  prevScroll = curScroll;
}

function toggleHeader(){
  if(curDirection === 2){
    header.classList.add("hide");
  }
  else if(curDirection === 1)
  {
    header.classList.remove("hide");
  }
}

w.addEventListener("scroll",()=> checkScroll());

