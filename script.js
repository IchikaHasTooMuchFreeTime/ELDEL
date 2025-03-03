
let player;


function onYouTubeIframeAPIReady() {
  player = new YT.Player('audioPlayer', {
    events: {
      'onReady': onPlayerReady,
    },
  });
}


function onPlayerReady(event) {
  event.target.playVideo();
}


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


let noButtonClickCount = 0;


document.getElementById('yesButton').addEventListener('click', function () {
  document.querySelector('.landing-screen').classList.add('d-none');
  document.getElementById('confirmationMessage').classList.remove('d-none');

  if (player && player.playVideo) {
    player.playVideo();
  }


  confetti({
    particleCount: 150, 
    spread: 70, 
    origin: { y: 0.6 }, 
  });


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

document.getElementById('noButton').addEventListener('click', function () {

  const randomMessage = noButtonMessages[noButtonClickCount % noButtonMessages.length];
  alert(randomMessage);


  noButtonClickCount++;


  if (noButtonClickCount === 5) {
    window.location.href = "https://www.youtube.com/watch?v=aw-uFeZ4mzI&rco=1"; 
  }
});


const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
