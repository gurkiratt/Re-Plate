$(document).ready(function() {
    const availableFoodItems = $("#availableFoodItems");

    // Get the donated foods from localStorage
    const donatedFoods = JSON.parse(localStorage.getItem('donatedFoods')) || [];

    donatedFoods.forEach(food => {
        const availableFoodItem = `
            <li>
                <h3>${food.name}</h3>
                <p><strong>Quantity:</strong> ${food.quantity}</p>
                <p><strong>Location:</strong> ${food.location}</p>
                <p><strong>NGO:</strong> ${food.ngo}</p>
            </li>
        `;
        availableFoodItems.append(availableFoodItem);
    });
});
