console.log("Uwu")
// fetch('data.php') 
//     .then(response=>response.json())
//     .then(data=>console.log(data))
fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(data => console.log(data))