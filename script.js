
// get the value of the to do list item they typed out
var emptyList = document.querySelector("ol");
var counter = 1;

document.getElementById("submit").onclick = function() {

    toDoItem = document.getElementById("item");

    var li = document.createElement('li');
    var itemID = `item${counter}`;
    li.setAttribute("id", itemID);
    li.classList.add("to-do-item")
    
    var closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.innerText = "x";

    var doneButton = document.createElement("button");
    doneButton.classList.add("done");
    doneButton.innerText = "DONE";

    var text = document.createElement("p");
    text.innerText = toDoItem.value;
    text.classList.add("to-do-text");

    li.append(text);
    li.append(closeButton);
    li.append(doneButton);

    emptyList.append(li);
    counter += 1;
    document.getElementById("item").value = "";
}



