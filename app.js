const image = document.getElementById('image');
const button = document.getElementById('button');
button.addEventListener('click', () => {
    fetch("https://yesno.wtf/api%22")
        .then(response => response.text())
        .then(data => {
            console.log(data)
            const parsedData = JSON.parse(data);
            image.src = parsedData.image;
            button.innerText = parsedData.answer;
        });
});