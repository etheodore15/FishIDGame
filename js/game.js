// Blair's Fish ID Game
//
// Question types are pluggable: each generator takes a species and the full
// list, and returns { imageSrc, prompt, options, correctIndex, fish }.
// Only "species" is enabled today; a "habitat" generator is ready below and
// can be switched on by adding it to ENABLED_QUESTION_TYPES.
//
// Note: no question type asks about fishing regulations (size/bag limits,
// seasons) — those change over time and are intentionally not part of the game.

(function () {
  "use strict";

  var OPTION_COUNT = 4;
  var ENABLED_QUESTION_TYPES = ["species"];

  // After answering, the fact screen keeps the "Next" button locked for this
  // many seconds so there is time to read the facts.
  var FACT_GATE_SECONDS = 10;

  // Not every species is a fish — the guide also includes crabs, lobsters,
  // squid, oysters and other shellfish. "Which fish is this?" doesn't fit
  // those, so the prompt adapts.
  var NON_FISH = /mollusc|gastropod|oyster|mussel|clam|cockle|pipi|\bscallops?\b|\bark\b|whelk|squid|cuttlefish|octopus|crab|lobster|\bbug\b|crayfish|yabby|redclaw|blueclaw|prawn|shrimp|beche-de-mer|teatfish|sea cucumber|bivalve/i;
  function isFish(fish) {
    return !(NON_FISH.test(fish.category || "") || NON_FISH.test(fish.commonName || ""));
  }

  var QUESTION_GENERATORS = {
    // "Which fish is this?" (or "Which species is this?" for shellfish etc.)
    species: function (fish, allSpecies) {
      var wrong = pickRandom(
        allSpecies.filter(function (s) { return s.id !== fish.id; }),
        OPTION_COUNT - 1
      ).map(function (s) { return s.commonName; });
      var options = shuffle(wrong.concat(fish.commonName));
      return {
        imageSrc: fish.image,
        prompt: isFish(fish) ? "Which fish is this?" : "Which species is this?",
        options: options,
        correctIndex: options.indexOf(fish.commonName),
        fish: fish
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
        fish: fish
      };
    }
  };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Build a labelled fact-file for a fish from whatever fields it has.
  // Returns HTML for #fact-sheet.
  function factSheetHtml(fish) {
    var rows = [];
    var lead = fish.didYouKnow || fish.funFact;
    if (lead) rows.push('<p class="fact-lead">💡 ' + esc(lead) + "</p>");

    function row(label, value) {
      if (value) rows.push('<p class="fact-row"><span class="fact-label">' +
        label + ":</span> " + value + "</p>");
    }
    if (fish.scientificName) row("Scientific name", "<i>" + esc(fish.scientificName) + "</i>");
    row("Group", fish.category && esc(fish.category));
    row("Typical size", fish.sizeRange && esc(fish.sizeRange));

    var where = [];
    if (fish.habitat) where.push(esc(fish.habitat));
    if (fish.distribution) where.push(esc(fish.distribution));
    row("Where it lives", where.join("; "));

    row("Often confused with", fish.misId && esc(fish.misId));
    return rows.join("");
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

  // Merge optional extra facts (scientific name, family, size range,
  // distribution, misId, didYouKnow) from data/details.js onto each species.
  var details = window.FISH_DETAILS || {};
  species.forEach(function (s) {
    var d = details[s.id];
    if (d) for (var k in d) if (d.hasOwnProperty(k) && !s[k]) s[k] = d[k];
  });

  var questions = [];
  var current = 0;
  var score = 0;

  var gateTimer = null;

  var el = {
    startScreen: document.getElementById("start-screen"),
    questionScreen: document.getElementById("question-screen"),
    factScreen: document.getElementById("fact-screen"),
    resultsScreen: document.getElementById("results-screen"),
    startButton: document.getElementById("start-button"),
    questionCount: document.getElementById("question-count"),
    progress: document.getElementById("progress"),
    score: document.getElementById("score"),
    fishImage: document.getElementById("fish-image"),
    questionText: document.getElementById("question-text"),
    answers: document.getElementById("answers"),
    factImage: document.getElementById("fact-image"),
    factProgress: document.getElementById("fact-progress"),
    factScore: document.getElementById("fact-score"),
    feedbackText: document.getElementById("feedback-text"),
    factSheet: document.getElementById("fact-sheet"),
    nextButton: document.getElementById("next-button"),
    resultsScore: document.getElementById("results-score"),
    resultsMessage: document.getElementById("results-message"),
    playAgainButton: document.getElementById("play-again-button")
  };

  function showScreen(screen) {
    [el.startScreen, el.questionScreen, el.factScreen, el.resultsScreen].forEach(function (s) {
      s.classList.toggle("active", s === screen);
    });
    window.scrollTo(0, 0);
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
    buttons.forEach(function (b) { b.disabled = true; });
    var right = index === q.correctIndex;
    if (right) score++;

    // Move to the fact screen showing the fish, the result and the facts.
    el.factImage.src = q.imageSrc;
    el.factProgress.textContent = "Question " + (current + 1) + " of " + questions.length;
    el.factScore.textContent = "Score: " + score;
    el.feedbackText.textContent = right
      ? pickRandom(["🎉 You got it!", "⭐ Amazing!", "🐠 Great catch!", "✨ Well done!"], 1)[0]
      : "Not quite — you picked " + q.options[index] + ". It's a " + q.options[q.correctIndex] + "!";
    el.feedbackText.className = right ? "result-right" : "result-wrong";
    el.factSheet.innerHTML = factSheetHtml(q.fish || {});
    showScreen(el.factScreen);
    startNextGate();
  }

  // Lock the Next button for FACT_GATE_SECONDS, counting down, so there's
  // time to read the facts before the next question is released.
  function startNextGate() {
    var lastLabel = current + 1 < questions.length ? "Next Fish ➜" : "See My Score 🏆";
    var remaining = FACT_GATE_SECONDS;
    if (gateTimer) clearInterval(gateTimer);
    el.nextButton.disabled = true;
    el.nextButton.classList.add("locked");
    el.nextButton.textContent = "Read the facts… " + remaining;
    gateTimer = setInterval(function () {
      remaining -= 1;
      if (remaining > 0) {
        el.nextButton.textContent = "Read the facts… " + remaining;
      } else {
        clearInterval(gateTimer);
        gateTimer = null;
        el.nextButton.disabled = false;
        el.nextButton.classList.remove("locked");
        el.nextButton.textContent = lastLabel;
      }
    }, 1000);
  }

  function nextQuestion() {
    if (el.nextButton.disabled) return; // still gated
    current++;
    if (current < questions.length) {
      showScreen(el.questionScreen);
      renderQuestion();
    } else {
      showResults();
    }
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

  // End the current game and return to the start screen (where it can be
  // restarted). Clears any running fact-screen countdown.
  function quitGame() {
    if (gateTimer) { clearInterval(gateTimer); gateTimer = null; }
    showScreen(el.startScreen);
  }

  el.startButton.addEventListener("click", startGame);
  el.nextButton.addEventListener("click", nextQuestion);
  el.playAgainButton.addEventListener("click", function () { showScreen(el.startScreen); });
  Array.prototype.forEach.call(document.querySelectorAll("[data-quit]"), function (b) {
    b.addEventListener("click", quitGame);
  });
})();
