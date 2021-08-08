//console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/weather?address=35394').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})


// const getElement = function () {
//     var n =document.getElementById("Currancy1").value;
//     document.getElementById("Currancy2").value = n+'hi';
// }