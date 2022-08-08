(function () {
    const form = document.querySelector(".main__questions-form");
    function handleSubmit(event) {
        const status = document.querySelector(".questions-form-status");
        let dateSelected = document.forms["main__questions-form"]["user-date"].value;
        if (Date.parse(dateSelected) <= Date.now()) {
            event.preventDefault();
            status.innerHTML = "Please choose date starting from tomorrow";
            return;
        }
        let numberInputed = document.forms["main__questions-form"]["user-phone"].value;
        if ((Number(numberInputed) != parseInt("0" + numberInputed)) || numberInputed.length < 10) {

            event.preventDefault();
            status.innerHTML = "Please input phone number <br> (in format xxxxxxxxxx)";
            return;
        }
        if (!form.checkValidity()) return;
        event.preventDefault();
        fetch("https://formspree.io/f/xlevrrop", {
            method: "POST",
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    document.querySelector('.questions-button-submit').addEventListener("click", handleSubmit);
})();