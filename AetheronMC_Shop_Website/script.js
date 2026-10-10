let player="";

function saveName(){
player=document.getElementById("username").value;

if(player==""){
alert("Enter your Minecraft username");
return;
}

document.getElementById("login").style.display="none";
document.getElementById("shop").classList.remove("hidden");
}

function ticket(item){
alert("Please open a ticket on Discord to buy "+item+
"\nMinecraft Name: "+player);

window.open("https://discord.gg/JegRnDvA4","_blank");
}