
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemnu = document.getElementById("sidemenu");
function openmenu(){
    sidemnu.style.rigth = "0";
}

function closemenu(){
    sidemnu.style.rigth = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxG-ANE9xDC60n1d6QEdWSHbk5rup7Jd4PKnKDu1DVY7zuA_dPZGBdgz49K6uqvlG2LEw/exec://script.google.com/macros/s/AKfycbxG-ANE9xDC60n1d6QEdWSHbk5rup7Jd4PKnKDu1DVY7zuA_dPZGBdgz49K6uqvlG2LEw/exec.google.com/macros/s/AKfycbwNG1Jl-mO-y1rd-Q0NDyULSMsDQ4i-cOdd-eM3tIzGyq65V3FZLLzGfAsFFspZZBC1rg/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEvenListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(Response=> {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000
            )
            form.reset()
        })
        .catch(Error=> console.error('Error!',error.message))
})