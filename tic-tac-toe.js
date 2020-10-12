
window.onload=page;

function page(){

a = document.getElementById("board").children;

for (i=0; i<9;i++){

a[i].setAttribute("class","square");

 setXorO();

 glow();


}

}



let W = [];


function setXorO() {
    let store = document.querySelectorAll("#board > div");
    for (let J = 0; J < 9; J++) {
        store[J].onclick = function() {
            if(W.length === 0 && store[J].innerHTML === "") {
                store[J].classList.add("square", "X");
                store[J].innerHTML = "X";
                W.push("X");

                check();

                restart();



            }
            else {
                if (W[W.length - 1] === "X" && store[J].innerHTML === ""){
                    store[J].classList.add("square", "O");
                    store[J].innerHTML = "O";
                    W.push("O");

                    check();

                    restart();



                }
                else if (W[W.length - 1] === "O" && store[J].innerHTML === ""){
                    store[J].classList.add("square", "X");
                    store[J].innerHTML = "X";
                    W.push("X");

                    check();

                    restart();




                }
            }
        }
    }
}


function glow() {
    let store = document.getElementById("board").children;

    for (let i = 0; i < 9; i++) {
        store[i].onmouseover = function() {

            store[i].classList.toggle("hover", true)

        }
        store[i].onmouseout = function() {

            store[i].classList.toggle("hover", false)

        }
    }

}

function restart() {
    let bCells = document.querySelectorAll("#board div");
    document.getElementsByClassName("btn")[0].addEventListener("click", function() {
        game.length = 0;
        for (let j= 0; j < bCells.length; j++) {
            bCells[j].innerHTML = "";
        }

        document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");
    });
}

function check() {
    let store = document.getElementById("board").children;

     if (store[0].textContent !== "" && store[0].textContent === "O" && store[1].textContent === "O" && store[2].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML =  "Congratulations! O is the Winner!";
    }
    if (store[0].textContent !== "" && store[0].textContent === "X" && store[1].textContent === "X" && store[2].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!" ;
    }


     if (store[3].textContent !== "" && store[3].textContent === "O" && store[4].textContent === "O" && store[5].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML =  "Congratulations! O is the Winner!";
    }
     if (store[3].textContent !== "" && store[3].textContent === "X" && store[4].textContent === "X" && store[5].textContent === "X") {
        update.classList.add("status.you-won::before", "status", "you-won", "#status.you-won::after");
        update.innerHTML = "Congratulations! X is the Winner!" ;                                                                                                
    }


     if (store[6].textContent !== "" && store[6].textContent === "O" && store[7].textContent === "O" && store[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    if (store[6].textContent !== "" && store[6].textContent === "X" && store[7].textContent === "X" && store[8].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!" ;
    }


     if (store[2].textContent !== "" && store[2].textContent === "O" && store[4].textContent === "O" && store[6].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML =  "Congratulations! O is the Winner!";
    }
     if (store[2].textContent !== "" && store[2].textContent === "X" && store[4].textContent === "X" && store[6].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!" ;
    }



     if (store[0].textContent !== "" && store[0].textContent === "O" && store[4].textContent === "O" && store[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (store[0].textContent !== "" && store[0].textContent === "X" && store[4].textContent === "X" && store[8].textContent === "X") {
        document.getElementById("status").classList.add("Winner");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!" ;
    }



     if (store[0].textContent === "O" && store[0].textContent !== "" && store[3].textContent === "O" && store[6].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML =  "Congratulations! O is the Winner!";
    }
     if (store[0].textContent !== "" && store[0].textContent === "X" && store[3].textContent === "X" && store[6].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!" ;
    }



     if (store[1].textContent !== "" && store[1].textContent === "O" && store[4].textContent === "O" && store[7].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    if (store[1].textContent !== "" && store[1].textContent === "X" && store[4].textContent === "X" && store[7].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!" ;
    }




     if (store[2] !== "" && store[2].textContent === "O" && store[5].textContent === "O" && store[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML =  "Congratulations! O is the Winner!";
    }
     if (store[2].textContent !== "" && store[2].textContent === "X" && store[5].textContent === "X" && store[8].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!" ;
    }
}
