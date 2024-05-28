import iconOne from "./images/icons/mail.png"
import iconTwo from "./images/icons/phone.png"
import iconThree from "./images/icons/location.png"
import restaurant from "./images/image.png"
import "./about.css"

export function loadAbout(){
    const content = document.querySelector("#content");

    const info1 = document.createElement("p");
    const info2 = document.createElement("p");
    const info3 = document.createElement("p");

    info1.textContent = "email@fake.com";
    info2.textContent = "688875";
    info3.textContent = "pacific ocean";

    const icon1 = new Image();
    const icon2 = new Image();
    const icon3 = new Image();
    const photo = document.createElement("img");

    icon1.src = iconOne;
    icon2.src = iconTwo;
    icon3.src = iconThree;
    photo.src = restaurant;

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    div1.appendChild(icon1);
    div1.appendChild(info1);
    div2.appendChild(icon2);
    div2.appendChild(info2);
    div3.appendChild(icon3);
    div3.appendChild(info3);

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(photo);



}   