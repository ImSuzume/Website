const video = document.getElementById("myVideo");
const notification = document.querySelector(".notification");

// Reset the video properties on page load
window.addEventListener("beforeunload", () => {
  // Reset the video to a clean state before the page is unloaded
  video.pause();
  video.currentTime = 0;
  video.loop = false;  // Disable looping before page reload
});

// Initially mute the video for autoplay (in HTML)
video.muted = true;

// Play the video immediately when the page loads (autoplay)
video.play();

// Unmute the video after a delay once the page loads (0.5 seconds)
window.addEventListener("load", () => {
  setTimeout(() => {
    video.muted = false; // Unmute the video after 0.5 seconds
  }, 500); // 500ms delay (0.5 seconds)
});

// Function to show the notification after video ends
function showNotification() {
  console.log("Showing notification...");
  notification.classList.remove("hidden");
  notification.classList.add("active");
}

// Function to close the notification and redirect
function closeNote() {
  console.log("Please wait...");
  notification.classList.remove("active");
  notification.classList.add("hidden");
  window.location.href = './Main/mainpage.html'; // Navigate to the next page
}

// Add event listener for when the video ends
video.addEventListener("ended", () => {
  video.addEventListener("ended", () => {
    console.log("Video ended!");
    
    // Reset the video and its settings for the next play
    video.currentTime = 0; // Reset to the start
    video.loop = false;    // Ensure loop is not active yet
    
    video.play(); // Play again once it ends
    
    // Show the notification after the video ends
    showNotification(); 
    
    // Enable looping after notification appears
    video.loop = true;
  });
  
});

