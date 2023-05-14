let list = [];
var isOdd = false;

function addComment(comment) {
    let div = document.getElementById("list");
    let p = document.createElement("p");
    if (isOdd) {
        isOdd = false;
        p.className = "list-item-light-blue";
    } else {
        isOdd = true;
        p.className = "list-item-light-white";
    }
    p.innerText = comment;
    div.appendChild(p);
}

function isThereAnyComment() {
    if (!isNullOrEmpty(textArea.value)) {
        btnSubmit.classList.remove("disabled");
    } else {
        btnSubmit.classList.add("disabled");
    }
}

let textArea = document.getElementById("textarea");
textArea.addEventListener('keyup', isThereAnyComment);

function addCommentsInlist() {
    if (!isNullOrEmpty(textArea.value)) {
        addComment(textArea.value);
    } else {
        btnSubmit.classList.add("disabled");
    }

    textArea.value = "";
}

function isNullOrEmpty(value) {
    return (!value || value == undefined || value == "" || value.length == 0);
}

let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = addCommentsInlist;

let btnDelete = document.getElementById("btnDelete");
let txtConfirm = document.getElementById("txtConfirm");


function isDeleteAllowed() {
    let value = txtConfirm.value;
    if (value == "REPOSITORY") {
        return true;
    } else {
        return false;
    }
}

txtConfirm.addEventListener('keyup', function () {
    if (isDeleteAllowed()) {
        btnDelete.classList.remove("disabled");
    } else {
        btnDelete.classList.add("disabled");
    }
});

btnDelete.onclick = function () {
    if (isDeleteAllowed()) {
        alert("Thanks for confirming. File is going to be deleted soon.");
        txtConfirm.value = "";

    }
    btnDelete.classList.add("disabled");

}

function initiateComments() {
    addComment("Oh God can save us from this.");
    addComment("Our prayers are who are in the front line trying to save people in need from this disaster.")
}

initiateComments();
