var numberOfquotesButtons = document.querySelectorAll(".quotes").length;
var currentlyPlayingAudio = null;
var quoteImage = document.getElementById("quoteImage");

for (var i = 0; i < numberOfquotesButtons; i++) {
  document
    .querySelectorAll(".quotes")
    [i].addEventListener("click", function () {
      var buttons = this.innerText;
      // Call the updateImage function to change the image
      updateImage(buttons);
      // passing the key
      playSound(buttons);
      buttonAnimation(buttons); // Add button animation
    });
}

document.addEventListener("keydown", function (e) {
  console.log(e);
  // Call the updateImage function to change the image
  updateImage(e.key);
  //call the playsound and use the event
  playSound(e.key);
  buttonAnimation(e.key); // Add button animation
});

function playSound(key) {
  if (currentlyPlayingAudio) {
    currentlyPlayingAudio.pause();
    currentlyPlayingAudio.currentTime = 0;
  }

  switch (key) {
    case "a":
      var quotesAudio1 = new Audio("Sounds/1.wav");
      quotesAudio1.play();
      currentlyPlayingAudio = quotesAudio1;
      break;
    case "s":
      var quotesAudio2 = new Audio("Sounds/2.wav");
      quotesAudio2.play();
      currentlyPlayingAudio = quotesAudio2;
      break;
    case "d":
      var quotesAudio3 = new Audio("Sounds/3.wav");
      quotesAudio3.play();
      currentlyPlayingAudio = quotesAudio3;
      break;
    case "f":
      var quotesAudio4 = new Audio("Sounds/4.wav");
      quotesAudio4.play();
      currentlyPlayingAudio = quotesAudio4;
      break;
    case "h":
      var quotesAudio5 = new Audio("Sounds/5.wav");
      quotesAudio5.play();
      currentlyPlayingAudio = quotesAudio5;
      break;
    case "j":
      var quotesAudio6 = new Audio("Sounds/6.wav");
      quotesAudio6.play();
      currentlyPlayingAudio = quotesAudio6;
      break;
    case "k":
      var quotesAudio7 = new Audio("Sounds/7.wav");
      quotesAudio7.play();
      currentlyPlayingAudio = quotesAudio7;
      break;
    case "l":
      var quotesAudio8 = new Audio("Sounds/8.wav");
      quotesAudio8.play();
      currentlyPlayingAudio = quotesAudio8;
      break;
    default:
      console.log(key);
      console.log(buttons);
      break;
  }
}
//   Button Animation starts
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  console.log(activeButton);

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
//   Button Animation ends

function updateImage(key) {
  var imageQuotePath = "Images/blue.jpg";
  // Determine the image path based on the key pressed
  switch (key) {
    case "a":
      imageQuotePath = "Images/fran-lebowitz-real-life-quote.jpg";
      break;
    case "s":
      imageQuotePath = "Images/kurt-vonnegut-high-school-quote.jpg";
      break;
    case "d":
      imageQuotePath = "Images/jim-carrey-every-great-man-quote.jpg";
      break;
    case "f":
      imageQuotePath = "Images/alice-walker-happiness-quote.jpg";
      break;
    case "h":
      imageQuotePath = "Images/abigail-van-buren-character-quote.jpg";
      break;
    case "j":
      imageQuotePath = "Images/bb-king-learning-quote.jpg";
      break;
    case "k":
      imageQuotePath = "Images/mark-twain-living-quote.jpg";
      break;
    case "l":
      imageQuotePath = "Images/nikki-giovanni-mistakes-quote.jpg";
      break;
    default:
      break;
  } // Update the src attribute of the image with the determined image path
  quoteImage.src = imageQuotePath;
}
