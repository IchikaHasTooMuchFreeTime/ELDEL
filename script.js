let player;

// YouTube API callback function
function onYouTubeIframeAPIReady() {
  player = new YT.Player('audioPlayer', {
    height: '0', // Hide the player visually
    width: '0',
    videoId: 'QJO3ROT-A4E', // YouTube video ID
    playerVars: {
      autoplay: 0, // Don't autoplay initially
      start: 34, // Start the video at 34 seconds
      controls: 0, // Hide controls
      modestbranding: 1, // Hide YouTube logo
      rel: 0, // Don't show related videos at the end
    },
    events: {
      'onReady': onPlayerReady, // Trigger when the player is ready
    },
  });
}

// Function to handle when the player is ready
function onPlayerReady(event) {
  // You can add additional logic here if needed
}

// Array of messages for the "NO!" button
const noButtonMessages = [
  "Are you sure? 🥺",
  "Pretty please? 💖",
  "I'll give you cookies! 🍪",
  "Think about it again! 🤔",
  "You're breaking my heart! 💔",
  "Just say yes! 😭",
  "I'll be really sad... 😢",
  "I'll make you pancakes! 🥞",
  "You're my only hope! 🌟",
  "I'll write you a poem! 📜",
];

let noButtonClickCount = 0; // Counter for "NO!" button clicks

// Event listener for the "Yes!" button
document.getElementById('yesButton').addEventListener('click', function () {
  // Hide the landing screen
  document.querySelector('.landing-screen').classList.add('d-none');
  // Show the confirmation message
  document.getElementById('confirmationMessage').classList.remove('d-none');

  // Play the YouTube video starting at 34 seconds
  if (player && player.playVideo) {
    player.playVideo();
  }

  // Trigger confetti animation
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Additional confetti effects after a delay
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  }, 250);
});

// Event listener for the "NO!" button
document.getElementById('noButton').addEventListener('click', function () {
  // Show a random message from the noButtonMessages array
  const randomMessage = noButtonMessages[noButtonClickCount % noButtonMessages.length];
  alert(randomMessage);

  // Increment the click counter
  noButtonClickCount++;

  // Redirect to a specific YouTube video after 5 clicks
  if (noButtonClickCount === 5) {
    window.location.href = "https://www.youtube.com/watch?v=aw-uFeZ4mzI&rco=1";
  }
});

// Load the YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
