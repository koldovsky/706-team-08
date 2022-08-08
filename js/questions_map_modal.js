(function () {
    let map = L.map('map').setView([40.77310759751949, -73.79643619322091], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);
    let questions_modal = document.getElementById("main__questions_modal_window");
    let modal_link = document.getElementById("questions-modal-link");
    let questions_span = document.getElementsByClassName("main__questions_modal_close")[0];
    modal_link.onclick = function () {
        questions_modal.style.display = "block";
        setTimeout(function () {
            map.invalidateSize();
        }, 100);
    }
    questions_span.onclick = function () {
        questions_modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal_link) {
            event.preventDefault();
        }
        if (event.target == questions_modal) {
            questions_modal.style.display = "none";
        }
    }
})();