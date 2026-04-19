// Base de dados compartilhada: Temas e Habilidades BNCC (Matemática Ensino Médio)

export const TEMAS = [
  // Conjuntos e números
  "Conjuntos Numéricos", "Números Reais", "Números Complexos", "Operações com Frações",
  "Porcentagem", "Razão e Proporção", "Regra de Três Simples", "Regra de Três Composta",
  "Juros Simples", "Juros Compostos", "Matemática Financeira",
  // Álgebra
  "Expressões Algébricas", "Produtos Notáveis", "Fatoração", "Polinômios",
  "Equações do 1º Grau", "Equações do 2º Grau", "Inequações", "Sistemas Lineares",
  "Matrizes", "Determinantes",
  // Funções
  "Funções", "Função Afim", "Função Quadrática", "Função Modular",
  "Função Exponencial", "Função Logarítmica", "Logaritmos",
  "Função Composta", "Função Inversa",
  // Sequências
  "Sequências Numéricas", "Progressão Aritmética", "Progressão Geométrica",
  // Trigonometria
  "Trigonometria no Triângulo Retângulo", "Razões Trigonométricas",
  "Lei dos Senos", "Lei dos Cossenos", "Ciclo Trigonométrico",
  "Funções Trigonométricas", "Equações Trigonométricas", "Identidades Trigonométricas",
  // Geometria Plana
  "Geometria Plana", "Ângulos", "Triângulos", "Triângulos Semelhantes",
  "Congruência de Triângulos", "Teorema de Pitágoras", "Teorema de Tales",
  "Quadriláteros", "Polígonos", "Circunferência", "Áreas de Figuras Planas",
  // Geometria Espacial
  "Geometria Espacial", "Prismas", "Pirâmides", "Cilindros", "Cones", "Esferas",
  "Poliedros", "Volumes", "Áreas de Superfícies",
  // Geometria Analítica
  "Geometria Analítica", "Ponto e Distância", "Equação da Reta",
  "Equação da Circunferência", "Cônicas", "Elipse", "Hipérbole", "Parábola",
  // Análise Combinatória / Probabilidade
  "Análise Combinatória", "Princípio Fundamental da Contagem",
  "Permutações", "Arranjos", "Combinações", "Probabilidade",
  "Probabilidade Condicional", "Binômio de Newton",
  // Estatística
  "Estatística", "Média", "Mediana", "Moda", "Desvio Padrão", "Variância",
  "Gráficos e Tabelas", "Amostragem",
  // Outros
  "Grandezas e Medidas", "Notação Científica", "Unidades de Medida"
];

// Habilidades BNCC - Matemática Ensino Médio (EM13MAT)
// Texto oficial conforme http://basenacionalcomum.mec.gov.br/
export const BNCC_CODES = {
  "EM13MAT101": "Interpretar criticamente situações econômicas, sociais e fatos relativos às Ciências da Natureza que envolvam a variação de grandezas, pela análise dos gráficos das funções representadas e das taxas de variação, com ou sem apoio de tecnologias digitais.",
  "EM13MAT102": "Analisar tabelas, gráficos e amostras de pesquisas estatísticas apresentadas em relatórios divulgados por diferentes meios de comunicação, identificando, quando for o caso, inadequações que possam induzir a erros de interpretação, como escalas e amostras não apropriadas.",
  "EM13MAT103": "Interpretar e compreender textos científicos ou divulgados pelas mídias, que empregam unidades de medida de diferentes grandezas e as conversões possíveis entre elas, adotadas ou não pelo Sistema Internacional (SI), como as de armazenamento e velocidade de transferência de dados, ligadas aos avanços tecnológicos.",
  "EM13MAT104": "Interpretar taxas e índices de natureza socioeconômica (índice de desenvolvimento humano, taxas de inflação, entre outros), investigando os processos de cálculo desses números, para analisar criticamente a realidade e produzir argumentos.",
  "EM13MAT105": "Utilizar as noções de transformações isométricas (translação, reflexão, rotação e composições destas) e transformações homotéticas para construir figuras e analisar elementos da natureza e diferentes produções humanas (fractais, construções civis, obras de arte, entre outras).",
  "EM13MAT106": "Identificar situações da vida cotidiana nas quais seja necessário fazer escolhas levando-se em conta os riscos probabilísticos (usar este ou aquele método contraceptivo, optar por um tratamento médico em detrimento de outro etc.).",
  "EM13MAT201": "Propor ou participar de ações adequadas às demandas da região, preferencialmente para sua comunidade, envolvendo medições e cálculos de perímetro, de área, de volume, de capacidade ou de massa.",
  "EM13MAT202": "Planejar e executar pesquisa amostral sobre questões relevantes, usando dados coletados diretamente ou em diferentes fontes, e comunicar os resultados por meio de relatório contendo gráficos e interpretação das medidas de tendência central e das medidas de dispersão (amplitude e desvio padrão), utilizando ou não recursos tecnológicos.",
  "EM13MAT203": "Aplicar conceitos matemáticos no planejamento, na execução e na análise de ações envolvendo a utilização de aplicativos e a criação de planilhas (para o controle de orçamento familiar, simuladores de cálculos de juros simples e compostos, entre outros), para tomar decisões.",
  "EM13MAT301": "Resolver e elaborar problemas do cotidiano, da Matemática e de outras áreas do conhecimento, que envolvem equações lineares simultâneas, usando técnicas algébricas e gráficas, com ou sem apoio de tecnologias digitais.",
  "EM13MAT302": "Construir modelos empregando as funções polinomiais de 1º ou 2º graus, para resolver problemas em contextos diversos, com ou sem apoio de tecnologias digitais.",
  "EM13MAT303": "Interpretar e comparar situações que envolvam juros simples com as que envolvem juros compostos, por meio de representações gráficas ou análise de planilhas, destacando o crescimento linear ou exponencial de cada caso.",
  "EM13MAT304": "Resolver e elaborar problemas com funções exponenciais nos quais seja necessário compreender e interpretar a variação das grandezas envolvidas, em contextos como o da Matemática Financeira e o do crescimento de seres vivos microscópicos, entre outros.",
  "EM13MAT305": "Resolver e elaborar problemas com funções logarítmicas nos quais seja necessário compreender e interpretar a variação das grandezas envolvidas, em contextos como os de abalos sísmicos, pH, radioatividade, Matemática Financeira, entre outros.",
  "EM13MAT306": "Resolver e elaborar problemas em contextos que envolvem fenômenos periódicos reais, como ondas sonoras, ciclos menstruais, movimentos cíclicos, entre outros, e comparar suas representações com as funções seno e cosseno, no plano cartesiano, com ou sem apoio de aplicativos de álgebra e geometria.",
  "EM13MAT307": "Empregar diferentes métodos para a obtenção da medida da área de uma superfície (reconfigurações, aproximação por cortes etc.) e deduzir expressões de cálculo para aplicá-las em situações reais (como o remanejamento e a distribuição de plantações, entre outros), com ou sem apoio de tecnologias digitais.",
  "EM13MAT308": "Aplicar as relações métricas, incluindo as leis do seno e do cosseno ou as noções de congruência e semelhança, para resolver e elaborar problemas que envolvem triângulos, em variados contextos.",
  "EM13MAT309": "Resolver e elaborar problemas que envolvem o cálculo de áreas totais e de volumes de prismas, pirâmides e corpos redondos em situações reais (como o cálculo do gasto de material para forrações ou pinturas de objetos cujos formatos sejam composições dos sólidos estudados), com ou sem apoio de tecnologias digitais.",
  "EM13MAT310": "Resolver e elaborar problemas de contagem envolvendo agrupamentos ordenáveis ou não de elementos, por meio dos princípios multiplicativo e aditivo, recorrendo a estratégias diversas, como o diagrama de árvore.",
  "EM13MAT311": "Identificar e descrever o espaço amostral de eventos aleatórios, realizando contagem das possibilidades, para resolver e elaborar problemas que envolvem o cálculo da probabilidade.",
  "EM13MAT312": "Resolver e elaborar problemas que envolvem o cálculo da probabilidade de eventos aleatórios, identificando e descrevendo o espaço amostral e realizando contagem das possibilidades.",
  "EM13MAT313": "Utilizar, quando necessário, a notação científica para expressar uma medida, compreendendo as noções de algarismos significativos e algarismos duvidosos, e reconhecendo que toda medida é inevitavelmente acompanhada de erro.",
  "EM13MAT314": "Resolver e elaborar problemas que envolvem grandezas determinadas pela razão ou pelo produto de outras (velocidade, densidade demográfica, energia elétrica etc.).",
  "EM13MAT315": "Investigar e registrar, por meio de um fluxograma, quando possível, um algoritmo que resolve um problema.",
  "EM13MAT316": "Resolver e elaborar problemas, em diferentes contextos, que envolvem cálculo e interpretação das medidas de tendência central (média, moda, mediana) e das medidas de dispersão (amplitude, variância e desvio padrão).",
  "EM13MAT401": "Converter representações algébricas de funções polinomiais de 1º grau em representações geométricas no plano cartesiano, distinguindo os casos nos quais o comportamento é proporcional, recorrendo ou não a softwares ou aplicativos de álgebra e geometria dinâmica.",
  "EM13MAT402": "Converter representações algébricas de funções polinomiais de 2º grau em representações geométricas no plano cartesiano, distinguindo os casos nos quais uma variável for diretamente proporcional ao quadrado da outra, recorrendo ou não a softwares ou aplicativos de álgebra e geometria dinâmica, entre outros materiais.",
  "EM13MAT403": "Analisar e estabelecer relações, com ou sem apoio de tecnologias digitais, entre as representações de funções exponencial e logarítmica expressas em tabelas e em plano cartesiano, para identificar as características fundamentais (domínio, imagem, crescimento) de cada função.",
  "EM13MAT404": "Analisar funções definidas por uma ou mais sentenças (tabelas do Imposto de Renda, contas de luz, água, gás etc.), em suas representações algébrica e gráfica, identificando domínios de validade, imagem, crescimento e decrescimento, e convertendo essas representações de uma para outra, com ou sem apoio de tecnologias digitais.",
  "EM13MAT405": "Reconhecer funções definidas por uma ou mais sentenças (como funções dadas por partes, função modular, tabela do Imposto de Renda), em suas representações algébrica e gráfica, identificando domínios de validade, imagem, crescimento e decrescimento.",
  "EM13MAT406": "Construir e interpretar tabelas e gráficos de frequências com base em dados obtidos em pesquisas por amostras estatísticas, incluindo ou não o uso de softwares que inter-relacionem estatística, geometria e álgebra.",
  "EM13MAT407": "Interpretar e comparar conjuntos de dados estatísticos por meio de diferentes diagramas e gráficos (histograma, de caixa (box-plot), de ramos e folhas, entre outros), reconhecendo os mais eficientes para sua análise.",
  "EM13MAT501": "Investigar relações entre números expressos em tabelas para representá-los no plano cartesiano, identificando padrões e criando conjecturas para generalizar e expressar algebricamente essa generalização, reconhecendo quando essa representação é de função polinomial de 1º grau.",
  "EM13MAT502": "Investigar relações entre números expressos em tabelas para representá-los no plano cartesiano, identificando padrões e criando conjecturas para generalizar e expressar algebricamente essa generalização, reconhecendo quando essa representação é de função polinomial de 2º grau do tipo y = ax².",
  "EM13MAT503": "Investigar pontos de máximo ou de mínimo de funções quadráticas em contextos envolvendo superfícies, Matemática Financeira ou Cinemática, entre outros, com apoio de tecnologias digitais.",
  "EM13MAT504": "Investigar processos de obtenção da medida do volume de prismas, pirâmides, cilindros e cones, incluindo o princípio de Cavalieri, para a obtenção das fórmulas de cálculo da medida do volume dessas figuras.",
  "EM13MAT505": "Resolver problemas sobre ladrilhamento do plano, com ou sem apoio de aplicativos de geometria dinâmica, para conjecturar a respeito dos tipos ou composição de polígonos que podem ser utilizados em ladrilhamento, generalizando padrões observados.",
  "EM13MAT506": "Representar graficamente a variação da área e do perímetro de um polígono regular quando os comprimentos de seus lados variam, analisando e classificando as funções envolvidas.",
  "EM13MAT507": "Identificar e associar progressões aritméticas (PA) a funções afins de domínios discretos, para análise de propriedades, dedução de algumas fórmulas e resolução de problemas.",
  "EM13MAT508": "Identificar e associar progressões geométricas (PG) a funções exponenciais de domínios discretos, para análise de propriedades, dedução de algumas fórmulas e resolução de problemas.",
  "EM13MAT509": "Investigar a deformação de ângulos e áreas provocada pelas diferentes projeções usadas em cartografia (como a cilíndrica e a cônica), com ou sem suporte de tecnologia digital.",
  "EM13MAT510": "Investigar conjuntos de dados relativos ao comportamento de duas variáveis numéricas, usando ou não tecnologias da informação, e, quando apropriado, levar em conta a variação e utilizar uma reta para descrever a relação observada.",
  "EM13MAT511": "Reconhecer a existência de diferentes tipos de espaços amostrais, discretos ou não, e de eventos, equiprováveis ou não, e investigar implicações no cálculo de probabilidades."
};

// Mapeamento tema → códigos BNCC sugeridos
export const THEME_TO_BNCC = {
  "Conjuntos Numéricos": ["EM13MAT103"],
  "Números Reais": ["EM13MAT103", "EM13MAT313"],
  "Números Complexos": [],
  "Operações com Frações": [],
  "Porcentagem": ["EM13MAT104", "EM13MAT203"],
  "Razão e Proporção": ["EM13MAT314"],
  "Regra de Três Simples": ["EM13MAT314"],
  "Regra de Três Composta": ["EM13MAT314"],
  "Juros Simples": ["EM13MAT203", "EM13MAT303"],
  "Juros Compostos": ["EM13MAT203", "EM13MAT303", "EM13MAT304"],
  "Matemática Financeira": ["EM13MAT203", "EM13MAT303", "EM13MAT304", "EM13MAT305"],
  "Expressões Algébricas": ["EM13MAT301"],
  "Produtos Notáveis": ["EM13MAT301"],
  "Fatoração": ["EM13MAT301"],
  "Polinômios": ["EM13MAT301", "EM13MAT302"],
  "Equações do 1º Grau": ["EM13MAT301", "EM13MAT302", "EM13MAT401"],
  "Equações do 2º Grau": ["EM13MAT302", "EM13MAT402", "EM13MAT503"],
  "Inequações": ["EM13MAT301", "EM13MAT302"],
  "Sistemas Lineares": ["EM13MAT301"],
  "Matrizes": ["EM13MAT301"],
  "Determinantes": ["EM13MAT301"],
  "Funções": ["EM13MAT101", "EM13MAT401", "EM13MAT402", "EM13MAT404"],
  "Função Afim": ["EM13MAT302", "EM13MAT401", "EM13MAT501", "EM13MAT507"],
  "Função Quadrática": ["EM13MAT302", "EM13MAT402", "EM13MAT502", "EM13MAT503"],
  "Função Modular": ["EM13MAT405"],
  "Função Exponencial": ["EM13MAT304", "EM13MAT403", "EM13MAT508"],
  "Função Logarítmica": ["EM13MAT305", "EM13MAT403"],
  "Logaritmos": ["EM13MAT305", "EM13MAT403"],
  "Função Composta": ["EM13MAT404"],
  "Função Inversa": ["EM13MAT404"],
  "Sequências Numéricas": ["EM13MAT507", "EM13MAT508"],
  "Progressão Aritmética": ["EM13MAT507"],
  "Progressão Geométrica": ["EM13MAT508"],
  "Trigonometria no Triângulo Retângulo": ["EM13MAT308"],
  "Razões Trigonométricas": ["EM13MAT308"],
  "Lei dos Senos": ["EM13MAT308"],
  "Lei dos Cossenos": ["EM13MAT308"],
  "Ciclo Trigonométrico": ["EM13MAT306"],
  "Funções Trigonométricas": ["EM13MAT306"],
  "Equações Trigonométricas": ["EM13MAT306"],
  "Identidades Trigonométricas": ["EM13MAT306"],
  "Geometria Plana": ["EM13MAT105", "EM13MAT201", "EM13MAT307"],
  "Ângulos": ["EM13MAT105"],
  "Triângulos": ["EM13MAT308"],
  "Triângulos Semelhantes": ["EM13MAT308"],
  "Congruência de Triângulos": ["EM13MAT308"],
  "Teorema de Pitágoras": ["EM13MAT308"],
  "Teorema de Tales": ["EM13MAT308"],
  "Quadriláteros": ["EM13MAT307"],
  "Polígonos": ["EM13MAT307", "EM13MAT505", "EM13MAT506"],
  "Circunferência": ["EM13MAT307"],
  "Áreas de Figuras Planas": ["EM13MAT201", "EM13MAT307", "EM13MAT506"],
  "Geometria Espacial": ["EM13MAT201", "EM13MAT309", "EM13MAT504"],
  "Prismas": ["EM13MAT309", "EM13MAT504"],
  "Pirâmides": ["EM13MAT309", "EM13MAT504"],
  "Cilindros": ["EM13MAT309", "EM13MAT504"],
  "Cones": ["EM13MAT309", "EM13MAT504"],
  "Esferas": ["EM13MAT309"],
  "Poliedros": ["EM13MAT309"],
  "Volumes": ["EM13MAT201", "EM13MAT309", "EM13MAT504"],
  "Áreas de Superfícies": ["EM13MAT201", "EM13MAT307", "EM13MAT309"],
  "Geometria Analítica": ["EM13MAT401", "EM13MAT402"],
  "Ponto e Distância": [],
  "Equação da Reta": ["EM13MAT401"],
  "Equação da Circunferência": [],
  "Cônicas": [],
  "Elipse": [],
  "Hipérbole": [],
  "Parábola": ["EM13MAT402"],
  "Análise Combinatória": ["EM13MAT310"],
  "Princípio Fundamental da Contagem": ["EM13MAT310"],
  "Permutações": ["EM13MAT310"],
  "Arranjos": ["EM13MAT310"],
  "Combinações": ["EM13MAT310"],
  "Probabilidade": ["EM13MAT106", "EM13MAT311", "EM13MAT312", "EM13MAT511"],
  "Probabilidade Condicional": ["EM13MAT311", "EM13MAT312", "EM13MAT511"],
  "Binômio de Newton": ["EM13MAT310"],
  "Estatística": ["EM13MAT102", "EM13MAT202", "EM13MAT316", "EM13MAT406", "EM13MAT407"],
  "Média": ["EM13MAT202", "EM13MAT316"],
  "Mediana": ["EM13MAT202", "EM13MAT316"],
  "Moda": ["EM13MAT202", "EM13MAT316"],
  "Desvio Padrão": ["EM13MAT202", "EM13MAT316"],
  "Variância": ["EM13MAT316"],
  "Gráficos e Tabelas": ["EM13MAT102", "EM13MAT406", "EM13MAT407"],
  "Amostragem": ["EM13MAT202", "EM13MAT406"],
  "Grandezas e Medidas": ["EM13MAT103", "EM13MAT201", "EM13MAT314"],
  "Notação Científica": ["EM13MAT313"],
  "Unidades de Medida": ["EM13MAT103"]
};

// Normaliza texto removendo acentos, deixando minúsculo
export function normalize(s) {
  if (!s) return "";
  return s.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Distância de Levenshtein entre duas strings
export function levenshtein(a, b) {
  a = a || ""; b = b || "";
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const m = a.length, n = b.length;
  const prev = new Array(n + 1), curr = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= n; j++) prev[j] = curr[j];
  }
  return prev[n];
}

// Busca fuzzy: combina exact, startsWith, includes e Levenshtein
export function fuzzySearchTemas(query, maxResults = 8) {
  const q = normalize(query);
  if (!q) return [];
  const out = [];
  for (const tema of TEMAS) {
    const t = normalize(tema);
    let score = 0;
    if (t === q) score = 1000;
    else if (t.startsWith(q)) score = 800 - (t.length - q.length);
    else if (t.includes(q)) score = 600 - (t.indexOf(q));
    else {
      // fuzzy: aceita até 30% de diferença
      const d = levenshtein(q, t);
      const tol = Math.max(2, Math.floor(Math.max(q.length, t.length) * 0.35));
      if (d <= tol) score = 400 - d * 20;
      else {
        // fuzzy por palavras individuais
        const qWords = q.split(/\s+/);
        const tWords = t.split(/\s+/);
        let acc = 0, matches = 0;
        for (const qw of qWords) {
          let best = Infinity;
          for (const tw of tWords) {
            const dw = levenshtein(qw, tw);
            if (dw < best) best = dw;
          }
          const tolW = Math.max(1, Math.floor(qw.length * 0.4));
          if (best <= tolW) { acc += (tolW - best); matches++; }
        }
        if (matches > 0) score = 200 + acc * 10 + matches * 15;
      }
    }
    if (score > 0) out.push({ tema, score });
  }
  out.sort((a, b) => b.score - a.score);
  return out.slice(0, maxResults).map(o => o.tema);
}

// Dado um conjunto de temas, retorna BNCC sugeridos (deduplicado, ordenado)
export function bnccSugeridos(temasSelecionados) {
  const set = new Set();
  for (const tema of temasSelecionados) {
    const codes = THEME_TO_BNCC[tema] || [];
    for (const c of codes) set.add(c);
  }
  return Array.from(set).sort();
}
