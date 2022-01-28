const series = document.getElementsByClassName('owl-carousel')

for (let i = 0; i < series.length; i++) {
    series[i].onclick = (event) => {
        const imagem = document.body.firstElementChild.nextElementSibling.firstElementChild
        const titulo = document.body.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild
        const descricao = document.body.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling
        const getSerie = event.target.parentElement

        const altInfo = getSerie.getElementsByClassName('box-filme')
        const srcInfo = getSerie.getElementsByClassName('capa-filme')[0].getAttribute('src')

        titulo.innerHTML = altInfo[0].alt
        descricao.innerHTML = altInfo[0].alt
        imagem.style.backgroundImage = `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),url(${srcInfo})`
    }
}
