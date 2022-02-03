
function acceptRequest(){
    var toddE = document.querySelector('#toddE')
    toddE.remove();
}

function closeRequest(){
    toddE.remove();
}

function acceptRequest2(){
    var philK = document.querySelector('#philK')
    philK.remove();
}
function closeRequest2(){
    var philK = document.querySelector('#philK')
    philK.remove();
}

// var counter = 2
// var counterElement= document.querySelector('#counter')

function subtractFromCR(){
    document.querySelector('#counter').innerText--;
}

function switchName(){
    var profileName = document.querySelector('#profileName')
    profileName.innerText = "Matty Noth"
}