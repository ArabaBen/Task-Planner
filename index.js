//document.getElementById("myBtn").addEventListener("click", displayAdded);
//
//function displayAdded() {
//     
//}



//
////PICKING ELETEMENTS
//const clear = document.querySelector(".clear");
//const dataElement = document.getElementById("date");
//const list = document.getElementById("list");
//const input = document.getElementById("input");
//
//
//
////SETTING CLASSES TO CONST "THIS  = THIS"
//const DONE = "btn btn-primary";
//const LINE_THROUGH = "lineThrough";
//






//THE CURRENT DATE 
const d = new Date();
document.getElementById("date").innerHTML = d.toDateString();





//PUSH/ DELETE ITEAM for each card
const card1 = document.querySelector("#card1");
const btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        card1.style.display = "none";
    });
    















