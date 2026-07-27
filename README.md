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
| `data/species.js` | Core fish data — name, image, source, NSW rules |
| `data/details.js` | Extra facts (scientific name, family, size range, distribution, misID, "did you know") merged in at runtime |
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

The game contains **398 species** with photos from three official sources:

- **15 freshwater** species — NSW Recreational Freshwater Fishing Guide 2025–2026
  (with size limits, bag limits, habitat and fun facts)
- **40 saltwater** species — NSW Recreational Saltwater Fishing Guide 2024–2025
  (with size limits, bag limits, habitat and fun facts)
- **343 Queensland** species — Queensland Government / CSIRO fish species guide
  (photo + name)

Additionally, **373 species carry extra facts** pulled from the Queensland
guide's per-species pages (`data/details.js`): scientific name, family,
typical size range, distribution, common misidentifications, and a "did you
know" note. These are shown as a fact-file after each answer and are merged
in at runtime, so they enrich matching NSW species too (e.g. Murray Cod gets
its scientific name and typical size alongside its NSW fishing rules). The
distribution text keeps only non-state-specific ecology — Queensland place
names are stripped out so it reads sensibly for a pan-Australian game.

Each fish is tagged with its `source`, so the guides stay cleanly separable.
The Queensland set was deduplicated against the NSW species (28 shared species
such as Snapper, Cobia and Mangrove Jack are listed once), and non-fish
wildlife and graphics from the QLD guide were excluded. A few NSW-saltwater
look-alike clusters were left out because they can't be told apart reliably
from the guide photos: the five-way deep-sea groper group, the three
near-identical marlins, and three of the four almost-identical tunas.

Next up: guides from other states.

## Extending the questions

`js/game.js` has a question-generator registry. Species identification is
enabled now; generators for **size limit** and **habitat** questions are
already written and can be turned on by adding `"sizeLimit"` / `"habitat"`
to `ENABLED_QUESTION_TYPES` once the imported data fills those fields.
