fetch(`https://emojihub.yurace.pro/api/random`)
  .then((response) => response.json())
  .then((data) => {
    const containerEl = document.querySelector('#picture');
    const width = containerEl.offsetWidth;
    const height = containerEl.offsetHeight;
    const imgEl = document.createElement('img');
    const imgUrl = data.url; // Assuming the API returns the emoji URL in a property named 'url'
    imgEl.setAttribute('src', imgUrl);
    containerEl.appendChild(imgEl);
});


function displayPicture() {
  fetch('https://picsum.photos/v2/list?page=1&limit=1000') // Fetching metadata for 1000 images
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length); // Generating a random index
      const randomImage = data[randomIndex]; // Selecting a random image from the fetched data

      const containerEl = document.querySelector('#picture');
      const imgEl = document.createElement('img');
      
      // Set the source of the image
      imgEl.src = randomImage.download_url; // Assuming 'download_url' contains the URL of the image
      imgEl.alt = 'Random Image'; // Adding alternative text for accessibility

      containerEl.innerHTML = ''; // Clear previous image if any
      containerEl.appendChild(imgEl); // Append the image element to the container
    })
    .catch((error) => {
      console.error('Error fetching picture:', error);
    });
}

displayPicture();