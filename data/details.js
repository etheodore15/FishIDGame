// Extra species facts for Blair's Fish ID Game, keyed by species id.
// Source: Queensland Government / CSIRO fish species guide (speciesPage entries).
// Merged into the game at runtime by js/game.js. Fields are all optional:
//   scientificName, category, sizeRange, distribution, misId, didYouKnow
// sizeRange is the fish's natural size (biological), NOT a legal size limit.
// Fishing regulations (size/bag limits, seasons) are deliberately excluded
// because they change over time; distribution keeps only non-state ecology.

window.FISH_DETAILS = {
  "australian-bass": {
    "scientificName": "Macquaria novemaculeata",
    "category": "Australian Bass",
    "sizeRange": "Common length: 40cm; Maximum length: 60cm",
    "distribution": "Freshwater species; Occasionally enters estuaries during spawning season in winter or peak flood periods; Often stocked in impoundments",
    "misId": "Silver perch, Estuary perch"
  },
  "southern-shortfin-eel": {
    "scientificName": "Anguilla australis",
    "category": "Eels",
    "sizeRange": "Average length: 50cm; Maximum length: 90cm",
    "misId": "Other eel species"
  },
  "longfin-eel": {
    "scientificName": "Anguilla reinhardtii",
    "category": "Eels",
    "sizeRange": "Average length: 60cm; Maximum length 150cm",
    "distribution": "Lakes and swamps on the entire east coast of Australia; Flowing freshwater streams",
    "misId": "Other eel species"
  },
  "golden-perch": {
    "scientificName": "Macquaria ambigua",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 40cm; Maximum length: 75cm",
    "distribution": "Found naturally in the Murray Darling, Lake Eyre /Bulloo basins and Dawson and Fitzroy rivers; Prefers warm slow moving turbid sections of streams but also found in flooded backwaters and stocked impoundments south of Yeppoon",
    "misId": "Australian bass"
  },
  "murray-cod": {
    "scientificName": "Maccullochella peelii",
    "category": "Cods (freshwater)",
    "sizeRange": "Common length: 65cm; Maximum length: 180cm",
    "distribution": "Areas of low flow around undercut banks and fallen timber",
    "misId": "Mary River cod"
  },
  "silver-perch": {
    "scientificName": "Bidyanus bidyanus",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 30cm; Maximum length: 50cm",
    "distribution": "Rapid flowing rivers, lakes and impoundments",
    "misId": "Barcoo grunter, Welsh's grunter"
  },
  "rainbow-trout": {
    "scientificName": "Oncorhynchus mykiss",
    "category": "Salmon and trout",
    "sizeRange": "Common length: 60cm; Maximum length: 122cm",
    "distribution": "Prefers cool freshwater environments; Inhabits temperate lakes and streams with gravel bottoms; Adults from non-landlocked populations live in the sea and return to clear freshwater streams to breed"
  },
  "australian-bonito": {
    "scientificName": "Sarda australis",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 45cm; Maximum length: 180cm",
    "distribution": "Bays and estuaries",
    "misId": "Other bonito, Mackerel tuna"
  },
  "yellowfin-bream": {
    "scientificName": "Acanthopagrus australis",
    "category": "Breams and snapper",
    "sizeRange": "Common length: 25cm; Maximum length: 65cm",
    "distribution": "Most common in estuaries; Also found on inshore reefs, and sandy, muddy and rocky coastal areas",
    "misId": "Tarwhine, Pikey bream, Black bream, Silver javelin",
    "didYouKnow": "Yellowfin bream have been monitored in Queensland since 2007, primarily in the southern part of the state."
  },
  "tarwhine": {
    "scientificName": "Rhabdosargus sarba",
    "category": "Breams and snapper",
    "sizeRange": "Common length: 28cm; Maximum length: 60cm",
    "distribution": "Occasionally enters estuaries; Bottom-living coastal fish (to a depth of 60m)",
    "misId": "Yellowfin bream, Pikey bream"
  },
  "cobia": {
    "scientificName": "Rachycentron canadum",
    "category": "Trevally",
    "sizeRange": "Common length: 110cm; Maximum length: 200cm",
    "distribution": "Pelagic; Shallow coral reefs and off rocky shores; Occasionally in estuaries"
  },
  "dusky-flathead": {
    "scientificName": "Platycephalus fuscus",
    "category": "Flathead",
    "sizeRange": "Common length: 50cm; Maximum length: 130cm",
    "distribution": "Estuaries and coastal bays; Found on sand, mud, gravel and seagrasses",
    "misId": "Bartailed flathead, Northern sand flathead"
  },
  "luderick": {
    "scientificName": "Girella tricuspidata",
    "category": "Luderick",
    "sizeRange": "Common length: 30cm; Maximum length: 62cm",
    "distribution": "Around hard structures in estauries and coastal areas (to a depth of approx 20m)"
  },
  "spanish-mackerel": {
    "scientificName": "Scomberomorus commerson",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 90-120cm; Maximum length: 200cm",
    "distribution": "Coastal waters to depths of 15m to 200m (a pelagic species)",
    "misId": "Broad-barred mackerel",
    "didYouKnow": "Known affectionately here as blues or Spaniards, these are the silver-striped speedsters of our coastline."
  },
  "spotted-mackerel": {
    "scientificName": "Scomberomorus munroi",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 50-80cm; Maximum length: 100cm",
    "misId": "School mackerel"
  },
  "mangrove-jack": {
    "scientificName": "Lutjanus argentimaculatus",
    "category": "Tropical snappers and sea perches",
    "sizeRange": "Common length: 40cm; Maximum length: 120cm",
    "distribution": "Deeper reef areas (to depths in excess of 100 m); Mangrove estuaries and the lower reaches of freshwater streams (juveniles and young adults)",
    "misId": "Golden snapper"
  },
  "moses-snapper": {
    "scientificName": "Lutjanus russelli",
    "category": "Tropical snappers and sea perches"
  },
  "pearl-perch": {
    "scientificName": "Glaucosoma scapulare",
    "category": "Pearl perch",
    "sizeRange": "Common length: 35cm; Maximum length: 70cm",
    "distribution": "Generally close to submerged reefs or rough bottom",
    "didYouKnow": "Referred to by many as the ‘chicken of the sea' or ‘pearlies', these fish have been monitored since 2006 by Fisheries Queensland."
  },
  "sailfish": {
    "scientificName": "Istiophorus platypterus",
    "category": "Billfish and swordfish",
    "sizeRange": "Common length: 270cm; Maximum length: 348cm",
    "distribution": "Common in tropical and subtropical oceans, extending into temperate waters during summer; Typically found in oceanic waters, well offshore; Observed near continental coasts, islands, and reefs",
    "misId": "Shortbill spearfish, Striped marlin"
  },
  "samsonfish": {
    "scientificName": "Seriola hippos",
    "category": "Trevally",
    "sizeRange": "Common length: 100cm; Maximum length: 173cm",
    "distribution": "Rocky reefs or wrecks (to a depth of 70m)",
    "misId": "Other Seriola species"
  },
  "amberjack": {
    "scientificName": "Seriola dumerili",
    "category": "Trevally",
    "sizeRange": "Common length: 100cm; Maximum length: 188cm",
    "distribution": "Reefs, deep offshore holes or drop-offs; Bottom dwelling and pelagic",
    "misId": "High-fin amberjack, Samsonfish"
  },
  "school-shark": {
    "scientificName": "Galeorhinus galeus",
    "category": "Sharks",
    "sizeRange": "Common length: 160cm; Maximum length: 195cm",
    "distribution": "Lives in shallow coastal waters above 200 metres; Sometimes found in deep off shores areas down to 800 metres; Prefers habitats near the seabed along coastlines; Inhabits continental shelves and upper to mid slopes; Juveniles often inhabit shallow, inshore bays"
  },
  "snapper": {
    "scientificName": "Chrysophrys auratus",
    "category": "Breams and snapper",
    "sizeRange": "Common length: 20-40cm; Maximum length: 130cm",
    "distribution": "Common on rough grounds (also found on softer bottom grounds); Bottom-living (at depths of 10-150m)",
    "misId": "Yellowfin bream",
    "didYouKnow": "Pinkies, squire, knobbies—whatever you call them, these big pink fish are icons of the east coast line fishery, known for their size and prestige as they grow larger."
  },
  "swordfish": {
    "scientificName": "Xiphias gladius",
    "category": "Billfish and swordfish",
    "sizeRange": "Common length: 300cm; Maximum length: 455cm",
    "distribution": "Found in deep oceanic waters beyond the continental shelf, ranging from 0-800 metres deep; Rarely found in coastal waters; Distributed across tropical and subtropical waters; Migrates to temperate waters during summer",
    "misId": "Marlin species, Sailfish"
  },
  "tailor": {
    "scientificName": "Pomatomus saltatrix",
    "category": "Tailor",
    "sizeRange": "Common length: 40cm; Maximum length: 110cm",
    "distribution": "Often in bays and estuaries",
    "didYouKnow": "The humble tailor is known by many names including bluefish, greenbacks, tubbies, surf barra, tassergal or chopper tailor (for the small ones!)."
  },
  "teraglin": {
    "scientificName": "Atractoscion aequidens",
    "category": "Jewfish",
    "sizeRange": "Common length: 35-40cm; Maximum length: 70cm",
    "distribution": "Coastal waters to a depth of 200m",
    "misId": "Mulloway"
  },
  "silver-trevally": {
    "scientificName": "Pseudocaranx sp. \"dentex\"",
    "category": "Trevally",
    "sizeRange": "Common length: 40cm; Maximum length: 122cm",
    "distribution": "Also found in Lord Howe Province and Norfolk Island in the Tasman Sea; Typically found at depths of 80-100 metres; Rarely encountered in shallow waters",
    "misId": "Silver trevally ( Pseudocaranx georgianus )"
  },
  "yellowfin-tuna": {
    "scientificName": "Thunnus albacares",
    "category": "Mackerel and tuna",
    "sizeRange": "Maximum length: 150cm",
    "distribution": "Oceanic at depths above and below the thermocline",
    "misId": "Other tuna species"
  },
  "wahoo": {
    "scientificName": "Acanthocybium solandri",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 80cm; Maximum length: 210cm",
    "distribution": "Frequently taken well offshore (a pelagic species)",
    "misId": "Spanish mackerel"
  },
  "sand-whiting": {
    "scientificName": "Sillago ciliata",
    "category": "Whiting",
    "sizeRange": "Common length: 25cm; Maximum length: 51cm",
    "distribution": "Coastal beaches, sandbars and surf zones; Bays, estuaries and coastal lakes",
    "misId": "Goldenline whiting, Trumpeter whiting",
    "didYouKnow": "Monitoring of this species started in 2007, focusing on routine collection of length and age data. However, sporadic data collection dates back to short-term research projects since the 1970s."
  },
  "agassizs-glassfish": {
    "scientificName": "Ambassis agassizii",
    "category": "Glassfish",
    "didYouKnow": "Agassiz's glassfish has such a see-through body that you can spot its tiny bones and silvery insides right through its skin, like a living window."
  },
  "anchor-tuskfish": {
    "scientificName": "Choerodon anchorago",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Named for the pale orange anchor-shaped mark on its side, this reef wrasse uses tusk-like front teeth to crunch open crabs, snails and sea urchins."
  },
  "archerfish": {
    "scientificName": "Toxotes chatareus",
    "category": "Sevenspot archer fish",
    "didYouKnow": "This clever archerfish is a living water pistol, spitting powerful jets to knock insects off leaves above the water so it can gobble them up as they fall."
  },
  "areolate-rockcod": {
    "scientificName": "Epinephelus areolatus",
    "category": "Cods and groupers",
    "didYouKnow": "Covered head to tail in hundreds of little orange-brown polka dots, even on its tail, this rockcod's spots grow smaller and more crowded as the fish gets bigger."
  },
  "aru-gudgeon": {
    "scientificName": "Oxyeleotris aruensis",
    "category": "Gudgeons",
    "didYouKnow": "Living in muddy, weedy streams of northern Australia and New Guinea, this little gudgeon can gulp mouthfuls of air to breathe when the water runs low on oxygen."
  },
  "australian-anchovy": {
    "scientificName": "Engraulis australis",
    "category": "Anchovies, herrings and sardines",
    "didYouKnow": "Australian anchovies are tiny silver fish that gather in enormous shimmering schools, feeding on drifting plankton and becoming a favourite snack for bigger fish, birds and dolphins."
  },
  "australian-butterfly-ray": {
    "category": "Rays",
    "didYouKnow": "Wider than it is long, the Australian butterfly ray has a huge diamond-shaped body like flapping wings and a surprisingly tiny, short tail."
  },
  "australian-cownose-ray": {
    "category": "Rays",
    "didYouKnow": "With two fleshy lobes under its snout that look just like a cow's nose, this ray glides through the sea in huge flapping schools of hundreds."
  },
  "australian-mud-ark": {
    "scientificName": "Anadara trapezia",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 80 mm (average 50-60 mm)",
    "misId": "Cockles (Cardiidae) also ribbed but hinge teeth are few and large.",
    "didYouKnow": "This chunky estuarine cockle burrows down into muddy seagrass beds and, unusually for a shellfish, has bright red blood packed with the same oxygen-carrying stuff found in ours."
  },
  "australian-sardine": {
    "scientificName": "Sardinops sagax",
    "category": "Anchovies, herrings and sardines",
    "didYouKnow": "Australian sardines swim in huge glittering schools that can number in the millions, and their spectacular 'sardine runs' draw feasting dolphins, sharks and diving birds."
  },
  "australian-sharpnose-shark": {
    "scientificName": "Rhizoprionodon taylori",
    "category": "Sharks",
    "sizeRange": "Common length: 25cm-67cm",
    "distribution": "Inshore/offshore",
    "misId": "Grey sharpnose shark",
    "didYouKnow": "One of Australia's smallest sharks, the Australian sharpnose is the only shark known to pause its babies' development for months, like hitting a natural pause button."
  },
  "australian-smelt": {
    "scientificName": "Retropinna semoni",
    "category": "Australian Smelt",
    "didYouKnow": "This tiny silvery river fish gives off a fresh cucumber smell when you hold it, thanks to a special chemical made in its skin."
  },
  "banana-fusilier": {
    "scientificName": "Pterocaesio pisang",
    "category": "Fusiliers",
    "didYouKnow": "Named for its sunny yellow snout, the banana fusilier zooms around coral reefs in big shimmering schools, with the tips of its tail dipped in dark red."
  },
  "banded-rainbowfish": {
    "scientificName": "Melanotaenia trifasciata",
    "category": "Rainbowfish",
    "distribution": "Northern Australia",
    "didYouKnow": "In this Australian rainbowfish the males glow with red, blue and gold plus a bold dark stripe, and they can look different depending on which river they come from."
  },
  "banded-rockcod": {
    "scientificName": "Formerly known as Epinephelus ergastularius (37 311147) and E. septemfasciatus (37 311060), this species is now recognised as Hyporthodus ergastularius.",
    "category": "Cods and groupers",
    "misId": "Eightbar grouper",
    "didYouKnow": "Baby banded rockcods wear stripey white bars like pyjamas, but grownups lose them and turn plain pink-grey while living way down deep, sometimes over 300 metres below the waves."
  },
  "barcoo-grunter": {
    "scientificName": "Scortum barcoo",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 25cm; Maximum length: 35cm",
    "distribution": "Hatchery-reared fingerlings have been stocked at Jericho Waterholes, Jericho; Usually turbid waters of large rivers and waterholes",
    "misId": "Silver perch, Welsh's grunter",
    "didYouKnow": "Also called jade perch, the Barcoo grunter lives in waterholes of Australia's dry outback and can make a grunting sound using its swim bladder."
  },
  "barramundi": {
    "scientificName": "Lates calcarifer",
    "category": "Barramundi",
    "sizeRange": "Common length: 80cm; Maximum length: 180cm",
    "distribution": "Coastal marine; Estuarine and freshwater habitats; Adults mainly in estuaries (mangroves and river mouths); Juveniles extend up rivers into fresh water; Often stocked in impoundments",
    "didYouKnow": "This iconic fish of northern Australia is arguably the most revered fish in the country and draws anglers from across the globe eager for the thrill of catching a leaping barra!"
  },
  "barramundi-cod": {
    "scientificName": "Cromileptes altivelis",
    "category": "Cods and groupers",
    "didYouKnow": "Also called the humpback grouper, the barramundi cod has a strangely hunched head and a creamy body covered in dark polka dots, like a swimming Dalmatian."
  },
  "barred-cheek-coral-trout": {
    "scientificName": "Plectropomus maculatus",
    "category": "Coral trout",
    "didYouKnow": "Barcheek coral trout are protogynous hermaphrodites, starting life as females and transitioning to males as they mature."
  },
  "barred-grunter": {
    "scientificName": "Amniataba percoides",
    "category": "Perch and grunter (freshwater)",
    "misId": "Mozambique tilapia (juvenile)",
    "didYouKnow": "This little freshwater fish can actually grunt out loud by vibrating muscles near its swim bladder, and it wears five dark bars down its silvery sides."
  },
  "barred-javelin": {
    "scientificName": "Pomadasys kaakan",
    "category": "Javelins",
    "sizeRange": "Common length: 45cm; Maximum length: 80cm",
    "distribution": "Coastal inshore waters - open bays and estuaries; Rivers to the upper limit of brackish water",
    "misId": "Silver javelin, Blotched javelin",
    "didYouKnow": "Barred javelin, or spotted grunter as they are often called, rank as the fifth most targeted fish species in Queensland, based on boat ramp survey data from 2016 to March 2024."
  },
  "barred-queenfish": {
    "scientificName": "Scomberoides tala",
    "category": "Trevally",
    "sizeRange": "Common length: 40cm; Maximum length: 62cm",
    "misId": "Other queenfish species",
    "didYouKnow": "A slim, silvery speedster in the trevally family, the barred queenfish flashes a row of dark blotches along its flattened sides as it chases small fish through warm coastal waters."
  },
  "bartail-flathead": {
    "scientificName": "Platycephalus australis",
    "category": "Flathead",
    "sizeRange": "Common length: 35cm; Maximum length: 50cm",
    "distribution": "Shallow coastal waters and estuaries",
    "misId": "Yellowtailed flathead, Dusky flathead, Sand flathead",
    "didYouKnow": "With a wide, flattened head, the bartail flathead buries itself in the sand until only its eyes poke out, then ambushes passing fish, and its tail carries a bright yellow blotch."
  },
  "beche-de-mer": {
    "category": "Sea cucumbers",
    "didYouKnow": "Beche-de-mer is the name for sea cucumbers, squishy sea-floor creatures that breathe through their bottoms and can squirt out their sticky insides to tangle up attackers."
  },
  "bicolour-parrotfish": {
    "scientificName": "Cetoscarus ocellatus",
    "category": "Parrotfishes",
    "didYouKnow": "Baby bicolour parrotfish are white with an orange headband, but grown-up males turn a dazzling green covered in pink spots."
  },
  "big-eye-bream": {
    "scientificName": "Monotaxis grandoculis",
    "category": "Emperors",
    "didYouKnow": "With enormous eyes for seeing in the dark, the big-eye bream hunts snails and crabs at night and crushes their hard shells with strong, flat teeth."
  },
  "big-mullet": {
    "category": "Mullet",
    "didYouKnow": "Sea mullet love to leap right out of the water, and every autumn huge silver schools travel along the coast together in a spectacular journey called the mullet run."
  },
  "bigeye-seaperch": {
    "scientificName": "Lutjanus lutjanus",
    "category": "Tropical snappers and sea perches",
    "misId": "Brownstripe seaperch",
    "didYouKnow": "True to its name, this slender snapper has extra-big eyes for hunting around the reef, and a bright yellow stripe runs the whole length of its silvery body."
  },
  "bigeye-trevally": {
    "scientificName": "Caranx sexfasciatus",
    "category": "Trevally",
    "sizeRange": "Common length: 40cm; Maximum length: 78cm",
    "distribution": "Juveniles may be found in estuaries",
    "misId": "Bludger trevally, Giant trevally",
    "didYouKnow": "Bigeye trevally gather in huge swirling, tornado-like schools during the day, then break apart at night to hunt small fish and crabs with their big eyes."
  },
  "bignose-shark": {
    "scientificName": "Carcharhinus altimus",
    "category": "Sharks",
    "sizeRange": "Common length: 60cm-300cm",
    "distribution": "Demersal on deep continental shelves and insular slopes by day and may be pelagic by night",
    "misId": "Galapagos shark (C. galapagensis - no records in Queensland coastal waters)",
    "didYouKnow": "Named for its large, bulging snout, the bignose shark prefers the deep, cruising along the edges of continental shelves hundreds of metres down."
  },
  "black-and-white-snapper": {
    "scientificName": "Macolor niger",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Young black-and-white snappers are boldly striped like a zebra, but as they grow up they change into a dark grey-brown adult."
  },
  "black-banded-rainbowfish": {
    "scientificName": "Melanotaenia nigrans",
    "category": "Rainbowfish",
    "sizeRange": "Common length: 11cm",
    "didYouKnow": "Wearing a bold dark stripe from nose to tail, this little northern-Australian freshwater fish shimmers with rainbow colours that glow even brighter when the males show off."
  },
  "black-banded-snapper": {
    "scientificName": "Lutjanus semicinctus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Named for the seven narrow brown bars along its pink-and-white body, the black-banded snapper also wears a big dark blotch near its tail and darts shyly through coral channels."
  },
  "black-catfish": {
    "scientificName": "Neosilirus ater",
    "category": "Catfish",
    "didYouKnow": "With an eel-like tail and sharp venom-tipped spines, the black catfish whiskers around muddy Australian rivers feeling for food in the dark."
  },
  "black-jewfish": {
    "scientificName": "Protonibea diacanthus",
    "category": "Jewfish",
    "sizeRange": "Common length: 80cm; Maximum length: 150cm",
    "distribution": "Coastal waters (to a depth of 100 m); Ascends tidal rivers and estuaries",
    "misId": "Mulloway, Silver jewfish",
    "didYouKnow": "Black jewfish can make loud drumming and croaking sounds by buzzing a muscle against their swim bladder, almost like a built-in drum."
  },
  "black-spot-snapper": {
    "scientificName": "Lutjanus fulviflamma",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Easy to recognise by the dark smudge on its silvery side, this snapper shelters around mangroves and reefs by day and hunts little fish and crabs at night."
  },
  "black-teatfish": {
    "scientificName": "Holothuria (Microthele) whitmaei",
    "category": "Sea cucumbers",
    "didYouKnow": "This jet-black sea cucumber has a row of little teat-like bumps along each side of its body, which is exactly how it earned its funny name."
  },
  "black-tipped-rockcod": {
    "scientificName": "Epinephelus fasciatus",
    "category": "Cods and groupers",
    "didYouKnow": "You can spot this reddish reef grouper easily because the tips of its spiky dorsal fin look like they have been dipped in black ink."
  },
  "black-tipped-rockcod-underwater": {
    "scientificName": "Epinephelus fasciatus",
    "category": "Cods and groupers",
    "didYouKnow": "The blacktip rockcod is a reddish grouper named for the little black tips on its spiny fin, and it can quickly change colour to hide on the reef."
  },
  "blackbanded-amberjack": {
    "scientificName": "Seriolina nigrofasciata",
    "category": "Trevally",
    "sizeRange": "Maximum length: 173cm",
    "distribution": "Offshore reefs (near continental shelfs) at depths of 20m-150 m",
    "misId": "Other Seriola species",
    "didYouKnow": "Young blackbanded amberjacks wear bold dark bands across their bodies that fade away as they grow into fast, silvery ocean hunters."
  },
  "blackfin-pigfish": {
    "scientificName": "Bodianus loxozonus",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Painted orange with narrow white stripes, this reef fish sports a bold black band running diagonally across its tail end and jet-black pelvic fins."
  },
  "blackfin-slatey": {
    "scientificName": "Diagramma melanacrum",
    "category": "Sweetlips",
    "didYouKnow": "Young blackfin slateys are covered in polka dots that shrink and multiply as they grow, slowly fading into the speckled grey of adults with their inky black fins."
  },
  "blacklip-oyster": {
    "scientificName": "Pinctada margaritifera",
    "category": "Bivalve molluscs and gastropods",
    "didYouKnow": "A black-lipped pearl oyster, the blacklip oyster lines its shell with shimmering mother-of-pearl and can grow beautiful dark 'black pearls' inside."
  },
  "blackmast": {
    "scientificName": "Craterocephalus stramineus",
    "category": "Blackmast",
    "didYouKnow": "The tiny blackmast grows only about as long as your finger and swims in shimmering shoals near the surface, showing off a tall front fin edged in black."
  },
  "blacksaddle-rockcod": {
    "scientificName": "Epinephelus howlandi",
    "category": "Cods and groupers",
    "didYouKnow": "Sprinkled all over with tiny black spots, this rockcod also wears dark saddle-shaped blotches across its back, which give it its name."
  },
  "blackspot-tuskfish": {
    "scientificName": "Choerodon schoenleinii",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Through boat ramp surveys and compliance checks, it's been observed that tuskfish are often mistaken for parrotfish."
  },
  "blackspotted-rockcod": {
    "scientificName": "Epinephelus malabaricus",
    "category": "Cods and groupers",
    "sizeRange": "Common length: 40cm; Maximum lenght: 115cm",
    "distribution": "Coral and rocky reefs; Tide pools, estuaries, mangrove swamps",
    "misId": "Greasy cod, Goldspotted rockcod",
    "didYouKnow": "Also called the Malabar grouper, the blackspotted rockcod is a gentle giant that can grow longer than a grown-up and weigh over 100 kilograms."
  },
  "blackspotted-whipray": {
    "category": "Rays",
    "didYouKnow": "A sandy-brown stingray sprinkled with tiny black spots, it drags a long whip-like tail ringed with black-and-white bands like a stripy candy cane."
  },
  "blacktip-reef-shark": {
    "scientificName": "Carcharhinus melanopterus",
    "category": "Sharks",
    "sizeRange": "Common length: 48cm-140cm; Maximum length: 180cm",
    "distribution": "Inshore/offshore; Associated with coral reefs and shoals",
    "misId": "Nervous shark ( C. cautus )",
    "didYouKnow": "Cruising in water so shallow its fins poke above the surface, this shark is known for the bold black tips that look painted onto every fin."
  },
  "blind-shark": {
    "category": "Sharks",
    "sizeRange": "Maximum length: 120cm",
    "didYouKnow": "Despite its name the blind shark isn't blind at all; it just closes its eyes when out of water and can survive stranded by the tide for up to 18 hours."
  },
  "bloomfield-river-cod": {
    "scientificName": "Guyu wujalwujalensis",
    "category": "Cods (freshwater)",
    "sizeRange": "Maximum length: 10cm",
    "distribution": "Bloomfield River (north eastern Australia); Shelters in the cover of undercut banks, boulders, logs, snags and submerged root masses during the day",
    "didYouKnow": "This tiny ancient fish lives in just one short stretch of a single Queensland rainforest river, hiding among rocks by day and hunting at night."
  },
  "blue-catfish": {
    "scientificName": "Neoarius graeffei",
    "category": "Catfish",
    "didYouKnow": "Male blue catfish are super dads, carrying their big marble-sized eggs safely tucked inside their own mouths until the babies hatch."
  },
  "blue-lined-rockcod": {
    "scientificName": "Cephalopholis formosa",
    "category": "Cods and groupers",
    "didYouKnow": "Painted with wavy sky-blue lines running the whole length of its brownish body, this small reef grouper looks like someone doodled on it with a fine blue pen."
  },
  "blue-mackerel": {
    "scientificName": "Scomber australasicus",
    "category": "Mackerel and tuna",
    "didYouKnow": "Blue mackerel have wavy dark squiggles across their blue-green backs and zoom through the open sea in fast-moving schools, chasing tiny plankton and baitfish."
  },
  "blue-maori-rockcod": {
    "scientificName": "Epinephelus cyanopodus",
    "category": "Cods and groupers",
    "didYouKnow": "The blue Maori rockcod is a big blue-grey grouper freckled all over with tiny dark spots and glowing yellow fins, as if it got splattered with paint."
  },
  "blue-marlin": {
    "scientificName": "Makaira nigricans",
    "category": "Billfish and swordfish",
    "sizeRange": "Common length: 2.9m; Maximum length: 5m",
    "distribution": "Typically found at depths from 0-1000 metres, usually seen above 40 metres; Rarely found near shore or islands except near deep drop-offs; Centred around equatorial regions; Migrates to higher latitudes during summer",
    "misId": "Black marlin, Striped marlin",
    "didYouKnow": "One of the ocean's fastest hunters, the blue marlin uses its long spear-shaped bill to stun fish and can flash bright cobalt-blue when excited."
  },
  "blue-shark": {
    "scientificName": "Prionace glauca",
    "category": "Sharks",
    "sizeRange": "Common length: 35cm to at least 380cm",
    "distribution": "Mostly offshore",
    "misId": "Shortfin mako",
    "didYouKnow": "The blue shark has long, wing-like fins and a beautiful deep-blue back, and it can travel thousands of kilometres across the ocean, sometimes crossing entire seas."
  },
  "blue-spotted-coral-trout": {
    "scientificName": "Plectropomus laevis",
    "category": "Coral trout",
    "didYouKnow": "This amazing fish comes in two totally different looks: some wear white with black saddles and yellow fins, while others turn red-brown covered in scattered blue spots."
  },
  "blue-spotted-rockcod": {
    "scientificName": "Cephalopholis cyanostigma",
    "category": "Cods and groupers",
    "didYouKnow": "Covered in tiny blue spots that each glow inside a pale halo, this brown reef cod looks like it has been sprinkled with sparkly confetti."
  },
  "blue-swimmer-crab": {
    "scientificName": "Portunus armatus",
    "category": "Crabs",
    "sizeRange": "Maximum size: 22cm",
    "distribution": "Bays, estuaries and intertidal areas to depths of 60m; Prefer muddy or sandy bottoms but can also be found on rubble, seagrass and seaweed",
    "didYouKnow": "Blue swimmer crabs are widely distributed along the Australian coastline. In Queensland they favour sandy and muddy substrates in shallow coastal and estuarine waters and are predominantly fished in the southern regions of the state."
  },
  "blue-threadfin": {
    "scientificName": "Eleutheronema tetradactylum",
    "category": "Threadfin",
    "sizeRange": "Common length: 59cm; Maximum length: 160cm",
    "distribution": "Coastlines and estuary",
    "misId": "King threadfin",
    "didYouKnow": "The blue threadfin has four long thread-like feelers dangling below its fins that it drags across the muddy seafloor to taste and touch for hidden food."
  },
  "blue-tuskfish": {
    "scientificName": "Choerodon cyanodus",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Blue tuskfish have bright bluish teeth that jut out like little tusks, perfect for crunching crabs and shellfish on the reef."
  },
  "bluebarred-parrotfish": {
    "scientificName": "Scarus ghobban",
    "category": "Parrotfishes",
    "didYouKnow": "Using a mouth fused into a hard parrot-like beak, this fish scrapes algae off rocks and can even change its colours as it grows."
  },
  "blueclaw": {
    "scientificName": "Cherax destructor",
    "category": "Lobsters, crayfish and bugs",
    "sizeRange": "Common length: 10cm; Maximum length: 20cm",
    "distribution": "Natural distribution: Murray-Darling basin, Lake Eyre and Bulloo-Bancannia divisions and the Dawson River catchment on the east coast drainage; Outside the natural distribution, this species is considered non-indigenous so must not be returned to the water. This includes berried females",
    "misId": "Redclaw",
    "didYouKnow": "Better known as the yabby, this Australian freshwater crayfish earned its scientific name 'destructor' because it digs burrows so well it can tunnel right through earthen dam walls."
  },
  "bluespine-unicornfish": {
    "scientificName": "Naso unicornis",
    "category": "Surgeonfishes",
    "didYouKnow": "Sporting a horn-like bump on its forehead, the bluespine unicornfish also carries two bright blue, blade-like spines near its tail that flash as a warning."
  },
  "bluestripe-seaperch": {
    "scientificName": "Lutjanus kasmira",
    "category": "Tropical snappers and sea perches",
    "misId": "Five-lined seaperch",
    "didYouKnow": "Bright yellow with four glowing electric-blue stripes running from head to tail, the bluestripe seaperch cruises coral reefs in dazzling schools."
  },
  "bony-bream": {
    "scientificName": "Nematalosa erebi",
    "category": "Anchovies, herrings and sardines",
    "didYouKnow": "Named for its many fine bones, this common river fish is a favourite meal for barramundi, pelicans and crocodiles across northern Australia."
  },
  "bridled-parrotfish": {
    "scientificName": "Scarus frenatus",
    "category": "Parrotfishes",
    "didYouKnow": "Every night the bridled parrotfish blows a bubble of slimy mucus around itself like a sleeping bag, hiding its smell so hungry predators cannot sniff it out."
  },
  "brown-barred-rockcod": {
    "scientificName": "Cephalopholis boenak",
    "category": "Cods and groupers",
    "didYouKnow": "A small chocolate-brown grouper wearing seven or eight darker stripes and a black ear-patch, it lives in tiny family groups led by a single male."
  },
  "brown-surgeonfish": {
    "scientificName": "Acanthurus nigrofuscus",
    "category": "Surgeonfishes",
    "didYouKnow": "Like a tiny lawnmower, this surgeonfish nibbles algae off the reef all day, and hides a sharp scalpel-like blade near its tail for defence."
  },
  "brown-whipray": {
    "category": "Rays",
    "didYouKnow": "A stingray with a diamond-shaped body and an incredibly long, thin whip-like tail, the brown whipray glides over muddy sea floors to hunt prawns and crabs."
  },
  "brownstripe-seaperch": {
    "scientificName": "Lutjanus vitta",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "A single brown stripe runs from snout to tail along the silvery-yellow body of the brownstripe seaperch, which is exactly how it got its name."
  },
  "bull-shark": {
    "scientificName": "Carcharhinus leucas",
    "category": "Sharks",
    "sizeRange": "Common length: 55cm to at least 340cm",
    "distribution": "Inshore (and rare large specimens in offshore)",
    "misId": "Pigeye shark",
    "didYouKnow": "Bull sharks are one of the few sharks that can swim far up freshwater rivers, sometimes turning up hundreds of kilometres inland."
  },
  "bumphead-parrotfish": {
    "scientificName": "Bolbometopon muricatum",
    "category": "Parrotfishes",
    "didYouKnow": "The biggest parrotfish in the world uses the huge bony bump on its forehead to ram into coral, then crunches it up and poops out clouds of fine white sand."
  },
  "cairns-rainbowfish": {
    "scientificName": "Cairnsichthys rhombosomoides",
    "category": "Rainbowfish",
    "distribution": "Northern Australia",
    "didYouKnow": "This little rainbowfish lives only in the clear rainforest streams between Cairns and Innisfail in tropical Queensland, and is found nowhere else on Earth."
  },
  "camouflage-grouper": {
    "scientificName": "Epinephelus polyphekadion",
    "category": "Cods and groupers",
    "didYouKnow": "True to its name, the camouflage grouper wears a blotchy brown coat to vanish against the reef, and thousands gather in one spot to spawn around the full moon."
  },
  "carolines-parrotfish": {
    "scientificName": "Calotomus carolinus",
    "category": "Parrotfishes",
    "didYouKnow": "Unlike most parrotfish, this one has no hard beak; instead its lips hide separate teeth, and males show pink lines shooting out from their eyes."
  },
  "celebes-sweetlips": {
    "scientificName": "Plectorhinchus chrysotaenia",
    "category": "Sweetlips",
    "didYouKnow": "Dressed in narrow golden stripes across a silvery-blue body with bright yellow fins, the Celebes sweetlips uses its big rubbery lips to snuffle food from the reef."
  },
  "chequered-rainbowfish": {
    "scientificName": "Melanotaenia inornata",
    "category": "Rainbowfish",
    "sizeRange": "Common length: 9cm",
    "didYouKnow": "This northern Australian rainbowfish has orange fins dotted with bright red spots in a checkerboard pattern, and the males grow deeper-bodied and more colourful than the females."
  },
  "chinaman-rockcod": {
    "scientificName": "Epinephelus rivulatus",
    "category": "Cods and groupers",
    "didYouKnow": "Also called the halfmoon grouper, this cod wears a coat of greenish-brown where every single scale carries its own tiny pale dot."
  },
  "chinamanfish": {
    "scientificName": "Symphorus nematophorus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Young chinamanfish trail long streamer-like threads from their fins, and this big reef snapper flashes bright blue wavy lines across its face."
  },
  "chinese-weatherfish": {
    "scientificName": "Misgurnus anguillicaudatus",
    "category": "Loaches",
    "sizeRange": "Grows to 25cm",
    "distribution": "Native to Europe and Asia",
    "didYouKnow": "Nicknamed for wriggling wildly before storms, the Chinese weatherfish can gulp air at the surface and breathe through its gut when water runs low on oxygen."
  },
  "climbing-perch-anabas-testudineus": {
    "scientificName": "Anabas testudineus",
    "category": "Climbing perches",
    "sizeRange": "10cm-23cm",
    "distribution": "Native to Asia",
    "didYouKnow": "Climbing perch can gulp air and clamber across dry land using their spiny gill covers, surviving out of water to reach a new pond."
  },
  "coal-grunter": {
    "scientificName": "Hephaestus carbo",
    "category": "Perch and grunter (freshwater)",
    "didYouKnow": "Named for its coal-dark colour, this northern-Australian freshwater fish starts life as a bright yellow-and-orange youngster before turning almost black as it grows up."
  },
  "collared-carpetshark": {
    "scientificName": "Parascyllium collare",
    "category": "Sharks",
    "sizeRange": "Maximum length: 86cm",
    "distribution": "Demersal in coastal waters south of Mooloolaba",
    "misId": "Catshark",
    "didYouKnow": "Named for the dark chocolate-brown 'collar' behind its head, the collared carpetshark is a small, spotty seafloor shark that lays its babies inside egg cases."
  },
  "collared-sea-bream": {
    "scientificName": "Gymnocranius audleyi",
    "category": "Emperors",
    "didYouKnow": "The collared sea bream has huge eyes for spotting food and a dark collar-like patch behind each eye, and it hunts crabs and worms on the sandy sea floor."
  },
  "comet-grouper": {
    "scientificName": "Epinephelus morrhua",
    "category": "Cods and groupers",
    "didYouKnow": "Sandy-coloured with bold dark bands curving diagonally across its body, the comet grouper lives on deep rocky reefs far below the waves."
  },
  "common-carp": {
    "scientificName": "Cyprinus carpio",
    "category": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s",
    "didYouKnow": "Common carp have whisker-like feelers called barbels around their mouths for tasting food, and these tough fish can live for many years in muddy rivers and lakes."
  },
  "common-coral-trout": {
    "scientificName": "Plectropomus leopardus",
    "category": "Coral trout",
    "misId": "Bluespotted coral trout",
    "didYouKnow": "Common coral trout are fierce, predatory coral reef fish that are highly regarded table fare."
  },
  "common-hardyhead": {
    "scientificName": "Atherinomorus vaigiensis",
    "category": "Hardyhead",
    "didYouKnow": "A small silvery fish with a shiny stripe down its side, it gathers in glittering schools at the mouths of estuaries and in calm sheltered bays."
  },
  "common-silverbiddy": {
    "scientificName": "Gerrees subfasciatus",
    "category": "Silver biddies",
    "didYouKnow": "This shiny silver fish can shoot its mouth out into a little tube to vacuum up worms and other tiny creatures hiding in the sandy seabed."
  },
  "convict-surgeonfish": {
    "scientificName": "Acanthurus triostegus",
    "category": "Surgeonfishes",
    "didYouKnow": "Named for the black stripes running down its body like old prison uniforms, the convict surgeonfish also hides a sharp scalpel-like blade near its tail."
  },
  "coral-cod": {
    "scientificName": "Cephalopholis miniata",
    "category": "Cods and groupers",
    "didYouKnow": "Glowing bright orange-red and sprinkled with tiny blue spots, the coral cod is one of the most colourful little hunters darting around coral reefs."
  },
  "coral-rockcod": {
    "scientificName": "Epinephelus corallicola",
    "category": "Cods and groupers",
    "didYouKnow": "Wearing dark saddle-shaped blotches along its back and speckled all over with small spots, this grouper lurks among shallow silty reefs."
  },
  "coronation-trout": {
    "scientificName": "Variola louti",
    "category": "Coral trout",
    "didYouKnow": "Also called the yellow-edged lyretail, this ruby-red coral trout has a beautiful crescent-shaped tail trimmed in bright yellow."
  },
  "crimson-snapper": {
    "scientificName": "Lutjanus erythropterus",
    "category": "Tropical snappers and sea perches",
    "sizeRange": "Common length: 45cm Maximum length: 81.6cm",
    "distribution": "Inhabits trawl grounds, reefs, shoals, rubble, corals, and hard or sandy mud substrates, as well as offshore reefs; Juveniles are found in shallow estuarine waters over muddy, silty, and coarse sand/rubble substrates",
    "misId": "Indonesian snapper, Saddletail snapper",
    "didYouKnow": "Crimson snapper are gonochoristic, meaning they are born either male or female and do not change sex during their lifetime."
  },
  "crimsonspotted-rainbowfish": {
    "scientificName": "Melanotaenia duboulayi",
    "category": "Rainbowfish",
    "distribution": "Northern Australia",
    "didYouKnow": "Sparkling with rows of red dots along its silvery sides, the crimson-spotted rainbowfish is an Australian freshwater fish whose males glow even brighter to impress females."
  },
  "daisy-parrotfish": {
    "scientificName": "Chlorurus sordidus",
    "category": "Parrotfishes",
    "didYouKnow": "Using a beak like a parrot's, the daisy parrotfish crunches up coral and poops out clean white sand, then sleeps at night inside a see-through bubble of its own slime."
  },
  "dark-banded-fusilier": {
    "scientificName": "Pterocaesio tile",
    "category": "Fusiliers",
    "didYouKnow": "Zooming about in big schools by day, this blue fusilier wears a dark stripe along its side and can switch to a reddish colour when it rests at night."
  },
  "dark-tailed-seaperch": {
    "scientificName": "Lutjanus lemniscatus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Young darktail seaperch wear a bold black racing stripe from nose to tail, while the grown-ups turn a dusky pink with dark, white-edged fins."
  },
  "desert-rainbowfish": {
    "scientificName": "Melanotaenia tatei",
    "category": "Rainbowfish",
    "distribution": "Northern Australia",
    "didYouKnow": "A tough little rainbowfish that lives in the dry heart of Australia around Lake Eyre, breeding in a flash whenever rare desert rains fill the rivers."
  },
  "diamondfish": {
    "scientificName": "Monodactylus argenteus",
    "category": "Diamondfishes",
    "didYouKnow": "Shaped like a shimmering silver diamond, this fish is a real traveller and can live happily in salty sea, brackish estuaries, and even freshwater rivers."
  },
  "diamondscale-mullet": {
    "scientificName": "Liza vaigiensis",
    "category": "Mullet",
    "sizeRange": "Common length: 35cm; Maximum length: 60cm",
    "distribution": "Shallow coastal areas; Protected sandy shores in lagoons, reef flats, estuaries and coastal creeks; Usually under tidal influence (but may enter freshwater); Juveniles may be found in mangroves",
    "misId": "Other mullet species",
    "didYouKnow": "The diamondscale mullet has a squared-off tail and scales edged in dark like little diamonds, and young ones sport jet-black fins like painted paddles."
  },
  "dianas-hogfish": {
    "scientificName": "Bodianus diana",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Young Diana's hogfish are decorated with white spots and yellow markings, and they work as cleaners, nibbling pesky parasites off bigger fish."
  },
  "dogfish": {
    "category": "Sharks",
    "distribution": "Deeper, cooler waters",
    "didYouKnow": "Dogfish sharks earn their doggy name by hunting together in big packs, and they carry sharp defensive spines in front of their fins."
  },
  "double-line-fusilier": {
    "scientificName": "Pterocaesio digramma",
    "category": "Fusiliers",
    "didYouKnow": "Zooming through the reef in big shimmering schools, this slender fusilier always wears exactly two yellow racing-stripes down its blue-green body."
  },
  "dusky-snapper": {
    "scientificName": "Paracaesio sordida",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Dusky snappers gather in schools over deep rocky reefs and sip tiny drifting plankton from the water rather than hunting bigger prey."
  },
  "dwarf-sawfish": {
    "scientificName": "Pristis clavata",
    "category": "Sawfish",
    "sizeRange": "Common length: Up to 150cm (locally caught at 310cm)",
    "distribution": "Juveniles more commonly encountered in coastal foreshores and embankments; adults in marine waters",
    "misId": "Freshwater sawfish",
    "didYouKnow": "The dwarf sawfish carries a long, toothy saw on its snout that it swishes side to side to sense and stun small fish hiding in muddy water."
  },
  "dwarf-spotted-rockcod": {
    "scientificName": "Epinephelus merra",
    "category": "Cods and groupers",
    "didYouKnow": "Covered in close-packed brown spots that form a honeycomb pattern, this little rockcod hides among coral heads on shallow reefs."
  },
  "eel-tailed-catfish": {
    "scientificName": "Tandanus tandanus",
    "category": "Catfish",
    "sizeRange": "Common length: 40cm; Maximum length: 90cm",
    "distribution": "Widely distributed in the Murray-Darling River system and east coast drainages; Often found on sand or gravel bottoms in slow moving streams; Often found in stocked impoundments",
    "didYouKnow": "The eel-tailed catfish builds a nest of gravel for its eggs and dad guards them carefully, but watch out for the sharp, venomous spines on its fins!"
  },
  "eight-bar-grouper": {
    "scientificName": "Formally known a s Epinephelus octofasciatus, this species is now recognised as Hyporthodus octofasciatus.",
    "category": "Cods and groupers",
    "misId": "Bar rockcod",
    "didYouKnow": "One of the giants of the deep reef, this grouper wears eight grey bands and can grow over a metre long and heavier than a grown-up person."
  },
  "ember-parrotfish": {
    "scientificName": "Scarus rubroviolaceus",
    "category": "Parrotfishes",
    "didYouKnow": "Using a beak like a parrot's, this fish scrapes algae off coral, then wraps itself in a bubble of slimy mucus to sleep safely at night."
  },
  "empire-gudgeon": {
    "scientificName": "Hypseleotris compressa",
    "category": "Gudgeons",
    "didYouKnow": "When it is time to breed, male empire gudgeons burst into brilliant reds, oranges and blues, turning this little freshwater fish into a living rainbow."
  },
  "eyestripe-surgeonfish": {
    "scientificName": "Acanthurus dussumieri",
    "category": "Surgeonfishes",
    "didYouKnow": "The eyestripe surgeonfish has a bright yellow band streaking back from its eye and a sharp, scalpel-like spine near its tail for defence."
  },
  "firetail-gudgeon": {
    "scientificName": "Hypseleotris galii",
    "category": "Gudgeons",
    "didYouKnow": "When it is time to impress, male firetail gudgeons turn almost black and flash a blazing red-orange tail and fins to dazzle the females."
  },
  "five-lined-seaperch": {
    "scientificName": "Lutjanus quinquelineatus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Bright golden-yellow with neat electric-blue stripes, this little snapper often gathers in dazzling schools that light up the coral reef."
  },
  "flagtail-glassfish": {
    "scientificName": "Ambassis miops",
    "category": "Glassfish",
    "didYouKnow": "So see-through you can spot its backbone, the flagtail glassfish shimmers in schools through mangrove creeks and estuaries."
  },
  "flagtail-rockcod": {
    "scientificName": "Cephalopholis urodeta",
    "category": "Cods and groupers",
    "didYouKnow": "This reddish-brown grouper is named for the two bold white diagonal stripes on its tail, which flash like a waving flag."
  },
  "flame-snapper": {
    "scientificName": "Etelis coruscans",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Living hundreds of metres down in the dark, this fiery-red snapper has huge eyes and a deeply forked tail with long streaming tips."
  },
  "flowery-rockcod": {
    "scientificName": "Epinephelus fuscoguttatus",
    "category": "Cods and groupers",
    "didYouKnow": "Covered in brown blotches like a scattered bed of flowers, this big grouper sits perfectly still, then suddenly opens its huge mouth to vacuum up passing fish."
  },
  "flyspecked-hardyhead": {
    "scientificName": "Craterocephalus stercusmuscarum",
    "category": "Hardyhead",
    "didYouKnow": "Named for the scattering of tiny black dots on its body that look just like little fly specks, giving this slim fish a truly funny scientific name too."
  },
  "fossil-shark": {
    "scientificName": "Hemipristis elongata",
    "category": "Sharks",
    "sizeRange": "Common length: 52cm-230cm",
    "distribution": "Inshore/offshore",
    "misId": "Hooktooth shark, Weasel shark",
    "didYouKnow": "Nicknamed the fossil shark, this snaggletooth is the last living member of an ancient family, with crooked hook-shaped lower teeth just like its relatives from millions of years ago."
  },
  "foursaddle-rockcod": {
    "scientificName": "Epinephelus spilotoceps",
    "category": "Cods and groupers",
    "didYouKnow": "The foursaddle rockcod is a small grouper named for the four dark saddle-shaped blotches along its back, helping it blend into rocky reef cracks."
  },
  "freshwater-sawfish": {
    "scientificName": "Pristis pristis",
    "category": "Sawfish",
    "sizeRange": "Common length: 150cm; Maximum length: 600cm",
    "distribution": "Relatively uncommon; Coastal drainages in northern Australia; Sometimes upstream freshwater creeks",
    "didYouKnow": "Armed with a long saw-like snout lined with teeth, the freshwater sawfish swims far up rivers and slashes its saw side to side to stun its prey."
  },
  "frypan-bream": {
    "scientificName": "Argyrops spinifer",
    "category": "Breams and snapper",
    "sizeRange": "Common length: 30cm; Maximum length: 70 cm",
    "distribution": "Bottom-dwelling (wide range of grounds at depths 5-100m)",
    "misId": "Pink snapper",
    "didYouKnow": "Also called the king soldierbream, this fish trails several very long, thread-like spines from its back that flow behind it like streamers."
  },
  "gambusia": {
    "scientificName": "Gambusia holbrooki",
    "category": "Mosquitofishes",
    "sizeRange": "3cm-4cm up to 7cm",
    "distribution": "Eastern Australia",
    "didYouKnow": "Tiny but tough, the gambusia gives birth to live wriggling babies instead of laying eggs and gobbles up mosquito larvae, though in Australia this introduced fish causes big trouble for native species."
  },
  "giant-queenfish": {
    "scientificName": "Scomberoides commersonnianus",
    "category": "Trevally",
    "sizeRange": "Common length: 60cm; Maximum length: 120cm",
    "distribution": "Reefs and offshore islands; Periodically enters estuaries",
    "misId": "Banded queenfish",
    "didYouKnow": "A fast, flat, silvery hunter, the giant queenfish can grow over a metre long and sometimes leaps clear out of the water while chasing baitfish."
  },
  "giant-shovelnose-ray": {
    "category": "Rays",
    "didYouKnow": "The giant shovelnose ray looks like a cross between a shark and a stingray, gliding over sandy flats on a flat, shovel-shaped nose."
  },
  "giant-trevally": {
    "scientificName": "Caranx ignoblis",
    "category": "Trevally",
    "sizeRange": "Common length: 80cm; Maximum length: 146cm",
    "distribution": "All marine habitats (juveniles may occur in estuaries)",
    "misId": "Bigeye trevally, Brassy trevally",
    "didYouKnow": "A powerful silver hunter, the giant trevally can leap right out of the water to snatch seabirds like terns flying just above the surface."
  },
  "gilberts-grunter": {
    "scientificName": "Pingalla gilberti",
    "category": "Perch and grunter (freshwater)",
    "didYouKnow": "Found only in a few rivers of northern Australia, tiny Gilbert's grunter scrapes algae off rocks with rows of flat teeth, and dads fan the eggs to keep them clean."
  },
  "gold-lined-sea-bream": {
    "scientificName": "Gnathodentex aureolineatus",
    "category": "Emperors",
    "didYouKnow": "A silver fish streaked with shimmering golden lines, it is marked by one bright yellow spot near the base of its tail like a little sticker."
  },
  "goldband-fusilier": {
    "scientificName": "Pterocaesio chrysozona",
    "category": "Fusiliers",
    "didYouKnow": "Swimming in big glittering schools by day, this slim fish wears a bright golden-yellow stripe down its side and snacks on tiny drifting plankton."
  },
  "goldband-snapper": {
    "scientificName": "Pristipomoides multidens",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The goldband snapper lives deep down where sunlight fades, wearing a shiny golden stripe along its silvery-pink body."
  },
  "golden-eye-jobfish": {
    "scientificName": "Pristipomoides flavipinnis",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "With shining golden eyes and wavy yellow squiggles along its body, the golden-eye jobfish lives in deep water far below the sunlit reef."
  },
  "golden-snapper": {
    "scientificName": "Lutjanus johnii",
    "category": "Tropical snappers and sea perches",
    "sizeRange": "Common length: 50cm; Maximum length: 97cm",
    "distribution": "Coral reef areas; Brackish mangrove estuaries (juveniles)",
    "misId": "Moses snapper (Moses perch), Mangrove jack",
    "didYouKnow": "Golden snapper are often mistaken for mangrove jack. To distinguish the two, look out for a dark blotch (larger than the eye) located beneath the soft rays of the dorsal fin and above the lateral line. Due to this blotch, they are also known as finger mark."
  },
  "goldflag-jobfish": {
    "scientificName": "Pristipomoides auricilla",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Its scientific name means 'gold tail', because the top of its tail fin glows bright yellow and waves through the deep water like a little flag."
  },
  "goldlip-pearl-oyster": {
    "scientificName": "Pinctada maxima",
    "category": "Bivalve molluscs and gastropods",
    "didYouKnow": "The largest pearl oyster in the world, this giant shell can grow bigger than a dinner plate and makes the prized golden and silvery South Sea pearls."
  },
  "goldspot-pigfish": {
    "scientificName": "Bodianus perdition",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Orange-red with a bright yellow patch on its back, the goldspot pigfish is a colourful reef wrasse that crushes snails and crabs with its strong teeth."
  },
  "goldspotted-rockcod": {
    "scientificName": "Epinephelus coioides",
    "category": "Cods and groupers",
    "sizeRange": "Common length: 40cm; Maximum length: 140cm",
    "distribution": "Estuaries; Offshore, to a depth of 100m",
    "didYouKnow": "Goldspotted rockcod is usually a bycatch species caught incidentally when fishers target bream, barramundi and mangrove jack."
  },
  "graceful-shark": {
    "scientificName": "Carcharhinus amblyrhynchoides",
    "category": "Sharks",
    "sizeRange": "Common lenght: 50cm-170cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian blacktip, Common blacktip, Spinner shark (blacktip colour form)",
    "didYouKnow": "The graceful shark is a sleek, slender whaler built for speed, with a pointed snout and streamlined body that let it zip through warm coastal seas."
  },
  "grass-emperor": {
    "scientificName": "Lethrinus laticaudis",
    "category": "Emperors",
    "sizeRange": "Common length: 30-40cm; Maximum length: 56cm",
    "distribution": "Coral reefs; Seagrass beds and mangrove swamps (juveniles)",
    "misId": "Spangled emperor",
    "didYouKnow": "Commonly referred to as grassies or tricky snapper, these fish are famous for their tough and challenging fight after after being hooked."
  },
  "grass-tuskfish": {
    "scientificName": "Choerodon cephalotes",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Living almost entirely in seagrass meadows, this purple-blue tuskfish uses tusk-like teeth to crush crabs, shellfish and sea urchins."
  },
  "greasy-rockcod": {
    "scientificName": "Epinephelus tauvina",
    "category": "Cods and groupers",
    "didYouKnow": "The greasy rockcod is a grouper that swallows whole fish and crabs in one big slurp, sucking them in by opening its enormous mouth incredibly fast."
  },
  "great-barracuda": {
    "scientificName": "Sphyraena barracuda",
    "category": "Barracuda",
    "sizeRange": "Common length: 100cm; Maximum length: 170cm",
    "distribution": "Open sea and close to the reef; Juveniles found inshore, mainly in estuaries or mangrove swamps",
    "misId": "Other barracuda",
    "didYouKnow": "A fierce silver hunter with a mouthful of dagger-like teeth, this torpedo-shaped fish can dash after prey in super-fast bursts and grow nearly two metres long."
  },
  "great-hammerhead-shark": {
    "scientificName": "Sphyrna mokarran",
    "category": "Sharks",
    "sizeRange": "Common length: 65cm-600cm",
    "distribution": "Inshore/offshore",
    "misId": "Scalloped hammerhead shark",
    "didYouKnow": "Biggest of all the hammerheads, this giant can grow longer than a car and uses its wide flat head to pin wriggling stingrays down for dinner."
  },
  "green-jobfish": {
    "scientificName": "Aprion virescens",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The green jobfish is a sleek, blue-green speedster that races over reefs chasing smaller fish, with a body shaped like a torpedo."
  },
  "green-sawfish": {
    "scientificName": "Pristis zijsron",
    "category": "Sawfish",
    "sizeRange": "Common length: 80-500cm; Maximum length: 700cm",
    "distribution": "Inshore/offshore; Juveniles found inshore in foreshores and embankments; Adults found in deeper shelf waters and seasonally inshore",
    "misId": "Dwarf sawfish",
    "didYouKnow": "One of the largest sawfish of all, the green sawfish can grow longer than a car and uses its toothed saw to sense and slash at fish."
  },
  "grey-mackerel": {
    "scientificName": "Scomberomorus semifasciatus",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 70-90cm; Maximum length: 120cm",
    "distribution": "In major bays",
    "misId": "Spanish mackerel",
    "didYouKnow": "Baby grey mackerel wear up to twenty stripes, but as they grow those broad bars fade until big adults look almost plain silver."
  },
  "grey-nurse-shark": {
    "scientificName": "Carcharias taurus",
    "category": "Sharks",
    "sizeRange": "Common length: 318cm; Maximum length: 400cm",
    "distribution": "Inshore/offshore",
    "misId": "Fossil shark, Lemon shark, Speartooth shark, Tawny shark",
    "didYouKnow": "Despite a mouthful of jagged snaggly teeth, the grey nurse shark is a gentle giant that gulps air at the surface so it can hover perfectly still, like a submarine."
  },
  "grey-reef-shark": {
    "scientificName": "Carcharhinus amblyrhynchos",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-180cm; Maximum length: 255cm",
    "distribution": "Inshore/offshore; Reefs and shoals",
    "misId": "Dusky shark",
    "didYouKnow": "Grey reef sharks patrol coral reefs by day and, when they feel threatened, perform a dramatic hunched 'warning dance' before deciding whether to swim away."
  },
  "grey-sharpnose-shark": {
    "scientificName": "Rhizoprionodon oligolinx",
    "category": "Sharks",
    "sizeRange": "Common length: 20cm-70cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Hardnose shark, Milk shark, Sliteye shark, Spinner shark (drab form)",
    "didYouKnow": "The grey sharpnose is a small, slim shark with a long, pointy snout, and it's one of the tiniest members of the whaler shark family."
  },
  "hapuku": {
    "scientificName": "Polyprion oxygeneios",
    "category": "Cods and groupers",
    "didYouKnow": "Young hapuku drift far out at sea, sheltering under floating logs and seaweed before settling onto deep rocky reefs as they grow bigger."
  },
  "hardnose-shark": {
    "scientificName": "Carcharhinus macloti",
    "category": "Sharks",
    "sizeRange": "Common length: 45cm-110cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Milk shark, Sliteye shark, Spinner shark (drab form)",
    "didYouKnow": "The hardnose shark is named for the extra-hard, chalky snout on the tip of its nose, which you can actually feel if you gently pinch it."
  },
  "harlequin-sweetlips": {
    "scientificName": "Plectorhinchus chaetodontoides",
    "category": "Sweetlips",
    "didYouKnow": "Baby harlequin sweetlips are brown with big white spots and wobble and tumble as they swim, copying a yucky-tasting sea slug so predators leave them alone."
  },
  "hercules-club-mud-whelk": {
    "scientificName": "Pyrazus ebeninus : family Batillariidae",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 100 mm (average 70-90 mm)",
    "misId": "Juveniles often confused with Australian mud whelk ( Batillaria australis ), a coexisting (smaller) species of the same family.",
    "didYouKnow": "This sea snail crawls across muddy estuary flats in big crowds, munching rotting scraps and algae to help keep the mudflats clean, all inside a tall club-shaped shell."
  },
  "herring": {
    "scientificName": "Herklotsichthys spp",
    "category": "Anchovies, herrings and sardines",
    "didYouKnow": "These little silver herrings swim in flashing schools so tight they look like one giant shimmering fish, which helps confuse hungry predators."
  },
  "hexagon-rockcod": {
    "scientificName": "Epinephelus hexagonatus",
    "category": "Cods and groupers",
    "didYouKnow": "Named for the honeycomb pattern of hexagon-shaped spots covering its body, the hexagon rockcod hides among shallow reef crevices."
  },
  "highfin-amberjack": {
    "scientificName": "Seriola rivoliana",
    "category": "Trevally",
    "sizeRange": "Common length: 65cm",
    "distribution": "Mainly oceanic waters; Bottom dwelling and pelagic",
    "misId": "Greater amberjack, Other seriola species",
    "didYouKnow": "A fast and powerful ocean hunter, the highfin amberjack chases down smaller fish with the help of its tall, sickle-shaped fins."
  },
  "highfin-coral-trout": {
    "scientificName": "Plectropomus oligacanthus",
    "category": "Coral trout",
    "didYouKnow": "This coral trout is decorated with dozens of bright blue lines and dots scribbled across its reddish body, and its tall dorsal fin gives it the name 'highfin'."
  },
  "hound-shark": {
    "category": "Sharks",
    "sizeRange": "Common length: 70cm-170cm",
    "distribution": "Deeper waters",
    "didYouKnow": "Houndsharks have flat, pavement-like teeth instead of sharp fangs, perfect for crunching up crabs and shellfish along the seafloor."
  },
  "humphead-maori-wrasse": {
    "scientificName": "Cheilinus undulatus",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "The humphead wrasse can grow longer than a grown-up person and wears a big bump on its forehead, with maze-like green squiggles scribbled across its face."
  },
  "hyrtl-s-tandan": {
    "scientificName": "Neosilurus hyrtlii",
    "category": "Catfish",
    "didYouKnow": "This northern Australian catfish has an eel-like tail and sharp fin spines that carry venom, so it can give a very painful sting if touched."
  },
  "japanese-sea-bream": {
    "scientificName": "Gymnocranius euanus",
    "category": "Emperors",
    "didYouKnow": "Sprinkled with tiny black speckles and sporting a big eye set high on its head, the Japanese sea bream loves crunching little sea snails off the sandy seabed."
  },
  "jungle-perch": {
    "scientificName": "Kuhlia rupestris",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "distribution": "Found in clear running mountain streams/slower pools on the east coast",
    "misId": "Spotted flagtail",
    "didYouKnow": "Living in clear rainforest streams and rocky pools below waterfalls, this fish must travel all the way down to the sea to lay its eggs."
  },
  "khaki-grunter": {
    "scientificName": "Hephaestus tulliensis",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 30cm",
    "distribution": "Usually found in faster flowing streams, including riffles, over gravel, cobble and rock bottoms",
    "misId": "Sooty grunter",
    "didYouKnow": "Found only in the fast rainforest streams of far north Queensland, this khaki-green fish belongs to a family that can 'grunt' by grinding teeth deep in its throat."
  },
  "king-threadfin": {
    "scientificName": "Polydactylus macrochir",
    "category": "Threadfin",
    "sizeRange": "Common length: 80cm; Maximum length: 170cm",
    "distribution": "Rivers and estuaries; Sand or mud flats (to a depth of 5m)",
    "misId": "Blue threadfin",
    "didYouKnow": "The king threadfin starts life as a male and later changes into a female, using long thread-like feelers to find food in murky water."
  },
  "koi-carp": {
    "scientificName": "Cyprinus carpio",
    "category": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s",
    "didYouKnow": "Koi are brightly coloured carp bred in Japan, and they can live for many decades, with one famous koi said to have reached over 200 years old."
  },
  "lake-eacham-rainbowfish": {
    "scientificName": "Melanotaenia eachamensis",
    "category": "Rainbowfish",
    "distribution": "Northern Australia",
    "didYouKnow": "Once wiped out from its only home in a Queensland crater lake, this little rainbowfish was rescued because aquarium keepers still had some safe in tanks."
  },
  "lancer": {
    "scientificName": "Lethrinus genivittatus",
    "category": "Emperors",
    "didYouKnow": "This small emperor is nicknamed the longspine because one spine on its back sticks up longer than the rest, like a tiny lance, as it hunts over sandy seagrass beds."
  },
  "lavendar-snapper": {
    "scientificName": "Pristipomoides sieboldii",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Glowing with a silvery-purple sheen, the lavender snapper is a deep-water fish sprinkled with tiny dark spots across the top of its head."
  },
  "leaping-bonito": {
    "scientificName": "Cybiosarda elegans",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 35-45cm; Maximum length: 70cm",
    "distribution": "Coastal bays, inlets and estuaries",
    "misId": "Other bonito, Mackerel tuna",
    "didYouKnow": "The leaping bonito lives up to its name by launching itself right out of the water while chasing schools of tiny baitfish close to shore."
  },
  "lemon-shark": {
    "scientificName": "Negaprion acutidens",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Tawny shark, Speartooth shark",
    "didYouKnow": "The sicklefin lemon shark gets its name from its yellowish-brown skin, which helps it blend into sandy lagoons and shallow reef flats."
  },
  "leopard-rockcod": {
    "scientificName": "Cephalopholis leopardus",
    "category": "Cods and groupers",
    "didYouKnow": "Just like its big-cat namesake, the leopard rockcod is dotted all over with reddish spots, though it is a small grouper that hides away in reef caves and crevices."
  },
  "lesser-queenfish": {
    "scientificName": "Scomberoides lysan",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 58.5cm",
    "distribution": "Inshore waters such as shallow lagoons; Offshore areas (to a depth of 100 m); Enters estuaries periodically",
    "misId": "Other queenfish species",
    "didYouKnow": "A slender silvery jack marked with two neat rows of dark blotches, one above and one below its side line, like a double row of buttons."
  },
  "lessons-sweetlips": {
    "scientificName": "Plectorhinchus lessonii",
    "category": "Sweetlips",
    "didYouKnow": "Named for its big rubbery lips, this reef fish starts life as a wobbly-swimming baby before growing into a bold black-and-white striped adult with spotty yellow fins."
  },
  "lined-surgeonfish": {
    "scientificName": "Acanthurus lineatus",
    "category": "Surgeonfishes",
    "didYouKnow": "Dressed in dazzling blue and orange stripes, the lined surgeonfish fiercely guards its patch of reef and carries a venomous blade near its tail."
  },
  "logan-freshwater-mullet": {
    "scientificName": "Trachystoma petardi",
    "category": "Mullet",
    "didYouKnow": "Also called the pinkeye mullet for the pink tint in its eyes, this fish spends most of its life in freshwater rivers and only heads to sea to spawn."
  },
  "long-nosed-emperor": {
    "scientificName": "Lethrinus olivaceus",
    "category": "Emperors",
    "didYouKnow": "True to its name, this big olive-grey emperor has an unusually long, pointed snout decorated with dark wavy lines."
  },
  "longfin-rockcod": {
    "scientificName": "Epinephelus quoyanus",
    "category": "Cods and groupers",
    "didYouKnow": "Covered head to tail in close-packed brown hexagons, this reef cod looks like it has been wrapped up in a sheet of honeycomb."
  },
  "longtail-carpetshark": {
    "category": "Sharks",
    "sizeRange": "Common length: 107cm",
    "distribution": "Coastal waters",
    "didYouKnow": "Longtail carpetsharks have extra-long tails and slender bodies, and some can even 'walk' across the reef on their paddle-like fins to cross from one tide pool to the next."
  },
  "longtail-tuna": {
    "scientificName": "Thunnus tonggol",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 70cm; Maximum length: 130cm",
    "distribution": "Largely coastal but avoids low-salinity areas near mouths of large rivers",
    "misId": "Other tuna species",
    "didYouKnow": "Longtail tuna are warm-blooded speedsters that keep their muscles hotter than the sea around them, helping them rocket after prey in fast-moving schools."
  },
  "lunar-fusilier": {
    "scientificName": "Caesio lunaris",
    "category": "Fusiliers",
    "didYouKnow": "Named after the moon, this bright blue fusilier has a deeply forked tail with dark crescent-shaped tips and swims in fast, shimmering schools."
  },
  "lungfish": {
    "scientificName": "Neocertaodus forsteri",
    "category": "Lungfish",
    "sizeRange": "Common length: 100cm; Maximum length: 150cm",
    "didYouKnow": "The Queensland lungfish can gulp air with a real lung when its river runs low on oxygen, and its kind has barely changed in over 100 million years, since the dinosaurs!"
  },
  "lyretail-trout": {
    "scientificName": "Variola albimarginata",
    "category": "Coral trout",
    "didYouKnow": "A reddish reef fish speckled with blue dots, it has a beautiful crescent-shaped tail edged in white, which is exactly how it got its name."
  },
  "mackerel-tuna": {
    "scientificName": "Euthynnus affinis",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Coastal waters and around offshore islands",
    "misId": "Bonito",
    "didYouKnow": "A speedy little ocean racer, this tuna is decorated with wavy, squiggly lines across its back and a few dark spots tucked between its fins."
  },
  "maori-cod": {
    "scientificName": "Epinephelus undulatostriatus",
    "category": "Cods and groupers",
    "didYouKnow": "The Maori cod is named for the wavy lines across its head that look like traditional Maori tattoos, and it lives only along Australia's east coast."
  },
  "maori-seaperch": {
    "scientificName": "Lutjanus rivulatus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Young Maori seaperch are covered in maze-like blue squiggles across the face, like painted tattoos, which is how the fish got its name."
  },
  "marbled-parrotfish": {
    "scientificName": "Leptoscarus vaigiensis",
    "category": "Parrotfishes",
    "didYouKnow": "Unlike most parrotfish, marbled parrotfish never switch from female to male, and they love munching seagrass where their mottled colours help them hide."
  },
  "marjorie-s-hardyhead": {
    "scientificName": "Craterocephalus marjoriae",
    "category": "Hardyhead",
    "didYouKnow": "This slender silvery little fish darts among the plants at the edges of clear Queensland streams and was named in honour of a lady called Marjorie."
  },
  "mary-river-cod": {
    "scientificName": "Maccullochella mariensis",
    "category": "Cods (freshwater)",
    "sizeRange": "Common length: 50cm; Maximum length: 120cm",
    "distribution": "Restricted to the Mary River catchment; Found in some SEQ stocked impoundments; Low flow areas around undercut banks and fallen timber",
    "misId": "Murray cod",
    "didYouKnow": "One of Australia's rarest fish, the Mary River cod is a giant freshwater cod found naturally only in Queensland's Mary River and nowhere else in the world."
  },
  "mcculloch-s-rainbowfish": {
    "scientificName": "Melanotaenia maccullochi",
    "category": "Rainbowfish",
    "distribution": "Northern Australia",
    "didYouKnow": "McCulloch's rainbowfish is a thumb-sized freshwater jewel, shimmering silvery-yellow with rows of reddish stripes, and is named after Australian fish scientist Allan McCulloch."
  },
  "midnight-seaperch": {
    "scientificName": "Macolor macularis",
    "category": "Tropical snappers and sea perches",
    "misId": "Black and white seaperch",
    "didYouKnow": "Baby midnight seaperch are jet black splashed with big white spots and trail long drooping fins, looking nothing like the grey-and-yellow adults they become."
  },
  "milk-shark": {
    "scientificName": "Rhizoprionodon acutus",
    "category": "Sharks",
    "sizeRange": "Common length: 30cm-110cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Hardnose shark, Sliteye shark, Spinner shark (drab form)",
    "didYouKnow": "This small milk shark earned its unusual name from an old belief in India that eating it would help mothers make more milk."
  },
  "mirror-carp": {
    "scientificName": "Cyprinus carpio",
    "category": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s",
    "didYouKnow": "A special kind of carp that swapped its normal scales for just a few big shiny ones scattered over its body, glinting like little mirrors."
  },
  "moreton-bay-bug": {
    "scientificName": "Thenus australiensis",
    "category": "Lobsters, crayfish and bugs",
    "sizeRange": "Maximum length: 28cm",
    "distribution": "Lives on muddy or sandy bottoms in oceanic waters to depths of up to 60m; Buries itself during the day and is active at night",
    "didYouKnow": "This flat, shovel-shaped slipper lobster has eyes way out on the corners of its shell and spotty legs, and scoots backwards across the sandy seafloor."
  },
  "mozambique-large-eye-bream": {
    "scientificName": "Wattsia mossambica",
    "category": "Emperors",
    "didYouKnow": "The Mozambique large-eye bream lives deep down around 100 to 200 metres, where its extra-large eyes help it see in the dim, dark water."
  },
  "mud-crab": {
    "scientificName": "Scylla serrata",
    "category": "Crabs",
    "distribution": "Usually found in shallow water but berried females occur well offshore; Favour a soft muddy bottom, often below tide level",
    "didYouKnow": "\"Hermaphrodite” mud crabs are caused by parasitic infections ( Sacculina or Loxothylacus ihlei), which alter the reproductive biology of both male and female crabs."
  },
  "narrow-sawfish": {
    "scientificName": "Anoxypristis cuspidata",
    "category": "Sawfish",
    "sizeRange": "Maximum length: 470cm",
    "distribution": "Inshore/offshore",
    "misId": "Green sawfish",
    "didYouKnow": "The narrow sawfish has a slender saw whose teeth are missing near the base, and it flicks it back and forth to stun schools of fish and squid."
  },
  "needleskin-queenfish": {
    "scientificName": "Scomberoides tol",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 47cm",
    "distribution": "Near the surface in coastal waters",
    "misId": "Other queenfish species",
    "didYouKnow": "Young needleskin queenfish are sneaky nibblers, using special rasping teeth to scrape the scales and skin right off other fish."
  },
  "nervous-shark": {
    "scientificName": "Carcharhinus cautus",
    "category": "Sharks",
    "sizeRange": "Common length: 35cm-150cm",
    "distribution": "Inshore/offshore, but more commonly reported inshore",
    "misId": "Blacktip reef shark",
    "didYouKnow": "True to its name, the nervous shark is a shy, easily-spooked little shark that sticks to the safety of shallow mangroves and seagrass rather than the open sea."
  },
  "northern-purplespotted-gudgeon": {
    "scientificName": "Mogurnda mogurnda",
    "category": "Gudgeons",
    "didYouKnow": "Speckled with purple-red spots, the northern purple-spotted gudgeon is a little freshwater fish whose dad guards the sticky eggs and fans them with his fins until they hatch."
  },
  "northern-sand-flathead": {
    "scientificName": "Platycephalus endrachtensis",
    "category": "Flathead",
    "sizeRange": "Common length: 35cm; Maximum length: 46cm",
    "distribution": "Sandy beaches to a depth of 55m",
    "misId": "Dusky flathead, Bartailed flathead, Yellowtailed flathead",
    "didYouKnow": "Flat as a pancake, the northern sand flathead buries itself in the sand and lies perfectly still to ambush little fish that swim too close."
  },
  "northern-saratoga": {
    "scientificName": "Scleropages jardinii",
    "category": "Saratoga",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Upper reaches of fast-flowing streams and still billabongs; Prefer clear streams and rivers",
    "misId": "Southern saratoga",
    "didYouKnow": "An ancient bonytongue fish, the northern saratoga carries its eggs and babies safely inside its mouth until the young are ready to swim free."
  },
  "northern-whiting": {
    "scientificName": "Sillago sihama",
    "category": "Whiting",
    "sizeRange": "Common length: 20cm; Maximum length: 30cm",
    "distribution": "Near the shore; Shallow water along beaches, sandbars, mangrove creeks, estuaries",
    "misId": "Other whiting species",
    "didYouKnow": "The northern whiting is a slender silver fish that dives head-first into the sand to hide, wriggling in with its pointy snout whenever danger swims near."
  },
  "oblique-banded-groper": {
    "scientificName": "Epinephelus radiatus",
    "category": "Cods and groupers",
    "didYouKnow": "A brownish grouper decorated with about five pale slanting stripes edged in dark, plus scattered tiny black and pale spots dotted across its back."
  },
  "oblique-banded-snapper": {
    "scientificName": "Pristipomoides zonatus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Living on deep rocky reefs far below the surface, this pink snapper is decorated with slanting yellow bands and matching sunny yellow fins."
  },
  "oceanic-whitetip-shark": {
    "scientificName": "Carcharhinus longimanus",
    "category": "Sharks",
    "sizeRange": "Common length: 60cm-300cm",
    "distribution": "Offshore",
    "didYouKnow": "The oceanic whitetip shark roams far out in the open sea, easy to spot by the rounded white tips on its long, paddle-like fins."
  },
  "onespot-seaperch": {
    "scientificName": "Lutjanus monostigma",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The onespot seaperch is easy to recognise thanks to the single dark spot marking each side of its body near the tail."
  },
  "orange-cockle": {
    "scientificName": "Vasticardium vertebratum",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 80 mm (average 50-60 mm)",
    "misId": "Australian mud ark ( Anadara trapezia ) has a white, angulate shell and hinge teeth are tiny and numerous.",
    "didYouKnow": "This little heart-shaped shell can suddenly leap away from danger by flicking its strong, tongue-like muscular foot to jump across the seabed."
  },
  "orange-striped-emperor": {
    "scientificName": "Lethrinus obsoletus",
    "category": "Emperors",
    "didYouKnow": "You can spot this emperor by the bright orange-yellow stripe running along its lower side, though like its relatives it can quickly change and blur its colours."
  },
  "ornate-eagle-ray": {
    "category": "Rays",
    "didYouKnow": "Covered in a maze of dark lines and spots, the ornate eagle ray is so rarely seen that divers nickname it 'the unicorn of the sea.'"
  },
  "ornate-jobfish": {
    "scientificName": "Pristipomoides argyrogrammicus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The ornate jobfish is a deep-water beauty, painted yellow above and silvery-pink below with bright blue spots and squiggles scribbled all over its body."
  },
  "ornate-rainbowfish": {
    "scientificName": "Rhadinocentrus ornatus",
    "category": "Rainbowfish",
    "distribution": "Northern Australia",
    "didYouKnow": "This little rainbowfish sparkles with neon-blue and red, and fish from each different sandy wallum creek can have their very own colours."
  },
  "pacific-blue-eye": {
    "scientificName": "Pseudomugil signifer",
    "category": "Blue eye",
    "didYouKnow": "Barely as long as your finger, the tiny Pacific blue-eye sparkles with dazzling bright blue eyes and swims in busy little schools in Australian creeks and estuaries."
  },
  "pacific-longnose-parrotfish": {
    "scientificName": "Hipposcarus longiceps",
    "category": "Parrotfishes",
    "didYouKnow": "Named for its unusually long, pointy snout tipped with a parrot-like beak of fused teeth, which it uses to scrape food off the coral."
  },
  "pacific-shortfin-eel": {
    "scientificName": "Anguilla obscura",
    "category": "Eels",
    "sizeRange": "Average length: 60cm; Maximum growth: 110cm",
    "distribution": "Coastal lagoons and the lower reaches of rivers",
    "misId": "Other eel species",
    "didYouKnow": "This eel spends its life in freshwater rivers, then makes an amazing journey out into the open Pacific Ocean near Tahiti just to lay its eggs."
  },
  "paddletail": {
    "scientificName": "Lutjanus gibbus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The paddletail is a bright red snapper with a deep humped back, and its young swim together in busy schools around the reef."
  },
  "painted-crayfish": {
    "scientificName": "Panulirus ornatus",
    "category": "Lobsters, crayfish and bugs",
    "didYouKnow": "The painted, or ornate, spiny lobster wears dazzling blue-and-white striped legs and makes long marching journeys across the seafloor to breed."
  },
  "painted-sweetlips": {
    "scientificName": "Diagramma pictum",
    "category": "Sweetlips",
    "didYouKnow": "Baby painted sweetlips wiggle about in bold black-and-white stripes, then grow into grey adults sprinkled with yellow-orange spots."
  },
  "peacock-rockcod": {
    "scientificName": "Cephalopholis argus",
    "category": "Cods and groupers",
    "didYouKnow": "Sprinkled all over with dark-ringed blue spots, this grouper is named after Argus, a giant from Greek myths who was said to have a hundred watchful eyes."
  },
  "photololigo-pencil-squid": {
    "category": "Squid and cuttlefish",
    "didYouKnow": "Slim as its name suggests, the pencil squid carries a pair of tiny built-in light organs that let it glow softly in the dark ocean."
  },
  "pigeye-shark": {
    "scientificName": "Carcharhinus amboinensis",
    "category": "Sharks",
    "sizeRange": "Common length: 60cm-280cm",
    "distribution": "Inshore (including estuaries and rivers) and offshore",
    "misId": "Bull shark ( C. leucas )",
    "didYouKnow": "The stocky pigeye shark has a rounded snout and tiny eyes, and it's so chunky and strong that it's often mistaken for its cousin the bull shark."
  },
  "pikey-bream": {
    "scientificName": "Acanthopagrus pacificus",
    "category": "Breams and snapper",
    "sizeRange": "Common length: 25cm; Maximum length: 50cm",
    "distribution": "Common in estuaries (to a depth of 50m); Bottom-living fish",
    "misId": "Yellowfin bream, Silver javelin",
    "didYouKnow": "The dorsal fin spines of pikey bream are noticeably thicker compared to other bream species."
  },
  "pink-eared-emperor": {
    "scientificName": "Lethrinus lentjan",
    "category": "Emperors",
    "didYouKnow": "This emperor gets its name from the rosy-red patch on the edge of its gill cover, which looks just like a little pink ear."
  },
  "pink-hussar": {
    "scientificName": "Lutjanus adetii",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The pink hussar is a rosy reef fish with a golden stripe running from head to tail, and it gathers in big groups by day before feeding under cover of night."
  },
  "polyprion-americanus-bass-groper": {
    "scientificName": "Polyprion americanus",
    "category": "Cods and groupers",
    "didYouKnow": "This deep-sea giant can live for around ninety years, and when young it likes to shelter beneath floating wreckage, which is why it is also called the wreckfish."
  },
  "potato-rockcod": {
    "scientificName": "Epinephelus tukula",
    "category": "Cods and groupers",
    "didYouKnow": "A gentle giant of the reef, this huge grouper is covered in big dark blotches like potatoes and is famous for curiously following divers on the Great Barrier Reef."
  },
  "prawns": {
    "category": "Prawns",
    "didYouKnow": "Prawns can shoot backwards in a flash by flicking their tails, and many bury themselves in the sand during the day to hide from hungry fish."
  },
  "queensland-groper": {
    "scientificName": "Epinephelus lanceolatus",
    "category": "Cods and groupers",
    "didYouKnow": "Australia's largest reef fish, the Queensland groper can grow to over two metres long and swallow surprisingly big prey whole in one huge gulp."
  },
  "razor-clams": {
    "scientificName": "(family Pinnae) Most common species in South East Queensland: Atrina pectinata and Pinna bicolor",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length 300 mm or more (average 150-200 mm)",
    "didYouKnow": "Razor clams stand buried point-down in the sand and anchor themselves in place with silky threads spun from their foot."
  },
  "red-bass": {
    "scientificName": "Lutjanus bohar",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "A big reddish snapper of the coral reef, the red bass has two tiny pits tucked under its eyes and powerful jaws for ambushing smaller fish."
  },
  "red-eared-emperor": {
    "scientificName": "Lethrinus rubrioperculatus",
    "category": "Emperors",
    "didYouKnow": "Named for the bright red spot on the edge of its gill cover, like a little red ear, the red-eared emperor also shows off matching red lips."
  },
  "red-emperor": {
    "scientificName": "Lutjanus sebae",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "A stunning deep-bodied fish, juveniles of the red emperor boast striking red and white colours, earning them admiration as the 'Queen of the sea'."
  },
  "redbreasted-maori-wrasse": {
    "scientificName": "Cheilinus fasciatus",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "The redbreasted Maori wrasse shows off a reddish-orange chest, bold black-and-white bars, and a greenish head crisscrossed with pretty pink lines."
  },
  "redclaw": {
    "scientificName": "Cherax quadricarinatus",
    "category": "Lobsters, crayfish and bugs",
    "distribution": "Outside its natural range, this species is considered non-indigenous so must not be returned to the water. This includes berried females",
    "misId": "Blueclaw",
    "didYouKnow": "Redclaw are Australian freshwater crayfish, and grown-up males show a bright red patch on the outside of their big front claws."
  },
  "redmouth-rockcod": {
    "scientificName": "Aethaloperca rogaa",
    "category": "Cods and groupers",
    "didYouKnow": "The redmouth rockcod is a dark, almost black grouper that gives you a surprise when it yawns, flashing a bright crimson-pink mouth."
  },
  "redthroat-emperor": {
    "scientificName": "Lethrinus miniatus",
    "category": "Emperors",
    "didYouKnow": "The largest recorded redthroat emperor from boat ramp surveys measured 69 cm!"
  },
  "rendahl-s-catfish": {
    "scientificName": "Porochilus rendahli",
    "category": "Catfish",
    "didYouKnow": "A small, scaleless northern-Australian catfish with an eel-like tail, it hides among leaf litter and roots by day and hunts insect larvae and shrimp by night."
  },
  "river-blackfish": {
    "scientificName": "Gadopsis marmoratus",
    "category": "River blackfish",
    "sizeRange": "Common length: 30cm; Maximum length: 60cm",
    "distribution": "Restricted distribution in some parts of the Murray-Darling basin; Prefers clear, gently flowing streams with abundant log snags; Protected species as it is prone to overfishing due to its limited distribution and low fertility",
    "misId": "Two spine blackfish",
    "didYouKnow": "This marbled native fish hides under logs by day, and mother fish lay their eggs inside hollow underwater logs where the dad stays behind to guard them."
  },
  "river-garfish": {
    "scientificName": "Hyporhamphus regularis",
    "category": "Garfish",
    "sizeRange": "Common length: 15-20cm; Maximum length: 30cm",
    "distribution": "Shallow estuaries, bays and lakes",
    "misId": "Three-by-two garfish",
    "didYouKnow": "The river garfish has a long, needle-like lower jaw and swims near the surface, sometimes skittering across the top of the water to escape danger."
  },
  "river-perch": {
    "scientificName": "Johnius borneensis",
    "category": "Jewfish",
    "sizeRange": "Common length: 20cm; Maximum length: 35cm",
    "distribution": "Inshore estuarine rivers and bays; Benthic feeder",
    "misId": "Mulloway (juvenile)",
    "didYouKnow": "A member of the croaker family, the river jewfish can make a drumming or croaking sound by vibrating muscles against its swim bladder."
  },
  "robinsons-sea-bream": {
    "scientificName": "Gymnocranius grandoculis",
    "category": "Emperors",
    "didYouKnow": "Its scientific name means 'big-eyed', and this golden-brown bream really does have large eyes plus pretty wavy blue lines across its face."
  },
  "roman-nosed-goby": {
    "scientificName": "Awaous acritosus",
    "category": "Goby",
    "didYouKnow": "This freshwater goby gets its name from its big sloping snout, like a Roman nose, and lives in clear Queensland streams grazing algae off the bottom."
  },
  "rosy-snapper": {
    "scientificName": "Pristipomoides filamentosus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Also called the crimson jobfish, the rosy snapper is a slow-growing deep-sea fish that can live more than 40 years."
  },
  "ruby-snapper": {
    "scientificName": "Etelis carbunculus",
    "category": "Tropical snappers and sea perches",
    "distribution": "The caudal fin is forked; Pink-red, fading to white on the lower sides of the belly",
    "didYouKnow": "Named after a red gemstone, the ruby snapper glows deep red and has enormous eyes to help it see in the dark, deep ocean where it lives."
  },
  "saddle-back-snapper": {
    "scientificName": "Paracaesio kusakarii",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Living on deep rocky reefs, this snapper wears four dark saddle-like bars on its back, and big old ones grow a bump on their forehead."
  },
  "saddletail-snapper": {
    "scientificName": "Lutjanus malabaricus",
    "category": "Tropical snappers and sea perches",
    "misId": "Crimson snapper",
    "didYouKnow": "Saddletail snapper can grow to more than 13 kg, reach lengths of up to 100 cm, and ages of at least 39 years."
  },
  "sailfin-snapper": {
    "scientificName": "Symphorichthys spilurus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The sailfin snapper raises extra-tall fins like sails, and as it grows up its markings swap from black stripes to gorgeous wavy blue lines across a golden body."
  },
  "sandbar-shark": {
    "scientificName": "Carcharhinus plumbeus",
    "category": "Sharks",
    "sizeRange": "Common length: 55cm-240cm",
    "distribution": "Inshore/offshore",
    "didYouKnow": "A coastal shark famous for its extra-tall, triangular first fin, it swims huge distances every year following the warm and cool waters along the coast."
  },
  "scalloped-hammerhead-shark": {
    "scientificName": "Sphyrna lewini",
    "category": "Sharks",
    "sizeRange": "Common length: 45cm-350cm",
    "distribution": "Inshore/offshore",
    "didYouKnow": "Named for the wavy, scalloped front edge of its hammer-shaped head, this shark sometimes gathers in enormous schools of hundreds swimming together."
  },
  "scaly-jewfish": {
    "scientificName": "Nibea squamosa",
    "category": "Jewfish",
    "misId": "Black jewfish, Silver jewfish",
    "didYouKnow": "The scaly jewfish belongs to the croaker family and can drum a loud sound with its swim bladder, and it even swims far up rivers into freshwater."
  },
  "school-mackerel": {
    "scientificName": "Scomberomorus queenslandicus",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 50-80cm; Maximum length: 100cm",
    "distribution": "Inshore waters, bays and estuaries",
    "misId": "Spotted mackerel",
    "didYouKnow": "Often dubbed the \"lesser mackerel,\" these fish share close kinship with Spanish and spotted mackerel, however they vary in habitat preference, feeding habits, and behaviour. Favouring coastal waters and bays while consuming a diverse range of prey."
  },
  "shark-mackerel": {
    "scientificName": "Grammatorcynus bicarinatus",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 50cm; Maximum length: 110cm",
    "distribution": "Individual bays and reefs",
    "misId": "Other mackerel species",
    "didYouKnow": "The shark mackerel has enormous eyes, and its flesh gives off a faint sharky, ammonia-like smell, which is how this speedy fish earned its name."
  },
  "shark-ray": {
    "scientificName": "Rhina ancylostoma",
    "category": "Rays",
    "sizeRange": "Maximum length: 270cm",
    "distribution": "Inshore/offshore",
    "didYouKnow": "Part shark and part ray, the shark ray has ridges of chunky thorns over its head and a wide, wavy W-shaped mouth for crunching shellfish."
  },
  "shortfin-mako": {
    "scientificName": "Isurus oxyrinchus",
    "category": "Sharks",
    "sizeRange": "Common length: 70cm-400cm",
    "distribution": "Mostly offshore",
    "misId": "Blue shark, Juvenile white shark",
    "didYouKnow": "The fastest shark in the ocean, the shortfin mako can burst through the water at astonishing speed and even leap high into the air to catch speedy prey like tuna."
  },
  "silky-shark": {
    "scientificName": "Carcharhinus falciformis",
    "category": "Sharks",
    "sizeRange": "Common length: 55cm-350cm",
    "distribution": "Offshore",
    "didYouKnow": "Named for its smooth, silky-feeling skin, the silky shark roams the open ocean as one of the sea's swiftest and most far-travelling sharks."
  },
  "silver-javelin": {
    "scientificName": "Pomadasys argenteus",
    "category": "Javelins",
    "sizeRange": "Common length: 30cm; Maximum length: 60cm",
    "distribution": "Coastal inshore waters (open bays and estuaries)",
    "misId": "Barred javelin",
    "didYouKnow": "The silver javelin is a grunter that can make grunting sounds by grinding the teeth in its throat, buzzing the noise through its body like a drum."
  },
  "silver-jewfish": {
    "scientificName": "Nibea soldado",
    "category": "Jewfish",
    "sizeRange": "Common length: 40cm; Maximum length: 60cm",
    "distribution": "Coastal waters and estuaries",
    "misId": "Black jewfish, Scaly jewfish",
    "didYouKnow": "Also called the soldier croaker, this silvery fish makes a croaking noise by buzzing its swim bladder and lives in muddy estuaries and river mouths."
  },
  "silvertip-shark": {
    "scientificName": "Carcharhinus albimarginatus",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Whitetip reef shark",
    "didYouKnow": "The silvertip shark is easy to recognise because the tips and edges of all its fins look like they have been dipped in shiny silvery-white paint."
  },
  "six-bar-rockcod": {
    "scientificName": "Epinephelus sexfasciatus",
    "category": "Cods and groupers",
    "didYouKnow": "A small grouper striped with dark brown bars and a speckly tail, it prefers muddy and silty sea floors rather than bright colourful coral reefs."
  },
  "six-spot-rockcod": {
    "scientificName": "Cephalopholis sexmaculata",
    "category": "Cods and groupers",
    "didYouKnow": "Glowing orange-red with electric-blue lines scribbled across its head, this cod hides in dark reef caves by day and comes out to hunt at night."
  },
  "sixplate-sawtail": {
    "scientificName": "Prionurus microlepidotus",
    "category": "Surgeonfishes",
    "didYouKnow": "The sixplate sawtail has six sharp bony plates lined up on each side of its tail, and it can turn its whole body pale white at cleaning stations."
  },
  "sleepy-cod": {
    "scientificName": "Oxyeleotris lineolata",
    "category": "Cods (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "distribution": "Weedy, timbered and quiet areas; Stocked in a number of northern impoundments",
    "didYouKnow": "The sleepy cod earns its name by lying perfectly still on the bottom looking half-asleep, then ambushing any prey that swims too close."
  },
  "sliteye-shark": {
    "scientificName": "Loxodon macrorhinus",
    "category": "Sharks",
    "sizeRange": "Common length: 40cm-90cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Hardnose shark, Milk shark, Spinner shark (drab form)",
    "didYouKnow": "This small, slender shark is named for the tiny slit-like notch tucked at the back of each of its large eyes."
  },
  "small-spotted-dart": {
    "scientificName": "Trachinotus baillonii",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 53.5cm",
    "distribution": "Surf zone along sandy beaches",
    "misId": "Swallowtail dart",
    "didYouKnow": "A silvery, fork-tailed speedster of sandy surf beaches, the small-spotted dart is marked with a neat row of little dark dots along each side."
  },
  "small-toothed-jobfish": {
    "scientificName": "Aphareus furca",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Despite its name, the smalltooth jobfish has almost no teeth in its mouth, yet it is a speedy solitary hunter with a bronze-blue body and yellow fins."
  },
  "snake-head-gudgeon": {
    "scientificName": "Giuris margaritacea",
    "category": "Gudgeons",
    "didYouKnow": "The snakehead gudgeon has a rounded, snake-like head with three dark stripes fanning out from each eye, and it can live in fresh, salty, or in-between water."
  },
  "snub-nosed-dart": {
    "scientificName": "Trachinotus blochii",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 74cm",
    "misId": "Other dart",
    "didYouKnow": "With its short, blunt, rounded snout, the snub-nosed dart is a fast silvery swimmer that uses flat teeth to crunch shellfish on sandy flats."
  },
  "snubnose-rockcod": {
    "scientificName": "Epinephelus macrospilos",
    "category": "Cods and groupers",
    "didYouKnow": "With its short, blunt little nose and a broad white edge on its tail, the snubnose rockcod lurks among lagoon reefs waiting to ambush its next meal."
  },
  "snubnosed-garfish": {
    "scientificName": "Arrhamphus sclerolepis",
    "category": "Garfish",
    "sizeRange": "Common length: 10-15cm; Maximum length: 22cm",
    "distribution": "Extends into freshwater",
    "misId": "Other garfish",
    "didYouKnow": "Unlike most garfish, which have long spear-like jaws, this one has only a short, blunt little lower jaw tipped with a splash of bright red."
  },
  "sooty-grunter": {
    "scientificName": "Hephaestus fuliginosus",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 25cm; Maximum length: 45cm",
    "distribution": "Usually found in large flowing streams especially in the upper reaches over sandy or rocky bottoms with sparse aquatic vegetation; Sooty grunter taken in the Mary River Catchment are deemed to be a non-indigenous fisheries resource and must not be returned to the water after they've been removed",
    "misId": "Khaki grunter",
    "didYouKnow": "A tough, feisty fish from northern Australia's rivers, the sooty grunter is smoky dark in colour and can make a grunting noise using teeth deep in its throat."
  },
  "southern-purplespotted-gudgeon": {
    "scientificName": "Mogurnda adspersa",
    "category": "Gudgeons",
    "didYouKnow": "Covered in beautiful purple and red spots, the southern purplespotted gudgeon is a rare little freshwater fish that carefully guards its eggs until they hatch."
  },
  "southern-saratoga": {
    "scientificName": "Scleropages leichardti",
    "category": "Saratoga",
    "sizeRange": "Common length: 50cm; Maximum length: 100cm",
    "distribution": "Native to the Fitzroy river system; Prefer still waters and slow flowing turbid sections of rivers and can be found sheltering in lily-pads or below fallen timber",
    "misId": "Northern saratoga",
    "didYouKnow": "A father southern saratoga carries the eggs and babies safely tucked inside his own mouth until the young are ready to swim off on their own."
  },
  "spangled-emperor": {
    "scientificName": "Lethrinus nebulosus",
    "category": "Emperors",
    "misId": "Grass emperor (sweetlip)",
    "didYouKnow": "Sprinkled with a shiny blue spot on every scale like scattered glitter, the spangled emperor also has bright blue streaks across its cheeks."
  },
  "spangled-perch": {
    "scientificName": "Leiopotherapon unicolor",
    "category": "Perch and grunter (freshwater)",
    "didYouKnow": "The most widespread freshwater fish in all of Australia, this tough survivor is dusted with orange-brown 'spangles' and can turn up in the most surprising outback waterholes."
  },
  "spanish-flag": {
    "scientificName": "Lutjanus carponatus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The largest stripey snapper recorded during boat ramp surveys hit an impressive 53 cm!"
  },
  "spanner-crab": {
    "scientificName": "Ranina ranina",
    "category": "Crabs",
    "didYouKnow": "With a frog-like body and flat, spanner-shaped claws, the spanner crab shuffles backwards to bury itself quickly in the sand."
  },
  "speartooth-shark": {
    "scientificName": "Glyphis glyphis",
    "category": "Sharks",
    "sizeRange": "Common length: 59cm-300cm",
    "distribution": "Captures reported in the southern and western gulf are unconfirmed",
    "misId": "Bull shark, Lemon shark, Northern river shark/New Guinea river shark",
    "didYouKnow": "The super-rare speartooth shark is a river shark that lives in muddy tidal rivers up north, using pointy, spear-shaped lower teeth to grip slippery fish."
  },
  "speckled-fin-rockcod": {
    "scientificName": "Epinephelus ongus",
    "category": "Cods and groupers",
    "didYouKnow": "Brown all over and sprinkled with white spots that join into wavy, scribbly lines, this rockcod tucks itself into caves on shallow reefs."
  },
  "speckled-goby": {
    "scientificName": "Redigobius bikolanus",
    "category": "Goby",
    "didYouKnow": "The speckled goby is a tiny fish shorter than your little finger, sprinkled with dark speckles, that lives in creeks and estuaries and even swims far upstream."
  },
  "speckled-grouper": {
    "scientificName": "Epinephelus magniscuttis",
    "category": "Cods and groupers",
    "didYouKnow": "A pale brown grouper freckled with small dark spots across its top half, it lives deep down where barely any sunlight reaches the sea floor."
  },
  "spinner-shark": {
    "scientificName": "Carcharhinus brevipinna",
    "category": "Sharks",
    "sizeRange": "Common length: 60cm-280cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian blacktip (blacktip colour form), Australian sharpnose shark, Common blacktip, Graceful shark, Grey sharpnose shark, Hardnose shark, Milk shark, Sliteye shark",
    "didYouKnow": "This shark earns its name by charging up through fish schools so fast it bursts right out of the water, spinning like a top in mid-air."
  },
  "splitlevel-hogfish": {
    "scientificName": "Bodianus mesothorax",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "The splitlevel hogfish looks like it was painted in two halves, dark at the front and bright yellow at the back, divided by a slanting line."
  },
  "spot-tail-shark": {
    "scientificName": "Carcharhinus sorrah",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-160cm",
    "distribution": "Inshore/offshore",
    "didYouKnow": "The spot-tail shark is easy to spot thanks to the black tips marking its fins and tail, and it is one of the quicker-swimming reef sharks."
  },
  "spotted-blue-eye": {
    "scientificName": "Pseudomugil gertrudae",
    "category": "Blue eye",
    "didYouKnow": "A tiny fish with dazzling blue eyes, the male spotted blue-eye shows off long trailing fins dotted with dark spots."
  },
  "spotted-flagtail": {
    "scientificName": "Kuhlia marginata",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "misId": "Jungle perch",
    "didYouKnow": "The flagtail is named for its boldly banded tail fin, and this silvery species travels between freshwater streams and the sea during its life."
  },
  "spotted-tilapia": {
    "scientificName": "Tilapia mariae",
    "category": "Cichlids",
    "sizeRange": "Grows to 30cm",
    "misId": "Mozambique tilapia, Australian bass (juvenile)",
    "didYouKnow": "A tough African cichlid that has become a pest in Australian waterways, the spotted tilapia is a caring parent that fiercely guards its babies from danger."
  },
  "spotted-unicornfish": {
    "scientificName": "Naso brevirostris",
    "category": "Surgeonfishes",
    "didYouKnow": "The spotted unicornfish grows a horn on its forehead, just like a unicorn, and that horn gets longer as the fish gets older."
  },
  "squaretail-coral-trout": {
    "scientificName": "Plectropomus areolatus",
    "category": "Coral trout",
    "didYouKnow": "Covered in bright blue spots, squaretail coral trout gather by the thousands at the same reefs each year, timing their spawning with the moon."
  },
  "steephead-parrotfish": {
    "scientificName": "Chlorurus microrhinos",
    "category": "Parrotfishes",
    "didYouKnow": "The steephead parrotfish crunches coral with a beak made of fused teeth, then poops it out as soft white sand, helping to make many tropical beaches!"
  },
  "stout-whiting": {
    "scientificName": "Sillago robusta",
    "category": "Whiting",
    "sizeRange": "Common length: 25cm; Maximum length: 30cm",
    "distribution": "Predominantly offshore",
    "misId": "Tumpeter whiting",
    "didYouKnow": "A chunky sandy-coloured whiting that blends into the seabed where it schools, tinged with pink and mauve and marked by a yellow blotch on its cheek."
  },
  "strawberry-rockcod": {
    "scientificName": "Cephalopholis spiloparaea",
    "category": "Cods and groupers",
    "didYouKnow": "Bright strawberry-red all over with pretty blue edges on its tail, this small deep-reef cod is one of the most colourful little groupers around."
  },
  "striated-surgeonfish": {
    "scientificName": "Ctenochaetus striatus",
    "category": "Surgeonfishes",
    "didYouKnow": "The striated surgeonfish has tiny comb-like teeth that it uses like a brush to sweep algae and grit off the reef."
  },
  "striped-barracuda": {
    "scientificName": "Sphyraena obtusata",
    "category": "Barracuda",
    "sizeRange": "Common length: 30cm; Maximum length: 35cm",
    "distribution": "Bays and estuaries",
    "misId": "Blackfin barracuda",
    "didYouKnow": "The striped barracuda cruises in schools and uses its mouthful of sharp teeth to snatch smaller fish in sudden bursts of speed."
  },
  "striped-gudgeon": {
    "scientificName": "Gobiomorphus australis",
    "category": "Gudgeons",
    "distribution": "Brackish to freshwater dwelling",
    "didYouKnow": "Marked with dark stripes along its sides, this gudgeon is a surprising climber that can clamber over wet rocks and even small waterfalls."
  },
  "swallowtail-dart": {
    "scientificName": "Trachinotus coppingeri",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 35cm",
    "distribution": "Inhabits shallow coastal waters, often in the rough surf zone along sandy beaches",
    "misId": "Small spotted dart",
    "didYouKnow": "Found only in Australia, this dart zips through the crashing surf off sandy beaches, and its deeply forked tail is split like a swallow's, giving it its name."
  },
  "tawny-shark": {
    "scientificName": "Nebrius ferrugineus",
    "category": "Sharks",
    "sizeRange": "Common length: 40cm-320cm",
    "distribution": "Inshore/offshore",
    "misId": "Lemon shark",
    "didYouKnow": "Resting in caves by day, the tawny nurse shark uses its mouth like a vacuum at night to suck octopus and crabs out of reef crevices."
  },
  "thinspine-rockcod": {
    "scientificName": "Gracila albomarginata",
    "category": "Cods and groupers",
    "didYouKnow": "The thinspine rockcod, also called the masked grouper, wears a neat white square on its back, while its babies flash bright red markings on their fins."
  },
  "three-by-two-garfish": {
    "scientificName": "Hemiramphus robustus",
    "category": "Garfish",
    "sizeRange": "Common length: 15-20cm; Maximum length: 32cm",
    "distribution": "More turbid inshore waters",
    "didYouKnow": "This chunky garfish is named after a 3-by-2-inch wooden plank because of its deep, flat-sided body, and it has a long beak-like lower jaw."
  },
  "three-spot-crab": {
    "scientificName": "Portunus sanguinolentus",
    "category": "Crabs",
    "didYouKnow": "The three-spot swimming crab is named for the three red spots on its shell, and its back legs are flattened into paddles so it can swim through the water."
  },
  "three-stripe-fusilier": {
    "scientificName": "Pterocaesio trilineata",
    "category": "Fusiliers",
    "didYouKnow": "A speedy reef fish wearing three thin pale-blue stripes, it zips about in busy schools high above the coral to snatch tiny floating plankton."
  },
  "thresher-shark": {
    "scientificName": "Alopias sp.",
    "category": "Sharks",
    "sizeRange": "Thresher shark; Common length: 115cm-550cm Bigeye thresher shark; Common length: 100cm-460cm",
    "didYouKnow": "A thresher shark's tail is as long as the rest of its whole body, and it swings that tail like a whip to stun and round up fish to eat."
  },
  "thumbprint-emperor": {
    "scientificName": "Lethrinus harak",
    "category": "Emperors",
    "didYouKnow": "The thumbprint emperor is named for the dark smudge on each side of its body that looks just like someone pressed a thumb into wet paint."
  },
  "tiger-shark": {
    "scientificName": "Galeocerdo cuvier",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-600cm",
    "distribution": "Inshore/offshore",
    "didYouKnow": "Young tiger sharks have dark tiger-like stripes that fade as they grow, and adults will eat almost anything, earning the nickname garbage cans of the sea."
  },
  "tilapia-mozambique-re": {
    "scientificName": "Oreochromis mossambicus",
    "category": "Cichlids",
    "sizeRange": "Grows to more than 36cm",
    "misId": "Spotted tilapia, Australian bass (juvenile), Barred grunter (juvenile)",
    "didYouKnow": "Mother Mozambique tilapia keep their babies safe by scooping them up into their mouths the moment any danger appears."
  },
  "tomato-rockcod": {
    "scientificName": "Cephalopholis sonnerati",
    "category": "Cods and groupers",
    "didYouKnow": "Named for its ripe-tomato red colour, this chunky reef grouper is often flecked with tiny pale and dark speckles, especially around its head."
  },
  "tripletail-maori-wrasse": {
    "scientificName": "Cheilinus trilobatus",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Big males of the tripletail maori wrasse grow a tail with three pointed lobes, which is exactly how this colourful reef fish earned its name."
  },
  "tropical-rocklobster": {
    "scientificName": "Family Palinuridae",
    "category": "Lobsters, crayfish and bugs",
    "distribution": "Usually in shallow water (less than 20m) on rock and coral reefs, although they can be found in over 100m",
    "didYouKnow": "Tropical rock lobsters have no big claws but wear a spiny suit of armour and wave long, whip-like antennae to feel their way around the reef at night."
  },
  "trout-cod": {
    "scientificName": "Epinephelus maculatus",
    "category": "Cods and groupers",
    "didYouKnow": "This reef grouper is covered in brown spots packed into a honeycomb pattern and has an extra-tall front dorsal fin, earning it the name highfin grouper."
  },
  "trumpeter-whiting": {
    "scientificName": "Sillago maculata",
    "category": "Whiting",
    "sizeRange": "Common length: 25cm; Maximum length: 30cm",
    "distribution": "Silty and muddy substrates in the deeper waters of bays; Mouths of rivers, estuaries and mangrove creeks",
    "misId": "Sand whiting",
    "didYouKnow": "The scientific name Sillago maculata means \"blotched or patchy\", describing the fish's coloration with dark blotches along its flank."
  },
  "two-striped-sweetlips": {
    "scientificName": "Plectorhinchus albovittatus",
    "category": "Sweetlips",
    "didYouKnow": "The giant sweetlips is the biggest sweetlips of all, growing as long as a metre, and its youngsters look completely different in dark colours with pale wavy stripes."
  },
  "variegated-emperor": {
    "scientificName": "Lethrinus variegatus",
    "category": "Emperors",
    "didYouKnow": "One of the smallest emperors at only about twenty centimetres, this little fish wears a mottled patchwork of brown, grey and blue to help it hide."
  },
  "venus-tuskfish": {
    "scientificName": "Choerodon venustus",
    "category": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Through boat ramp surveys and compliance checks, it's been observed that tuskfish are often mistaken for parrotfish."
  },
  "weasel-shark": {
    "scientificName": "Hemigaleus australiensis",
    "category": "Sharks",
    "sizeRange": "Common length: 30cm-110cm",
    "distribution": "Inshore/offshore",
    "misId": "Fossil shark, Sicklefin weasel shark",
    "didYouKnow": "A small, slender shark that cruises close to the sandy seafloor off northern Australia, easily spotted by the dark tip on its second back fin."
  },
  "wedge-clams": {
    "scientificName": "Paphies angusta : (family Mesodesmatidae)",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 30 mm (average 20-25 mm)",
    "misId": "Australian pipi ( Plebidonax deltoides ) is larger, broader and often shows much colour variation (externally and internally).",
    "didYouKnow": "Wedge clams burrow incredibly fast into the wet sand of surf beaches, using a strong muscular foot to dig down and vanish in seconds."
  },
  "welchs-grunter": {
    "scientificName": "Bidyanus welchi",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 23cm; Maximum length: 40cm",
    "distribution": "Lake Eyre drainage (Barcoo, Diamintina, Georgina, Thompson and Wilson rivers) and also in the Bulloo River; Usually found in turbid waters of large rivers and waterholes",
    "misId": "Barcoo grunter, Silver perch Very similar to silver perch but found in different drainage systems",
    "didYouKnow": "Welch's grunter lives in the hot, muddy desert rivers of central Australia and can make grunting sounds, which is how grunters got their name."
  },
  "white-lined-rockcod": {
    "scientificName": "Anyperodon leucogrammicus",
    "category": "Cods and groupers",
    "didYouKnow": "Young white-lined rockcod are clever tricksters, disguising themselves as harmless wrasses so they can sneak up close to their prey."
  },
  "white-shark": {
    "scientificName": "Carcharodon carcharias",
    "category": "Sharks",
    "sizeRange": "Common length: 130cm-600cm",
    "distribution": "Inshore/offshore",
    "didYouKnow": "The great white is the largest predatory fish in the sea, and it keeps itself warmer than the surrounding water so its muscles can work faster while it hunts."
  },
  "white-spotted-guitarfish": {
    "scientificName": "Rhynchobatus australiae",
    "category": "Rays",
    "sizeRange": "Common length: 46cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Giant shovelnose ray",
    "didYouKnow": "Part shark and part ray, the white-spotted guitarfish has a guitar-shaped body dotted with white spots and a strong, shark-like tail for swimming."
  },
  "white-spotted-rockcod": {
    "scientificName": "Epinephelus coeruleopunctatus",
    "category": "Cods and groupers",
    "didYouKnow": "The white-spotted rockcod is a dark brown grouper sprinkled all over with pale bluish-white spots, like a starry night sky swimming across the reef."
  },
  "whitecheek-shark": {
    "scientificName": "Carcharhinus coatesi",
    "category": "Sharks",
    "sizeRange": "Common length: 35cm-100cm",
    "distribution": "Inshore/offshore",
    "misId": "Blackspot shark",
    "didYouKnow": "A small reef shark under a metre long, the whitecheek shark carries a neat black smudge on the tip of its little second dorsal fin."
  },
  "whitetip-reef-shark": {
    "scientificName": "Triaenodon obesus",
    "category": "Sharks",
    "sizeRange": "Common length: 52cm-170cm",
    "distribution": "Inshore/offshore; Reefs and shoals",
    "didYouKnow": "Unlike most sharks, the whitetip reef shark can lie completely still on the seabed or inside caves all day, resting up before hunting at night."
  },
  "winghead-shark": {
    "scientificName": "Eusphyra blochii",
    "category": "Sharks",
    "sizeRange": "Common length: 45cm-186cm",
    "distribution": "Inshore/offshore",
    "didYouKnow": "This hammerhead has an enormous head shaped like wide wings, spanning almost half of its whole body length, giving it the widest head of any shark."
  },
  "wobbegong": {
    "category": "Sharks",
    "sizeRange": "Maximum length: 300cm",
    "distribution": "Coastal waters and offshore reefs",
    "didYouKnow": "A master of disguise, the wobbegong is a flat carpet shark with a frilly, weedy 'beard' around its mouth that helps it hide on the seabed and ambush passing fish."
  },
  "wolf-herring": {
    "scientificName": "Chirocentrus dorab",
    "category": "Anchovies, herrings and sardines",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Inshore coastal waters",
    "misId": "Hairtail",
    "didYouKnow": "The wolf herring is a long, ribbon-like silver fish armed with sharp fang-like teeth, making it a fierce hunter of smaller fish."
  },
  "yellow-and-blue-back-fusilier": {
    "scientificName": "Caesio teres",
    "category": "Fusiliers",
    "didYouKnow": "This fusilier zips around the reef in huge shimmering schools, flashing blue below and bright yellow across its back and forked tail."
  },
  "yellow-margined-seaperch": {
    "scientificName": "Lutjanus fulvus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Wearing bright yellow-edged fins and a dark tail, this snapper spends the night hunting small fish and crabs around the reef."
  },
  "yellow-spotted-emperor": {
    "scientificName": "Lethrinus erythracanthus",
    "category": "Emperors",
    "didYouKnow": "This large emperor shows off bright orange fins and orange spots against a dark bluish-grey body, making it one of the most colourful emperors of all."
  },
  "yellow-spotted-sawtail": {
    "scientificName": "Prionurus maculatus",
    "category": "Surgeonfishes",
    "didYouKnow": "Dotted with yellow spots, the yellow-spotted sawtail carries a row of sharp, blade-like spines near its tail, like a tiny built-in saw."
  },
  "yellow-striped-emperor": {
    "scientificName": "Lethrinus ornatus",
    "category": "Emperors",
    "didYouKnow": "The yellow-striped emperor is a silvery fish decorated with bright yellow-orange stripes and a splash of red where its side fins meet its body."
  },
  "yellow-tailed-emperor": {
    "scientificName": "Lethrinus atkinsoni",
    "category": "Emperors",
    "didYouKnow": "True to its name, this emperor has a bright yellow tail, plus a yellow smudge above each eye and yellowish, orange-tinged fins."
  },
  "yellowbanded-sweetlips": {
    "scientificName": "Plectorhinchus lineatus",
    "category": "Sweetlips",
    "didYouKnow": "The yellowbanded sweetlips wears bright yellow diagonal stripes and a scatter of black spots, and its lips grow big and rubbery as it gets older."
  },
  "yellowfin-parrotfish": {
    "scientificName": "Scarus flavipectoralis",
    "category": "Parrotfishes",
    "didYouKnow": "Named for its bright yellow pectoral fins, this parrotfish can start life greyish and later turn dazzling blue-green as it grows into a big male."
  },
  "yellowfin-surgeonfish": {
    "scientificName": "Acanthurus xanthopterus",
    "category": "Surgeonfishes",
    "didYouKnow": "One of the biggest surgeonfishes, this grey giant flashes yellow in its side fins and carries a sharp scalpel-like spine near its tail like a hidden pocketknife."
  },
  "yellowlip-emperor": {
    "scientificName": "Lethrinus xanthochilus",
    "category": "Emperors",
    "didYouKnow": "The yellowlip emperor is easy to spot thanks to its bright yellow lips and a red splash at the base of its side fin."
  },
  "yellowtail-blue-snapper": {
    "scientificName": "Paracaesio xanthura",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "Deep blue with a brilliant yellow stripe and a matching yellow tail, this snapper gathers in schools over deep reefs and steep drop-offs."
  },
  "yellowtail-kingfish": {
    "scientificName": "Seriola lalandi",
    "category": "Trevally",
    "sizeRange": "Common length: 60cm; Maximum length: 173cm",
    "distribution": "Large offshore shoals at depths of 50m; Occasionally in surf zones",
    "misId": "Other Seriola species",
    "didYouKnow": "A speedy, powerful swimmer, the yellowtail kingfish flashes a golden-yellow tail and a yellow stripe along its streamlined silver body."
  },
  "yellowtail-scad": {
    "scientificName": "Trachurus novozelandiae",
    "category": "Trevally",
    "didYouKnow": "This small schooling fish has a bright yellow tail and a row of tough bony plates called scutes running along each side like a little suit of armour."
  },
  "yellowtailed-flathead": {
    "scientificName": "Platycephalus westraliae",
    "category": "Flathead",
    "sizeRange": "Common length: 30cm; Maximum length: 40cm",
    "distribution": "Shallow coastal waters and estuaries; Found on mud and sand",
    "misId": "Bartailed flathead",
    "didYouKnow": "A pale, sand-coloured ambush fish, the yellowtail flathead has a flattened body and a whitish tail marked with a bright yellow blotch near the top."
  },
  "zebra-shark": {
    "scientificName": "Stegostoma fasciatum",
    "category": "Sharks",
    "sizeRange": "Common length: 20cm-235cm",
    "distribution": "Inshore/offshore",
    "didYouKnow": "Baby zebra sharks wear zebra stripes, but as they grow up those stripes break into leopard-like spots, so the adults are sometimes called leopard sharks."
  }
};
