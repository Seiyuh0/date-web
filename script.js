document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const followUp = document.getElementById('follow-up');
    const memeContainer = document.getElementById('meme-container');
    
    const memeGIFs = [
      'https://media1.tenor.com/m/JXIf0OJyVtQAAAAd/yellow-boy-sad-yellow-boy.gif', // Sad crying
      'https://media1.tenor.com/m/CP57RtDAMrwAAAAd/bee-honey-bee.gif', // NOOO
      'https://media.tenor.com/kdXxNPD43vIAAAAi/silly-cat-meme.gif', // Dramatic NO
      'https://media1.tenor.com/m/vxA3x6LvRTIAAAAC/sad.gif', // Facepalm
      'https://media1.tenor.com/m/OroVCOXbuUUAAAAd/sadhamstergirl.gif'  // Sigh
    ];
  
    // Function to show a random meme GIF
    const showRandomMeme = () => {
      // Create a new meme element
      const meme = document.createElement('img');
      meme.src = memeGIFs[Math.floor(Math.random() * memeGIFs.length)];
      meme.alt = 'Rejection Meme';
      meme.style.width = '150px';  // Set a normal size for the meme
      meme.style.height = 'auto';  // Maintain aspect ratio
      meme.style.marginTop = '20px';  // Add spacing between memes
      meme.style.display = 'block';  // Make the meme block-level to ensure it stacks
      document.body.appendChild(meme); // Append the meme directly to the body
      moveElementOutsideCenter(meme); // Position the meme outside the center area
    };
  
    // Function to move a button or meme outside the center
    const moveElementOutsideCenter = (element) => {
      const mainContentHeight = document.querySelector('.container').offsetHeight;
      const mainContentWidth = document.querySelector('.container').offsetWidth;
      const bodyWidth = window.innerWidth;
      const bodyHeight = window.innerHeight;
  
      let x, y;
  
      // Ensure elements are outside the center
      // Randomly place them to the left, right, top, or bottom (but not in the middle)
      if (Math.random() > 0.5) {
        x = Math.random() * (bodyWidth / 2 - 150); // Left side of the screen
      } else {
        x = Math.random() * (bodyWidth / 2 - 150) + (bodyWidth / 2); // Right side of the screen
      }
  
      if (Math.random() > 0.5) {
        y = Math.random() * (bodyHeight / 2 - 150); // Top side of the screen
      } else {
        y = Math.random() * (bodyHeight / 2 - 150) + (bodyHeight / 2); // Bottom side of the screen
      }
  
      element.style.position = 'absolute'; // Ensure it's positioned absolutely
      element.style.left = `${x}px`; // Random horizontal position
      element.style.top = `${y}px`; // Random vertical position
    };
  
    // Function to spawn a new No button
    const spawnNoButton = () => {
      const newNoButton = document.createElement('button');
      newNoButton.classList.add('no-btn');
      newNoButton.textContent = 'No';
      newNoButton.style.fontSize = '16px';  // Normal size for the No button
      newNoButton.style.padding = '10px 20px';  // Adjust padding for normal size
      document.body.appendChild(newNoButton); // Append directly to body
  
      moveElementOutsideCenter(newNoButton); // Position the No button outside the center
  
      // Add event listener to the new No button
      newNoButton.addEventListener('click', () => {
        showRandomMeme(); // Show a random meme when the new No button is clicked
        spawnNoButton(); // Spawn a new No button
        moveElementOutsideCenter(newNoButton); // Move the new No button outside the center
      });
    };
  
    // Add event listener to the original No button
    noButton.addEventListener('click', () => {
      showRandomMeme(); // Show a random meme
      spawnNoButton(); // Spawn a new No button
      moveElementOutsideCenter(noButton); // Move the original No button outside the center
    });
  
    // Event listener for the Yes button
    yesButton.addEventListener('click', () => {
      // Remove all No buttons and memes
      document.querySelectorAll('.no-btn').forEach(button => button.remove());
      memeContainer.classList.add('hidden'); // Hide the meme container
  
      // Remove all existing GIFs
      const memes = document.querySelectorAll('img');
      memes.forEach(meme => meme.remove());
  
      // Hide the original content (text and buttons)
      document.querySelector('h1').classList.add('hidden');
      document.querySelector('p').classList.add('hidden');
      yesButton.classList.add('hidden');
      noButton.classList.add('hidden');
  
      // Show the follow-up question
      followUp.classList.remove('hidden');
  
      // Create the dancing GIF element
      const dancingGIF = document.createElement('img');
      dancingGIF.src = 'https://media1.tenor.com/m/gotOLnyvy4YAAAAd/bubu-dancing-dance.gif';
      dancingGIF.alt = 'Dancing GIF';
      dancingGIF.style.width = '150px';  // Set normal size
      dancingGIF.style.height = 'auto';  // Maintain aspect ratio
      dancingGIF.style.marginBottom = '20px';  // Space between the GIF and text
      dancingGIF.style.display = 'block';  // Block display for centering
      dancingGIF.style.marginLeft = 'auto';  // Center horizontally
      dancingGIF.style.marginRight = 'auto'; // Center horizontally
  
      // Add the dancing GIF to the follow-up section
      followUp.insertBefore(dancingGIF, followUp.firstChild);  // Insert it above the text input
    });
  });
  