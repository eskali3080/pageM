document.addEventListener("DOMContentLoaded", function () {
    const siButton = document.getElementById("siButton");
    const noButton = document.getElementById("noButton");
    const indexNoButton = document.getElementById("indexNoButton");
    const indexSiButton = document.getElementById("indexSiButton");


    siButton.addEventListener("click", function () {
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

function confirmAction() {
    Swal.fire({
        title: '¿Estás segura?',
        text: '¿Segura, Segura, Segura?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡QUE SI!',
        cancelButtonText: 'NO'
    }).then((result) => {
        if (result.isConfirmed) {

            Swal.fire({
                title: 'Valeeeeeeeeee',
            }).then(() => {

                window.location.href = 'propuesta.html';
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {

            Swal.fire({
                title: '¿Como que no?',
                text: 'Aun asi te la voy a mostrar',
            }).then(() => {

                window.location.href = 'propuesta.html';
            });
        }
    });
}

function confirmAction1() {
    Swal.fire({
        title: '¿Como que no?',
        text: 'Aun asi te la voy a mostrar',
    }).then(() => {

        window.location.href = 'propuesta.html';
    });

};