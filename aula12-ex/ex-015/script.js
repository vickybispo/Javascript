function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 22
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}hras.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA! 
    img.src = 'manha.jpg'
    document.body.style.background = '#CD853F'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
    img.src = 'tarde.jpg'
    document.body.style.background = '#FFA07A'
    } else {
        //BOA NOITE!
    img.src = 'noite.jpg'
    document.body.style.background = '#2F4F4F'
    }
}

