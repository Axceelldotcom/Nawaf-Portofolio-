// Scroll reveal animation
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Copy email button
document.getElementById("copyEmail").addEventListener("click", function () {
  const email = document.getElementById("emailText").innerText;
  navigator.clipboard.writeText(email);
  this.innerText = "Copied!";
  setTimeout(() => (this.innerText = "Copy Email"), 1500);
});

// Click animation for cards
const projectCards = document.querySelectorAll(".card");
projectCards.forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.97)";
    setTimeout(() => (card.style.transform = "scale(1)"), 150);
  });
});
