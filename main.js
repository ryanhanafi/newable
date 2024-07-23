onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function() {
        // Function to show the popup
        function showPopup() {
          const popupCard = document.getElementById('popup-card');
          popupCard.style.display = 'block';
        }
      
        // Function to close the popup
        function closePopup() {
          const popupCard = document.getElementById('popup-card');
          popupCard.style.display = 'none';
        }
      
        // Event listener for the close button
        document.getElementById('close-popup').addEventListener('click', closePopup);
      
        // Timeout to show popup after flowers are loaded
        setTimeout(showPopup, 4000); // Adjust the delay to match flower loading time
      });
      