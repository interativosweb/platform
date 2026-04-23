// Base de dados compartilhada: Temas e Habilidades BNCC (Matemática Ensino Médio)

export const TEMAS = [
  // ===== Operações básicas (Fundamental) =====
  "Adição", "Subtração", "Multiplicação", "Divisão",
  "Operações com Números Naturais", "Operações com Números Inteiros",
  "Operações com Números Decimais",
  "Adição de Frações", "Subtração de Frações",
  "Adição e Subtração de Frações", "Multiplicação de Frações", "Divisão de Frações",
  "Operações com Frações", "Simplificação de Frações", "Comparação de Frações",
  "Frações Equivalentes", "Frações e Números Mistos",
  "Conversão entre Fração e Decimal", "Dízimas Periódicas",
  // ===== Conjuntos e números =====
  "Conjuntos", "Conjuntos Numéricos", "Números Reais", "Números Naturais",
  "Números Inteiros", "Números Racionais", "Números Irracionais", "Números Complexos",
  "Números Primos", "MMC", "MDC", "Múltiplos e Divisores", "Divisibilidade",
  "Potenciação", "Radiciação", "Propriedades das Potências", "Propriedades dos Radicais",
  "Racionalização de Denominadores", "Expoentes Racionais",
  // ===== Proporcionalidade e finanças =====
  "Porcentagem", "Aumentos e Descontos", "Lucro e Prejuízo",
  "Razão e Proporção", "Grandezas Diretamente Proporcionais", "Grandezas Inversamente Proporcionais",
  "Regra de Três Simples", "Regra de Três Composta",
  "Juros Simples", "Juros Compostos", "Matemática Financeira",
  // ===== Álgebra =====
  "Expressões Algébricas", "Monômios", "Polinômios", "Operações com Polinômios",
  "Produtos Notáveis", "Fatoração", "Divisão de Polinômios",
  "Equações do 1º Grau", "Equações do 2º Grau",
  "Equações Biquadradas", "Equações Irracionais", "Equações Modulares",
  "Equações Exponenciais", "Equações Logarítmicas",
  "Inequações", "Inequações do 1º Grau", "Inequações do 2º Grau",
  "Inequações Modulares", "Inequações Exponenciais", "Inequações Logarítmicas",
  "Sistemas de Equações", "Sistemas Lineares", "Sistemas Não-Lineares",
  "Matrizes", "Operações com Matrizes", "Matriz Inversa", "Determinantes",
  "Regra de Cramer", "Escalonamento de Matrizes",
  // ===== Funções =====
  "Funções", "Função Afim", "Função Linear", "Função Constante",
  "Função Quadrática", "Função Modular", "Função Polinomial",
  "Função Exponencial", "Função Logarítmica", "Logaritmos", "Propriedades dos Logaritmos",
  "Função Composta", "Função Inversa", "Domínio e Imagem",
  "Funções Pares e Ímpares", "Crescimento e Decrescimento de Funções",
  "Estudo do Sinal", "Raízes de Funções", "Vértice da Parábola",
  // ===== Sequências =====
  "Sequências Numéricas", "Progressão Aritmética", "Progressão Geométrica",
  "Soma de PA", "Soma de PG", "PG Infinita",
  // ===== Trigonometria =====
  "Trigonometria", "Trigonometria no Triângulo Retângulo", "Razões Trigonométricas",
  "Seno", "Cosseno", "Tangente", "Cotangente", "Secante", "Cossecante",
  "Lei dos Senos", "Lei dos Cossenos", "Área do Triângulo (Trigonometria)",
  "Ciclo Trigonométrico", "Arcos e Ângulos", "Conversão Grau-Radiano",
  "Funções Trigonométricas", "Equações Trigonométricas", "Identidades Trigonométricas",
  "Relações Trigonométricas Fundamentais", "Soma e Diferença de Arcos",
  "Arco Duplo", "Arco Metade",
  // ===== Geometria Plana =====
  "Geometria Plana", "Ponto, Reta e Plano", "Ângulos", "Ângulos entre Paralelas",
  "Triângulos", "Classificação de Triângulos", "Soma dos Ângulos Internos",
  "Triângulos Semelhantes", "Semelhança de Triângulos", "Congruência de Triângulos",
  "Teorema de Pitágoras", "Teorema de Tales",
  "Relações Métricas no Triângulo Retângulo",
  "Quadriláteros", "Paralelogramos", "Trapézios", "Losango", "Retângulo", "Quadrado",
  "Polígonos", "Polígonos Regulares", "Soma dos Ângulos de Polígonos",
  "Circunferência e Círculo", "Comprimento da Circunferência",
  "Área do Círculo", "Setor Circular", "Coroa Circular",
  "Áreas de Figuras Planas", "Perímetro",
  // ===== Geometria Espacial =====
  "Geometria Espacial", "Sólidos Geométricos", "Poliedros", "Relação de Euler",
  "Prismas", "Paralelepípedo", "Cubo", "Pirâmides",
  "Cilindros", "Cones", "Tronco de Cone", "Esferas",
  "Volumes", "Áreas de Superfícies", "Princípio de Cavalieri",
  // ===== Geometria Analítica =====
  "Geometria Analítica", "Plano Cartesiano", "Ponto e Distância",
  "Distância entre Dois Pontos", "Ponto Médio", "Coordenadas Cartesianas",
  "Equação da Reta", "Coeficiente Angular", "Posições Relativas entre Retas",
  "Distância de Ponto à Reta", "Equação da Circunferência",
  "Posições Relativas entre Reta e Circunferência",
  "Cônicas", "Elipse", "Hipérbole", "Parábola",
  // ===== Análise Combinatória e Probabilidade =====
  "Análise Combinatória", "Princípio Fundamental da Contagem", "Princípio Aditivo",
  "Fatorial", "Permutações", "Permutações com Repetição", "Permutações Circulares",
  "Arranjos", "Combinações", "Combinações com Repetição",
  "Probabilidade", "Probabilidade Condicional", "Probabilidade da União",
  "Probabilidade da Intersecção", "Eventos Independentes", "Eventos Mutuamente Exclusivos",
  "Binômio de Newton", "Triângulo de Pascal",
  // ===== Estatística =====
  "Estatística", "Estatística Descritiva", "População e Amostra",
  "Frequência Absoluta e Relativa", "Distribuição de Frequências",
  "Média", "Média Aritmética", "Média Ponderada", "Mediana", "Moda",
  "Desvio Padrão", "Variância", "Amplitude", "Quartis",
  "Gráficos e Tabelas", "Histograma", "Box-plot", "Gráfico de Setores",
  "Amostragem", "Pesquisa Estatística",
  // ===== Números Complexos =====
  "Forma Algébrica de Complexos", "Forma Trigonométrica de Complexos",
  "Operações com Complexos", "Módulo e Argumento", "Plano de Argand-Gauss",
  "Fórmula de De Moivre", "Raízes de Números Complexos",
  // ===== Polinômios avançado =====
  "Teorema do Resto", "Teorema de D'Alembert", "Dispositivo de Briot-Ruffini",
  "Equações Polinomiais", "Relações de Girard", "Multiplicidade de Raízes",
  // ===== Outros =====
  "Grandezas e Medidas", "Notação Científica", "Unidades de Medida",
  "Conversão de Unidades", "Sistema Internacional",
  "Lógica Matemática", "Tabela Verdade", "Conectivos Lógicos",
  "Raciocínio Lógico", "Sequências Lógicas",
  "Matemática do Cotidiano", "Resolução de Problemas"
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
  // Operações básicas / frações / decimais (pouca cobertura no EM, mas mapeio para o que existe)
  "Adição": [], "Subtração": [], "Multiplicação": [], "Divisão": [],
  "Operações com Números Naturais": [], "Operações com Números Inteiros": [],
  "Operações com Números Decimais": [],
  "Adição de Frações": [], "Subtração de Frações": [], "Adição e Subtração de Frações": [],
  "Multiplicação de Frações": [], "Divisão de Frações": [], "Operações com Frações": [],
  "Simplificação de Frações": [], "Comparação de Frações": [],
  "Frações Equivalentes": [], "Frações e Números Mistos": [],
  "Conversão entre Fração e Decimal": [], "Dízimas Periódicas": [],
  // Conjuntos e números
  "Conjuntos": [], "Conjuntos Numéricos": ["EM13MAT103"],
  "Números Reais": ["EM13MAT103", "EM13MAT313"],
  "Números Naturais": [], "Números Inteiros": [], "Números Racionais": [], "Números Irracionais": [],
  "Números Complexos": [],
  "Números Primos": [], "MMC": [], "MDC": [], "Múltiplos e Divisores": [], "Divisibilidade": [],
  "Potenciação": [], "Radiciação": [], "Propriedades das Potências": [], "Propriedades dos Radicais": [],
  "Racionalização de Denominadores": [], "Expoentes Racionais": [],
  // Proporcionalidade e finanças
  "Porcentagem": ["EM13MAT104", "EM13MAT203"],
  "Aumentos e Descontos": ["EM13MAT104", "EM13MAT203"],
  "Lucro e Prejuízo": ["EM13MAT203"],
  "Razão e Proporção": ["EM13MAT314"],
  "Grandezas Diretamente Proporcionais": ["EM13MAT314"],
  "Grandezas Inversamente Proporcionais": ["EM13MAT314"],
  "Regra de Três Simples": ["EM13MAT314"],
  "Regra de Três Composta": ["EM13MAT314"],
  "Juros Simples": ["EM13MAT203", "EM13MAT303"],
  "Juros Compostos": ["EM13MAT203", "EM13MAT303", "EM13MAT304"],
  "Matemática Financeira": ["EM13MAT203", "EM13MAT303", "EM13MAT304", "EM13MAT305"],
  // Álgebra
  "Expressões Algébricas": ["EM13MAT301"],
  "Monômios": ["EM13MAT301"],
  "Polinômios": ["EM13MAT301", "EM13MAT302"],
  "Operações com Polinômios": ["EM13MAT301"],
  "Produtos Notáveis": ["EM13MAT301"],
  "Fatoração": ["EM13MAT301"],
  "Divisão de Polinômios": ["EM13MAT301"],
  "Equações do 1º Grau": ["EM13MAT301", "EM13MAT302", "EM13MAT401"],
  "Equações do 2º Grau": ["EM13MAT302", "EM13MAT402", "EM13MAT503"],
  "Equações Biquadradas": ["EM13MAT302"],
  "Equações Irracionais": ["EM13MAT301"],
  "Equações Modulares": ["EM13MAT405"],
  "Equações Exponenciais": ["EM13MAT304"],
  "Equações Logarítmicas": ["EM13MAT305"],
  "Inequações": ["EM13MAT301", "EM13MAT302"],
  "Inequações do 1º Grau": ["EM13MAT301", "EM13MAT401"],
  "Inequações do 2º Grau": ["EM13MAT302", "EM13MAT402"],
  "Inequações Modulares": ["EM13MAT405"],
  "Inequações Exponenciais": ["EM13MAT304"],
  "Inequações Logarítmicas": ["EM13MAT305"],
  "Sistemas de Equações": ["EM13MAT301"],
  "Sistemas Lineares": ["EM13MAT301"],
  "Sistemas Não-Lineares": ["EM13MAT301"],
  "Matrizes": ["EM13MAT301"],
  "Operações com Matrizes": ["EM13MAT301"],
  "Matriz Inversa": ["EM13MAT301"],
  "Determinantes": ["EM13MAT301"],
  "Regra de Cramer": ["EM13MAT301"],
  "Escalonamento de Matrizes": ["EM13MAT301"],
  // Funções
  "Funções": ["EM13MAT101", "EM13MAT401", "EM13MAT402", "EM13MAT404"],
  "Função Afim": ["EM13MAT302", "EM13MAT401", "EM13MAT501", "EM13MAT507"],
  "Função Linear": ["EM13MAT401", "EM13MAT501"],
  "Função Constante": ["EM13MAT401"],
  "Função Quadrática": ["EM13MAT302", "EM13MAT402", "EM13MAT502", "EM13MAT503"],
  "Função Modular": ["EM13MAT405"],
  "Função Polinomial": ["EM13MAT302"],
  "Função Exponencial": ["EM13MAT304", "EM13MAT403", "EM13MAT508"],
  "Função Logarítmica": ["EM13MAT305", "EM13MAT403"],
  "Logaritmos": ["EM13MAT305", "EM13MAT403"],
  "Propriedades dos Logaritmos": ["EM13MAT305"],
  "Função Composta": ["EM13MAT404"],
  "Função Inversa": ["EM13MAT404"],
  "Domínio e Imagem": ["EM13MAT404", "EM13MAT405"],
  "Funções Pares e Ímpares": ["EM13MAT405"],
  "Crescimento e Decrescimento de Funções": ["EM13MAT403", "EM13MAT404"],
  "Estudo do Sinal": ["EM13MAT302"],
  "Raízes de Funções": ["EM13MAT302"],
  "Vértice da Parábola": ["EM13MAT402", "EM13MAT503"],
  // Sequências
  "Sequências Numéricas": ["EM13MAT507", "EM13MAT508"],
  "Progressão Aritmética": ["EM13MAT507"],
  "Progressão Geométrica": ["EM13MAT508"],
  "Soma de PA": ["EM13MAT507"],
  "Soma de PG": ["EM13MAT508"],
  "PG Infinita": ["EM13MAT508"],
  // Trigonometria
  "Trigonometria": ["EM13MAT306", "EM13MAT308"],
  "Trigonometria no Triângulo Retângulo": ["EM13MAT308"],
  "Razões Trigonométricas": ["EM13MAT308"],
  "Seno": ["EM13MAT306", "EM13MAT308"],
  "Cosseno": ["EM13MAT306", "EM13MAT308"],
  "Tangente": ["EM13MAT306", "EM13MAT308"],
  "Cotangente": ["EM13MAT306"],
  "Secante": ["EM13MAT306"],
  "Cossecante": ["EM13MAT306"],
  "Lei dos Senos": ["EM13MAT308"],
  "Lei dos Cossenos": ["EM13MAT308"],
  "Área do Triângulo (Trigonometria)": ["EM13MAT201", "EM13MAT308"],
  "Ciclo Trigonométrico": ["EM13MAT306"],
  "Arcos e Ângulos": ["EM13MAT306"],
  "Conversão Grau-Radiano": ["EM13MAT306"],
  "Funções Trigonométricas": ["EM13MAT306"],
  "Equações Trigonométricas": ["EM13MAT306"],
  "Identidades Trigonométricas": ["EM13MAT306"],
  "Relações Trigonométricas Fundamentais": ["EM13MAT306"],
  "Soma e Diferença de Arcos": ["EM13MAT306"],
  "Arco Duplo": ["EM13MAT306"],
  "Arco Metade": ["EM13MAT306"],
  // Geometria Plana
  "Geometria Plana": ["EM13MAT105", "EM13MAT201", "EM13MAT307"],
  "Ponto, Reta e Plano": [],
  "Ângulos": ["EM13MAT105"],
  "Ângulos entre Paralelas": ["EM13MAT105"],
  "Triângulos": ["EM13MAT308"],
  "Classificação de Triângulos": ["EM13MAT308"],
  "Soma dos Ângulos Internos": [],
  "Triângulos Semelhantes": ["EM13MAT308"],
  "Semelhança de Triângulos": ["EM13MAT308"],
  "Congruência de Triângulos": ["EM13MAT308"],
  "Teorema de Pitágoras": ["EM13MAT308"],
  "Teorema de Tales": ["EM13MAT308"],
  "Relações Métricas no Triângulo Retângulo": ["EM13MAT308"],
  "Quadriláteros": ["EM13MAT307"],
  "Paralelogramos": ["EM13MAT307"],
  "Trapézios": ["EM13MAT307"],
  "Losango": ["EM13MAT307"],
  "Retângulo": ["EM13MAT307"],
  "Quadrado": ["EM13MAT307"],
  "Polígonos": ["EM13MAT307", "EM13MAT505", "EM13MAT506"],
  "Polígonos Regulares": ["EM13MAT505", "EM13MAT506"],
  "Soma dos Ângulos de Polígonos": ["EM13MAT506"],
  "Circunferência e Círculo": ["EM13MAT307"],
  "Comprimento da Circunferência": ["EM13MAT307"],
  "Área do Círculo": ["EM13MAT201", "EM13MAT307"],
  "Setor Circular": ["EM13MAT307"],
  "Coroa Circular": ["EM13MAT307"],
  "Áreas de Figuras Planas": ["EM13MAT201", "EM13MAT307", "EM13MAT506"],
  "Perímetro": ["EM13MAT201"],
  // Geometria Espacial
  "Geometria Espacial": ["EM13MAT201", "EM13MAT309", "EM13MAT504"],
  "Sólidos Geométricos": ["EM13MAT309", "EM13MAT504"],
  "Poliedros": ["EM13MAT309"],
  "Relação de Euler": ["EM13MAT309"],
  "Prismas": ["EM13MAT309", "EM13MAT504"],
  "Paralelepípedo": ["EM13MAT309", "EM13MAT504"],
  "Cubo": ["EM13MAT309", "EM13MAT504"],
  "Pirâmides": ["EM13MAT309", "EM13MAT504"],
  "Cilindros": ["EM13MAT309", "EM13MAT504"],
  "Cones": ["EM13MAT309", "EM13MAT504"],
  "Tronco de Cone": ["EM13MAT309"],
  "Esferas": ["EM13MAT309"],
  "Volumes": ["EM13MAT201", "EM13MAT309", "EM13MAT504"],
  "Áreas de Superfícies": ["EM13MAT201", "EM13MAT307", "EM13MAT309"],
  "Princípio de Cavalieri": ["EM13MAT504"],
  // Geometria Analítica
  "Geometria Analítica": ["EM13MAT401", "EM13MAT402"],
  "Plano Cartesiano": ["EM13MAT401"],
  "Ponto e Distância": [],
  "Distância entre Dois Pontos": [],
  "Ponto Médio": [],
  "Coordenadas Cartesianas": ["EM13MAT401"],
  "Equação da Reta": ["EM13MAT401"],
  "Coeficiente Angular": ["EM13MAT401"],
  "Posições Relativas entre Retas": ["EM13MAT401"],
  "Distância de Ponto à Reta": [],
  "Equação da Circunferência": [],
  "Posições Relativas entre Reta e Circunferência": [],
  "Cônicas": [], "Elipse": [], "Hipérbole": [], "Parábola": ["EM13MAT402"],
  // Análise Combinatória / Probabilidade
  "Análise Combinatória": ["EM13MAT310"],
  "Princípio Fundamental da Contagem": ["EM13MAT310"],
  "Princípio Aditivo": ["EM13MAT310"],
  "Fatorial": ["EM13MAT310"],
  "Permutações": ["EM13MAT310"],
  "Permutações com Repetição": ["EM13MAT310"],
  "Permutações Circulares": ["EM13MAT310"],
  "Arranjos": ["EM13MAT310"],
  "Combinações": ["EM13MAT310"],
  "Combinações com Repetição": ["EM13MAT310"],
  "Probabilidade": ["EM13MAT106", "EM13MAT311", "EM13MAT312", "EM13MAT511"],
  "Probabilidade Condicional": ["EM13MAT311", "EM13MAT312", "EM13MAT511"],
  "Probabilidade da União": ["EM13MAT311", "EM13MAT312"],
  "Probabilidade da Intersecção": ["EM13MAT311", "EM13MAT312"],
  "Eventos Independentes": ["EM13MAT311", "EM13MAT312", "EM13MAT511"],
  "Eventos Mutuamente Exclusivos": ["EM13MAT311", "EM13MAT511"],
  "Binômio de Newton": ["EM13MAT310"],
  "Triângulo de Pascal": ["EM13MAT310"],
  // Estatística
  "Estatística": ["EM13MAT102", "EM13MAT202", "EM13MAT316", "EM13MAT406", "EM13MAT407"],
  "Estatística Descritiva": ["EM13MAT202", "EM13MAT316"],
  "População e Amostra": ["EM13MAT202", "EM13MAT406"],
  "Frequência Absoluta e Relativa": ["EM13MAT406"],
  "Distribuição de Frequências": ["EM13MAT406", "EM13MAT407"],
  "Média": ["EM13MAT202", "EM13MAT316"],
  "Média Aritmética": ["EM13MAT316"],
  "Média Ponderada": ["EM13MAT316"],
  "Mediana": ["EM13MAT202", "EM13MAT316"],
  "Moda": ["EM13MAT202", "EM13MAT316"],
  "Desvio Padrão": ["EM13MAT202", "EM13MAT316"],
  "Variância": ["EM13MAT316"],
  "Amplitude": ["EM13MAT316"],
  "Quartis": ["EM13MAT316", "EM13MAT407"],
  "Gráficos e Tabelas": ["EM13MAT102", "EM13MAT406", "EM13MAT407"],
  "Histograma": ["EM13MAT406", "EM13MAT407"],
  "Box-plot": ["EM13MAT407"],
  "Gráfico de Setores": ["EM13MAT102", "EM13MAT406"],
  "Amostragem": ["EM13MAT202", "EM13MAT406"],
  "Pesquisa Estatística": ["EM13MAT202"],
  // Complexos
  "Forma Algébrica de Complexos": [],
  "Forma Trigonométrica de Complexos": [],
  "Operações com Complexos": [],
  "Módulo e Argumento": [],
  "Plano de Argand-Gauss": [],
  "Fórmula de De Moivre": [],
  "Raízes de Números Complexos": [],
  // Polinômios avançado
  "Teorema do Resto": ["EM13MAT301"],
  "Teorema de D'Alembert": ["EM13MAT301"],
  "Dispositivo de Briot-Ruffini": ["EM13MAT301"],
  "Equações Polinomiais": ["EM13MAT301"],
  "Relações de Girard": ["EM13MAT301"],
  "Multiplicidade de Raízes": ["EM13MAT301"],
  // Outros
  "Grandezas e Medidas": ["EM13MAT103", "EM13MAT201", "EM13MAT314"],
  "Notação Científica": ["EM13MAT313"],
  "Unidades de Medida": ["EM13MAT103"],
  "Conversão de Unidades": ["EM13MAT103"],
  "Sistema Internacional": ["EM13MAT103"],
  "Lógica Matemática": ["EM13MAT315"],
  "Tabela Verdade": ["EM13MAT315"],
  "Conectivos Lógicos": ["EM13MAT315"],
  "Raciocínio Lógico": ["EM13MAT315"],
  "Sequências Lógicas": ["EM13MAT315"],
  "Matemática do Cotidiano": ["EM13MAT104", "EM13MAT203"],
  "Resolução de Problemas": ["EM13MAT301", "EM13MAT302"]
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

// Palavras curtas/comuns que não ajudam no matching
const STOPWORDS = new Set(["de","da","do","das","dos","e","com","ou","em","a","o","as","os","no","na","nos","nas","para","por","um","uma","entre"]);

// Dado um conjunto de temas, retorna BNCC sugeridos (deduplicado, ordenado).
// Combina mapeamento direto + busca fuzzy de palavras-chave do tema nas descrições da BNCC.
export function bnccSugeridos(temasSelecionados) {
  const set = new Set();
  for (const tema of temasSelecionados) {
    // 1) mapeamento direto
    const codes = THEME_TO_BNCC[tema] || [];
    for (const c of codes) set.add(c);

    // 2) busca fuzzy: extrai palavras-chave significativas do tema e procura em cada descrição
    const words = normalize(tema)
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length >= 4 && !STOPWORDS.has(w));
    if (!words.length) continue;
    for (const [code, desc] of Object.entries(BNCC_CODES)) {
      const ndesc = normalize(desc);
      let hits = 0;
      for (const w of words) if (ndesc.includes(w)) hits++;
      // Exige que ao menos metade das palavras-chave apareçam, e pelo menos 1
      if (hits >= Math.max(1, Math.ceil(words.length / 2))) set.add(code);
    }
  }
  return Array.from(set).sort();
}
