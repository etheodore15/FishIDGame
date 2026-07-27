// Fish species data for Blair's Fish ID Game.
//
// Photos, size limits, bag limits and habitat come from two official guides:
//   * NSW Recreational Freshwater Fishing Guide 2025-2026 (DPIRD, July 2025)
//   * NSW Recreational Saltwater Fishing Guide 2024-2025 (DPIRD, Sept 2024)
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
//
// Rules can change over time; always check the current guide before fishing.

window.FISH_DATA = {
  sources: [
    { id: "nsw-freshwater", name: "NSW Recreational Freshwater Fishing Guide 2025–2026" },
    { id: "nsw-saltwater", name: "NSW Recreational Saltwater Fishing Guide 2024–2025" }
  ],
  species: [
    // ---------------- Freshwater ----------------
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
    },

    // ---------------- Saltwater ----------------
    {
      id: "australian-bonito",
      commonName: "Australian Bonito",
      image: "images/australian-bonito.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "10",
      habitat: "Coastal waters, bays and lower estuaries",
      funFact: "A speedy little cousin of the tunas, with dark slanting stripes along its back."
    },
    {
      id: "australian-salmon",
      commonName: "Australian Salmon",
      image: "images/australian-salmon.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5",
      habitat: "Beaches, rocky headlands, inshore reefs, bays and inlets",
      funFact: "Not a real salmon at all! It's a hard-fighting schooling fish that beach anglers love to chase with pilchards and lures."
    },
    {
      id: "australian-sawtail",
      commonName: "Australian Sawtail",
      image: "images/australian-sawtail.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5",
      habitat: "Rocky reefs and structure inside bays and harbours",
      funFact: "A surgeonfish with a sharp little blade near its tail — that's where the name 'sawtail' comes from!"
    },
    {
      id: "blue-drummer",
      commonName: "Blue Drummer",
      image: "images/blue-drummer.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "Release only in most NSW waters (5 at Lord Howe Island Marine Park)",
      habitat: "Coastal and offshore rocky reefs",
      funFact: "A brilliant blue reef fish — in most of NSW you have to let it go, so snap a photo before it swims off!"
    },
    {
      id: "yellowfin-bream",
      commonName: "Yellowfin Bream",
      image: "images/yellowfin-bream.png",
      source: "nsw-saltwater",
      sizeLimit: "25cm",
      bagLimit: "10 in total (Bream and Tarwhine)",
      habitat: "Rivers, estuaries, beaches, rocky headlands and inshore reefs",
      funFact: "One of the most popular fish to catch in NSW — silvery with yellowish fins."
    },
    {
      id: "black-bream",
      commonName: "Black Bream",
      image: "images/black-bream.png",
      source: "nsw-saltwater",
      sizeLimit: "25cm",
      bagLimit: "10 in total (Bream and Tarwhine)",
      habitat: "Creeks and estuary systems, especially the southern half of NSW",
      funFact: "Darker than its Yellowfin cousin and happy in brackish or even fresh water up the rivers."
    },
    {
      id: "tarwhine",
      commonName: "Tarwhine",
      image: "images/tarwhine.png",
      source: "nsw-saltwater",
      sizeLimit: "20cm",
      bagLimit: "10 in total (Bream and Tarwhine)",
      habitat: "Estuaries, rocky reefs and beaches",
      funFact: "Often mistaken for a bream, but look for the faint golden stripes running along its silvery body."
    },
    {
      id: "cobia",
      commonName: "Cobia",
      image: "images/cobia.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5",
      habitat: "Offshore reefs, headlands and bays",
      funFact: "With its long dark body it looks a bit like a shark or a giant remora — but it pulls like a freight train!"
    },
    {
      id: "red-scorpionfish",
      commonName: "Eastern Red Scorpionfish",
      image: "images/red-scorpionfish.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5",
      habitat: "Inshore and offshore reefs",
      funFact: "Also called Red Rock Cod. Handle with care — those spiky red fins can give a nasty sting!"
    },
    {
      id: "dusky-flathead",
      commonName: "Dusky Flathead",
      image: "images/dusky-flathead.png",
      source: "nsw-saltwater",
      sizeLimit: "36cm – 70cm",
      bagLimit: "5",
      habitat: "Coastal rivers, estuaries, lakes, inlets, beaches and offshore areas",
      funFact: "A flat, sandy-coloured ambush hunter that lies on the bottom waiting for dinner. Big ones over 70cm must be released."
    },
    {
      id: "tiger-flathead",
      commonName: "Tiger Flathead",
      image: "images/tiger-flathead.png",
      source: "nsw-saltwater",
      sizeLimit: "33cm",
      bagLimit: "20 in total (all Flathead except Dusky)",
      habitat: "Coastal and offshore areas",
      funFact: "Named for the rusty tiger-like spots on its back."
    },
    {
      id: "flounder",
      commonName: "Flounder",
      image: "images/flounder.png",
      source: "nsw-saltwater",
      sizeLimit: "25cm",
      bagLimit: "20 in total",
      habitat: "Inshore coastal and estuarine waters",
      funFact: "Baby flounder swim upright like normal fish, then one eye slowly moves around so both eyes end up on the same side!"
    },
    {
      id: "eastern-sea-garfish",
      commonName: "Eastern Sea Garfish",
      image: "images/eastern-sea-garfish.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "20",
      habitat: "Shallow coastal areas, large bays and estuaries",
      funFact: "Check out that long spear-like lower jaw! They feed near the surface and are a favourite bait fish."
    },
    {
      id: "eastern-blue-groper",
      commonName: "Eastern Blue Groper",
      image: "images/eastern-blue-groper.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "Release only",
      habitat: "Rocky headlands and inshore reefs",
      funFact: "The official fish emblem of NSW! They're all born female and the biggest ones turn bright blue as males. Release only — they're very friendly to divers."
    },
    {
      id: "hairtail",
      commonName: "Hairtail",
      image: "images/hairtail.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "10",
      habitat: "Deep estuary waters, especially the Hawkesbury River north of Sydney",
      funFact: "A long, silver, ribbon-shaped fish with sharp fangs. Anglers catch them at night under lights in winter."
    },
    {
      id: "leatherjacket",
      commonName: "Leatherjacket",
      image: "images/leatherjacket.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "20",
      habitat: "Tidal rivers, bays, inlets and reefs extending offshore",
      funFact: "Named for its tough, leathery skin. It has a spiky trigger-like spine it can raise on its back."
    },
    {
      id: "luderick",
      commonName: "Luderick",
      image: "images/luderick.png",
      source: "nsw-saltwater",
      sizeLimit: "27cm",
      bagLimit: "10",
      habitat: "Rocky headlands, coastal rivers and estuary systems",
      funFact: "Also called Blackfish. Unusually for a fish, it loves eating green weed, so anglers use weed for bait!"
    },
    {
      id: "spanish-mackerel",
      commonName: "Spanish Mackerel",
      image: "images/spanish-mackerel.png",
      source: "nsw-saltwater",
      sizeLimit: "75cm",
      bagLimit: "5",
      habitat: "Offshore reef systems, bays and rocky headlands, mostly northern NSW in summer",
      funFact: "A big, fast mackerel with wavy bars on its sides and teeth so sharp you need wire to stop it biting through the line!"
    },
    {
      id: "spotted-mackerel",
      commonName: "Spotted Mackerel",
      image: "images/spotted-mackerel.png",
      source: "nsw-saltwater",
      sizeLimit: "60cm",
      bagLimit: "5",
      habitat: "Offshore reef systems, bays and rocky headlands",
      funFact: "Covered in small dark spots. They race along in fast-moving schools chasing baitfish."
    },
    {
      id: "mahi-mahi",
      commonName: "Mahi Mahi (Dolphinfish)",
      image: "images/mahi-mahi.png",
      source: "nsw-saltwater",
      sizeLimit: "60cm (only 1 over 110cm)",
      bagLimit: "10",
      habitat: "Oceanic waters, around floating objects like buoys, driftwood and seaweed",
      funFact: "One of the most colourful fish in the sea — glowing green, blue and gold. Males have a tall, blunt forehead."
    },
    {
      id: "mangrove-jack",
      commonName: "Mangrove Jack",
      image: "images/mangrove-jack.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5",
      habitat: "Mangroves and rocky structure in estuaries and rivers, mostly northern NSW",
      funFact: "A powerful reddish fish that hides in mangrove roots and snags, then strikes lures like lightning."
    },
    {
      id: "red-morwong",
      commonName: "Red Morwong",
      image: "images/red-morwong.png",
      source: "nsw-saltwater",
      sizeLimit: "30cm",
      bagLimit: "5",
      habitat: "Inshore reef systems",
      funFact: "A reddish reef-dweller that likes to rest on the bottom propped up on its thick lower fin rays."
    },
    {
      id: "banded-morwong",
      commonName: "Banded Morwong",
      image: "images/banded-morwong.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5",
      habitat: "Inshore and offshore reef systems",
      funFact: "Easy to spot with its bold reddish-brown bands. Banded Morwong can live for over 90 years!"
    },
    {
      id: "moses-snapper",
      commonName: "Moses Snapper (Moses Perch)",
      image: "images/moses-snapper.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5",
      habitat: "Around rocks, mangroves, piers and wharves in estuaries, mostly northern NSW",
      funFact: "Look for the dark blotch on its side and bright yellow fins."
    },
    {
      id: "sea-mullet",
      commonName: "Sea Mullet",
      image: "images/sea-mullet.png",
      source: "nsw-saltwater",
      sizeLimit: "30cm (Sea/Bully Mullet)",
      bagLimit: "20 in total",
      habitat: "Rivers and estuary systems, migrating along the coastline",
      funFact: "Every autumn huge schools of mullet migrate along the beaches — you can sometimes see the water go dark with them!"
    },
    {
      id: "mulloway",
      commonName: "Mulloway (Jewfish)",
      image: "images/mulloway.png",
      source: "nsw-saltwater",
      sizeLimit: "70cm",
      bagLimit: "1 (boat limit 2)",
      habitat: "Rivers, estuaries, beaches, rocky headlands and inshore reefs",
      funFact: "A prized silver giant that can grow bigger than a person. It's also called Jewfish because of the jewel-like ear bones inside its head."
    },
    {
      id: "pearl-perch",
      commonName: "Pearl Perch",
      image: "images/pearl-perch.png",
      source: "nsw-saltwater",
      sizeLimit: "30cm",
      bagLimit: "5",
      habitat: "Deep offshore waters around reefs, most common in northern NSW",
      funFact: "Named for the pearly bone you can see behind its gills. Considered one of the tastiest fish in the sea."
    },
    {
      id: "rock-blackfish",
      commonName: "Rock Blackfish (Black Drummer)",
      image: "images/rock-blackfish.png",
      source: "nsw-saltwater",
      sizeLimit: "30cm",
      bagLimit: "10",
      habitat: "Reefy areas, rocky points and headlands",
      funFact: "A tough, dark fish of the wash zone that dives straight back into the rocks when hooked — a real challenge to land!"
    },
    {
      id: "sailfish",
      commonName: "Sailfish",
      image: "images/sailfish.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "1",
      habitat: "Offshore waters around reef or structure, in warm sub-tropical seas",
      funFact: "The fastest fish in the ocean, and it can raise a huge sail-shaped fin on its back to look even bigger!"
    },
    {
      id: "samsonfish",
      commonName: "Samsonfish",
      image: "images/samsonfish.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5 in total (with Amberjack)",
      habitat: "Inshore and offshore reefs",
      funFact: "A cousin of the kingfish, named after the strongman Samson because it's such a powerful fighter."
    },
    {
      id: "amberjack",
      commonName: "Amberjack",
      image: "images/amberjack.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5 in total (with Samsonfish)",
      habitat: "Inshore and offshore reefs",
      funFact: "Look for the amber-coloured stripe running through its eye. They hang deep around reefs and wrecks."
    },
    {
      id: "school-shark",
      commonName: "School Shark",
      image: "images/school-shark.png",
      source: "nsw-saltwater",
      sizeLimit: "91cm",
      bagLimit: "5 (sharks and rays combined)",
      habitat: "Estuaries, beaches, rocky reefs and open ocean",
      funFact: "Called a School Shark because they travel in big groups. They can migrate thousands of kilometres!"
    },
    {
      id: "snapper",
      commonName: "Snapper",
      image: "images/snapper.png",
      source: "nsw-saltwater",
      sizeLimit: "30cm",
      bagLimit: "10",
      habitat: "Inshore and offshore reefs, rocky headlands and points; young fish in estuaries",
      funFact: "Big old snapper grow a bony bump on the forehead and nose and are called 'old man snapper'."
    },
    {
      id: "swordfish",
      commonName: "Swordfish",
      image: "images/swordfish.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "1",
      habitat: "Deep offshore waters",
      funFact: "Also called Broadbill for its long, flat sword. They dive deep in the day, so anglers drop baits hundreds of metres down to reach them."
    },
    {
      id: "tailor",
      commonName: "Tailor",
      image: "images/tailor.png",
      source: "nsw-saltwater",
      sizeLimit: "30cm",
      bagLimit: "10",
      habitat: "Beaches, rocky headlands, estuaries and inshore reefs",
      funFact: "A sharp-toothed speedster that smashes into baitfish schools. Watch your fingers — those teeth are like scissors!"
    },
    {
      id: "teraglin",
      commonName: "Teraglin",
      image: "images/teraglin.png",
      source: "nsw-saltwater",
      sizeLimit: "38cm",
      bagLimit: "5",
      habitat: "Inshore and offshore reefs",
      funFact: "A close relative of the Mulloway with a yellowish mouth. They gather in schools over reefs and are known to 'croak'."
    },
    {
      id: "silver-trevally",
      commonName: "Silver Trevally",
      image: "images/silver-trevally.png",
      source: "nsw-saltwater",
      sizeLimit: "30cm",
      bagLimit: "10 in total",
      habitat: "Inshore reefs, rocky areas and bays",
      funFact: "A tough little battler with a big eye and a yellowish stripe. The most common trevally in NSW waters."
    },
    {
      id: "yellowfin-tuna",
      commonName: "Yellowfin Tuna",
      image: "images/yellowfin-tuna.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "2 for fish 90cm and over, 5 for smaller fish (in total)",
      habitat: "Open ocean, sometimes close inshore following baitfish schools",
      funFact: "Named for its bright yellow fins and the row of little yellow finlets near its tail. A big one can weigh over 100kg!"
    },
    {
      id: "wahoo",
      commonName: "Wahoo",
      image: "images/wahoo.png",
      source: "nsw-saltwater",
      sizeLimit: "None",
      bagLimit: "5",
      habitat: "Open ocean",
      funFact: "One of the fastest fish in the sea — it can swim as fast as a car on the highway, and has tiger-like bars on its long body."
    },
    {
      id: "sand-whiting",
      commonName: "Sand Whiting",
      image: "images/sand-whiting.png",
      source: "nsw-saltwater",
      sizeLimit: "27cm",
      bagLimit: "20 in total",
      habitat: "Beaches, estuaries and sandflats",
      funFact: "A slender, sandy-coloured fish that loves to eat worms and nippers dug from the sand."
    }
  ]
};
