function setNumber () {
    let noLeidas = document.querySelectorAll('.unread');
    let notCounter = document.querySelector('.notificaciones');
    let yesCounter = document.querySelector('.notificaciones-read');
    notCounter.innerText = noLeidas.length;
    yesCounter.innerText = noLeidas.length;
    
   
    if (noLeidas.length === 0){
        notCounter.classList.remove('zero')
    } else {
        notCounter.classList.add('zero')
    } 

}

setNumber()
let notificaciones = document.querySelectorAll('.notif-card')

notificaciones.forEach(function(desactivar) {
    desactivar.addEventListener('click', function() {
        desactivar.classList.toggle('unread');
        setNumber()
    })          
})


let markAll = document.querySelector('.mark-all')
markAll.addEventListener('click', function() {
    notificaciones.forEach(function(card) {
        card.classList.remove('unread');
        setNumber()
    })
})