function renderBooksTemplate(i){
    return /*html*/`
        <article class="book" id="book${i}">
            <h2>${books[i].name}</h2>
            <div class="img">
                <img src="${books[i].image}" alt="${books[i].name}">
            </div>
            <section class="price_like">
                <p class="price">${books[i].price}</p>
                <div class="likes">${books[i].likes}
                    <img src="" alt="Herz Icon">
                </div>
            </section>
            <section class="Author">
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
                <div class="comments" id="Comments${i}"></div>
            </section>
        </article>
    `;
}