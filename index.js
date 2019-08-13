const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit',fetchSpace);

function fetchSpace(event) {
    event.preventDefault();
    fetch(baseURL)
        .then(result => {
            // console.log(result);
            return result.json(); // jsonifying results so you can read it
        })
        .then(json => {
            // console.log(json);
            displayRockets(json);
        })

}

function displayRockets(data) {
    console.log('Results', data);

    let rockets = data.forEach(element =>{
        // console.log(element);
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');
        
        rocketName.innerText = element.name;
        rocketCost.innerText = element.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })

}

// NOTES
//----------------------------------------------
// result is the parameter of the callback function
// console.log doesn't give enough info, so you have to do json()

// fetch returns a promise, a promise is something that can either be resolved or rejected. To access the promise, you can use .then which is a promise resolver. You fetch data from the baseURL, that returns the promise, that is wrapped in a promise body and then wrap in it in a callback function 