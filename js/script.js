const series = document.getElementsByClassName('owl-carousel')

/* Cada imagem de série que é tocada irá 
fazer parte da imagem, título e background da página
*/
for (let i = 0; i < series.length; i++) {
    series[i].onclick = (event) => {
        //Acessando tags utilizando o html DOM(DOM navigation)
        const imagem = document.body.firstElementChild.nextElementSibling.firstElementChild
        const titulo = document.body.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild
        const descricao = document.body.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling
        const getSerie = event.target.parentElement

        // html colactions = semelhante a arrays
        const altInfo = getSerie.getElementsByClassName('box-filme')
        const valueInfo = getSerie.getElementsByClassName('sinopse')
        const srcInfo = getSerie.getElementsByClassName('capa-filme')[0].getAttribute('src')

        // selecionando o atributo do elemento
        titulo.innerHTML = altInfo[0].alt
        descricao.innerHTML = valueInfo[0].innerHTML
        imagem.style.backgroundImage = `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),url(${srcInfo})`
    }
}

// ir para outra página do site quando clicar no botão
const botao = document.querySelector('.botao');
botao.onclick = () =>{
    window.location.assign("view/assista.html");
}
