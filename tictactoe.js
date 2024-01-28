let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");

let newgamebutton = document.querySelector("#new-button")
let msgContainer = document.querySelector(".msg-Container ");
let msg = document.querySelector("#msg");

let turno = true; //playerX,playero
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

const resetgame =()=>{
  turno = true;
  enableboxes();
  msgContainer.classList.add("hide");
};


boxes.forEach((box) =>{ 
    box.addEventListener("click",()=>{
   
    if(turno)
    {
        box.innerText = "0";
        turno = false;
    }
    else
    {
        box.innerText = "X";
        turno = true;
    }
    box.disabled = true;

    checkWinner();
    });
});

const disableboxes =()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }};

const showWinner =(winner)=>{
   msg.innerText = `congrulations, winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableboxes();
};

const checkWinner = ()=>{
  for(let pattern of winpatterns)
  {
    
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;  


    if(position1 != "" && position2 !== "" && position3 != "")
    {
        if(position1 === position2 && position2 === position3)
        {
          
            showWinner(position1);
        }
    }
  }

};

newgamebutton.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);