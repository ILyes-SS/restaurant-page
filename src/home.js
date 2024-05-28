import logoOne from "./images/hamburger.png"
import logoTwo from "./images/logo2-removebg-preview.png"
export function loadHome(){
    const nav =document.querySelector("nav");
    const content = document.querySelector("#content");
    const body= document.querySelector("body");
    const btnsDiv = document.querySelector(".btns");

    const logo1 = new Image();
    const logo2 = new Image();
    const h3 = document.createElement("h3");
    const para = document.createElement("p");
    const copyRight = document.createElement("div");

    logo1.src = logoOne;
    logo2.src = logoTwo;

    h3.textContent = '"Where Every Meal is a Happy Meal!"';
    para.textContent = "we believe that fast food can be fresh, delicious, and full of flavor. Our mission is to serve you mouth-watering meals that you’ll love, whether you’re dining in, taking out, or ordering online for delivery.";
    
    copyRight.className = "copyRights";
    copyRight.textContent = "@copyrights benmalti ilyes"
    
    nav.insertBefore(logo1 , btnsDiv);

    content.appendChild(logo2);
    content.appendChild(h3);
    content.appendChild(para);

    body.appendChild(copyRight);

};
