// PASSWORD GATE
const passwordInput = document.getElementById("password-input");
const passwordBtn = document.getElementById("password-btn");
const passwordError = document.getElementById("password-error");
const passwordScreen = document.getElementById("password-screen");
const mainContent = document.getElementById("main-content");

const correctPassword = "bu";

passwordBtn.addEventListener("click", () => {
  if(passwordInput.value === correctPassword){
    passwordScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
    startCakeCountdown();

    // 🎉 CONFETTI LEFT
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 60,
      origin: { x: 0 }
    });

    // 🎉 CONFETTI RIGHT
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 60,
      origin: { x: 1 }
    });

    // 🎉 EXTRA BURST (optional)
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 1.1 }
      });
    }, 600);

  } else {
    passwordError.textContent = "Incorrect password! Try again 🎈";
  }
});


// CAKE COUNTDOWN
const countdownDiv = document.getElementById("countdown");
const cakeSection = document.getElementById("cake-section");

function startCakeCountdown(){
  let count = 3;
  const interval = setInterval(() => {
    countdownDiv.textContent = count;
    count--;
    if(count < 0){
      clearInterval(interval);
      countdownDiv.textContent = "";
      cakeSection.classList.add("hidden");
      showBalloons();
    }
  }, 1000);
}

// BALLOONS
const balloonSection = document.getElementById("balloon-section");
const balloons = document.querySelectorAll(".balloon");
const balloonMessage = document.getElementById("balloon-message");
const messages = ["HAPPY", "birthday", "dear", "OXY"];
let popped = 0;

function showBalloons(){
  balloonSection.classList.remove("hidden");
  balloons.forEach((balloon, index) => {
    balloon.addEventListener("click", () => {
      balloon.style.visibility = "hidden";
      balloonMessage.textContent += messages[index] + " ";
      popped++;
      if(popped === balloons.length){
        setTimeout(() => {
          balloonSection.classList.add("hidden");
          showCard();
        }, 1000);
      }
    });
  });
}

// CARD
const cardSection = document.getElementById("card-section");
const nextPhaseBtn = document.getElementById("next-phase-btn");

function showCard(){
  cardSection.classList.remove("hidden");
}

nextPhaseBtn.addEventListener("click", () => {
  cardSection.classList.add("hidden");
  showSingAlong();
});

// SING-ALONG
const singAlongSection = document.getElementById("sing-along-section");
const song = document.getElementById("song");
const againBtn = document.getElementById("again-btn");

function showSingAlong(){
  singAlongSection.classList.remove("hidden");
  song.play();
}

againBtn.addEventListener("click", () => {
  song.currentTime = 0;
  song.play();
});

// SLIDESHOW
const slideshowSection = document.getElementById("slideshow-section");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function startSlideshow(){
  slideshowSection.classList.remove("hidden");
  slides.forEach(s => s.classList.add("hidden"));
  slides[slideIndex].classList.remove("hidden");
  setInterval(() => {
    slides[slideIndex].classList.add("hidden");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.remove("hidden");
  }, 3000);
}

// Automatically start slideshow after sing-along ends
song.addEventListener("ended", () => {
  singAlongSection.classList.add("hidden");
  startSlideshow();
});
// After password success → cake phase
document.body.classList.remove("phase-balloons", "phase-card", "phase-sing");
document.body.classList.add("phase-cake");

// When balloons appear
document.body.classList.remove("phase-cake", "phase-card", "phase-sing");
document.body.classList.add("phase-balloons");

// When card shows
document.body.classList.remove("phase-cake", "phase-balloons", "phase-sing");
document.body.classList.add("phase-card");

// When sing-along shows
document.body.classList.remove("phase-cake", "phase-balloons", "phase-card");
document.body.classList.add("phase-sing");

