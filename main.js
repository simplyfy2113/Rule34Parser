let id={};
function idFiller(){
for(let i of document.all){
if(i.id!=""){id[i.id]=i}
}
}
idFiller();




function name(length){
let base=["q","w","e","obama","d","c","q"];
let string="";
for(let i=0;i<length;i++){
string+=base[Math.floor(Math.random()*base.length)];
}
return(string)
}

function save(string){//could be of any type
let con;
if(string.indexOf(".png")!=-1){con="png"}
if(string.indexOf(".jpg")!=-1){con="jpg"}
if(string.indexOf(".jpeg")!=-1){con="jpeg"}
let a=document.createElement("a");
a.download=name(32)+"."+con;
a.href=string;
a.click();
return;
}




function viebon(e){window.open(e,"","_self")}

document.addEventListener("keypress",(e)=>{if(e.key=="j"){start()}});




function start(){




if(document.location.href.indexOf("list")!=-1){
for(let i of document.all){
if(i.tagName=="SPAN"&&i.id&&i.id!="blacklist-count"){
viebon(i.children[0].href)
}
}
}

}
