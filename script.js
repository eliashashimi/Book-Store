function renderBooks(i){
    const contentRef = document.getElementById('main-content');
    contentRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML += renderBooksTemplate(i);
    }
}

//  renderBooks();