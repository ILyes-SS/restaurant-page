import chicken from "./images/food/chicken.png"
import burger from "./images/food/burger.png"
import fries from "./images/food/fries.png"
import pizza from "./images/food/pizza.png"



export function loadMenu(){
    const content = document.querySelector("#content");

    const title = document.createElement("h2");

    title.textContent = "Food";

    const title1 = document.createElement("h3");
    const title2 = document.createElement("h3");
    const title3 = document.createElement("h3");
    const title4 = document.createElement("h3");

    title1.textContent = " Spicy Chicken Sandwich";
    title2.textContent = "Classic Crispy Fries";
    title3.textContent = "Smoky BBQ Cheeseburger";
    title4.textContent = " Classic Pepperoni Pizza";

    const info1 = document.createElement("p");
    const info2 = document.createElement("p");
    const info3 = document.createElement("p");
    const info4 = document.createElement("p");

    info1.textContent = "Ignite your taste buds with our Spicy Chicken Sandwich. A tender, crispy fried chicken fillet seasoned with a fiery blend of spices";
    info2.textContent = " Enjoy the timeless taste of our Classic Crispy Fries. These golden, perfectly seasoned fries are fried to a delightful crunch ";
    info3.textContent = "Experience a burst of flavors with our Smoky BBQ Cheeseburger. This delectable creation features a succulent beef patty grilled to perfection";
    info4.textContent = "Savor the timeless taste of our Classic Pepperoni Pizza. This fan-favorite features a hand-tossed crust, smothered in rich tomato sauce";

    const food1 = document.createElement("img");
    const food2 = document.createElement("img");
    const food3 = document.createElement("img");
    const food4 = document.createElement("img");

    food1.src = chicken;

    food2.src = fries;
    food3.src = burger;
    food4.src = pizza;


    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");

    div1.appendChild(food1);
    div1.appendChild(title1);
    div1.appendChild(info1);
    div2.appendChild(food2);
    div2.appendChild(title2);
    div2.appendChild(info2);
    div3.appendChild(food3);
    div3.appendChild(title3);
    div3.appendChild(info3);
    div4.appendChild(food4);
    div4.appendChild(title4);
    div4.appendChild(info4);

    content.appendChild(title);
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);




}