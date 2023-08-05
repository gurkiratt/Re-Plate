$(document).ready(function() {
    $("#foodDonationForm").on("submit", function(event) {
        event.preventDefault();

        const location = $("#location").val();
        const ngo = $("#ngo").val();
        const foodName = $("#foodName").val();
        const quantity = $("#quantity").val();

        const donatedFood = {
            name: foodName,
            quantity: quantity,
            location: location,
            ngo: ngo
        };

        // Get the existing donated foods from localStorage or initialize an empty array
        const donatedFoods = JSON.parse(localStorage.getItem('donatedFoods')) || [];

        // Add the new donated food to the array
        donatedFoods.push(donatedFood);

        // Save the updated donated foods array back to localStorage
        localStorage.setItem('donatedFoods', JSON.stringify(donatedFoods));

        // Redirect to the Available Food page
        window.location.href = "available-food.html";
    });
});
