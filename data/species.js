// Fish species data for Blair's Fish ID Game.
//
// Photos, size limits, bag limits and habitat come from the NSW Recreational
// Freshwater Fishing Guide 2025-2026 (DPIRD, July 2025). Saltwater species
// from the NSW saltwater guide will be added next.
//
// Schema per species:
//   id             unique slug
//   commonName     name shown as the answer (required)
//   scientificName optional
//   image          path to the picture shown in the question (required)
//   source         which guide it came from (see FISH_DATA.sources)
//   sizeLimit      legal length, used for future size-limit questions
//   bagLimit       daily bag limit text
//   habitat        where it lives, used for future habitat questions
//   funFact        shown after answering
//
// Loaded as a plain script (not fetch) so the game works when index.html is
// opened directly from disk, with no web server needed.

window.FISH_DATA = {
  sources: [
    {
      id: "nsw-freshwater",
      name: "NSW Recreational Freshwater Fishing Guide 2025–2026"
    }
  ],
  species: [
    {
      id: "australian-bass",
      commonName: "Australian Bass",
      image: "images/australian-bass.png",
      source: "nsw-freshwater",
      sizeLimit: "None",
      bagLimit: "2 in total (Bass or Estuary Perch, only 1 over 35cm in rivers)",
      habitat: "Coastal rivers from Queensland to Victoria",
      funFact: "Bass have a shorter snout than their lookalike the Estuary Perch, and love to smash surface lures! No taking them from rivers from May to August while they breed."
    },
    {
      id: "estuary-perch",
      commonName: "Estuary Perch",
      image: "images/estuary-perch.png",
      source: "nsw-freshwater",
      sizeLimit: "None",
      bagLimit: "2 in total (Bass or Estuary Perch, only 1 over 35cm in rivers)",
      habitat: "Coastal rivers from northern NSW to Tasmania",
      funFact: "Looks a lot like an Australian Bass, but has a concave snout and is dark grey and silvery on the back."
    },
    {
      id: "southern-shortfin-eel",
      commonName: "Southern Shortfin Eel",
      image: "images/southern-shortfin-eel.png",
      source: "nsw-freshwater",
      sizeLimit: "30cm",
      bagLimit: "10",
      habitat: "Freshwater rivers, dams and lakes east of the Great Dividing Range",
      funFact: "A uniform olive-green to brown colour with no distinctive markings — unlike its blotchy cousin the Longfin Eel."
    },
    {
      id: "longfin-eel",
      commonName: "Longfin Eel",
      image: "images/longfin-eel.png",
      source: "nsw-freshwater",
      sizeLimit: "58cm",
      bagLimit: "10",
      habitat: "Freshwater rivers, dams and lakes east of the Great Dividing Range",
      funFact: "You can spot a Longfin Eel by its blotchy, mottled colour and a dorsal fin that starts well forward of the anal fin."
    },
    {
      id: "freshwater-catfish",
      commonName: "Freshwater Catfish (Eel-Tailed)",
      image: "images/freshwater-catfish.png",
      source: "nsw-freshwater",
      sizeLimit: "30cm (eastern dams, listed western dams and eastern rivers)",
      bagLimit: "5 in eastern dams and listed western dams, 2 in eastern rivers",
      habitat: "North west catchments and coastal waters north of Newcastle",
      funFact: "Those whiskers are called barbels — they help the catfish feel and taste for food. It's endangered in the Murray-Darling Basin, so it can't be taken in western rivers."
    },
    {
      id: "golden-perch",
      commonName: "Golden Perch",
      image: "images/golden-perch.png",
      source: "nsw-freshwater",
      sizeLimit: "30cm",
      bagLimit: "5",
      habitat: "Throughout the Murray-Darling system",
      funFact: "Also called Yellowbelly! It has a concave forehead and a protruding lower jaw — that's how you tell it from a Silver Perch."
    },
    {
      id: "murray-cod",
      commonName: "Murray Cod",
      image: "images/murray-cod.png",
      source: "nsw-freshwater",
      sizeLimit: "Min. 55cm, Max. 75cm",
      bagLimit: "2",
      habitat: "Throughout the Murray-Darling system",
      funFact: "Australia's biggest freshwater fish, with beautiful mosaic markings! Big ones over 75cm must go back — they're the best breeders. No fishing for them from September to November."
    },
    {
      id: "silver-perch",
      commonName: "Silver Perch",
      image: "images/silver-perch.png",
      source: "nsw-freshwater",
      sizeLimit: "25cm in listed stocked dams",
      bagLimit: "5 in listed stocked dams",
      habitat: "Uncommon in rivers, common in stocked dams",
      funFact: "Has a small beak-like head, a white belly and a silvery darker back. It's protected in rivers — you can only keep them from listed stocked dams."
    },
    {
      id: "murray-crayfish",
      commonName: "Murray Crayfish",
      image: "images/murray-crayfish.png",
      source: "nsw-freshwater",
      sizeLimit: "Min. 10cm, Max. 12cm",
      bagLimit: "2",
      habitat: "Parts of the Murray and Murrumbidgee Rivers and some dams in south west NSW",
      funFact: "Measured from the eye socket to the rear of the carapace with special measuring devices. Crayfish carrying eggs must always go straight back in the water."
    },
    {
      id: "spiny-crayfish",
      commonName: "Spiny Crayfish",
      image: "images/spiny-crayfish.png",
      source: "nsw-freshwater",
      sizeLimit: "9cm",
      bagLimit: "5 (only 1 over 12cm)",
      habitat: "Rivers and some lakes east and west of the Divide",
      funFact: "Spiny Crayfish ('Spinies') have rough shells with spines along the bottom of their claws — yabbies are smooth all over."
    },
    {
      id: "yabby",
      commonName: "Yabby",
      image: "images/yabby.png",
      source: "nsw-freshwater",
      sizeLimit: "None",
      bagLimit: "200 in total",
      habitat: "Central and western NSW waters",
      funFact: "Smooth-shelled with no spines. You're allowed a whopping 200 a day — but any yabby carrying eggs must be returned carefully to the water."
    },
    {
      id: "rainbow-trout",
      commonName: "Rainbow Trout",
      image: "images/rainbow-trout.png",
      source: "nsw-freshwater",
      sizeLimit: "25cm (50cm in trout spawning streams)",
      bagLimit: "2 in fly and lure streams and dams, 1 in spawning streams, 5 elsewhere",
      habitat: "Cool freshwater mountain streams and lakes",
      funFact: "Named for the beautiful pink-red rainbow stripe along its side!"
    },
    {
      id: "brown-trout",
      commonName: "Brown Trout",
      image: "images/brown-trout.png",
      source: "nsw-freshwater",
      sizeLimit: "25cm (50cm in trout spawning streams)",
      bagLimit: "2 in fly and lure streams and dams, 1 in spawning streams, 5 elsewhere",
      habitat: "Cool freshwater mountain streams and lakes",
      funFact: "Golden-brown with dark spots. Trout streams close over winter so the fish can spawn in peace."
    },
    {
      id: "brook-trout",
      commonName: "Brook Trout",
      image: "images/brook-trout.png",
      source: "nsw-freshwater",
      sizeLimit: "25cm (50cm in trout spawning streams)",
      bagLimit: "2 in fly and lure streams and dams, 1 in spawning streams, 5 elsewhere",
      habitat: "Cool freshwater mountain streams and lakes",
      funFact: "Look for the bright orange belly and wiggly patterns on its back — it's actually a type of char!"
    },
    {
      id: "atlantic-salmon",
      commonName: "Atlantic Salmon",
      image: "images/atlantic-salmon.png",
      source: "nsw-freshwater",
      sizeLimit: "25cm (50cm in trout spawning streams)",
      bagLimit: "2 in fly and lure streams and dams, 1 in spawning streams, 5 elsewhere",
      habitat: "Cool freshwater mountain streams and lakes",
      funFact: "Silvery with dark fins, this salmon is stocked into a few cool NSW lakes. Good baits include yabbies, worms, crickets and artificial flies."
    }
  ]
};
