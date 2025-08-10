const addItems = document.querySelector(".items");
const taskButton = document.getElementById("add-tsk-button");
const allBoards = document.querySelectorAll(".KanBan-column");
const card = document.querySelectorAll(".item");
//This function is used to add card in out to-do column

function attachDragEvents(target)
{
    target.addEventListener("dragstart", () => {
        target.classList.add("flying");
    });
    target.addEventListener("dragend", () => {
        target.classList.remove("flying");
    });
}

taskButton.addEventListener("click",()=>
{
    const input = prompt("What is the Task?")

    if(!input) return;

    const Taskcard = document.createElement("p");
    Taskcard.classList.add("item");
    Taskcard.setAttribute("draggable",true)
    Taskcard.innerText = input;
    attachDragEvents(Taskcard);
    addItems.append(Taskcard);
})

//card has only 2 eventlistner functions drag-start and drag-end , while the card is at position drag-end let the card get append in the column that its hovering upon , On the board its drag-over evenlistner if there is a drag over on the board it will append that card in itself.

card.forEach(attachDragEvents)

allBoards.forEach((board) => {
    board.addEventListener("dragover",()=>
    {
       const flyingElement = document.querySelector(".flying");
       board.appendChild(flyingElement);
    })
});