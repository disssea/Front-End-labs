
function fetchRandomUsers(count = 5) {
    fetch(`https://randomuser.me/api/?results=${count}`)
        .then(response => {
            // Перевіряємо, чи відповідь успішна
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Перетворюємо відповідь у формат JSON
        })
        .then(data => {
            
            const users = data.results;
            
            users.forEach(user => {
                const picture = user.picture.large;
                const name = `${user.name.first} ${user.name.last}`;
                const city = user.location.city;
                const postcode = user.location.postcode;
                const phone = user.phone;

                displayUser({ picture, name, city, postcode, phone });
            });
        })
        .catch(error => {
            
            console.error('Error fetching user data:', error);
        });
}


function displayUser({ picture, name, city, postcode, phone }) {
    const container = document.getElementById('user-container');

   
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
        <img src="${picture}" alt="User Picture">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Postcode:</strong> ${postcode}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;

   
    container.appendChild(userCard);
}


document.getElementById('load-users').addEventListener('click', () => fetchRandomUsers(5)); // Отримати 5 користувачів
