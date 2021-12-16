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
    expand1.style="transform: rotate(180deg);padding-top:0.1vw";
    
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





