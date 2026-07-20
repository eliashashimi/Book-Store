function renderBooksTemplate(i){
    return /*html*/`
        <article class="book">
            <h2>${books[index].name}</h2>
            <div class="img">
                <img src="${books[index].image}" alt="${books[index].name}">
            </div>
            <section class="price_like">
                <p class="price">${books[index].price}</p>
                <div class="likes">${books[index].likes}
                    <img src="" alt="Herz Icon">
                </div>
            </section>
            <section class="Author">
                <table>
                    <tr>
                        <th>Author</th>
                        <td>${books[index].author}</td>
                    </tr>
                    <tr>
                        <th>Erscheinungsjahr</th>
                        <td>${books[index].publishedYear}</td>
                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td>${books[index].genre}</td>
                    </tr>
                </table>
            </section>
            <section class="book_comments">
                <h3>Kommentare:</h3>
                <div class="comments" id="Comments${index}"></div>
            </section>
        </article>
    `
}