import { loadHome as home} from "./home.js";
import { loadAbout as about} from "./about.js";
import { loadMenu as menu} from "./menu.js";

//import "./style.css" can be used here too
//common html elements should have been put in html file now you need more code when selecting home


home();
const contentDiv = document.querySelector("#content");

const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click",()=>{

    contentDiv.textContent = "";
    about()
})
const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click",()=>{
    const logoBurger = document.querySelector("nav img");
    const nav = document.querySelector("nav")
    const body = document.querySelector("body");
    const copyRights = document.querySelector(".copyRights");

    body.removeChild(copyRights)
    nav.removeChild(logoBurger);
    contentDiv.textContent = "";
    home()
})
const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click",()=>{

    contentDiv.textContent = "";
    menu()
})