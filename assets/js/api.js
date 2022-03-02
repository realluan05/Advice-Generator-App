const url = 'https://api.adviceslip.com/advice';

function fetchApiData()
{
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var id = document.getElementById('id-advice');
            var desc = document.getElementById('desc-advice');

            id.innerHTML = data.slip.id;
            desc.innerHTML = '"' + data.slip.advice + '"';
        })
        .catch(error => console.error(error))
}
