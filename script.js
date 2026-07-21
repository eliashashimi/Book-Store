
function init() {
    getFromLocalStorage();
    renderBooks();
}

function renderBooks(){
    contentRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML += renderBooksTemplate(i);
        let heartRef = document.getElementById(`heart-like${i}`)

        if (books[i].liked == true) heartRef.classList.add("active");
        const commentRef = document.getElementById(`comments${i}`);
        commentRef.innerHTML = "";

            for (let j = 0; j < books[i].comments.length; j++) {
            commentRef.innerHTML += commentsTemplate(i, j);
            }
    }
    saveToLocalStorage();
}

function likeBook(heartRef, i){
    const likes = document.getElementById(`likes${i}`);

    if (books[i].liked == false){
        books[i].liked = true
        books[i].likes++;
        heartRef.classList.add("active");
    } else if(books[i].liked == true) {
        books[i].liked = false;
        heartRef.classList.remove("active");
        books[i].likes--;
    }

    likes.innerText = books[i].likes;
    saveToLocalStorage();
}


function getComments(i) {
    let inputRef = document.getElementById(`input-comment${i}`);
    let userNameComments = "";
    let newComment = {"name": "User","comment": inputRef.value}

    if (inputRef.value != "") {
        books[i].comments.push(newComment);
    }

    inputRef.value = "";
    saveToLocalStorage();
    renderBooks();
}

function addEnterComments(event, i) {
        if (event.key === "Enter") {
            event.preventDefault();
            getComments(i)
        }
}

