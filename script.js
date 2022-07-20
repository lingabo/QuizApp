const userName = document.querySelector("#nom");
const Emailuser = document.querySelector("#email");
const form = document.querySelector("form");
const ButtonSubmit = document.querySelector(".btn");
const PageAccueil = document.querySelector(".main");
const PageQuiz = document.querySelector(".main2");
const PageScore = document.querySelector(".main3");

//click sur le button commencer on declenche un event click
ButtonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  validateInputs();
});
// Déclaration des variables pour la validation du formulaire

let ErrorMessageNom = document.createElement("span");
let ErrorMessageEmail = document.createElement("span");
ErrorMessageNom.textContent = "";
ErrorMessageEmail.textContent = "";
userName.after(ErrorMessageNom);
Emailuser.after(ErrorMessageEmail);

ErrorMessageNom.classList.add("error1");
ErrorMessageEmail.classList.add("error1");

// creation de questions et reponses en objets
var questions = [
  {
    id: 1,
    question: "Dans une boucle while, il faut pensé à ______ la valeur ?",
    correctResponse: "increnter",
    SelectQuestion: ["Recuperer", "définir", "stocker", "incrémenter"],
  },

  {
    id: 2,
    question:
      "Pour utiliser une boucle for sur les éléments d'un array,on utiise le mot clé ______  ?",
    correctResponse: "in",
    SelectQuestion: ["between", "loop", "each", "in"],
  },

  {
    id: 3,
    question: "Le mot-clé _______ arrête les itérations d'une boucle?",
    correctResponse: "exit",
    SelectQuestion: ["quit", "exit", "break", "leave"],
  },
  {
    id: 4,
    question: "L'operateur de comparaison d'égalité est _______ ?",
    correctResponse: "==",
    SelectQuestion: ["eq", "=", "==", "-eq"],
  },

  {
    id: 5,
    question: "L'operateur ternaire commence par le symbole_______.",
    correctResponse: "?",
    SelectQuestion: ["$", ":", "%", "?"],
  },
  {
    id: 6,
    question:
      "La syntaxe conditionnelle commence par 'IF' et peut contenir un _______ .",
    correctResponse: "else",
    SelectQuestion: ["elseif", "elsif", "elif", "else"],
  },

  {
    id: 7,
    question: "La methode qui permet d'écouter un événement en javascript",
    correctResponse: "addEventListener",
    SelectQuestion: ["Add.eventListener", "addEventListener", "breakevet", "addEv"],
  },
  {
    id: 8,
    question:
      "Laquelle des fonctions suivantes de l'objet String divise un objet String en un tableau de chaînes de caractères en séparant la chaîne de caractères en sous-chaînes ?",
    correctResponse: "split()",
    SelectQuestion: ["split()", "slice()", "replace()", "search()"],
  },
  {
    id: 9,
    question:
      "Laquelle des fonctions suivantes de l'objet Number définit le nombre total de chiffres à afficher d'un nombre ?",
    correctResponse: "toPrecision()",
    SelectQuestion: [
      "toExponential()",
      "toLocaleString()",
      "toPrecision()",
      "toFixed()",
    ],
  },
  {
    id: 10,
    question:
      "Laquelle des fonctions suivantes de l'objet String renvoie la valeur de la chaîne de caractères appelante convertie en majuscules ?",
    correctResponse: "toUpperCase()",
    SelectQuestion: [
      "toLocaleUpperCase()",
      "toUpperCase()",
      "substring()",
      "toString()",
    ],
  },
  {
    id: 11,
    question:
      "Quelle méthode intégrée ajoute un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau ?",
    correctResponse: "push()",
    SelectQuestion: ["last()", "None of the above.", "push()", "put()"],
  },
  {
    id: 12,
    question:
      "Laquelle des fonctions suivantes de l'objet Array renvoie un nouveau tableau composé de ce tableau joint à d'autres tableaux et/ou valeurs ?",
    correctResponse: "concat()",
    SelectQuestion: ["some()", "pop()", "concat()", "push()"],
  },
  {
    id: 13,
    question:
      "Laquelle des fonctions suivantes de l'objet Array joint tous les éléments d'un tableau en une chaîne de caractères ?",
    correctResponse: "join()",
    SelectQuestion: ["concat()", "join()", "pop()", "map()"],
  },
  {
    id: 14,
    question:
      "Quelle méthode est utilisée pour accèder au contenu de l'élément d'un Object en JavaScript",
    correctResponse: "Object.element",
    SelectQuestion: [
      "Object.element",
      "Object{element}",
      "Object(element)",
      "Object[element]",
    ],
  },
  {
    id: 15,
    question:
      "Lequel des énoncés suivants est correct concernant les caractéristiques de JavaScript ?",
    correctResponse: "Toutes ces réponses",
    SelectQuestion: [
      "JavaScript est un langage de programmation interprété et léger",
      "JavaScript est conçu pour créer des applications centrées sur le réseau",
      "Toutes ces réponses",
      "JavaScript est complémentaire et intégré à Java",
    ],
  },
];

//Traitement des questions

let indexitems = 0;
let userScore = 0;
let reponSelected = "";
const TitreDuquestion = document.querySelector(".main2 .title");
const containerQuestion = document.querySelector(".containerQuestion");
const formQuestion = document.querySelector(".form-Question");

function QuestionsForms(indexitems) {
  document.title1 = "JavaScript QuizApp | Questions ";

  let QuestionTexte = `<span>${questions[indexitems].question}</span>`;
  TitreDuquestion.innerHTML = QuestionTexte;
  containerQuestion.innerHTML =
  
    `<div class="status">` +
    `<p class="question__number">Question  ${indexitems + 1}/15 </p>` +
    `<div class="timercounter">` +
    `</div>` +
    `</div>` +
    `<div class="progressbar__container">` +
    `<div class="progressbar">` +
    `</div>` +
    `</div > `;

  formQuestion.innerHTML =
    `<div class="answer__container">` +
    `<input type="radio" class="answer" id="firstAnswerSuggested" name="answer" value="${questions[indexitems].SelectQuestion[3]}">` +
    `<label for="firstAnswerSuggested"> ${questions[indexitems].SelectQuestion[3]} </label>` +
    `</div>` +
    `<div class="answer__container">` +
    `<input type="radio" class="answer" id="firstAnswerSuggested" name="answer" value="${questions[indexitems].SelectQuestion[2]}">` +
    `<label for="secondAnswerSuggested"> ${questions[indexitems].SelectQuestion[2]} </label>` +
    `</div>` +
    `<div class="answer__container">` +
    `<input type="radio" class="answer" id="firstAnswerSuggested" name="answer" value="${questions[indexitems].SelectQuestion[1]}">` +
    `<label for="thirdAnswerSuggested"> ${questions[indexitems].SelectQuestion[1]} </label>` +
    `</div>` +
    `<div class="answer__container">` +
    `<input type="radio" class="answer" id="firstAnswerSuggested" name="answer" value="${questions[indexitems].SelectQuestion[0]}">` +
    `<label for="fourthAnswerSuggested"> ${questions[indexitems].SelectQuestion[0]} </label>` +
    `</div>` +
    `<div class="buttonContainer">` +
    `<input type="button" value="Quitter" class="exitButton">` +
    `<input type="button" value="Suivant" class="suivant" disabled>` +
    `</div>`;

  const nextQuestionButton = document.querySelector(".suivant");
  const answers = document.querySelectorAll("input[name='answer']");

  function checkAnswer() {
    for (const answer of answers) {
      answer.addEventListener(
        "click",
        (changeAnswer = () => {
          nextQuestionButton.disabled = false;
          reponSelected = answer.value;
        })
      );
    }
  }
  if (indexitems === questions.length - 1) {
    nextQuestionButton.value = "Terminer";
  }

  nextQuestionButton.addEventListener("click", (e) => {
    e.preventDefault();
    nextQuestion();
  });
  const nextQuestion = () => {
    clearInterval(countTime);
    countTime = 0;
    if (indexitems < questions.length - 1) {
      // Get user current score
      AvoirUserScore();
      indexitems++;
      // Show next question
      QuestionsForms(indexitems);
      // Restart progress bar
      startProgress(100);
    } else {
      // On last question
      AvoirUserScore();

      PageScore.style.display = "flex";

      AfficherScore();
      PageQuiz.style.display = "none";
    }
  };

  function AvoirUserScore() {
    let correctResponse = questions[indexitems].correctResponse;

    if (reponSelected == correctResponse) {
      userScore++;
      reponSelected = "";
    } else {
      userScore = userScore;
    }
  }

  const timeCounter = document.querySelector(".timercounter");

  let countTime = 0;

  const startTime = (time) => {
    const timer = () => {
      time--;

      timeCounter.textContent = time;

      if (time < 9) {
        let addZero = timeCounter.textContent;
        timeCounter.textContent = "0" + addZero;
      }
      if (time < 0) {
        clearInterval(countTime);
        nextQuestion();
      }
    };
    countTime = setInterval(timer, 1000);
  };

  const progressBar = document.querySelector(".progressbar");
  let progressLine = 0;
  const startProgress = (widthBar) => {
    const widthProgessBar = () => {
      widthBar -= 1.66666665;

      progressBar.style.width = widthBar + "%";

      if (widthBar < 1) {
        clearInterval(progressLine);
      }
    };
    progressLine = setInterval(widthProgessBar, 1000);
  };

  startTime(60);
  startProgress(100);
  checkAnswer();
  const exitButton = document.querySelector(".exitButton");

  const exitQuiz = () => {
    clearInterval(countTime);
    countTime = 0;

    AvoirUserScore();

    PageScore.style.display = "flex";

    AfficherScore();
    PageQuiz.style.display = "none";
  };

  exitButton.addEventListener("click", exitQuiz);
}

//debut de la validation du questions du formulaire
function validateInputs() {
  const validNameok = new RegExp(/(?=.*[a-zA-Z.]{2,})/);
  const validEmailok = new RegExp(/(?=.*@)/);

  const validName = userName.value.match(validNameok);
  const validEmail = Emailuser.value.match(validEmailok);

  if (validName == null) {
    userName.style.border = "1px solid red";
    ErrorMessageNom.textContent =
      "N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";
  } else {
    userName.style.border = "1px solid green";
    localStorage.setItem("userN", userName.value);
    ErrorMessageNom.textContent = "";
  }

  if (validEmail == null) {
    Emailuser.style.border = "1px solid red";
    ErrorMessageEmail.textContent =
      "N’oubliez pas de renseigner votre email avant de commencer le Quiz.";
  } else {
    Emailuser.style.border = "1px solid green";
    localStorage.setItem("userEmail", Emailuser.value);
    ErrorMessageNom.textContent = "";
  }

  if (validName !== null && validEmail !== null) {
    PageAccueil.style.display = "none";
    PageQuiz.style.display = "flex";
    form.reset();
    QuestionsForms(0);
  }
}

//fin de validation

//afficher score de user
function AfficherScore() {
  document.title = "JavaScript Quiz APP | Result";

  const userName = localStorage.getItem("userN");
  const userMail = localStorage.getItem("userEmail");

  PageScore.innerHTML =
    '<div class="formulaire3">' +
    `<h2 class="username">${userName}</h2>` +
    `<p class="usermail">${userMail}</p>` +
    `<div class="icon__container">
            <p><i class="lni "></i></p>
        </div>` +
    `<div class="userscore__container">
        <p class="userscore">${userScore}/15</p>
        </div>` +
    '<div class="btnAccueil">' +
    `<button class="backToHome">Accueil</button> </div>` +
    "</div>";

  const icon__container = document.querySelector(".icon__container");
  const lasIcon = document.querySelector(".lni");

  if (userScore <= 7) {
    icon__container.classList.add("failed");
    lasIcon.classList.add("lni-cross-circle");
  } else {
    icon__container.classList.add("success");
    lasIcon.classList.add("lni-checkmark-circle");
  }

  const backToHome = document.querySelector(".backToHome");

  backToHome.addEventListener(
    "click",
    (homeReturn = () => {
      window.location.reload();
    })
  );
}
