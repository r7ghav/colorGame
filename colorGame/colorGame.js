// alert("CONNECTED");
var numSquares = 6;
var colors = [];
var pickedcolor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();
function init()
{
    for(var i=0;i<modeButtons.length;i++)
{
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numSquares = 3;
        }
        else{
            numSquares = 6;
        }
        reset();
        // figure out how many squares to show
        // pick new colors
        // pick a new picked color
        // update page to reflect changes
    })
}
for(var i=0;i<squares.length;i++)
{
    // add initial colors to squares
    squares[i].style.backgroundColor=colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click",function(){
    //    grab color of clicked square

    var clickedColor = this.style.backgroundColor;
    // compare color to picked color
    if(clickedColor === pickedcolor){
        // alert("Correct!");
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    }
    else{
        // alert("WRONG!!!")
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }

    });
}
}


function reset(){
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedcolor = pickcolor();
    // change color display to match picked color
    colorDisplay.textContent = pickedcolor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for(var i=0;i<squares.length;i++){
        if(colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor = "steelblue";
}









// easybtn.addEventListener("click",function(){
//     hardbtn.classList.remove("selected");
//     easybtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedcolor = pickcolor();
//     colorDisplay.textContent = pickedcolor;
//     for(var i = 0;i<squares.length;i++)
//     {
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }

//     }

// });


// hardbtn.addEventListener("click",function(){
//     hardbtn.classList.add("selected");
//     easybtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedcolor = pickcolor();
//     colorDisplay.textContent = pickedcolor;
//     for(var i = 0;i<squares.length;i++)
//     {
        
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
       

//     }
// });




resetButton.addEventListener("click",function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedcolor = pickcolor();
    // change color display to match picked color
    colorDisplay.textContent = pickedcolor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})









function changeColors(color){
    // loop through all squares
    for(var i=0;i<squares.length;i++)
    // change each color to match given color
    squares[i].style.backgroundColor=color;
}

function pickcolor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = []
    // add num random colors to array
    // repeat num times
    for(var i=0; i<num; i++)
    {
        //get random color and push into array 
        arr.push(randomColor());

    }
    // return that array
    return arr;
}
function randomColor(){
    // PICK a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // PICK a green from 0-255
    var g = Math.floor(Math.random() * 256);
    // PICK a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g  + ", " + b + ")";

}