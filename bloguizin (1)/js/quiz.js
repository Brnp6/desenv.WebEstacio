// Define um array chamado "questions" que contém três objetos, cada um representando uma pergunta no quiz.
const questions = [
    {
        question: "O que é o retinoblastoma?",
        answers: {
            A: "Um tipo de câncer ocular ", 
            B: "Uma doença cardiovascular",
            C: "Um vírus comum",
        },
        correctAnswer: "A"
    },
    {
        question: " Quais são os sintomas comuns do retinoblastoma?",
        answers: {
            A: "Vômito, sangramento e náuseas",
            B: "Reflexo branco em fotos, estrabismo,perca de visãorianças",
            C: " Dores musculares e atrofiamento muscular"
        },
        correctAnswer: "B"
    },
    {
        question: "Retinoblastoma tem tratamento?",
        answers: {
            A: "Sim, tanto com radioterapia, enucleiação e crioterapia",
            B: "Não, é uma doença terminal",
            C: " Talvez, com tratamentos com pouca chance de resultados."
        },
        correctAnswer: "A"
    }
];

// Inicializa variáveis para rastrear o estado do quiz.
let currentQuestionIndex = 0;
let userAnswers = [];

// Obtém referências a elementos HTML por meio de seus IDs.
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result");

// Função para exibir uma pergunta no quiz.
function showQuestion() {
    // Obtém a pergunta atual com base no índice atual.
    const currentQuestion = questions[currentQuestionIndex];

    // Atualiza o texto da pergunta no elemento HTML.
    questionContainer.textContent = `Questão ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    // Limpa as opções anteriores e cria opções de resposta para a pergunta atual.
    optionsContainer.innerHTML = "";
    for (const option in currentQuestion.answers) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(` ${currentQuestion.answers[option]}`));
        optionsContainer.appendChild(label);
    }
}

// Função para exibir o resultado do quiz.
function showResult() {
    // Esconde elementos relacionados às perguntas e opções.
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    submitButton.style.display = "none";

    // Exibe o contêiner de resultados e calcula a quantidade de respostas corretas.
    resultContainer.style.display = "block";
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    resultText.textContent = `Você acertou ${correctAnswers} de ${questions.length} questões.`;
}

// Inicialmente, exibe a primeira pergunta no quiz.
showQuestion();

// Adiciona um ouvinte de evento para o botão de envio.
submitButton.addEventListener("click", function() {
    // Verifica se uma resposta foi selecionada.
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (selectedAnswer) {
        // Armazena a resposta do usuário e avança para a próxima pergunta ou exibe o resultado final.
        userAnswers.push(selectedAnswer.value);
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResult();
        }
    }
});