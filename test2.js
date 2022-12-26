
let box=document.querySelector("button");
box.addEventListener('click',change);
function change(){
    this.style.setProperty("--alert","#00ff00");
}