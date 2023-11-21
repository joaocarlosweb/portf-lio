


let img = document.getElementById('foto')
let imgs = ['img/imgf1.png','img/imgf2.png','img/imgf3.png','img/imgf4.png','img/imgf5.png','img/imgf6.png','img/imgf7.png']
console.log(img)
setInterval( function(){
    let =random = Math.floor(Math.random()*7);
    img.src = imgs[random]
},2000);

function clicouMenu(){
    let opçao =document.querySelector('.opçao');
   let  menu= document.getElementById("intens")
   if(menu.style.display == 'block'){
    menu.style.display='none'
   }else{
    menu.style.display='block'
   }
   if(menu.style.display == 'block'){
    opçao.style.display= 'block'
   }else{
    opçao.style.display= 'none'
   }
   
   
}


