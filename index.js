let id={};
function idFiller(){
for(let i of document.all){
if(i.id!=""){id[i.id]=i}
}
}
idFiller();

function log(e){console.log(e);return}//du not distibut



let con=0;
id.info.addEventListener("click",()=>{
if(con==0){con=1;id.text.style.transform="rotateY(180deg)";id.text2.style.transform="rotateY(0deg)";id.pic1.src="./pic2.png";}
else{con=0;id.text.style.transform="rotateY(0deg)";id.text2.style.transform="rotateY(180deg)";id.pic1.src="./picture.png";}

})

let cut=0;
/*
id.switch.addEventListener("click",()=>{
	
if(cut==0) {cut=1;id.switch.style.backgroundColor="#ff2b2b";}//means working
else{cut=0;id.switch.style.backgroundColor="#70d470"}
});
*/
