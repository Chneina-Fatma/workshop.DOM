var likes=document.getElementsByClassName("like");
console.log(likes)
for(let i=0; i<likes.length; i++){
    let likebtn=likes[i];
    likebtn.addEventListener("click", function(){
        if(likebtn.firstChild.style.color=="red"){
            likebtn.firstChild.style.color="black"
        }
        else{
            likebtn.firstChild.style.color="red"
        }
        
    })

}



var remove=document.getElementsByClassName("delete");
for(let i=0;i<remove.length;i++){
    let supr=remove[i];
    supr.addEventListener("click", function(){
supr.parentElement.remove();
    })
}
//plus
var plus=document.getElementsByClassName("plus-btn");
for(let i=0; i<plus.length;i++){
    let btnplus=plus[i];
    btnplus.addEventListener("click", function(){
     btnplus.previousElementSibling.value++;  
     total();
     total1();
     total2();
     total3();
    })
}
//moin
var minus=document.getElementsByClassName("minus-btn");
for(let i=0; i<minus.length;i++){
    let btnminus=minus[i];
    btnminus.addEventListener("click", function(){
        if(btnminus.nextElementSibling.value>1){
            btnminus.nextElementSibling.value--;}
total();
     total1();
     total2();
     total3();
    } );
}
//total
var items=document.getElementsByClassName("Item");
var finalPrice=document.getElementById("finalPrice");
function total(){
    let s=0;
    for (let i=0; i<items.length;i++){
        let item=items[i];
        s=
        s+
        item.querySelector(".Quant").value *
        item.querySelector(".price").innerText;
    }
    return (finalPrice.value=s);
}
function total1(){
    let q1=document.getElementById("q1");
    let p1=document.getElementById("p1");
    p1.innerText=q1.value * 1379;
}
function total2(){
    let q2=document.getElementById("q2");
    let p2=document.getElementById("p2");
    p2.innerText=q2.value * 176;
}
function total3(){
    let q3=document.getElementById("q3");
    let p3=document.getElementById("p3");
    p3.innerText=q3.value * 249;
}









