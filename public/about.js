/*function displayPicture() {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://emojihub.yurace.pro/api/random`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');
        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
  
        // Assuming the API response has an "id" property in the root object
        const imgUrl = `https://emojihub.yurace.pro/id/${data.id}/${width}/${height}`;
  
        // Alternative: Check for the expected structure and handle errors
        if (Array.isArray(data) && data[0] && data[0].id) {
          const imgUrl = `https://emojihub.yurace.pro/id/${data[0].id}/${width}/${height}`;
          // ... proceed with creating the image element
        } else {
          console.error("Unexpected API response format");
        }
  
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', imgUrl);
        containerEl.appendChild(imgEl);
      })
      .catch((error) => console.error("Error fetching emoji:", error)); // Handle fetch errors
  }
  
  displayPicture();*/


  /*function displayQuote(data) {
    fetch('https://api.quotable.io/tag=Budget[money]')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }
displayQuote()*/


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
  /*function displayPicture() {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');
  
        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
  
        const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', imgUrl);
        containerEl.appendChild(imgEl);
      });
  }
  displayPicture();*/