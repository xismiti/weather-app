import variables, { erro404, nome, search, weatherBox, weatherDetails } from './modules/variables'

import './assets/css/style.css';

search.addEventListener('click', () => {

    const APIKey = '08f03ea51287611aec367c0b824a48dd' ;
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;
    

    fetch(`http://api.openweathermap.org/data/2.5/weather${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404'){
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none'
                erro404.style.display ='block';
                erro404.classList.add('fadeIn')
                return;
            }
            erro404.style.display ='none';
            erro404.classList.remove('fadeIn')
            
        })

})
