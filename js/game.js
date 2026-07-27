// Blair's Fish ID Game
//
// Question types are pluggable: each generator takes a species and the full
// list, and returns { imageSrc, prompt, options, correctIndex, funFact }.
// Only "species" is enabled today; "sizeLimit" and "habitat" generators are
// ready below and can be switched on by adding them to ENABLED_QUESTION_TYPES
// once the imported data reliably has those fields.

(function () {
  "use strict";

  var OPTION_COUNT = 4;
  var ENABLED_QUESTION_TYPES = ["species"];

  var QUESTION_GENERATORS = {
    // "Which fish is this?" — picture shown, names as options.
    species: function (fish, allSpecies) {
      var wrong = pickRandom(
        allSpecies.filter(function (s) { return s.id !== fish.id; }),
        OPTION_COUNT - 1
      ).map(function (s) { return s.commonName; });
      var options = shuffle(wrong.concat(fish.commonName));
      return {
        imageSrc: fish.image,
        prompt: "Which fish is this?",
        options: options,
        correctIndex: options.indexOf(fish.commonName),
        funFact: buildFact(fish)
      };
    },

    // Future: "What is the size limit for the <name>?"
    sizeLimit: function (fish, allSpecies) {
      if (!fish.sizeLimit) return null;
      var wrong = pickRandom(
        allSpecies.filter(function (s) {
          return s.id !== fish.id && s.sizeLimit && s.sizeLimit !== fish.sizeLimit;
        }),
        OPTION_COUNT - 1
      ).map(function (s) { return s.sizeLimit; });
      if (wrong.length < OPTION_COUNT - 1) return null;
      var options = shuffle(wrong.concat(fish.sizeLimit));
      return {
        imageSrc: fish.image,
        prompt: "What is the size limit for the " + fish.commonName + "?",
        options: options,
        correctIndex: options.indexOf(fish.sizeLimit),
        funFact: buildFact(fish)
      };
    },

    // Future: "Where does the <name> live?"
    habitat: function (fish, allSpecies) {
      if (!fish.habitat) return null;
      var wrong = pickRandom(
        allSpecies.filter(function (s) {
          return s.id !== fish.id && s.habitat && s.habitat !== fish.habitat;
        }),
        OPTION_COUNT - 1
      ).map(function (s) { return s.habitat; });
      if (wrong.length < OPTION_COUNT - 1) return null;
      var options = shuffle(wrong.concat(fish.habitat));
      return {
        imageSrc: fish.image,
        prompt: "Where does the " + fish.commonName + " live?",
        options: options,
        correctIndex: options.indexOf(fish.habitat),
        funFact: buildFact(fish)
      };
    }
  };

  function buildFact(fish) {
    var bits = [];
    if (fish.funFact) bits.push(fish.funFact);
    if (fish.sizeLimit) bits.push("Size limit: " + fish.sizeLimit + ".");
    if (fish.habitat) bits.push("Found in: " + fish.habitat.toLowerCase() + ".");
    return bits.join(" ");
  }

  // ---- helpers ----

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pickRandom(list, n) {
    return shuffle(list).slice(0, n);
  }

  // ---- game state ----

  var species = (window.FISH_DATA && window.FISH_DATA.species) || [];
  var questions = [];
  var current = 0;
  var score = 0;

  var el = {
    startScreen: document.getElementById("start-screen"),
    questionScreen: document.getElementById("question-screen"),
    resultsScreen: document.getElementById("results-screen"),
    startButton: document.getElementById("start-button"),
    questionCount: document.getElementById("question-count"),
    progress: document.getElementById("progress"),
    score: document.getElementById("score"),
    fishImage: document.getElementById("fish-image"),
    questionText: document.getElementById("question-text"),
    answers: document.getElementById("answers"),
    feedback: document.getElementById("feedback"),
    feedbackText: document.getElementById("feedback-text"),
    funFact: document.getElementById("fun-fact"),
    nextButton: document.getElementById("next-button"),
    resultsScore: document.getElementById("results-score"),
    resultsMessage: document.getElementById("results-message"),
    playAgainButton: document.getElementById("play-again-button")
  };

  function showScreen(screen) {
    [el.startScreen, el.questionScreen, el.resultsScreen].forEach(function (s) {
      s.classList.toggle("active", s === screen);
    });
  }

  function buildQuestions(count) {
    var pool = shuffle(species);
    if (count !== "all") pool = pool.slice(0, Number(count));
    var built = [];
    pool.forEach(function (fish) {
      var types = shuffle(ENABLED_QUESTION_TYPES);
      for (var i = 0; i < types.length; i++) {
        var q = QUESTION_GENERATORS[types[i]](fish, species);
        if (q) { built.push(q); break; }
      }
    });
    return shuffle(built);
  }

  function startGame() {
    questions = buildQuestions(el.questionCount.value);
    current = 0;
    score = 0;
    showScreen(el.questionScreen);
    renderQuestion();
  }

  function renderQuestion() {
    var q = questions[current];
    el.progress.textContent = "Question " + (current + 1) + " of " + questions.length;
    el.score.textContent = "Score: " + score;
    el.fishImage.src = q.imageSrc;
    el.questionText.textContent = q.prompt;
    el.feedback.classList.add("hidden");
    el.answers.innerHTML = "";
    q.options.forEach(function (option, index) {
      var button = document.createElement("button");
      button.className = "answer-button";
      button.textContent = option;
      button.addEventListener("click", function () { answer(index, button); });
      el.answers.appendChild(button);
    });
  }

  function answer(index, clickedButton) {
    var q = questions[current];
    var buttons = el.answers.querySelectorAll(".answer-button");
    buttons.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.correctIndex) b.classList.add("correct");
      else if (b === clickedButton) b.classList.add("wrong");
      else b.classList.add("dimmed");
    });
    var right = index === q.correctIndex;
    if (right) score++;
    el.score.textContent = "Score: " + score;
    el.feedbackText.textContent = right
      ? pickRandom(["🎉 You got it!", "⭐ Amazing!", "🐠 Great catch!", "✨ Well done!"], 1)[0]
      : "Not quite — it's a " + q.options[q.correctIndex] + "!";
    el.funFact.textContent = q.funFact || "";
    el.funFact.style.display = q.funFact ? "" : "none";
    el.nextButton.textContent = current + 1 < questions.length ? "Next Fish ➜" : "See My Score 🏆";
    el.feedback.classList.remove("hidden");
    el.feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function nextQuestion() {
    current++;
    if (current < questions.length) renderQuestion();
    else showResults();
  }

  function showResults() {
    showScreen(el.resultsScreen);
    el.resultsScore.textContent = score + " / " + questions.length;
    var ratio = questions.length ? score / questions.length : 0;
    el.resultsMessage.textContent =
      ratio === 1 ? "Perfect score! You're a true fish expert! 🏆" :
      ratio >= 0.7 ? "Fantastic fishing knowledge! 🎣" :
      ratio >= 0.4 ? "Good try! Keep practising and you'll be an expert soon. 🐟" :
      "Every angler starts somewhere — play again to learn the fish! 🌊";
  }

  el.startButton.addEventListener("click", startGame);
  el.nextButton.addEventListener("click", nextQuestion);
  el.playAgainButton.addEventListener("click", function () { showScreen(el.startScreen); });
})();
