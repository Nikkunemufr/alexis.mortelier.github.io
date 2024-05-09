let fr_select = document.getElementById("fr-select")
let en_select = document.getElementById("en-select")

fr_select.addEventListener('click', function () {
    let uk_lang = document.querySelectorAll(".lang-en");
    for (let i = 0; i < uk_lang.length; i++) {
        uk_lang[i].style.display = "none";
    }

    let fr_lang = document.querySelectorAll(".lang-fr");
    for (let i = 0; i < fr_lang.length; i++) {
        fr_lang[i].style.display = "block";
    }
})

en_select.addEventListener('click', function () {
    let fr_lang = document.querySelectorAll(".lang-fr");
    for (let i = 0; i < fr_lang.length; i++) {
        fr_lang[i].style.display = "none";
    }

    let uk_lang = document.querySelectorAll(".lang-en");
    for (let i = 0; i < uk_lang.length; i++) {
        uk_lang[i].style.display = "block";
    }
})
