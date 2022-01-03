


//FETCH API



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location =  search.value
    // console.log(location)

    message1.textContent = 'Loading ...'
    message2.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
            if(data.error) {
                message1.textContent = data.error
            } else {
                message2.textContent = `In ${data[0].location}. ${data[0].forecast}`
            }  
        })
    })
})