/* =========================================================
   ELEMENTS
========================================================= */

const envelope =
    document.getElementById("envelope");

const envelopeScreen =
    document.getElementById("envelopeScreen");

const mainContent =
    document.getElementById("mainContent");

const revealButton =
    document.getElementById("revealButton");

const finalMessage =
    document.getElementById("finalMessage");


let envelopeOpened = false;



/* =========================================================
   OPEN ENVELOPE
========================================================= */

envelope.addEventListener("click", function () {

    if (envelopeOpened) return;

    envelopeOpened = true;


    /* Open flap */

    envelope.classList.add("open");


    /*
       Give the envelope time to open
       before changing screens.
    */

    setTimeout(() => {

        envelopeScreen.style.transition =
            "opacity 1.2s ease";

        envelopeScreen.style.opacity = "0";

    }, 1700);


    setTimeout(() => {

        envelopeScreen.style.display =
            "none";

        mainContent.classList.remove(
            "hidden"
        );


        window.scrollTo({

            top: 0,

            behavior: "instant"

        });

    }, 2900);

});



/* =========================================================
   FINAL MESSAGE
========================================================= */

revealButton.addEventListener(
    "click",
    function () {

        finalMessage.classList.add(
            "show"
        );


        revealButton.style.display =
            "none";


        /*
           Scroll slightly so the newly
           revealed message is visible.
        */

        setTimeout(() => {

            finalMessage.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }, 200);

    }
);
