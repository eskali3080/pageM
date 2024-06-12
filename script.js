document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("siButton");
    const noButton = document.getElementById("noButton");

    siButton.addEventListener("click", function() {
        Swal.fire({
            title: "Sabia que dirías que si",
            text: "<3",
          });
    });

    noButton.addEventListener("mouseover", moveButton);
    noButton.addEventListener("touchstart", moveButton);

    function moveButton() {
        const wrapper = document.querySelector(".wrapper");
        const maxX = wrapper.clientWidth - noButton.offsetWidth;
        const maxY = wrapper.clientHeight - noButton.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    }
    });
    
