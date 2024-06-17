const caixaPrincipal = document.querySelector(".caixa-principal ");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.queryselector(".caixa-resultado");
const textoResultado = document.queryselector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "1. Qual é o principal fator contribuinte para o aumento das temperaturas globais e as mudanças climáticas?",
        alternativas: [
            "a) .A emissão excessiva de gases de efeito estufa, como dióxido de carbono (CO2), metano (CH4) e óxido nitroso (N2O), principalmente pela queima de combustíveis fósseis e desmatamento indiscriminado.",
            "b) A erosão do solo causada pelo desgaste das atividades agrícolas e urbanização descontrolada, que reduzem a capacidade da Terra de absorver CO2.",
            "c) A exploração excessiva de recursos naturais, como a extração de minérios e a exploração madeireira, que diminui a biodiversidade e prejudica os ecossistemas, levando a desequilíbrios climáticos.",
        ]
    },
    {
        enunciado: "2. Quais das opções abaixo são consideradas fontes de energia renovável, contribuindo para a redução da dependência de combustíveis fósseis e a mitigação das mudanças climáticas?",
        alternativas: [
            "a) Energia nuclear, gerada a partir da fissão de átomos de urânio ou plutônio, uma fonte de energia controversa devido aos riscos associados à produção de resíduos nucleares e acidentes nucleares.",
            "b) Energia hidrelétrica, derivada da energia cinética da água em movimento, capturada por meio de barragens ou turbinas instaladas em rios e quedas d'água.",
            "c) .Energia solar, obtida através da captura da luz do sol por meio de painéis fotovoltaicos ou coletores solares térmicos.",
        ]
    },
    {
        enunciado: "3. Quais são os principais benefícios ambientais da adoção generalizada de práticas de reciclagem?",
        alternativas: [
            "a) Conservação de recursos naturais não renováveis, como minérios e petróleo, uma vez que materiais reciclados podem ser reutilizados na produção, reduzindo a necessidade de extrair matéria-prima virgem.",
            "b) .Redução da quantidade de resíduos destinados a aterros sanitários, diminuindo a contaminação do solo, água subterrânea e atmosfera por substâncias tóxicas.",
            "c) Estímulo à economia circular, na qual produtos e materiais são reutilizados e reciclados continuamente, diminuindo a demanda por novas matérias-primas e reduzindo o impacto ambiental associado à produção e descarte.",
        ]
    },
    {
        enunciado: "4. Os conceitos abaixo estão relacionados ao meio ambiente. Apenas um está incorreto. Marque a alternativa que não relaciona o conceito correto:",
        alternativas: [
            "a)  Ecologia: ciência responsável pelo estudo das relações entre os seres vivos e o meio ambiente.",
            "b) .Sustentabilidade: garantia de preservação ambiental em locais protegidos por lei.",
            "c) Desenvolvimento sustentável: modelo de desenvolvimento socioeconômico a ser implantado nos países para garantir a conservação do meio ambiente junto do seu crescimento econômico e avanço nas pautas sociais.", 
        ]
    },
    {
        enunciado: "5. (Unesp 2022) Atenta às questões ambientais do planeta, a Organização das Nações Unidas (ONU) propôs no final da década de 1980 uma avaliação dos impactos antrópicos no clima. Com esse objetivo, foi criado",
        alternativas: [
            "a) Desenvolvimento sustentável: modelo de desenvolvimento socioeconômico a ser implantado nos países para garantir a conservação do meio ambiente junto do seu crescimento econômico e avanço nas pautas sociais.",
            "b) Ecossistema: conjunto formado pelos seres vivos e elementos físicos com os quais interagem, compondo um sistema funcional.",
            "c) .O Painel Intergovernamental de Mudanças Climáticas, responsável pela produção e divulgação de relatórios pautados na produção científica mundial.",
        ]
    },

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
