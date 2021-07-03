function clicar() {
    var nome = document.getElementById('nome').value
    var data = new Date()
    var anoatual = data.getFullYear()
    var btn = document.getElementById ('btn')
    var sexo = document.getElementsByName ('radsex')
    var ano = Number(document.getElementById ('ano').value)
    var res = document.getElementById('1')
    var idade = anoatual - ano
    var genero = ''
    var terminação = ''
    if (ano == 0 || ano > anoatual){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            terminação = 'o'
            if (idade < 12){
                //kid
                img.setAttribute('src','img/pivetin.png') 
            } else if (idade < 50){
                //homi
                img.setAttribute('src','img/homem.png')
            } else {
                //coroa
                img.setAttribute('src','img/coroa.png')
            }
        } else{
            genero = 'mulher'
            terminação =  'a'
            if (idade < 12){
                //kida
                img.setAttribute('src','img/pivetinha.png')
            } else if (idade < 50){
                //Mule
                img.setAttribute('src','img/mulher.png')
            } else {
                //a coroa
                img.setAttribute('src','img/acoroa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`<p>olá ${nome}, seu cadastro foi concluído com sucesso, seja bem vind${terminação}!</p>`
        res.appendChild(img) 
    }
} 