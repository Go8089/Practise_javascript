const statusText = document.getElementById("status");
const btn = document.getElementById("goBtn");

// 🔹 Function to update network status
function updateStatus() {
  if (navigator.onLine) {
    statusText.innerText = " Online";
    statusText.style.color = "brown";
  } else {
    statusText.innerText = " Offline";
    statusText.style.color = "red";
  }
}

updateStatus();

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

btn.addEventListener("click", () => {
  if (navigator.onLine) {
    alert("Redirecting to dashboard...");
    
    // BOM redirect
    location.href = "dashboard.html";
  } else {
    alert("No internet!");
  }
});
console.log(screen.width,screen.height);