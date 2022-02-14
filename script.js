const board = document.querySelector("#board")
const square_number = 500
const colors = ["red","blue","yellow","green","purple","aqua","black","orange"]
const btn = document.querySelector('.clean')


for (let i = 0; i < square_number; i++){
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover" ,() =>{
        setColor(square)
    })
    square.addEventListener("mouseleave", () =>{
        removeColor(square)

    })
    board.append(square)
}

function setColor (square){
    const color = getRandomColor()
    square.style.background = color
    square.style.boxShadow =' 0 0 2px ${color}, 0 0 10px ${color}'

}
function getRandomColor (){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
function removeColor(square){
    square.style.background = "#1d1d1d"
    square.style.boxShadow = ' 0 0 2px #000'
}
