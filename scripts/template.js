

function renderBooksTemplate(i){
    return /*html*/`
        <article class="book" id="book${i}">
            <h2>${books[i].name}</h2>
            <div class="img">
                <img src="${books[i].image}" alt="${books[i].name}">
            </div>
            <section class="price_like">
                <p class="price">${books[i].price}</p>
                <div class="likes">
                <p id="likes${i}">${books[i].likes}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        onclick="likeBook(this, ${i})" class="heart-like" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" 
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                </div>
            </section>
            <section class="author">
                <table>
                    <tr>
                        <th>Author</th>
                        <td>${books[i].author}</td>
                    </tr>
                    <tr>
                        <th>Erscheinungsjahr</th>
                        <td>${books[i].publishedYear}</td>
                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td>${books[i].genre}</td>
                    </tr>
                </table>
            </section>
            <section class="book_comments">
                <h3>Kommentare:</h3>
                <div class="comments" id="comments${i}">
                </div>
                <div class= inpField>
                    <input id="input-comment${i}" type="text" placeholder="Kommentiere">
                    <button class="button" onclick="getComments(${i})"><img src="" alt=""></button>
                </div>
            </section>
        </article>
    `;
}

function commentsTemplate(i, j){
    return /*html*/`
        <div class="comments">
            <p class="userNameComments">${books[i].comments[j].name}</p>
            <p class="bookComments">${books[i].comments[j].comment}</p>
        </div>
    `;
}

