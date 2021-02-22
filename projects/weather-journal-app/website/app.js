/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const key = '48819b20cc01b2c872ac05750d77cb1b';
const localhost = 'http://localhost:8080';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// add click event listener to button
document.getElementById('generate').addEventListener('click', generateEntry);

// button click callback function, which uses user input and chains async calls to finally update the user interface
function generateEntry(e) {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getTemperature(zip)
        .then(function (data) {
            postData({ date: newDate, temp: data.main.temp, content: feelings })
                .then(function () {
                    updateUI()
                })
        });
}

// async function to fetch data from weather api for input zip code
const getTemperature = async (zip) => {
    const response = await fetch(baseUrl + '?zip=' + zip + '&appid=' + key);

    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
}

// async function to post data to local server
const postData = async (data = {}) => {
    const response = await fetch(localhost + '/postData', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}

// async function to fetch data from local server and update ui
const updateUI = async () => {
    const response = await fetch(localhost + '/all');

    try {
        const data = await response.json();
        document.getElementById('date').innerHTML = 'date: ' + data.date;
        document.getElementById('temp').innerHTML = 'temperature: ' + data.temp;
        document.getElementById('content').innerHTML = 'feelings: ' + data.content;
    } catch (error) {
        console.log('error', error);
    }
}