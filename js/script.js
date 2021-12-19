$(document).ready(function(){
    $("#body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

function changeIcon(e){
   if(e.target.name=="noactive"){
   console.log( "первый шаг"+e.target.name) 
   e.target.name="active"
   switch(e.target.id){
        case "button1":rotateExpand("expand1");break; 
        case "button2":rotateExpand("expand2");break; 
        case "button3":rotateExpand("expand3");break; 
        case "button4":rotateExpand("expand4");break; 
        case "button5":rotateExpand("expand5");break; 
    }
}
else{
    changeIcon2(e)   
}
}
function changeIcon2(e){
    console.log("второй шаг"+e.target.name)
    e.target.name="noactive"
    switch(e.target.id){
         case "button1":rotateExpand2("expand1");break; 
         case "button2":rotateExpand2("expand2");break; 
         case "button3":rotateExpand2("expand3");break; 
         case "button4":rotateExpand2("expand4");break; 
         case "button5":rotateExpand2("expand5");break; 
     }
 }



function rotateExpand(event){
    expand1=document.getElementById(event);
    expand1.style="transform: rotate(180deg);padding-top:0.1vw;margin-bottom:3px";
    
}
function rotateExpand2(event){
    expand1=document.getElementById(event);
    expand1.style="transform: rotate(360deg)";
}
let button=document.getElementById('button1');
let button2=document.getElementById('button2');
let button3=document.getElementById('button3');
let button4=document.getElementById('button4');
let button5=document.getElementById('button5');

document.body.addEventListener("click",changeIcon)
button.addEventListener("blur",changeIcon2)


button2.addEventListener("blur",changeIcon2)
button3.addEventListener("blur",changeIcon2)
button4.addEventListener("blur",changeIcon2)
button5.addEventListener("blur",changeIcon2)


let search=document.querySelector('.form-btn__open');
let burger=document.querySelector('.header-container__burger');
let logo=document.querySelector('.header-top__logo');
let formContainer=document.querySelector('.form-container');
let formInput=document.querySelector('.form__input');
let formActive=document.querySelector('.form');
let logoWrapper=document.querySelector(".header-top__logo")

//Здесь,ниже находится скрипт по которому прошу помощи
let i=0;
search.addEventListener("click",hideSearch);
search.addEventListener("blur",hideSearch);
function hideSearch(){
    if (((String(search.name)=="noactive2"))&&(window.screen.width<1024)&&(i==0))
    {
    alert("123");
    burger.style.display='none';
    logo.style.display='none';
    formContainer.style.width='1400px';    
    formInput.style.width='100%';
    formActive.style.width='100%'; 
    search.name="active2"; 
    i=1;
    return i;  
    }
    else if(i==0){
        alert("456");
        burger.style.display='block';
        logo.style.display='block';
        formContainer.style.width='215px'; 
        search.name="noactive2";
        logoWrapper.style.marginRight='213px';
        i=0;
        return i;
        
    }
    i=0;
}
 









