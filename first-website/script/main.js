const myButton = document.querySelector("button");
const myHeader = document.querySelector("h1");

const changeText = () => myHeader.textContent = `Mozilla is cool, ${localStorage.getItem("name")}`;

function setUserName(){
    let Name = null;
    while(!Name){
      Name = prompt("あなたの名前を入力してください。")
    }

    localStorage.setItem("name",Name)
    changeText();
}




if(!localStorage.getItem("name")){
    setUserName();
}
else{
    changeText();
}


myButton.addEventListener("click",setUserName);

//-------------------------------------------------

const myImage = document.querySelector("img");



myImage.addEventListener("click",() =>{
    const myImageSorce = myImage.getAttribute("src");
    if(myImageSorce === "fig/firefox-icon.png"){
        myImage.setAttribute("src","fig/firefox2.png");
    }else{
        myImage.setAttribute("src","fig/firefox-icon.png");
    }
});
