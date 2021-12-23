function setImage(val) {
    for (let i = 0; i < 7; i++) {
        document.getElementById(`codequestion${i}`).className = "display-none";
        document.getElementById(`btn${i}`).className = "btn";
    }
    document.getElementById(`codequestion${val}`).className = "display-block imgtoq"
    document.getElementById(`btn${val}`).className = "btn active"
}


//Get the button:
mybutton = document.getElementById("myBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.scrollTo({ top: 0, left: 0, behavior: "smooth" });