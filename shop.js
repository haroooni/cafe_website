let btn_next = document.querySelector("#next")
let btn_path = document.querySelector("#path")
let img_slider = document.querySelector("#img_slider")


btn_next.addEventListener("click" , path_img)
btn_path.addEventListener("click" , next_img)

const img_arrey = [
    "file:///c%3A/Users/Zahra/Desktop/davato_r/img/original-97d3661868ee446bd36ca59534095920.jpg" ,
    "file:///c%3A/Users/Zahra/Desktop/davato_r/img/fd0fa35276eab3647f9cf6521279a8fc.jpg" ,
    "file:///c%3A/Users/Zahra/Desktop/davato_r/img/Group 195 (2).png"
]

function next_img () {
    let number_of_slider = Number(img_slider.className)

    if(number_of_slider <= img_arrey.length - 2) {
        img_slider.setAttribute("src" , img_arrey[number_of_slider + 1])
        img_slider.setAttribute("class", number_of_slider + 1)
    } else {
        number_of_slider = 0
        img_slider.setAttribute("class", 0)
        img_slider.setAttribute("src" , img_arrey[number_of_slider])
    }
    console.log(img_arrey.length);
}

function path_img () {
    let number_of_slider = Number(img_slider.className)

    if(number_of_slider > 0) {
        img_slider.setAttribute("src" , img_arrey[number_of_slider - 1])
        img_slider.setAttribute("class", number_of_slider - 1)
    } else {
        number_of_slider = img_arrey.length - 1
        img_slider.setAttribute("class", img_arrey.length - 1)
        img_slider.setAttribute("src" , img_arrey[number_of_slider])
    }
}