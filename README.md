# Blair's Fish ID Game 🐟🎣

A multiple-choice fish identification game. A picture of a fish is shown and
the player picks the correct species from four options, with a fun fact and
fishing-rules info revealed after each answer.

## Playing

No install or server needed — just open `index.html` in any browser
(or host the repo with GitHub Pages).

## Project layout

| Path | Purpose |
|---|---|
| `index.html` | The game page |
| `css/style.css` | Ocean-themed styling |
| `js/game.js` | Game logic and question generators |
| `data/species.js` | All fish data (the only file to edit when adding fish) |
| `images/` | Fish pictures |

## Adding fish

Everything the game shows comes from `data/species.js`. To add a fish, drop
its picture into `images/` and append an entry:

```js
{
  id: "unique-slug",
  commonName: "Name shown as the answer",   // required
  scientificName: "Optional latin name",
  image: "images/unique-slug.jpg",          // required
  source: "nsw",                            // which fishing guide it came from
  sizeLimit: "36 cm minimum",               // optional, shown in the fun fact
  bagLimit: "5",                            // optional
  habitat: "Estuaries and coastal bays",    // optional
  funFact: "Shown after answering."         // optional
}
```

When guides from other states are added later, register them in
`FISH_DATA.sources` and tag each species with the matching `source` id.

## Current status

The game contains **15 freshwater species** with photos, size limits, bag
limits and habitat imported from the **NSW Recreational Freshwater Fishing
Guide 2025–2026** (DPIRD). Next up: species from the NSW saltwater guide,
and later guides from other Australian states.

## Extending the questions

`js/game.js` has a question-generator registry. Species identification is
enabled now; generators for **size limit** and **habitat** questions are
already written and can be turned on by adding `"sizeLimit"` / `"habitat"`
to `ENABLED_QUESTION_TYPES` once the imported data fills those fields.
