const container=document.getElementById('container');
function makeRows(rows,cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    

    for(let c=0;c<(rows*cols);c++)
    {
        let cell=document.createElement("div");
    
        container.appendChild(cell).className = "grid-item";
    };
};
makeRows(16,16);
var items=document.querySelectorAll(".grid-item");


function color(e){
    
    e.target.style.background='black';
    //console.log('called');
};
function randomColor(e){
    var letters='0123456789abcdef';
    var color='#';
    for (var i=0;i<6;i++)
    {
        color+=letters[Math.floor(Math.random()*16)];
    }
    e.target.style.background=color;
}

var choice=document.getElementById('select');
const btn1=document.getElementById('reset');
const btn2=document.getElementById('rgb');
const btn3=document.getElementById('confirm');
var select=choice.value;

function partColor(e){
    e.target.style.background=choice.value;
}
items.forEach((item)=>{
    item.addEventListener('mouseover',color);

});
btn1.onclick=function()
{
    
    var size=prompt("enter size of grid:");
    items.forEach((item)=>{
        item.remove();
    })
    makeRows(size,size);
    items=document.querySelectorAll(".grid-item");
    items.forEach((item)=>{
        item.addEventListener('mouseover',color);
    
    });
    
}

btn2.onclick=function(){
    items.forEach((item)=>{
        item.removeEventListener('mouseover',color);
        item.addEventListener('mouseover',randomColor);
    });
}
btn3.onclick=function(){
    items.forEach((item)=>{
        item.removeEventListener('mouseover',color);
        item.removeEventListener('mouseover',randomColor);
        item.addEventListener('mouseover',partColor);
    });
}