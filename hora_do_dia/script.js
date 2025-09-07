function carregar() {
var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = '../imagens/dia.redondo.png'
        msg.innerHTML +='<br> Bom Dia com muito cafézin!'
        document.body.style.backgroundColor = '#ddb993'
    }   else if (hora >= 12 && hora < 18) {
        img.src = '../imagens/tarde.redondo.png'
        msg.innerHTML +=' <br> Boa Tarde!'
        document.body.style.backgroundColor = '#c38339'
    }   else {
        img.src = '../imagens/noite.redondo.png'
        msg.innerHTML +='<br> Boa Noite. Gotham City!'
        document.body.style.backgroundColor = '#0d1d2bff'
    }
}