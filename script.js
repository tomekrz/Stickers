const btn = document.querySelector("#add");
let i = 0;
const colors = ["rgb(252, 231, 44)", "rgb(250, 196, 60)", "rgb(252, 243, 128)"];
const btnDivPlus = document.querySelector("div i");

btnDivPlus.addEventListener("click", function () {
    document.querySelector("section").classList.toggle("displayObject");
    document.querySelector("div i").classList.toggle("rotateObject");
})

document.onselectstart = function () {
    return false;
};

const addElement = function () {

    let elementColor = colors[Math.floor(Math.random() * colors.length)]

    let textArea = document.querySelector("#description");
    const createLi = document.createElement("li");
    createLi.id = `e${i}`
    createLi.style.backgroundColor = elementColor;
    createLi.innerHTML =
        `<br>${textArea.value} <br><i class="fas fa-times"></i>`
    document.querySelector("ul").appendChild(createLi);

    textArea.value = "";
    document.querySelector("section").classList.toggle("displayObject");
    document.querySelector("div i").classList.toggle("rotateObject");

    const listicker = document.querySelectorAll('li');
    listicker.forEach(item => {

        let liX;
        let liY;
        item.style.left = liX + "px";
        item.style.top = liY + "px";
        let drawActive = false;
        let insertLiX;
        let insertLiY;

        item.addEventListener("mousedown", (event) => {
            item.style.zIndex = "999";
            item.classList.add("fluentPosition")
            drawActive = true;
            insertLiX = event.offsetX;
            insertLiY = event.offsetY;
        });
        window.addEventListener("mouseup", function () {
            drawActive = false;
            item.style.zIndex = "0";
        });
        item.addEventListener("mousemove", function (event) {
            if (drawActive == true) {
                liX = event.clientX - insertLiX;
                liY = event.clientY - insertLiY;
                item.style.left = `${liX}px`;
                item.style.top = `${liY}px`;
            }
        });
    });
    const removeElement = (e) => {

        e.target.parentNode.remove();

    }
    document.querySelectorAll("li i").forEach(item =>
        item.addEventListener("click", removeElement)
    );
    i++
}


btn.addEventListener("click", addElement);