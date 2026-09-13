const claimbtn = document.querySelector("#claim-offer"); 

// claiming the offer when the button is clicked, then removing the listener so it only works once
function handleClaim() {
    alert("Offer claimed! Enjoy your free coffee!");
    claimbtn.removeEventListener("click", handleClaim);
}

claimbtn.addEventListener("click", handleClaim);

const searchInput = document.querySelector("#menu-search");
const resultElement = document.querySelector("#no-results");

// searching for available drinks and showing "no results" if none match
searchInput.addEventListener("input", function() {
    const searchValue = searchInput.value.toLowerCase();
    const menuItems = document.querySelectorAll(".menu-card");
    let foundMatch = false;

    menuItems.forEach(function(item) {
        const itemName = item.querySelector("h3").textContent.toLowerCase();
        if (itemName.includes(searchValue)) {
            item.style.display = "block";
            foundMatch = true;
        } else {
            item.style.display = "none";
        }
    });

    // We only need this check once, inside this single event listener
    if (!foundMatch && searchValue !== "") {
        resultElement.classList.remove("hidden");
    } else {
        resultElement.classList.add("hidden");
    }
});

const themeBtn = document.getElementById('theme-toggle');
// toggling the dark mode and changing the button's background and text color accordingly

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
    if (themeBtn.style.background === 'rgb(19, 14, 14)' || themeBtn.style.background === '#130e0e') {
            themeBtn.style.background = '#e0e0e0'; // Light background
            themeBtn.style.color = '#130e0e';       
        } else {
            // Otherwise, set it back to the normal dark style
            themeBtn.style.background = '#130e0e'; // Original dark background
            themeBtn.style.color = 'white';         // Original white icon color
        }
    });

// available drinks are displayed in a card format, and when a card is clicked, the hidden information about the drink is revealed
document.querySelectorAll(".menu-card").forEach((card) => {
  const details = card.querySelector(".hidden-info");
  if (!details) return;

  card.addEventListener("click", () => {
    const isOpen = details.classList.toggle("show");
    details.style.opacity = isOpen ? "1" : "0";
  });
});
// feedback form is validated to ensure that the user has entered a message before allowing submission
const feedbackmessage = document.querySelector("#feedback-text");
feedbackmessage.addEventListener("input", function() {
    const message = feedbackmessage.value.trim();
    const submitButton = document.querySelector("#submit-feedback");
    submitButton.disabled = message === "";
});
// the feedback form is submitted, and a thank you message is displayed to the user
const feedbackForm = document.querySelector("#feedback-form");
feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const feedback = feedbackmessage.value.trim();
    if (feedback !== "") {
        alert("Thank you for your feedback!");
        feedbackmessage.value = "";
        document.querySelector("#submit-feedback").disabled = true;
    }
});
// the info button toggles the visibility of the information section when clicked
const infobtn = document.querySelector("#info-button");
infobtn.addEventListener("click", function() {
    const infoSection = document.querySelector("#info-section");
    infoSection.classList.toggle("hidden");
});