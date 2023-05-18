const filterItem = document.querySelector(".items")
const filterImg = document.querySelectorAll(".image")

window.onload = () => {
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active")
            selectedItem.target.classList.add("active")
            let filterName = selectedItem.target.getAttribute("data-name")
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name")
                if ((filterImages == filterName) || filterName == "todos") {
                    image.classList.add("show")
                    image.classList.remove("hide")
                } else {
                    image.classList.add("hide")
                    image.classList.remove("show")
                }
            })
        }
    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)")
    }
}

const previewBox = document.querySelector(".preview-box")
const shadow = document.querySelector(".shadow")
let previewImg = previewBox.querySelector("img")
let categoryName = previewBox.querySelector(".title p")
closeIcon = previewBox.querySelector(".icon")

function preview(element){
    let selectedPrevImg = element.querySelector("img").src
    let selectedImgCategory = element.getAttribute("data-name")

    categoryName.textContent = selectedImgCategory
    previewImg.src = selectedPrevImg

    previewBox.classList.add("show")
    shadow.classList.add("show")

    closeIcon.onclick = () => {
        previewBox.classList.remove("show")
        shadow.classList.remove("show")

    }
}