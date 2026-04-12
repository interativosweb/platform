const f = (n, d) => `<div class='fracao'><span class='num'>${n}</span><span class='den'>${d}</span></div>`;

const pathIntro = "introducao/";
const pathComp  = "complementar/";
const pathResp  = "respostas/";

const pad2 = (n) => String(n).padStart(2, "0");

/**
 * Gera o HTML da imagem de resolução.
 * - Padrão: 65%
 * - scale=1.4 => 65% * 1.4 = 91% (40% maior)
 */
const resolucaoCompImgHTML = (n, scale = 1) => {
  const base = `${pathResp}rep${pad2(n)}`;
  const baseWidth = 65;
  const width = Math.min(100, baseWidth * scale);
  const w = `${width.toFixed(2)}%`;

  return `
    <div class="resposta-img-wrap" style="text-align:center;">
      <img src="${base}.png"
           alt="Resposta"
           class="resposta-img"
           style="width:${w}; max-width:${w}; height:auto; display:inline-block;"
           onerror="this.onerror=null; this.src='${base}';">
    </div>
  `;
};


// =====================================================================
// ✅ INTRODUÇÃO (única) — chamada no site como "Introdução I"
// =====================================================================

const questoesIntroI = [
  {
    pergunta: "A melancia está inteira ou dividia?",
    img: pathIntro + "img07intro.png",
    opcoes: ["Inteiro", "Dividido"],
    correta: 0,
    resolucao: `Está inteiro porque não foi dividido em partes.
Quando não há divisão, temos um todo completo.`
  },
  {
    pergunta: "Em quantas partes a melancia foi dividida?",
    img: pathIntro + "img08intro.png",
    opcoes: ["1", "2", "3", "6"],
    correta: 1,
    resolucao: `A melancia foi dividida em 2 partes iguais.
Sempre contamos quantas partes existem no total.`
  },
  {
    pergunta: `Na fração ${f(4,9)}, qual é o denominador?`,
    img: pathIntro + "img09intro.png",
    imgScale: 1.3, // ✅ 30% maior
    opcoes: ["4", "9", "2", "5"],
    correta: 1,
    resolucao: `Em uma fração, o denominador é o número de baixo. Em ${f(4,9)}, o denominador é <b>9</b>.`
  },
  {
    pergunta: "Se você tem 2 parte de 3, qual é a fração?",
    img: pathIntro + "img10intro.png",
    imgScale: 1.3, // ✅ 30% maior
    opcoes: [f(3,3), f(3,2), f(2,3), f(6,9)],
    correta: 2,
    resolucao: `O numerador indica quantas partes temos 2 e o denominador indica em quantas partes o todo foi dividido 3. Portanto, a fração é ${f(2,3)}.`
  },
  {
    pergunta: "Qual fração representa a última figura?",
    img: pathIntro + "img11intro.png",
    opcoes: [f(5,5), f(5,4), f(5,2), f(4,5)],
    correta: 3,
    resolucao: `A figura tem 5 partes iguais ao todo e 4 estão pintadas. Logo, a fração é ${f(4,5)}.`
  },

  {
    pergunta: "Uma fração é uma forma de representar uma parte de um todo, quando esse todo é dividido em partes iguais. Comer um pedaço dessa pizza representa em fração:",
    img: pathIntro + "img01intro.png",
    opcoes: [f(1,4), f(1,6), f(7,1), f(1,7)],
    correta: 3,
    resolucao: `A pizza inteira foi dividida em 7 partes iguais. Como comemos apenas 1 dessas partes, a fração é ${f(1,7)}.`
  },
  {
    pergunta: "Pedi uma pizza e comi apenas a parte pintada em verde, represente em fração quantos pedaços eu comi:",
    img: pathIntro + "img02intro.png",
    opcoes: [f(3,7), f(5,6), f(7,3), f(7,2)],
    correta: 0,
    resolucao: `Contamos 7 pedaços no total e 3 pintados de verde. A fração é ${f(3,7)}.`
  },
  {
    pergunta: "Um copo cheio de suco é dividido em 2 partes iguais. Se alguém bebe uma dessas partes, temos:",
    img: pathIntro + "img03intro.png",
    opcoes: [f(2,5), f(2,1), f(1,4), f(1,2)],
    correta: 3,
    resolucao: `Isso representa metade do copo: ${f(1,2)}.`
  },
  {
    pergunta: "Qual fração representa o círculo vermelho?",
    img: pathIntro + "img04intro.png",
    opcoes: [f(3,4), f(1,4), f(4,3), f(2,3)],
    correta: 0,
    resolucao: `Observe o total de partes do círculo e quantas estão em vermelho. Aqui, a parte vermelha representa ${f(3,4)} do círculo.`
  },
  {
    pergunta: `Uma barra de chocolate tem 5 pedaços iguais, se eu comer ${f(1,5)}, quantos ainda me restam?`,
    img: pathIntro + "img05intro.png",
    opcoes: ["1", f(2,5), f(4,5), f(3,5)],
    correta: 2,
    resolucao: `Se a barra tem 5 pedaços e eu comi 1, restam 4 pedaços. Em fração, fica ${f(4,5)}.`
  },
  {
    pergunta: `Ganhei de presente um celular dos meus pais. No primeiro dia gastei ${f(1,4)} da bateria, no segundo dia ${f(3,4)} e, no terceiro dia, eu não usei o celular. No 4º dia eu usei o celular da minha mãe. Quanto eu usei da bateria dela?`,
    img: pathIntro + "img06intro.png",
    opcoes: [f(1,5), f(4,5), f(3,5), f(1,6)],
    correta: 0,
    resolucao: `No 4º dia, o uso foi no celular da mãe. Como o enunciado não informa o gasto exato, nesta atividade consideramos como correta a alternativa ${f(1,5)}.`
  }
];

const questoesIntro = questoesIntroI;

const questoesComp = [
  // ✅ comp16 — imagem 40% maior
  {
    pergunta: `Uma pizza foi dividida em 8 partes iguais. Ana comeu ${f(3,8)} da pizza pela manhã e ${f(2,8)} à tarde. Quanto Ana comeu ao todo?`,
    img: pathComp + "comp16.png",
    imgScale: 1.4,
    opcoes: [f(5,8), f(6,8), f(3,16), f(2,8)],
    correta: 0,
    resolucao: `Como as frações têm o mesmo denominador (8), basta somar os numeradores: 3 + 2 = 5.
Então, Ana comeu ${f(5,8)} da pizza ao todo.`
  },

  // ✅ comp17 — imagem 40% maior
  {
    pergunta: `Carlos tinha 7 moedas iguais. Ele usou 2 dessas moedas para comprar um doce. Qual fração representa quantas moedas restaram?`,
    img: pathComp + "comp17.png",
    imgScale: 1.4,
    opcoes: [f(5,7), f(3,7), f(4,7), f(7,5)],
    correta: 0,
    resolucao: `Se ele tinha 7 moedas e usou 2, restaram 5 moedas.
A fração que representa as moedas restantes é ${f(5,7)}.`
  },

  {
    pergunta: `Um bolo foi dividido em 4 partes iguais. João comeu ${f(1,4)} e Maria comeu ${f(2,4)}. Que fração do bolo foi comida ao todo?`,
    img: pathComp + "comp01.png",
    opcoes: [f(3,8), f(2,4), f(3,4), f(1,4)],
    correta: 2,
    resolucao: resolucaoCompImgHTML(1)
  },
  {
    pergunta: `Ana bebeu ${f(1,5)} de uma garrafa de suco pela manhã e ${f(2,5)} à tarde. Quantas partes da garrafa ela bebeu no total?`,
    img: pathComp + "comp02.png",
    opcoes: [f(2,5), f(1,5), f(3,10), f(3,5)],
    correta: 3,
    resolucao: resolucaoCompImgHTML(2)
  },
  {
    pergunta: `Um chocolate foi dividido em 8 pedaços iguais. Pedro comeu ${f(3,8)}. Que fração do chocolate sobrou?`,
    img: pathComp + "comp03.png",
    opcoes: [f(1,8), f(5,8), f(3,8), f(8,5)],
    correta: 1,
    resolucao: resolucaoCompImgHTML(3, 1.4)
  },
  {
    pergunta: `Em uma fita dividida em 6 partes iguais, foram usadas ${f(2,6)} para um trabalho e ${f(1,6)} para outro. Qual fração da fita foi usada ao todo?`,
    img: pathComp + "comp04.png",
    opcoes: [f(1,6), f(1,3), f(3,6), f(2,6)],
    correta: [1, 2],
    resolucao: resolucaoCompImgHTML(4)
  },
  {
    pergunta: `Um bolo foi dividido em 10 partes iguais. Foram comidas ${f(4,10)} depois do almoço. Que fração do bolo ainda resta?`,
    img: pathComp + "comp05.png",
    opcoes: [f(5,10), f(3,5), f(4,10), f(6,10)],
    correta: [1, 3],
    resolucao: resolucaoCompImgHTML(5, 1.4)
  },
  {
    pergunta: `Havia 2 formas de gelo, cada uma com 8 cubos. Durante o dia, foi usado ${f(4,8)} de uma forma de gelo. Quantas formas de gelo restaram ao todo?`,
    img: pathComp + "comp06.png",
    opcoes: [f(12,8), f(3,2), f(3,8), f(2,8)],
    correta: [0, 1],
    resolucao: resolucaoCompImgHTML(6, 1.4)
  },
  {
    pergunta: `Em uma caixa de lápis, ${f(1,4)} foi usado na aula de Matemática e ${f(1,6)} na aula de Artes. Que fração da caixa de lápis foi usada ao todo?`,
    img: pathComp + "comp07.png",
    opcoes: [f(7,12), f(2,10), f(5,12), f(1,10)],
    correta: 2,
    resolucao: resolucaoCompImgHTML(7, 1.4)
  },
  {
    pergunta: `Uma caixa estava cheia de suco. Após o almoço, foram consumidos ${f(2,3)} da caixa. Que fração do suco restou?`,
    img: pathComp + "comp08.png",
    opcoes: [f(2,3), f(1,6), f(3,2), f(1,3)],
    correta: 3,
    resolucao: resolucaoCompImgHTML(8, 1.4)
  },
  {
    pergunta: `Carlo caminhou ${f(2,5)} de sua meta diária pela manhã e ${f(1,10)} à tarde. Que fração do percurso ele caminhou ao todo?`,
    img: pathComp + "comp09.png",
    opcoes: [f(3,10), f(5,10), f(1,2), f(3,5)],
    correta: [1, 2],
    resolucao: resolucaoCompImgHTML(9, 1.4)
  },
  {
    pergunta: `Um pacote tinha 15 bolachas. Durante o lanche, João comeu ${f(6,15)} das bolachas e Maria comeu ${f(3,15)}. Que fração das bolachas eles comeram ao todo?`,
    img: pathComp + "comp10.png",
    opcoes: [f(3,15), f(6,15), f(18,15), f(9,15)],
    correta: 3,
    resolucao: resolucaoCompImgHTML(10)
  },
  {
    pergunta: `Um tanque de água teve ${f(1,3)} de sua capacidade usada pela manhã e ${f(1,4)} à tarde. Que fração da água foi utilizada no total?`,
    img: pathComp + "comp11.png",
    opcoes: [f(2,7), f(7,12), f(1,12), f(7,7)],
    correta: 1,
    resolucao: resolucaoCompImgHTML(11, 1.4)
  },
  {
    pergunta: `Uma criança tinha R$ 10,00, divididos em 10 partes iguais. Ela gastou ${f(3,10)} desse dinheiro comprando um lanche. Que fração do dinheiro ainda restou?`,
    img: pathComp + "comp12.png",
    opcoes: [f(10,3), f(7,10), f(1,10), f(3,10)],
    correta: 1,
    resolucao: resolucaoCompImgHTML(12, 1.4)
  },
  {
    pergunta: `Em uma prova, Maria acertou ${f(3,5)} das questões na primeira parte e ${f(1,10)} na segunda parte. Ao juntar as duas partes, quantas questões Maria acertou no total?`,
    img: pathComp + "comp13.png",
    opcoes: [f(3,10), f(4,15), f(7,10), f(2,5)],
    correta: 2,
    resolucao: resolucaoCompImgHTML(13, 1.4)
  },
  {
    pergunta: `Ana percorreu ${f(1,4)} do caminho pela manhã e ${f(1,2)} à tarde. Que fração do caminho ela percorreu ao todo?`,
    img: pathComp + "comp14.png",
    opcoes: [f(2,4), f(1,6), f(3,4), f(1,2)],
    correta: 2,
    resolucao: resolucaoCompImgHTML(14, 1.4)
  }
];


window.questoesIntro = questoesIntro;
window.questoesComp = questoesComp;
