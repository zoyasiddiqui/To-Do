
// get the value of the to do list item they typed out
var emptyList = document.querySelector("ol");

document.getElementById("submit").onclick = function() {

    toDoItem = document.getElementById("item");

    var li = document.createElement('li');
    li.classList.add("to-do-item")
    
    var closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.innerText = "x";

    var doneButton = document.createElement("button");
    doneButton.classList.add("done");
    doneButton.innerText = "DONE";

    var text = document.createElement("p");
    text.classList.add("to-do-text");
    text.innerText = toDoItem.value;

    li.append(text);
    li.append(closeButton);
    li.append(doneButton);

    emptyList.append(li);
    document.getElementById("item").value = "";

    //handling delete methods

    closeButton.onclick = function() {
        var item = closeButton.parentNode;
        item.remove();
    };
    doneButton.onclick = function() {
        var item = doneButton.parentNode;
        item.style.textDecoration = "line-through";
    }
};