const controles = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// a cada elementro dentro dos controles
// o elemento vai escutar um click e definir que é o elemnto pai
// depois chama a função que realiza a soma ou subtração de peças
controles.forEach(element => {
    element.addEventListener("click", (event) => {

        const elementoPai = event.target.parentNode;
        const elementoPeca = elementoPai.querySelector("[data-contador]");

        relizaOperacao(elementoPai, event.target.dataset.controle);

        if(event.target.dataset.controle === "+"){
            atualizaEstatisticas(elementoPeca, event.target.dataset.peca, 'soma');
        }else{
            atualizaEstatisticas(elementoPeca, event.target.dataset.peca, 'subtrair');
        }
        
    })
});

function relizaOperacao(pai ,operacao){
    const peca = pai.querySelector("[data-contador]");
    if(operacao === '+'){
        if(parseInt(peca.value) < 8){
            peca.value = parseInt(peca.value) + 1;
        }
    }else if (operacao === '-'){
        if(parseInt(peca.value) > 0){
            peca.value = parseInt(peca.value) - 1;
        }
    }
}

function atualizaEstatisticas(elementoPeca, peca, calculo){
    const valorControlePeca = parseInt(elementoPeca.value);

    if(calculo === "soma" && valorControlePeca <= 8){
        estatisticas.forEach(element => {
            element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
        });
        
    }else if(calculo === "subtrair" && valorControlePeca >= 0){
        estatisticas.forEach(element => {
            element.textContent = parseInt(element.textContent) - pecas[peca][element.dataset.estatistica];
        });
    }
    
}

/// --------------------------------------------------------------------------------------- ///

const controleCores = document.querySelectorAll("[data-funcao]");
const robo = document.querySelector(".robo");
const bg = document.querySelector('body');
const cores = [
    'azul',
    'vermelho',
    'rosa',
    'preto',
    'amarelo',
    'branco'
];

controleCores.forEach(elemento => {
    elemento.addEventListener("click", (event) => {
        const funcao = elemento.dataset.funcao;
        const corAtual = document.querySelector("[data-cor]");

        alteraCor(funcao, corAtual, corAtual.dataset.cor);
        
    })
});


function alteraCor(funcao,  elementoCor, corAtual){
    console.log(corAtual);
    if(funcao === "proximo"){
        switch(corAtual){
            case "azul":
                elementoCor.dataset.cor = cores[1];
                elementoCor.classList.replace(corAtual, cores[1]);
                robo.setAttribute("src", "img/robotron-vermelho.png");
                bg.style.backgroundImage = "url(../img/fundo-vermelho.jpg)";
                break;
            case "vermelho":
                elementoCor.dataset.cor = cores[2];
                elementoCor.classList.replace(corAtual, cores[2]);
                robo.setAttribute("src", "img/robotron-rosa.png");
                bg.style.backgroundImage = "url(../img/fundo-lilas.jpg)";
                break;
            case "rosa":
                elementoCor.dataset.cor = cores[3];
                elementoCor.classList.replace(corAtual, cores[3]);
                robo.setAttribute("src", "img/robotron-preto.png");
                bg.style.backgroundImage = "url(../img/fundo-preto.jpg)";
                break;
            case "preto":
                elementoCor.dataset.cor = cores[4];
                elementoCor.classList.replace(corAtual, cores[4]);
                robo.setAttribute("src", "img/robotron-amarelo.png");
                bg.style.backgroundImage = "url(../img/fundo-amarelo.jpg)";
                break;
            case "amarelo":
                elementoCor.dataset.cor = cores[5];
                elementoCor.classList.replace(corAtual, cores[5]);
                robo.setAttribute("src", "img/robotron-branco.png");
                bg.style.backgroundImage = "url(../img/fundo-branco.jpg)";
                break;
            case "branco":
                elementoCor.dataset.cor = cores[0];
                elementoCor.classList.replace(corAtual, cores[0]);
                robo.setAttribute("src", "img/robotron-azul.png");
                bg.style.backgroundImage = "url(../img/fundo-azul.jpg)";
                break;
            default:
                elementoCor.dataset.cor = cores[1];
                elementoCor.classList.replace(corAtual, cores[1]);
                robo.setAttribute("src", "img/robotron-azul.png");
                bg.style.backgroundImage = "url(../img/fundo-azul.jpg)";
                
        }
    }else if (funcao === "anterior"){
        switch(corAtual){
            case "azul":
                elementoCor.dataset.cor = cores[5];
                elementoCor.classList.replace(corAtual, cores[5]);
                robo.setAttribute("src", "img/robotron-branco.png");
                bg.style.backgroundImage = "url(../img/fundo-branco.jpg)";
                break;
            case "vermelho":
                elementoCor.dataset.cor = cores[0];
                elementoCor.classList.replace(corAtual, cores[0]);
                robo.setAttribute("src", "img/robotron-azul.png");
                bg.style.backgroundImage = "url(../img/fundo-azul.jpg)";
                break;
            case "rosa":
                elementoCor.dataset.cor = cores[1];
                elementoCor.classList.replace(corAtual, cores[1]);
                robo.setAttribute("src", "img/robotron-vermelho.png");
                bg.style.backgroundImage = "url(../img/fundo-vermelho.jpg)";
                break;
            case "preto":
                elementoCor.dataset.cor = cores[2];
                elementoCor.classList.replace(corAtual, cores[2]);
                robo.setAttribute("src", "img/robotron-rosa.png");
                bg.style.backgroundImage = "url(../img/fundo-lilas.jpg)";
                break;
            case "amarelo":
                elementoCor.dataset.cor = cores[3];
                elementoCor.classList.replace(corAtual, cores[3]);
                robo.setAttribute("src", "img/robotron-preto.png");
                bg.style.backgroundImage = "url(../img/fundo-preto.jpg)";
                break;
            case "branco":
                elementoCor.dataset.cor = cores[4];
                elementoCor.classList.replace(corAtual, cores[4]);
                robo.setAttribute("src", "img/robotron-amarelo.png");
                bg.style.backgroundImage = "url(../img/fundo-amarelo.jpg)";
                break;
            default:
                elementoCor.dataset.cor = cores[1];
                elementoCor.classList.replace(corAtual, cores[1]);  
                robo.setAttribute("src", "img/robotron-azul.png");
                bg.style.backgroundImage = "url(../img/fundo-azul.jpg)"; 
        }
    }

}

