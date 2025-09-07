function carregar() {
let msg = document.querySelector('div#msg')
let img = document.querySelector('img#imagem')
let data = new Date()
let hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'dia.redondo.png'
        msg.innerHTML +='<br> Bom Dia com muito café!'
        document.body.style.backgroundColor = '#ddb993'
    }   else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.redondo.png'
        msg.innerHTML +=' <br> Boa Tarde!'
        document.body.style.backgroundColor = '#c38339'
    }   else {
        img.src = 'noite.redondo.png'
        msg.innerHTML +='<br> Boa Noite. Gotham City!'
        document.body.style.backgroundColor = '#0d1d2bff'
    }
}