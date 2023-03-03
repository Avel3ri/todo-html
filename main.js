// Tworzenie guzika "usuwającego" zadanie
var myNodelist = document.getElementsByName("LI");
var i;

for (i = 0; i < myNodelist; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); // znak "X" ale lepszy
    span.classList = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Działanie guzika "usuwającego"
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Oznaczanie zadania jako skończone
var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);

// Funkcja dodająca zadanie
function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("add-task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.classList.add("task")
    if (inputValue === '') {
        alert("Musisz coś napisać!");
    } else {
        document.getElementById("tasks-list").appendChild(li);
    }
    document.getElementById("add-task").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}