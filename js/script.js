const series = document.getElementsByClassName('owl-carousel')
const imagem = document.body.firstElementChild.nextElementSibling.firstElementChild
imagem.style.backgroundImage = `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),url("img/tec.jpg")`
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

        // html collections = semelhante a arrays
        const altInfo = getSerie.getElementsByClassName('box-filme')
        const valueInfo = getSerie.getElementsByClassName('sinopse')
        const srcInfo = getSerie.getElementsByClassName('capa-filme')[0].getAttribute('src')

        // selecionando o atributo do elemento
        titulo.innerHTML = altInfo[0].alt
        descricao.innerHTML = valueInfo[0].innerHTML
        imagem.style.backgroundImage = `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),url(${srcInfo})`
    }
}

let btnMenu = document.querySelector('.btn-menu');
let nav = document.querySelector('.nav-mobile');
btnMenu.onclick = ()=> {
    if(nav.style.display != "contents"){
        nav.style.display = "contents";
    }else {
        nav.style.display = "none";
    }
}