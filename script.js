console.log(books)

const rootElement = document.querySelector("#root")

books.forEach((book, index) => rootElement.insertAdjacentHTML("beforeend", `
	<div class="book">
		<h3 class="auther">${book.sub}<h3>
		<h2 class="title">${book.title}<h2>
		<p class="text">${book.text}</p>
		<div class="number">${index + 1} </div>
        <button class="readMore">read more</button>
	</div>
`))