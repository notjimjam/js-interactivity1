console.log("hello world")

const message = document.querySelector('#message')

function addMovie (event) {
    event.preventDefault()

    const  inputField = document.querySelector('input')
    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector('ul')
    list.appendChild(movie)
    
    inputField.value = ''    
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
    revealMessage()
}

document.querySelector('form').addEventListener('submit', addMovie)

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent= `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')

    setTimeout(function() {
        message.classList.add('hide')
    }, 1000)
    
}
