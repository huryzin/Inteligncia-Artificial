const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");

const pergunta1 = [
    {
        enunciado: "1. Qual é o principal fator contribuinte para o aumento das temperaturas globais e as mudanças climáticas?",
        alternativas: [
            "a) A emissão excessiva de gases de efeito estufa, como dióxido de carbono (CO2), metano (CH4) e óxido nitroso (N2O), principalmente pela queima de combustíveis fósseis e desmatamento indiscriminado.",
            "b) A erosão do solo causada pelo desgaste das atividades agrícolas e urbanização descontrolada, que reduzem a capacidade da Terra de absorver CO2.",
            "c) A exploração excessiva de recursos naturais, como a extração de minérios e a exploração madeireira, que diminui a biodiversidade e prejudica os ecossistemas, levando a desequilíbrios climáticos."
        ]
    },
    {
        enunciado: "2. Quais das opções abaixo são consideradas fontes de energia renovável, contribuindo para a redução da dependência de combustíveis fósseis e a mitigação das mudanças climáticas?",
        alternativas: [
            "a) Energia nuclear, gerada a partir da fissão de átomos de urânio ou plutônio, uma fonte de energia controversa devido aos riscos associados à produção de resíduos nucleares e acidentes nucleares.",
            "b) Energia hidrelétrica, derivada da energia cinética da água em movimento, capturada por meio de barragens ou turbinas instaladas em rios e quedas d'água.",
            "c) Energia solar, obtida através da captura da luz do sol por meio de painéis fotovoltaicos ou coletores solares térmicos."
        ]
    },
    {
        enunciado: "3. Quais são os principais benefícios ambientais da adoção generalizada de práticas de reciclagem?",
        alternativas: [
            "a) Conservação de recursos naturais não renováveis, como minérios e petróleo, uma vez que materiais reciclados podem ser reutilizados na produção, reduzindo a necessidade de extrair matéria-prima virgem.",
            "b) Redução da quantidade de resíduos destinados a aterros sanitários, diminuindo a contaminação do solo, água subterrânea e atmosfera por substâncias tóxicas.",
            "c) Estímulo à economia circular, na qual produtos e materiais são reutilizados e reciclados continuamente, diminuindo a demanda por novas matérias-primas e reduzindo o impacto ambiental associado à produção e descarte."
        ]
    }

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();   