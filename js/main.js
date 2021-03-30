const showMenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID),
    nav= document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('showdisplyright')
        })
    }
}


showMenu('nav-toggle','nav-menu')


 console.log("Slide");
const slider = document.querySelector(".Swipe__here");

var slidegroup = 1 ;
sliderset(slidegroup);


slider.addEventListener('click' , () =>{
    console.log("Slideinside");
    sliderset(slidegroup += 1);
});

function sliderset(n) {
   console.log(n);
   var x = document.getElementsByClassName('homeSlide');

   if(n > x.length){
    slidegroup = 1 ;
   }
   if (n < 1) {slidegroup = x.length}

   console.log(x.length);
   for(var i=0;i<x.length;i++ ){
    console.log(x[i]);
    x[i].style.display = "none";
       x[i+1]; 
   }
   x[slidegroup-1].style.display = "block";  
}


const schl = document.querySelector(".schl");
const clg = document.querySelector(".clg");
const wrkplce = document.querySelector(".wrkplce");

const school = document.querySelector(".school");
const College = document.querySelector(".College");
const Workcmy = document.querySelector(".Workcmy");
console.log(schl);

const bg_hoverclr = document.querySelectorAll(".overcor");

console.log(bg_hoverclr);
schl.addEventListener('click' , () => {
    console.log('ddclick here');

    for( i=0 ; i < bg_hoverclr.length;i++){
        bg_hoverclr[i].classList.remove('bg__coloredu');
    }
        
});



schl.addEventListener('click' , () => {
    console.log('click here');
    
    for( i=0 ; i < bg_hoverclr.length;i++){
        bg_hoverclr[i].classList.remove('bg__coloredu');
    }
    schl.classList.add('bg__coloredu');
    school.classList.remove('notdisplay');
    College.classList.add('notdisplay');
    Workcmy.classList.add('notdisplay');
});

clg.addEventListener('click' , () => {
    console.log('click here');
    for( i=0 ; i < bg_hoverclr.length;i++){
        bg_hoverclr[i].classList.remove('bg__coloredu');
    }
    clg.classList.add('bg__coloredu');
    College.classList.remove('notdisplay');
    school.classList.add('notdisplay');
    Workcmy.classList.add('notdisplay');
});

wrkplce.addEventListener('click' , () => {
    console.log('click here');
    for( i=0 ; i < bg_hoverclr.length;i++){
        bg_hoverclr[i].classList.remove('bg__coloredu');
    }
    wrkplce.classList.add('bg__coloredu');
    Workcmy.classList.remove('notdisplay');
    school.classList.add('notdisplay');
    College.classList.add('notdisplay');
  

});

const all_input_fields = document.querySelectorAll('.contact_input');

function success(){
   //alert("Added") 
   for(let i=0; i<all_input_fields.length;i++){
       console.log(all_input_fields[i].value = '');
   }
}

