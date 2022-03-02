const url = 'https://api.adviceslip.com/advice';

function fetchApiData()
{
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var id_advice = document.getElementById('id-advice');
            var advice = document.getElementById('advice');

            id_advice.innerHTML = data.slip.id;
            advice.innerHTML = '"' + data.slip.advice + '"';
        })
        .catch(error => console.error(error))
}

fetchApiData();
