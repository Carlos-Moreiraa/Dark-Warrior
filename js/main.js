const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const atributos = {
    "forca": {
        "forca": 29,
        "poder": 3,
        "energia": 10,
        "velocidade": -5
    },

    "magia": {
        "forca": -5,
        "poder": 39,
        "energia": 1,
        "velocidade": 10
    },
    "resistencia":{
        "forca": 0,
        "poder": 0,
        "energia": 48,
        "velocidade": 11
    },
    "agilidade":{
        "forca": 3,
        "poder": 0,
        "energia": 32,
        "velocidade": 42
    }    
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulandoDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.atributo)
    })
})
function manipulandoDados(operacao, controle){
    const atributo = controle.querySelector("[data-contador]")
    if(operacao === "-"){
        atributo.value = parseInt(atributo.value) - 1
    }
    else{
        atributo.value = parseInt(atributo.value) + 1
    }
}
function atualizaEstatisticas(atributo){

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + atributos[atributo][elemento.dataset.estatistica]
    })
}