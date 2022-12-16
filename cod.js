function setNumber() {
    let noLeidas = document.querySelectorAll('.unread');
    let leidas = document.querySelectorAll('.read')
    let notCounter = document.querySelector('.notificaciones');
    let yesCount = document.querySelector('.notificaciones-read');

     notCounter.innerHTML = noLeidas.length;
     yesCount.innerHTML = leidas.length;

  
    if (notCounter.innerHTML === '0') {
        notCounter.classList.add("zero")
    } else {
        notCounter.classList.remove("zero")
    }

    if (notCounter.innerHTML <= '3') {
        notCounter.classList.add("green")
    } else  {
        notCounter.classList.remove("green")
    }

    if (yesCount.innerHTML === '0') {
        yesCount.classList.add("one")
    } else  {
        yesCount.classList.remove("one")
    }



    if (yesCount.innerHTML <= '3') {
        yesCount.classList.add("red")
    } else  {
        yesCount.classList.remove("red")
    }
        

    
}

    setNumber()
    let notificaciones = document.querySelectorAll('.notif-card')



    notificaciones.forEach(function (desactivar) {
        desactivar.addEventListener('click', function () {
            desactivar.classList.toggle('unread');
            setNumber()
        })
    })

    notificaciones.forEach(function (activar) {
        activar.addEventListener('click', function () {
            activar.classList.toggle('read');
            setNumber()
        })
    })



    let markAll = document.querySelector('.mark-all')
    markAll.addEventListener('click', function () {
        notificaciones.forEach(function (card) {
            card.classList.remove('unread');
            setNumber()
        })
    })

    markAll.addEventListener('click', function () {
        notificaciones.forEach(function (card) {
            card.classList.add('read');
            setNumber()
        })
    })

