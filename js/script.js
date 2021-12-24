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

let searchContainer=document.querySelector(".header-top__search-container")
let search=document.querySelector('.form-btn__open');
let burger=document.querySelector('.header-container__burger');
let logo=document.querySelector('.header-top__logo');
let formContainer=document.querySelector('.form-container');
let formInput=document.querySelector('.form__input');
let formActive=document.querySelector('.form');
let logoWrapper=document.querySelector(".header-top__logo")
let formClose=document.querySelector('.header-top__form-close');
let svg=document.querySelector('.header-top__svg')
let headerTop=document.querySelector(".header-top__container")

let i=0;
search.addEventListener("click",hideSearch);
formClose.addEventListener("click",hideSearch);


function hideSearch(){
    if (((String(search.name)=="noactive2"))&&(window.screen.width<1024)&&(window.screen.width>767)&&(i==0))
    {
    burger.style.display='none';
    logo.style.display='none';
    formContainer.classList.add("style__formContainer");
    formInput.classList.add("style__formInput");
    formActive.classList.add("style__formActive");
    svg.classList.add("style__svg");
    search.name="active2"; 
    i=1;
    return i;  
    }
    else if((i==1)&&(window.screen.width<1024)){
        burger.style.display='flex';
        logo.style.display='flex';
        formInput.style.display='none'; 
        formClose.style.display='none';
        search.style.display='flex';
        search.name="noactive2";
        formContainer.classList.remove("style__formContainer");
        formInput.classList.remove("style__formInput");
        formActive.classList.remove("style__formActive");
        svg.classList.remove("style__svg");
        formContainer.classList.add("style__formContainerHide");
        logoWrapper.classList.add("style__logoWrapperHide");
        formContainer.classList.remove('style__form');
        svg.classList.remove("style__svg");
        svg.classList.add('style__svg-before');
       i=0;
        return i;
        
        
    }
    if (((String(search.name)=="noactive2"))&&(window.screen.width<768)&&(i==0))
    {
    burger.style.display='none';
    logo.style.display='none';
    formContainer.classList.add('style__form');    
    formInput.classList.add('style__formInput');
    formActive.classList.add('style__formActive');
    formClose.classList.add('style__formClose'); 
    svg.classList.add('style__svg');
    search.name="active2"; 
    i=1;
    return i;  
    }
    
   
}
 









