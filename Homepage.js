// Dynamically change the text when hovering over each image
const imageItems = document.querySelectorAll('.image-item');

imageItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const price = item.getAttribute('data-price');
    const location = item.getAttribute('data-location');
    
    // Get the price and location p elements
    const priceElement = item.querySelector('.price');
    const locationElement = document.getElementById('flight-location');  // Assuming you have a place to display the location info
  });
});

// Get references to elements
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');

// Example data to search
const availableItems = [
    "Kuala Lumpur",
    "Selangor",
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Malacca",
    "Negeri Sembilan",
    "Terengganu",
    "Sarawak",
    "Perak",
    "Perlis",
    "Sabah",
    "Labuan",
    "Labuan Island",
    "Pulau Pinang",
    "Penang",
    "Putrajaya",
    "Pahang",
    "Hotels",
    "Flights",
];

// Function to display search results
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();

  // Filter the data
  const results = availableItems.filter(item => 
      item.toLowerCase().includes(query)
  );

  // Display results
  if (results.length > 0) {
      alert(`Found: ${results.join(', ')}`);
  } else {
      alert("No results found. Try again!");
  }
});

// Function to show suggestions while typing
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  suggestionsList.innerHTML = ''; // Clear existing suggestions

  if (query) {
      const matches = availableItems.filter(item => 
          item.toLowerCase().startsWith(query)
      );

      // Populate the suggestion list
      matches.forEach(match => {
          const suggestionItem = document.createElement('li');
          suggestionItem.textContent = match;

          // Allow selecting a suggestion
          suggestionItem.addEventListener('click', () => {
              searchInput.value = match;
              suggestionsList.innerHTML = ''; // Clear suggestions
          });

          suggestionsList.appendChild(suggestionItem);
      });
  }
});