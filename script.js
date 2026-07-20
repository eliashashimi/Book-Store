function renderBooks(i){
    contentRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML += renderBooksTemplate(i);
    
        const commentRef = document.getElementById(`Comments${i}`);
        commentRef.innerHTML = "";

            for (let j = books[i].comments.length; j < 0; j++) {
            commentRef.innerHTML += commentsTemplate(i, j);
            }
    }
}
