// Extra species facts for Blair's Fish ID Game, keyed by species id.
// Source: Queensland Government / CSIRO fish species guide (speciesPage entries).
// Merged into the game at runtime by js/game.js. Fields are all optional:
//   scientificName, family, sizeRange, distribution, misId, didYouKnow
// Distribution keeps only non-state-specific ecology (QLD place names removed).

window.FISH_DETAILS = {
  "australian-bass": {
    "scientificName": "Macquaria novemaculeata",
    "family": "Australian Bass",
    "sizeRange": "Common length: 40cm; Maximum length: 60cm",
    "distribution": "Freshwater species; Occasionally enters estuaries during spawning season in winter or peak flood periods; Often stocked in impoundments",
    "misId": "Silver perch, Estuary perch"
  },
  "southern-shortfin-eel": {
    "scientificName": "Anguilla australis",
    "family": "Eels",
    "sizeRange": "Average length: 50cm; Maximum length: 90cm",
    "misId": "Other eel species"
  },
  "longfin-eel": {
    "scientificName": "Anguilla reinhardtii",
    "family": "Eels",
    "sizeRange": "Average length: 60cm; Maximum length 150cm",
    "distribution": "Lakes and swamps on the entire east coast of Australia; Flowing freshwater streams",
    "misId": "Other eel species"
  },
  "golden-perch": {
    "scientificName": "Macquaria ambigua",
    "family": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 40cm; Maximum length: 75cm",
    "distribution": "Found naturally in the Murray Darling, Lake Eyre /Bulloo basins and Dawson and Fitzroy rivers; Prefers warm slow moving turbid sections of streams but also found in flooded backwaters and stocked impoundments south of Yeppoon",
    "misId": "Australian bass"
  },
  "murray-cod": {
    "scientificName": "Maccullochella peelii",
    "family": "Cods (freshwater)",
    "sizeRange": "Common length: 65cm; Maximum length: 180cm",
    "distribution": "Areas of low flow around undercut banks and fallen timber",
    "misId": "Mary River cod"
  },
  "silver-perch": {
    "scientificName": "Bidyanus bidyanus",
    "family": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 30cm; Maximum length: 50cm",
    "distribution": "Rapid flowing rivers, lakes and impoundments",
    "misId": "Barcoo grunter, Welsh's grunter"
  },
  "rainbow-trout": {
    "scientificName": "Oncorhynchus mykiss",
    "family": "Salmon and trout",
    "sizeRange": "Common length: 60cm; Maximum length: 122cm",
    "distribution": "Prefers cool freshwater environments; Inhabits temperate lakes and streams with gravel bottoms; Adults from non-landlocked populations live in the sea and return to clear freshwater streams to breed"
  },
  "australian-bonito": {
    "scientificName": "Sarda australis",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 45cm; Maximum length: 180cm",
    "distribution": "Bays and estuaries",
    "misId": "Other bonito, Mackerel tuna"
  },
  "yellowfin-bream": {
    "scientificName": "Acanthopagrus australis",
    "family": "Breams and snapper",
    "sizeRange": "Common length: 25cm; Maximum length: 65cm",
    "distribution": "Most common in estuaries; Also found on inshore reefs, and sandy, muddy and rocky coastal areas",
    "misId": "Tarwhine, Pikey bream, Black bream, Silver javelin",
    "didYouKnow": "Yellowfin bream have been monitored in Queensland since 2007, primarily in the southern part of the state."
  },
  "tarwhine": {
    "scientificName": "Rhabdosargus sarba",
    "family": "Breams and snapper",
    "sizeRange": "Common length: 28cm; Maximum length: 60cm",
    "distribution": "Occasionally enters estuaries; Bottom-living coastal fish (to a depth of 60m)",
    "misId": "Yellowfin bream, Pikey bream"
  },
  "cobia": {
    "scientificName": "Rachycentron canadum",
    "family": "Trevally",
    "sizeRange": "Common length: 110cm; Maximum length: 200cm",
    "distribution": "Pelagic; Shallow coral reefs and off rocky shores; Occasionally in estuaries"
  },
  "dusky-flathead": {
    "scientificName": "Platycephalus fuscus",
    "family": "Flathead",
    "sizeRange": "Common length: 50cm; Maximum length: 130cm",
    "distribution": "Estuaries and coastal bays; Found on sand, mud, gravel and seagrasses",
    "misId": "Bartailed flathead, Northern sand flathead",
    "didYouKnow": "Monitoring of this iconic fish began in 2007 and is one of the few species in Queensland with an upper and lower size limit (slot limit) of 40-75cm."
  },
  "luderick": {
    "scientificName": "Girella tricuspidata",
    "family": "Luderick",
    "sizeRange": "Common length: 30cm; Maximum length: 62cm",
    "distribution": "Around hard structures in estauries and coastal areas (to a depth of approx 20m)"
  },
  "spanish-mackerel": {
    "scientificName": "Scomberomorus commerson",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 90-120cm; Maximum length: 200cm",
    "distribution": "Coastal waters to depths of 15m to 200m (a pelagic species)",
    "misId": "Broad-barred mackerel",
    "didYouKnow": "Known affectionately here as blues or Spaniards, these are the silver-striped speedsters of our coastline."
  },
  "spotted-mackerel": {
    "scientificName": "Scomberomorus munroi",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 50-80cm; Maximum length: 100cm",
    "misId": "School mackerel"
  },
  "mangrove-jack": {
    "scientificName": "Lutjanus argentimaculatus",
    "family": "Tropical snappers and sea perches",
    "sizeRange": "Common length: 40cm; Maximum length: 120cm",
    "distribution": "Deeper reef areas (to depths in excess of 100 m); Mangrove estuaries and the lower reaches of freshwater streams (juveniles and young adults)",
    "misId": "Golden snapper"
  },
  "moses-snapper": {
    "scientificName": "Lutjanus russelli",
    "family": "Tropical snappers and sea perches"
  },
  "pearl-perch": {
    "scientificName": "Glaucosoma scapulare",
    "family": "Pearl perch",
    "sizeRange": "Common length: 35cm; Maximum length: 70cm",
    "distribution": "Generally close to submerged reefs or rough bottom",
    "didYouKnow": "Referred to by many as the ‘chicken of the sea' or ‘pearlies', these fish have been monitored since 2006 by Fisheries Queensland."
  },
  "sailfish": {
    "scientificName": "Istiophorus platypterus",
    "family": "Billfish and swordfish",
    "sizeRange": "Common length: 270cm; Maximum length: 348cm",
    "distribution": "Common in tropical and subtropical oceans, extending into temperate waters during summer; Typically found in oceanic waters, well offshore; Observed near continental coasts, islands, and reefs",
    "misId": "Shortbill spearfish, Striped marlin"
  },
  "samsonfish": {
    "scientificName": "Seriola hippos",
    "family": "Trevally",
    "sizeRange": "Common length: 100cm; Maximum length: 173cm",
    "distribution": "Rocky reefs or wrecks (to a depth of 70m)",
    "misId": "Other Seriola species"
  },
  "amberjack": {
    "scientificName": "Seriola dumerili",
    "family": "Trevally",
    "sizeRange": "Common length: 100cm; Maximum length: 188cm",
    "distribution": "Reefs, deep offshore holes or drop-offs; Bottom dwelling and pelagic",
    "misId": "High-fin amberjack, Samsonfish"
  },
  "school-shark": {
    "scientificName": "Galeorhinus galeus",
    "family": "Sharks",
    "sizeRange": "Common length: 160cm; Maximum length: 195cm",
    "distribution": "Lives in shallow coastal waters above 200 metres; Sometimes found in deep off shores areas down to 800 metres; Prefers habitats near the seabed along coastlines; Inhabits continental shelves and upper to mid slopes; Juveniles often inhabit shallow, inshore bays"
  },
  "snapper": {
    "scientificName": "Chrysophrys auratus",
    "family": "Breams and snapper",
    "sizeRange": "Common length: 20-40cm; Maximum length: 130cm",
    "distribution": "Common on rough grounds (also found on softer bottom grounds); Bottom-living (at depths of 10-150m)",
    "misId": "Yellowfin bream",
    "didYouKnow": "Pinkies, squire, knobbies—whatever you call them, these big pink fish are icons of the east coast line fishery, known for their size and prestige as they grow larger."
  },
  "swordfish": {
    "scientificName": "Xiphias gladius",
    "family": "Billfish and swordfish",
    "sizeRange": "Common length: 300cm; Maximum length: 455cm",
    "distribution": "Found in deep oceanic waters beyond the continental shelf, ranging from 0-800 metres deep; Rarely found in coastal waters; Distributed across tropical and subtropical waters; Migrates to temperate waters during summer",
    "misId": "Marlin species, Sailfish"
  },
  "tailor": {
    "scientificName": "Pomatomus saltatrix",
    "family": "Tailor",
    "sizeRange": "Common length: 40cm; Maximum length: 110cm",
    "distribution": "Often in bays and estuaries",
    "didYouKnow": "The humble tailor is known by many names including bluefish, greenbacks, tubbies, surf barra, tassergal or chopper tailor (for the small ones!)."
  },
  "teraglin": {
    "scientificName": "Atractoscion aequidens",
    "family": "Jewfish",
    "sizeRange": "Common length: 35-40cm; Maximum length: 70cm",
    "distribution": "Coastal waters to a depth of 200m",
    "misId": "Mulloway"
  },
  "silver-trevally": {
    "scientificName": "Pseudocaranx sp. \"dentex\"",
    "family": "Trevally",
    "sizeRange": "Common length: 40cm; Maximum length: 122cm",
    "distribution": "Also found in Lord Howe Province and Norfolk Island in the Tasman Sea; Typically found at depths of 80-100 metres; Rarely encountered in shallow waters",
    "misId": "Silver trevally ( Pseudocaranx georgianus )"
  },
  "yellowfin-tuna": {
    "scientificName": "Thunnus albacares",
    "family": "Mackerel and tuna",
    "sizeRange": "Maximum length: 150cm",
    "distribution": "Oceanic at depths above and below the thermocline",
    "misId": "Other tuna species"
  },
  "wahoo": {
    "scientificName": "Acanthocybium solandri",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 80cm; Maximum length: 210cm",
    "distribution": "Frequently taken well offshore (a pelagic species)",
    "misId": "Spanish mackerel"
  },
  "sand-whiting": {
    "scientificName": "Sillago ciliata",
    "family": "Whiting",
    "sizeRange": "Common length: 25cm; Maximum length: 51cm",
    "distribution": "Coastal beaches, sandbars and surf zones; Bays, estuaries and coastal lakes",
    "misId": "Goldenline whiting, Trumpeter whiting",
    "didYouKnow": "Monitoring of this species started in 2007, focusing on routine collection of length and age data. However, sporadic data collection dates back to short-term research projects since the 1970s."
  },
  "agassizs-glassfish": {
    "scientificName": "Ambassis agassizii",
    "family": "Glassfish"
  },
  "anchor-tuskfish": {
    "scientificName": "Choerodon anchorago",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "archerfish": {
    "scientificName": "Toxotes chatareus",
    "family": "Sevenspot archer fish"
  },
  "areolate-rockcod": {
    "scientificName": "Epinephelus areolatus",
    "family": "Cods and groupers"
  },
  "aru-gudgeon": {
    "scientificName": "Oxyeleotris aruensis",
    "family": "Gudgeons"
  },
  "australian-anchovy": {
    "scientificName": "Engraulis australis",
    "family": "Anchovies, herrings and sardines"
  },
  "australian-butterfly-ray": {
    "family": "Rays"
  },
  "australian-cownose-ray": {
    "family": "Rays"
  },
  "australian-mud-ark": {
    "scientificName": "Anadara trapezia",
    "family": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 80 mm (average 50-60 mm)",
    "misId": "Cockles (Cardiidae) also ribbed but hinge teeth are few and large."
  },
  "australian-sardine": {
    "scientificName": "Sardinops sagax",
    "family": "Anchovies, herrings and sardines"
  },
  "australian-sharpnose-shark": {
    "scientificName": "Rhizoprionodon taylori",
    "family": "Sharks",
    "sizeRange": "Common length: 25cm-67cm",
    "distribution": "Inshore/offshore",
    "misId": "Grey sharpnose shark"
  },
  "australian-smelt": {
    "scientificName": "Retropinna semoni",
    "family": "Australian Smelt"
  },
  "banana-fusilier": {
    "scientificName": "Pterocaesio pisang",
    "family": "Fusiliers"
  },
  "banded-rainbowfish": {
    "scientificName": "Melanotaenia trifasciata",
    "family": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "banded-rockcod": {
    "scientificName": "Formerly known as Epinephelus ergastularius (37 311147) and E. septemfasciatus (37 311060), this species is now recognised as Hyporthodus ergastularius.",
    "family": "Cods and groupers",
    "misId": "Eightbar grouper"
  },
  "barcoo-grunter": {
    "scientificName": "Scortum barcoo",
    "family": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 25cm; Maximum length: 35cm",
    "distribution": "Hatchery-reared fingerlings have been stocked at Jericho Waterholes, Jericho; Usually turbid waters of large rivers and waterholes",
    "misId": "Silver perch, Welsh's grunter"
  },
  "barramundi": {
    "scientificName": "Lates calcarifer",
    "family": "Barramundi",
    "sizeRange": "Common length: 80cm; Maximum length: 180cm",
    "distribution": "Coastal marine; Estuarine and freshwater habitats; Adults mainly in estuaries (mangroves and river mouths); Juveniles extend up rivers into fresh water; Often stocked in impoundments",
    "didYouKnow": "This iconic fish of northern Australia is arguably the most revered fish in the country and draws anglers from across the globe eager for the thrill of catching a leaping barra!"
  },
  "barramundi-cod": {
    "scientificName": "Cromileptes altivelis",
    "family": "Cods and groupers"
  },
  "barred-cheek-coral-trout": {
    "scientificName": "Plectropomus maculatus",
    "family": "Coral trout",
    "didYouKnow": "Barcheek coral trout are protogynous hermaphrodites, starting life as females and transitioning to males as they mature."
  },
  "barred-grunter": {
    "scientificName": "Amniataba percoides",
    "family": "Perch and grunter (freshwater)",
    "misId": "Mozambique tilapia (juvenile)"
  },
  "barred-javelin": {
    "scientificName": "Pomadasys kaakan",
    "family": "Javelins",
    "sizeRange": "Common length: 45cm; Maximum length: 80cm",
    "distribution": "Coastal inshore waters - open bays and estuaries; Rivers to the upper limit of brackish water",
    "misId": "Silver javelin, Blotched javelin",
    "didYouKnow": "Barred javelin, or spotted grunter as they are often called, rank as the fifth most targeted fish species in Queensland, based on boat ramp survey data from 2016 to March 2024."
  },
  "barred-queenfish": {
    "scientificName": "Scomberoides tala",
    "family": "Trevally",
    "sizeRange": "Common length: 40cm; Maximum length: 62cm",
    "misId": "Other queenfish species"
  },
  "bartail-flathead": {
    "scientificName": "Platycephalus australis",
    "family": "Flathead",
    "sizeRange": "Common length: 35cm; Maximum length: 50cm",
    "distribution": "Shallow coastal waters and estuaries",
    "misId": "Yellowtailed flathead, Dusky flathead, Sand flathead"
  },
  "beche-de-mer": {
    "family": "Sea cucumbers"
  },
  "bicolour-parrotfish": {
    "scientificName": "Cetoscarus ocellatus",
    "family": "Parrotfishes"
  },
  "big-eye-bream": {
    "scientificName": "Monotaxis grandoculis",
    "family": "Emperors"
  },
  "big-mullet": {
    "family": "Mullet"
  },
  "bigeye-seaperch": {
    "scientificName": "Lutjanus lutjanus",
    "family": "Tropical snappers and sea perches",
    "misId": "Brownstripe seaperch"
  },
  "bigeye-trevally": {
    "scientificName": "Caranx sexfasciatus",
    "family": "Trevally",
    "sizeRange": "Common length: 40cm; Maximum length: 78cm",
    "distribution": "Juveniles may be found in estuaries",
    "misId": "Bludger trevally, Giant trevally"
  },
  "bignose-shark": {
    "scientificName": "Carcharhinus altimus",
    "family": "Sharks",
    "sizeRange": "Common length: 60cm-300cm",
    "distribution": "Demersal on deep continental shelves and insular slopes by day and may be pelagic by night",
    "misId": "Galapagos shark (C. galapagensis - no records in Queensland coastal waters)"
  },
  "black-and-white-snapper": {
    "scientificName": "Macolor niger",
    "family": "Tropical snappers and sea perches"
  },
  "black-banded-rainbowfish": {
    "scientificName": "Melanotaenia nigrans",
    "family": "Rainbowfish",
    "sizeRange": "Common length: 11cm"
  },
  "black-banded-snapper": {
    "scientificName": "Lutjanus semicinctus",
    "family": "Tropical snappers and sea perches"
  },
  "black-catfish": {
    "scientificName": "Neosilirus ater",
    "family": "Catfish"
  },
  "black-jewfish": {
    "scientificName": "Protonibea diacanthus",
    "family": "Jewfish",
    "sizeRange": "Common length: 80cm; Maximum length: 150cm",
    "distribution": "Coastal waters (to a depth of 100 m); Ascends tidal rivers and estuaries",
    "misId": "Mulloway, Silver jewfish"
  },
  "black-spot-snapper": {
    "scientificName": "Lutjanus fulviflamma",
    "family": "Tropical snappers and sea perches"
  },
  "black-teatfish": {
    "scientificName": "Holothuria (Microthele) whitmaei",
    "family": "Sea cucumbers"
  },
  "black-tipped-rockcod": {
    "scientificName": "Epinephelus fasciatus",
    "family": "Cods and groupers"
  },
  "black-tipped-rockcod-underwater": {
    "scientificName": "Epinephelus fasciatus",
    "family": "Cods and groupers"
  },
  "blackbanded-amberjack": {
    "scientificName": "Seriolina nigrofasciata",
    "family": "Trevally",
    "sizeRange": "Maximum length: 173cm",
    "distribution": "Offshore reefs (near continental shelfs) at depths of 20m-150 m",
    "misId": "Other Seriola species"
  },
  "blackfin-pigfish": {
    "scientificName": "Bodianus loxozonus",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "blackfin-slatey": {
    "scientificName": "Diagramma melanacrum",
    "family": "Sweetlips"
  },
  "blacklip-oyster": {
    "scientificName": "Pinctada margaritifera",
    "family": "Bivalve molluscs and gastropods"
  },
  "blackmast": {
    "scientificName": "Craterocephalus stramineus",
    "family": "Blackmast"
  },
  "blacksaddle-rockcod": {
    "scientificName": "Epinephelus howlandi",
    "family": "Cods and groupers"
  },
  "blackspot-tuskfish": {
    "scientificName": "Choerodon schoenleinii",
    "family": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Through boat ramp surveys and compliance checks, it's been observed that tuskfish are often mistaken for parrotfish."
  },
  "blackspotted-rockcod": {
    "scientificName": "Epinephelus malabaricus",
    "family": "Cods and groupers",
    "sizeRange": "Common length: 40cm; Maximum lenght: 115cm",
    "distribution": "Coral and rocky reefs; Tide pools, estuaries, mangrove swamps",
    "misId": "Greasy cod, Goldspotted rockcod"
  },
  "blackspotted-whipray": {
    "family": "Rays"
  },
  "blacktip-reef-shark": {
    "scientificName": "Carcharhinus melanopterus",
    "family": "Sharks",
    "sizeRange": "Common length: 48cm-140cm; Maximum length: 180cm",
    "distribution": "Inshore/offshore; Associated with coral reefs and shoals",
    "misId": "Nervous shark ( C. cautus )"
  },
  "blind-shark": {
    "family": "Sharks",
    "sizeRange": "Maximum length: 120cm"
  },
  "bloomfield-river-cod": {
    "scientificName": "Guyu wujalwujalensis",
    "family": "Cods (freshwater)",
    "sizeRange": "Maximum length: 10cm",
    "distribution": "Bloomfield River (north eastern Australia); Shelters in the cover of undercut banks, boulders, logs, snags and submerged root masses during the day"
  },
  "blue-catfish": {
    "scientificName": "Neoarius graeffei",
    "family": "Catfish"
  },
  "blue-lined-rockcod": {
    "scientificName": "Cephalopholis formosa",
    "family": "Cods and groupers"
  },
  "blue-mackerel": {
    "scientificName": "Scomber australasicus",
    "family": "Mackerel and tuna"
  },
  "blue-maori-rockcod": {
    "scientificName": "Epinephelus cyanopodus",
    "family": "Cods and groupers"
  },
  "blue-marlin": {
    "scientificName": "Makaira nigricans",
    "family": "Billfish and swordfish",
    "sizeRange": "Common length: 2.9m; Maximum length: 5m",
    "distribution": "Typically found at depths from 0-1000 metres, usually seen above 40 metres; Rarely found near shore or islands except near deep drop-offs; Centred around equatorial regions; Migrates to higher latitudes during summer",
    "misId": "Black marlin, Striped marlin"
  },
  "blue-shark": {
    "scientificName": "Prionace glauca",
    "family": "Sharks",
    "sizeRange": "Common length: 35cm to at least 380cm",
    "distribution": "Mostly offshore",
    "misId": "Shortfin mako"
  },
  "blue-spotted-coral-trout": {
    "scientificName": "Plectropomus laevis",
    "family": "Coral trout"
  },
  "blue-spotted-rockcod": {
    "scientificName": "Cephalopholis cyanostigma",
    "family": "Cods and groupers"
  },
  "blue-swimmer-crab": {
    "scientificName": "Portunus armatus",
    "family": "Crabs",
    "sizeRange": "Maximum size: 22cm",
    "distribution": "Bays, estuaries and intertidal areas to depths of 60m; Prefer muddy or sandy bottoms but can also be found on rubble, seagrass and seaweed",
    "didYouKnow": "Blue swimmer crabs are widely distributed along the Australian coastline. In Queensland they favour sandy and muddy substrates in shallow coastal and estuarine waters and are predominantly fished in the southern regions of the state."
  },
  "blue-threadfin": {
    "scientificName": "Eleutheronema tetradactylum",
    "family": "Threadfin",
    "sizeRange": "Common length: 59cm; Maximum length: 160cm",
    "distribution": "Coastlines and estuary",
    "misId": "King threadfin"
  },
  "blue-tuskfish": {
    "scientificName": "Choerodon cyanodus",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "bluebarred-parrotfish": {
    "scientificName": "Scarus ghobban",
    "family": "Parrotfishes"
  },
  "blueclaw": {
    "scientificName": "Cherax destructor",
    "family": "Lobsters, crayfish and bugs",
    "sizeRange": "Common length: 10cm; Maximum length: 20cm",
    "distribution": "Natural distribution: Murray-Darling basin, Lake Eyre and Bulloo-Bancannia divisions and the Dawson River catchment on the east coast drainage; Outside the natural distribution, this species is considered non-indigenous so must not be returned to the water. This includes berried females",
    "misId": "Redclaw"
  },
  "bluespine-unicornfish": {
    "scientificName": "Naso unicornis",
    "family": "Surgeonfishes"
  },
  "bluestripe-seaperch": {
    "scientificName": "Lutjanus kasmira",
    "family": "Tropical snappers and sea perches",
    "misId": "Five-lined seaperch"
  },
  "bony-bream": {
    "scientificName": "Nematalosa erebi",
    "family": "Anchovies, herrings and sardines"
  },
  "bridled-parrotfish": {
    "scientificName": "Scarus frenatus",
    "family": "Parrotfishes"
  },
  "brown-barred-rockcod": {
    "scientificName": "Cephalopholis boenak",
    "family": "Cods and groupers"
  },
  "brown-surgeonfish": {
    "scientificName": "Acanthurus nigrofuscus",
    "family": "Surgeonfishes"
  },
  "brown-whipray": {
    "family": "Rays"
  },
  "brownstripe-seaperch": {
    "scientificName": "Lutjanus vitta",
    "family": "Tropical snappers and sea perches"
  },
  "bull-shark": {
    "scientificName": "Carcharhinus leucas",
    "family": "Sharks",
    "sizeRange": "Common length: 55cm to at least 340cm",
    "distribution": "Inshore (and rare large specimens in offshore)",
    "misId": "Pigeye shark"
  },
  "bumphead-parrotfish": {
    "scientificName": "Bolbometopon muricatum",
    "family": "Parrotfishes"
  },
  "cairns-rainbowfish": {
    "scientificName": "Cairnsichthys rhombosomoides",
    "family": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "camouflage-grouper": {
    "scientificName": "Epinephelus polyphekadion",
    "family": "Cods and groupers"
  },
  "carolines-parrotfish": {
    "scientificName": "Calotomus carolinus",
    "family": "Parrotfishes"
  },
  "celebes-sweetlips": {
    "scientificName": "Plectorhinchus chrysotaenia",
    "family": "Sweetlips"
  },
  "chequered-rainbowfish": {
    "scientificName": "Melanotaenia inornata",
    "family": "Rainbowfish",
    "sizeRange": "Common length: 9cm"
  },
  "chinaman-rockcod": {
    "scientificName": "Epinephelus rivulatus",
    "family": "Cods and groupers"
  },
  "chinamanfish": {
    "scientificName": "Symphorus nematophorus",
    "family": "Tropical snappers and sea perches"
  },
  "chinese-weatherfish": {
    "scientificName": "Misgurnus anguillicaudatus",
    "family": "Loaches",
    "sizeRange": "Grows to 25cm",
    "distribution": "Native to Europe and Asia"
  },
  "climbing-perch-anabas-testudineus": {
    "scientificName": "Anabas testudineus",
    "family": "Climbing perches",
    "sizeRange": "10cm-23cm",
    "distribution": "Native to Asia"
  },
  "coal-grunter": {
    "scientificName": "Hephaestus carbo",
    "family": "Perch and grunter (freshwater)"
  },
  "collared-carpetshark": {
    "scientificName": "Parascyllium collare",
    "family": "Sharks",
    "sizeRange": "Maximum length: 86cm",
    "distribution": "Demersal in coastal waters south of Mooloolaba",
    "misId": "Catshark"
  },
  "collared-sea-bream": {
    "scientificName": "Gymnocranius audleyi",
    "family": "Emperors"
  },
  "comet-grouper": {
    "scientificName": "Epinephelus morrhua",
    "family": "Cods and groupers"
  },
  "common-carp": {
    "scientificName": "Cyprinus carpio",
    "family": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s"
  },
  "common-coral-trout": {
    "scientificName": "Plectropomus leopardus",
    "family": "Coral trout",
    "misId": "Bluespotted coral trout",
    "didYouKnow": "Common coral trout are fierce, predatory coral reef fish that are highly regarded table fare."
  },
  "common-hardyhead": {
    "scientificName": "Atherinomorus vaigiensis",
    "family": "Hardyhead"
  },
  "common-silverbiddy": {
    "scientificName": "Gerrees subfasciatus",
    "family": "Silver biddies"
  },
  "convict-surgeonfish": {
    "scientificName": "Acanthurus triostegus",
    "family": "Surgeonfishes"
  },
  "coral-cod": {
    "scientificName": "Cephalopholis miniata",
    "family": "Cods and groupers"
  },
  "coral-rockcod": {
    "scientificName": "Epinephelus corallicola",
    "family": "Cods and groupers"
  },
  "coronation-trout": {
    "scientificName": "Variola louti",
    "family": "Coral trout"
  },
  "crimson-snapper": {
    "scientificName": "Lutjanus erythropterus",
    "family": "Tropical snappers and sea perches",
    "sizeRange": "Common length: 45cm Maximum length: 81.6cm",
    "distribution": "Inhabits trawl grounds, reefs, shoals, rubble, corals, and hard or sandy mud substrates, as well as offshore reefs; Juveniles are found in shallow estuarine waters over muddy, silty, and coarse sand/rubble substrates",
    "misId": "Indonesian snapper, Saddletail snapper",
    "didYouKnow": "Crimson snapper are gonochoristic, meaning they are born either male or female and do not change sex during their lifetime."
  },
  "crimsonspotted-rainbowfish": {
    "scientificName": "Melanotaenia duboulayi",
    "family": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "daisy-parrotfish": {
    "scientificName": "Chlorurus sordidus",
    "family": "Parrotfishes"
  },
  "dark-banded-fusilier": {
    "scientificName": "Pterocaesio tile",
    "family": "Fusiliers"
  },
  "dark-tailed-seaperch": {
    "scientificName": "Lutjanus lemniscatus",
    "family": "Tropical snappers and sea perches"
  },
  "desert-rainbowfish": {
    "scientificName": "Melanotaenia tatei",
    "family": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "diamondfish": {
    "scientificName": "Monodactylus argenteus",
    "family": "Diamondfishes"
  },
  "diamondscale-mullet": {
    "scientificName": "Liza vaigiensis",
    "family": "Mullet",
    "sizeRange": "Common length: 35cm; Maximum length: 60cm",
    "distribution": "Shallow coastal areas; Protected sandy shores in lagoons, reef flats, estuaries and coastal creeks; Usually under tidal influence (but may enter freshwater); Juveniles may be found in mangroves",
    "misId": "Other mullet species"
  },
  "dianas-hogfish": {
    "scientificName": "Bodianus diana",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "dogfish": {
    "family": "Sharks",
    "distribution": "Deeper, cooler waters"
  },
  "double-line-fusilier": {
    "scientificName": "Pterocaesio digramma",
    "family": "Fusiliers"
  },
  "dusky-snapper": {
    "scientificName": "Paracaesio sordida",
    "family": "Tropical snappers and sea perches"
  },
  "dwarf-sawfish": {
    "scientificName": "Pristis clavata",
    "family": "Sawfish",
    "sizeRange": "Common length: Up to 150cm (locally caught at 310cm)",
    "distribution": "Juveniles more commonly encountered in coastal foreshores and embankments; adults in marine waters",
    "misId": "Freshwater sawfish"
  },
  "dwarf-spotted-rockcod": {
    "scientificName": "Epinephelus merra",
    "family": "Cods and groupers"
  },
  "eel-tailed-catfish": {
    "scientificName": "Tandanus tandanus",
    "family": "Catfish",
    "sizeRange": "Common length: 40cm; Maximum length: 90cm",
    "distribution": "Widely distributed in the Murray-Darling River system and east coast drainages; Often found on sand or gravel bottoms in slow moving streams; Often found in stocked impoundments"
  },
  "eight-bar-grouper": {
    "scientificName": "Formally known a s Epinephelus octofasciatus, this species is now recognised as Hyporthodus octofasciatus.",
    "family": "Cods and groupers",
    "misId": "Bar rockcod"
  },
  "ember-parrotfish": {
    "scientificName": "Scarus rubroviolaceus",
    "family": "Parrotfishes"
  },
  "empire-gudgeon": {
    "scientificName": "Hypseleotris compressa",
    "family": "Gudgeons"
  },
  "eyestripe-surgeonfish": {
    "scientificName": "Acanthurus dussumieri",
    "family": "Surgeonfishes"
  },
  "firetail-gudgeon": {
    "scientificName": "Hypseleotris galii",
    "family": "Gudgeons"
  },
  "five-lined-seaperch": {
    "scientificName": "Lutjanus quinquelineatus",
    "family": "Tropical snappers and sea perches"
  },
  "flagtail-glassfish": {
    "scientificName": "Ambassis miops",
    "family": "Glassfish"
  },
  "flagtail-rockcod": {
    "scientificName": "Cephalopholis urodeta",
    "family": "Cods and groupers"
  },
  "flame-snapper": {
    "scientificName": "Etelis coruscans",
    "family": "Tropical snappers and sea perches"
  },
  "flowery-rockcod": {
    "scientificName": "Epinephelus fuscoguttatus",
    "family": "Cods and groupers"
  },
  "flyspecked-hardyhead": {
    "scientificName": "Craterocephalus stercusmuscarum",
    "family": "Hardyhead"
  },
  "fossil-shark": {
    "scientificName": "Hemipristis elongata",
    "family": "Sharks",
    "sizeRange": "Common length: 52cm-230cm",
    "distribution": "Inshore/offshore",
    "misId": "Hooktooth shark, Weasel shark"
  },
  "foursaddle-rockcod": {
    "scientificName": "Epinephelus spilotoceps",
    "family": "Cods and groupers"
  },
  "freshwater-sawfish": {
    "scientificName": "Pristis pristis",
    "family": "Sawfish",
    "sizeRange": "Common length: 150cm; Maximum length: 600cm",
    "distribution": "Relatively uncommon; Coastal drainages in northern Australia; Sometimes upstream freshwater creeks"
  },
  "frypan-bream": {
    "scientificName": "Argyrops spinifer",
    "family": "Breams and snapper",
    "sizeRange": "Common length: 30cm; Maximum length: 70 cm",
    "distribution": "Bottom-dwelling (wide range of grounds at depths 5-100m)",
    "misId": "Pink snapper"
  },
  "gambusia": {
    "scientificName": "Gambusia holbrooki",
    "family": "Mosquitofishes",
    "sizeRange": "3cm-4cm up to 7cm",
    "distribution": "Eastern Australia"
  },
  "giant-queenfish": {
    "scientificName": "Scomberoides commersonnianus",
    "family": "Trevally",
    "sizeRange": "Common length: 60cm; Maximum length: 120cm",
    "distribution": "Reefs and offshore islands; Periodically enters estuaries",
    "misId": "Banded queenfish"
  },
  "giant-shovelnose-ray": {
    "family": "Rays"
  },
  "giant-trevally": {
    "scientificName": "Caranx ignoblis",
    "family": "Trevally",
    "sizeRange": "Common length: 80cm; Maximum length: 146cm",
    "distribution": "All marine habitats (juveniles may occur in estuaries)",
    "misId": "Bigeye trevally, Brassy trevally"
  },
  "gilberts-grunter": {
    "scientificName": "Pingalla gilberti",
    "family": "Perch and grunter (freshwater)"
  },
  "gold-lined-sea-bream": {
    "scientificName": "Gnathodentex aureolineatus",
    "family": "Emperors"
  },
  "goldband-fusilier": {
    "scientificName": "Pterocaesio chrysozona",
    "family": "Fusiliers"
  },
  "goldband-snapper": {
    "scientificName": "Pristipomoides multidens",
    "family": "Tropical snappers and sea perches"
  },
  "golden-eye-jobfish": {
    "scientificName": "Pristipomoides flavipinnis",
    "family": "Tropical snappers and sea perches"
  },
  "golden-snapper": {
    "scientificName": "Lutjanus johnii",
    "family": "Tropical snappers and sea perches",
    "sizeRange": "Common length: 50cm; Maximum length: 97cm",
    "distribution": "Coral reef areas; Brackish mangrove estuaries (juveniles)",
    "misId": "Moses snapper (Moses perch), Mangrove jack",
    "didYouKnow": "Golden snapper are often mistaken for mangrove jack. To distinguish the two, look out for a dark blotch (larger than the eye) located beneath the soft rays of the dorsal fin and above the lateral line. Due to this blotch, they are also known as finger mark."
  },
  "goldflag-jobfish": {
    "scientificName": "Pristipomoides auricilla",
    "family": "Tropical snappers and sea perches"
  },
  "goldlip-pearl-oyster": {
    "scientificName": "Pinctada maxima",
    "family": "Bivalve molluscs and gastropods"
  },
  "goldspot-pigfish": {
    "scientificName": "Bodianus perdition",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "goldspotted-rockcod": {
    "scientificName": "Epinephelus coioides",
    "family": "Cods and groupers",
    "sizeRange": "Common length: 40cm; Maximum length: 140cm",
    "distribution": "Estuaries; Offshore, to a depth of 100m",
    "didYouKnow": "Goldspotted rockcod is usually a bycatch species caught incidentally when fishers target bream, barramundi and mangrove jack."
  },
  "graceful-shark": {
    "scientificName": "Carcharhinus amblyrhynchoides",
    "family": "Sharks",
    "sizeRange": "Common lenght: 50cm-170cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian blacktip, Common blacktip, Spinner shark (blacktip colour form)"
  },
  "grass-emperor": {
    "scientificName": "Lethrinus laticaudis",
    "family": "Emperors",
    "sizeRange": "Common length: 30-40cm; Maximum length: 56cm",
    "distribution": "Coral reefs; Seagrass beds and mangrove swamps (juveniles)",
    "misId": "Spangled emperor",
    "didYouKnow": "Commonly referred to as grassies or tricky snapper, these fish are famous for their tough and challenging fight after after being hooked."
  },
  "grass-tuskfish": {
    "scientificName": "Choerodon cephalotes",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "greasy-rockcod": {
    "scientificName": "Epinephelus tauvina",
    "family": "Cods and groupers"
  },
  "great-barracuda": {
    "scientificName": "Sphyraena barracuda",
    "family": "Barracuda",
    "sizeRange": "Common length: 100cm; Maximum length: 170cm",
    "distribution": "Open sea and close to the reef; Juveniles found inshore, mainly in estuaries or mangrove swamps",
    "misId": "Other barracuda"
  },
  "great-hammerhead-shark": {
    "scientificName": "Sphyrna mokarran",
    "family": "Sharks",
    "sizeRange": "Common length: 65cm-600cm",
    "distribution": "Inshore/offshore",
    "misId": "Scalloped hammerhead shark"
  },
  "green-jobfish": {
    "scientificName": "Aprion virescens",
    "family": "Tropical snappers and sea perches"
  },
  "green-sawfish": {
    "scientificName": "Pristis zijsron",
    "family": "Sawfish",
    "sizeRange": "Common length: 80-500cm; Maximum length: 700cm",
    "distribution": "Inshore/offshore; Juveniles found inshore in foreshores and embankments; Adults found in deeper shelf waters and seasonally inshore",
    "misId": "Dwarf sawfish"
  },
  "grey-mackerel": {
    "scientificName": "Scomberomorus semifasciatus",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 70-90cm; Maximum length: 120cm",
    "distribution": "In major bays",
    "misId": "Spanish mackerel"
  },
  "grey-nurse-shark": {
    "scientificName": "Carcharias taurus",
    "family": "Sharks",
    "sizeRange": "Common length: 318cm; Maximum length: 400cm",
    "distribution": "Inshore/offshore",
    "misId": "Fossil shark, Lemon shark, Speartooth shark, Tawny shark"
  },
  "grey-reef-shark": {
    "scientificName": "Carcharhinus amblyrhynchos",
    "family": "Sharks",
    "sizeRange": "Common length: 50cm-180cm; Maximum length: 255cm",
    "distribution": "Inshore/offshore; Reefs and shoals",
    "misId": "Dusky shark"
  },
  "grey-sharpnose-shark": {
    "scientificName": "Rhizoprionodon oligolinx",
    "family": "Sharks",
    "sizeRange": "Common length: 20cm-70cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Hardnose shark, Milk shark, Sliteye shark, Spinner shark (drab form)"
  },
  "hapuku": {
    "scientificName": "Polyprion oxygeneios",
    "family": "Cods and groupers"
  },
  "hardnose-shark": {
    "scientificName": "Carcharhinus macloti",
    "family": "Sharks",
    "sizeRange": "Common length: 45cm-110cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Milk shark, Sliteye shark, Spinner shark (drab form)"
  },
  "harlequin-sweetlips": {
    "scientificName": "Plectorhinchus chaetodontoides",
    "family": "Sweetlips"
  },
  "hercules-club-mud-whelk": {
    "scientificName": "Pyrazus ebeninus : family Batillariidae",
    "family": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 100 mm (average 70-90 mm)",
    "misId": "Juveniles often confused with Australian mud whelk ( Batillaria australis ), a coexisting (smaller) species of the same family."
  },
  "herring": {
    "scientificName": "Herklotsichthys spp",
    "family": "Anchovies, herrings and sardines"
  },
  "hexagon-rockcod": {
    "scientificName": "Epinephelus hexagonatus",
    "family": "Cods and groupers"
  },
  "highfin-amberjack": {
    "scientificName": "Seriola rivoliana",
    "family": "Trevally",
    "sizeRange": "Common length: 65cm",
    "distribution": "Mainly oceanic waters; Bottom dwelling and pelagic",
    "misId": "Greater amberjack, Other seriola species"
  },
  "highfin-coral-trout": {
    "scientificName": "Plectropomus oligacanthus",
    "family": "Coral trout"
  },
  "hound-shark": {
    "family": "Sharks",
    "sizeRange": "Common length: 70cm-170cm",
    "distribution": "Deeper waters"
  },
  "humphead-maori-wrasse": {
    "scientificName": "Cheilinus undulatus",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "hyrtl-s-tandan": {
    "scientificName": "Neosilurus hyrtlii",
    "family": "Catfish"
  },
  "japanese-sea-bream": {
    "scientificName": "Gymnocranius euanus",
    "family": "Emperors"
  },
  "jungle-perch": {
    "scientificName": "Kuhlia rupestris",
    "family": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "distribution": "Found in clear running mountain streams/slower pools on the east coast",
    "misId": "Spotted flagtail"
  },
  "khaki-grunter": {
    "scientificName": "Hephaestus tulliensis",
    "family": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 30cm",
    "distribution": "Usually found in faster flowing streams, including riffles, over gravel, cobble and rock bottoms",
    "misId": "Sooty grunter"
  },
  "king-threadfin": {
    "scientificName": "Polydactylus macrochir",
    "family": "Threadfin",
    "sizeRange": "Common length: 80cm; Maximum length: 170cm",
    "distribution": "Rivers and estuaries; Sand or mud flats (to a depth of 5m)",
    "misId": "Blue threadfin"
  },
  "koi-carp": {
    "scientificName": "Cyprinus carpio",
    "family": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s"
  },
  "lake-eacham-rainbowfish": {
    "scientificName": "Melanotaenia eachamensis",
    "family": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "lancer": {
    "scientificName": "Lethrinus genivittatus",
    "family": "Emperors"
  },
  "lavendar-snapper": {
    "scientificName": "Pristipomoides sieboldii",
    "family": "Tropical snappers and sea perches"
  },
  "leaping-bonito": {
    "scientificName": "Cybiosarda elegans",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 35-45cm; Maximum length: 70cm",
    "distribution": "Coastal bays, inlets and estuaries",
    "misId": "Other bonito, Mackerel tuna"
  },
  "lemon-shark": {
    "scientificName": "Negaprion acutidens",
    "family": "Sharks",
    "sizeRange": "Common length: 50cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Tawny shark, Speartooth shark"
  },
  "leopard-rockcod": {
    "scientificName": "Cephalopholis leopardus",
    "family": "Cods and groupers"
  },
  "lesser-queenfish": {
    "scientificName": "Scomberoides lysan",
    "family": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 58.5cm",
    "distribution": "Inshore waters such as shallow lagoons; Offshore areas (to a depth of 100 m); Enters estuaries periodically",
    "misId": "Other queenfish species"
  },
  "lessons-sweetlips": {
    "scientificName": "Plectorhinchus lessonii",
    "family": "Sweetlips"
  },
  "lined-surgeonfish": {
    "scientificName": "Acanthurus lineatus",
    "family": "Surgeonfishes"
  },
  "logan-freshwater-mullet": {
    "scientificName": "Trachystoma petardi",
    "family": "Mullet"
  },
  "long-nosed-emperor": {
    "scientificName": "Lethrinus olivaceus",
    "family": "Emperors"
  },
  "longfin-rockcod": {
    "scientificName": "Epinephelus quoyanus",
    "family": "Cods and groupers"
  },
  "longtail-carpetshark": {
    "family": "Sharks",
    "sizeRange": "Common length: 107cm",
    "distribution": "Coastal waters"
  },
  "longtail-tuna": {
    "scientificName": "Thunnus tonggol",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 70cm; Maximum length: 130cm",
    "distribution": "Largely coastal but avoids low-salinity areas near mouths of large rivers",
    "misId": "Other tuna species"
  },
  "lunar-fusilier": {
    "scientificName": "Caesio lunaris",
    "family": "Fusiliers"
  },
  "lungfish": {
    "scientificName": "Neocertaodus forsteri",
    "family": "Lungfish",
    "sizeRange": "Common length: 100cm; Maximum length: 150cm"
  },
  "lyretail-trout": {
    "scientificName": "Variola albimarginata",
    "family": "Coral trout"
  },
  "mackerel-tuna": {
    "scientificName": "Euthynnus affinis",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Coastal waters and around offshore islands",
    "misId": "Bonito"
  },
  "maori-cod": {
    "scientificName": "Epinephelus undulatostriatus",
    "family": "Cods and groupers"
  },
  "maori-seaperch": {
    "scientificName": "Lutjanus rivulatus",
    "family": "Tropical snappers and sea perches"
  },
  "marbled-parrotfish": {
    "scientificName": "Leptoscarus vaigiensis",
    "family": "Parrotfishes"
  },
  "marjorie-s-hardyhead": {
    "scientificName": "Craterocephalus marjoriae",
    "family": "Hardyhead"
  },
  "mary-river-cod": {
    "scientificName": "Maccullochella mariensis",
    "family": "Cods (freshwater)",
    "sizeRange": "Common length: 50cm; Maximum length: 120cm",
    "distribution": "Restricted to the Mary River catchment; Found in some SEQ stocked impoundments; Low flow areas around undercut banks and fallen timber",
    "misId": "Murray cod"
  },
  "mcculloch-s-rainbowfish": {
    "scientificName": "Melanotaenia maccullochi",
    "family": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "midnight-seaperch": {
    "scientificName": "Macolor macularis",
    "family": "Tropical snappers and sea perches",
    "misId": "Black and white seaperch"
  },
  "milk-shark": {
    "scientificName": "Rhizoprionodon acutus",
    "family": "Sharks",
    "sizeRange": "Common length: 30cm-110cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Hardnose shark, Sliteye shark, Spinner shark (drab form)"
  },
  "mirror-carp": {
    "scientificName": "Cyprinus carpio",
    "family": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s"
  },
  "mollusc2": {
    "family": "Bivalve molluscs and gastropods"
  },
  "moreton-bay-bug": {
    "scientificName": "Thenus australiensis",
    "family": "Lobsters, crayfish and bugs",
    "sizeRange": "Maximum length: 28cm",
    "distribution": "Lives on muddy or sandy bottoms in oceanic waters to depths of up to 60m; Buries itself during the day and is active at night"
  },
  "mozambique-large-eye-bream": {
    "scientificName": "Wattsia mossambica",
    "family": "Emperors"
  },
  "mud-crab": {
    "scientificName": "Scylla serrata",
    "family": "Crabs",
    "distribution": "Usually found in shallow water but berried females occur well offshore; Favour a soft muddy bottom, often below tide level",
    "didYouKnow": "\"Hermaphrodite” mud crabs are caused by parasitic infections ( Sacculina or Loxothylacus ihlei), which alter the reproductive biology of both male and female crabs."
  },
  "narrow-sawfish": {
    "scientificName": "Anoxypristis cuspidata",
    "family": "Sawfish",
    "sizeRange": "Maximum length: 470cm",
    "distribution": "Inshore/offshore",
    "misId": "Green sawfish"
  },
  "needleskin-queenfish": {
    "scientificName": "Scomberoides tol",
    "family": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 47cm",
    "distribution": "Near the surface in coastal waters",
    "misId": "Other queenfish species"
  },
  "nervous-shark": {
    "scientificName": "Carcharhinus cautus",
    "family": "Sharks",
    "sizeRange": "Common length: 35cm-150cm",
    "distribution": "Inshore/offshore, but more commonly reported inshore",
    "misId": "Blacktip reef shark"
  },
  "northern-purplespotted-gudgeon": {
    "scientificName": "Mogurnda mogurnda",
    "family": "Gudgeons"
  },
  "northern-sand-flathead": {
    "scientificName": "Platycephalus endrachtensis",
    "family": "Flathead",
    "sizeRange": "Common length: 35cm; Maximum length: 46cm",
    "distribution": "Sandy beaches to a depth of 55m",
    "misId": "Dusky flathead, Bartailed flathead, Yellowtailed flathead"
  },
  "northern-saratoga": {
    "scientificName": "Scleropages jardinii",
    "family": "Saratoga",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Upper reaches of fast-flowing streams and still billabongs; Prefer clear streams and rivers",
    "misId": "Southern saratoga"
  },
  "northern-whiting": {
    "scientificName": "Sillago sihama",
    "family": "Whiting",
    "sizeRange": "Common length: 20cm; Maximum length: 30cm",
    "distribution": "Near the shore; Shallow water along beaches, sandbars, mangrove creeks, estuaries",
    "misId": "Other whiting species"
  },
  "oblique-banded-groper": {
    "scientificName": "Epinephelus radiatus",
    "family": "Cods and groupers"
  },
  "oblique-banded-snapper": {
    "scientificName": "Pristipomoides zonatus",
    "family": "Tropical snappers and sea perches"
  },
  "oceanic-whitetip-shark": {
    "scientificName": "Carcharhinus longimanus",
    "family": "Sharks",
    "sizeRange": "Common length: 60cm-300cm",
    "distribution": "Offshore"
  },
  "onespot-seaperch": {
    "scientificName": "Lutjanus monostigma",
    "family": "Tropical snappers and sea perches"
  },
  "orange-cockle": {
    "scientificName": "Vasticardium vertebratum",
    "family": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 80 mm (average 50-60 mm)",
    "misId": "Australian mud ark ( Anadara trapezia ) has a white, angulate shell and hinge teeth are tiny and numerous."
  },
  "orange-striped-emperor": {
    "scientificName": "Lethrinus obsoletus",
    "family": "Emperors"
  },
  "ornate-eagle-ray": {
    "family": "Rays"
  },
  "ornate-jobfish": {
    "scientificName": "Pristipomoides argyrogrammicus",
    "family": "Tropical snappers and sea perches"
  },
  "ornate-rainbowfish": {
    "scientificName": "Rhadinocentrus ornatus",
    "family": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "ornate-rock-lobster": {
    "scientificName": "Panulirus ornatus",
    "family": "Lobsters, crayfish and bugs"
  },
  "pacific-blue-eye": {
    "scientificName": "Pseudomugil signifer",
    "family": "Blue eye"
  },
  "pacific-longnose-parrotfish": {
    "scientificName": "Hipposcarus longiceps",
    "family": "Parrotfishes"
  },
  "pacific-shortfin-eel": {
    "scientificName": "Anguilla obscura",
    "family": "Eels",
    "sizeRange": "Average length: 60cm; Maximum growth: 110cm",
    "distribution": "Coastal lagoons and the lower reaches of rivers",
    "misId": "Other eel species"
  },
  "paddletail": {
    "scientificName": "Lutjanus gibbus",
    "family": "Tropical snappers and sea perches"
  },
  "painted-crayfish": {
    "scientificName": "Panulirus ornatus",
    "family": "Lobsters, crayfish and bugs"
  },
  "painted-sweetlips": {
    "scientificName": "Diagramma pictum",
    "family": "Sweetlips"
  },
  "peacock-rockcod": {
    "scientificName": "Cephalopholis argus",
    "family": "Cods and groupers"
  },
  "photololigo-pencil-squid": {
    "family": "Squid and cuttlefish"
  },
  "pigeye-shark": {
    "scientificName": "Carcharhinus amboinensis",
    "family": "Sharks",
    "sizeRange": "Common length: 60cm-280cm",
    "distribution": "Inshore (including estuaries and rivers) and offshore",
    "misId": "Bull shark ( C. leucas )"
  },
  "pikey-bream": {
    "scientificName": "Acanthopagrus pacificus",
    "family": "Breams and snapper",
    "sizeRange": "Common length: 25cm; Maximum length: 50cm",
    "distribution": "Common in estuaries (to a depth of 50m); Bottom-living fish",
    "misId": "Yellowfin bream, Silver javelin",
    "didYouKnow": "The dorsal fin spines of pikey bream are noticeably thicker compared to other bream species."
  },
  "pink-eared-emperor": {
    "scientificName": "Lethrinus lentjan",
    "family": "Emperors"
  },
  "pink-hussar": {
    "scientificName": "Lutjanus adetii",
    "family": "Tropical snappers and sea perches"
  },
  "polyprion-americanus-bass-groper": {
    "scientificName": "Polyprion americanus",
    "family": "Cods and groupers"
  },
  "potato-rockcod": {
    "scientificName": "Epinephelus tukula",
    "family": "Cods and groupers"
  },
  "prawns": {
    "family": "Prawns"
  },
  "queensland-groper": {
    "scientificName": "Epinephelus lanceolatus",
    "family": "Cods and groupers"
  },
  "razor-clams": {
    "scientificName": "(family Pinnae) Most common species in South East Queensland: Atrina pectinata and Pinna bicolor",
    "family": "Bivalve molluscs and gastropods",
    "sizeRange": "Length 300 mm or more (average 150-200 mm)"
  },
  "red-bass": {
    "scientificName": "Lutjanus bohar",
    "family": "Tropical snappers and sea perches"
  },
  "red-eared-emperor": {
    "scientificName": "Lethrinus rubrioperculatus",
    "family": "Emperors"
  },
  "red-emperor": {
    "scientificName": "Lutjanus sebae",
    "family": "Tropical snappers and sea perches",
    "didYouKnow": "A stunning deep-bodied fish, juveniles of the red emperor boast striking red and white colours, earning them admiration as the 'Queen of the sea'."
  },
  "redbreasted-maori-wrasse": {
    "scientificName": "Cheilinus fasciatus",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "redclaw": {
    "scientificName": "Cherax quadricarinatus",
    "family": "Lobsters, crayfish and bugs",
    "distribution": "Outside its natural range, this species is considered non-indigenous so must not be returned to the water. This includes berried females",
    "misId": "Blueclaw"
  },
  "redmouth-rockcod": {
    "scientificName": "Aethaloperca rogaa",
    "family": "Cods and groupers"
  },
  "redthroat-emperor": {
    "scientificName": "Lethrinus miniatus",
    "family": "Emperors",
    "didYouKnow": "The largest recorded redthroat emperor from boat ramp surveys measured 69 cm!"
  },
  "rendahl-s-catfish": {
    "scientificName": "Porochilus rendahli",
    "family": "Catfish"
  },
  "river-blackfish": {
    "scientificName": "Gadopsis marmoratus",
    "family": "River blackfish",
    "sizeRange": "Common length: 30cm; Maximum length: 60cm",
    "distribution": "Restricted distribution in some parts of the Murray-Darling basin; Prefers clear, gently flowing streams with abundant log snags; Protected species as it is prone to overfishing due to its limited distribution and low fertility",
    "misId": "Two spine blackfish"
  },
  "river-garfish": {
    "scientificName": "Hyporhamphus regularis",
    "family": "Garfish",
    "sizeRange": "Common length: 15-20cm; Maximum length: 30cm",
    "distribution": "Shallow estuaries, bays and lakes",
    "misId": "Three-by-two garfish"
  },
  "river-perch": {
    "scientificName": "Johnius borneensis",
    "family": "Jewfish",
    "sizeRange": "Common length: 20cm; Maximum length: 35cm",
    "distribution": "Inshore estuarine rivers and bays; Benthic feeder",
    "misId": "Mulloway (juvenile)"
  },
  "robinsons-sea-bream": {
    "scientificName": "Gymnocranius grandoculis",
    "family": "Emperors"
  },
  "roman-nosed-goby": {
    "scientificName": "Awaous acritosus",
    "family": "Goby"
  },
  "rosy-snapper": {
    "scientificName": "Pristipomoides filamentosus",
    "family": "Tropical snappers and sea perches"
  },
  "ruby-snapper": {
    "scientificName": "Etelis carbunculus",
    "family": "Tropical snappers and sea perches",
    "distribution": "The caudal fin is forked; Pink-red, fading to white on the lower sides of the belly"
  },
  "saddle-back-snapper": {
    "scientificName": "Paracaesio kusakarii",
    "family": "Tropical snappers and sea perches"
  },
  "saddletail-snapper": {
    "scientificName": "Lutjanus malabaricus",
    "family": "Tropical snappers and sea perches",
    "misId": "Crimson snapper",
    "didYouKnow": "Saddletail snapper can grow to more than 13 kg, reach lengths of up to 100 cm, and ages of at least 39 years."
  },
  "sailfin-snapper": {
    "scientificName": "Symphorichthys spilurus",
    "family": "Tropical snappers and sea perches"
  },
  "sandbar-shark": {
    "scientificName": "Carcharhinus plumbeus",
    "family": "Sharks",
    "sizeRange": "Common length: 55cm-240cm",
    "distribution": "Inshore/offshore"
  },
  "scalloped-hammerhead-shark": {
    "scientificName": "Sphyrna lewini",
    "family": "Sharks",
    "sizeRange": "Common length: 45cm-350cm",
    "distribution": "Inshore/offshore"
  },
  "scaly-jewfish": {
    "scientificName": "Nibea squamosa",
    "family": "Jewfish",
    "misId": "Black jewfish, Silver jewfish"
  },
  "school-mackerel": {
    "scientificName": "Scomberomorus queenslandicus",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 50-80cm; Maximum length: 100cm",
    "distribution": "Inshore waters, bays and estuaries",
    "misId": "Spotted mackerel",
    "didYouKnow": "Often dubbed the \"lesser mackerel,\" these fish share close kinship with Spanish and spotted mackerel, however they vary in habitat preference, feeding habits, and behaviour. Favouring coastal waters and bays while consuming a diverse range of prey."
  },
  "shark-mackerel": {
    "scientificName": "Grammatorcynus bicarinatus",
    "family": "Mackerel and tuna",
    "sizeRange": "Common length: 50cm; Maximum length: 110cm",
    "distribution": "Individual bays and reefs",
    "misId": "Other mackerel species"
  },
  "shark-ray": {
    "scientificName": "Rhina ancylostoma",
    "family": "Rays",
    "sizeRange": "Maximum length: 270cm",
    "distribution": "Inshore/offshore"
  },
  "shortfin-mako": {
    "scientificName": "Isurus oxyrinchus",
    "family": "Sharks",
    "sizeRange": "Common length: 70cm-400cm",
    "distribution": "Mostly offshore",
    "misId": "Blue shark, Juvenile white shark"
  },
  "silky-shark": {
    "scientificName": "Carcharhinus falciformis",
    "family": "Sharks",
    "sizeRange": "Common length: 55cm-350cm",
    "distribution": "Offshore"
  },
  "silver-javelin": {
    "scientificName": "Pomadasys argenteus",
    "family": "Javelins",
    "sizeRange": "Common length: 30cm; Maximum length: 60cm",
    "distribution": "Coastal inshore waters (open bays and estuaries)",
    "misId": "Barred javelin"
  },
  "silver-jewfish": {
    "scientificName": "Nibea soldado",
    "family": "Jewfish",
    "sizeRange": "Common length: 40cm; Maximum length: 60cm",
    "distribution": "Coastal waters and estuaries",
    "misId": "Black jewfish, Scaly jewfish"
  },
  "silvertip-shark": {
    "scientificName": "Carcharhinus albimarginatus",
    "family": "Sharks",
    "sizeRange": "Common length: 50cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Whitetip reef shark"
  },
  "six-bar-rockcod": {
    "scientificName": "Epinephelus sexfasciatus",
    "family": "Cods and groupers"
  },
  "six-spot-rockcod": {
    "scientificName": "Cephalopholis sexmaculata",
    "family": "Cods and groupers"
  },
  "sixplate-sawtail": {
    "scientificName": "Prionurus microlepidotus",
    "family": "Surgeonfishes"
  },
  "sleepy-cod": {
    "scientificName": "Oxyeleotris lineolata",
    "family": "Cods (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "distribution": "Weedy, timbered and quiet areas; Stocked in a number of northern impoundments"
  },
  "sliteye-shark": {
    "scientificName": "Loxodon macrorhinus",
    "family": "Sharks",
    "sizeRange": "Common length: 40cm-90cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Hardnose shark, Milk shark, Spinner shark (drab form)"
  },
  "small-spotted-dart": {
    "scientificName": "Trachinotus baillonii",
    "family": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 53.5cm",
    "distribution": "Surf zone along sandy beaches",
    "misId": "Swallowtail dart"
  },
  "small-toothed-jobfish": {
    "scientificName": "Aphareus furca",
    "family": "Tropical snappers and sea perches"
  },
  "snake-head-gudgeon": {
    "scientificName": "Giuris margaritacea",
    "family": "Gudgeons"
  },
  "snub-nosed-dart": {
    "scientificName": "Trachinotus blochii",
    "family": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 74cm",
    "misId": "Other dart"
  },
  "snubnose-rockcod": {
    "scientificName": "Epinephelus macrospilos",
    "family": "Cods and groupers"
  },
  "snubnosed-garfish": {
    "scientificName": "Arrhamphus sclerolepis",
    "family": "Garfish",
    "sizeRange": "Common length: 10-15cm; Maximum length: 22cm",
    "distribution": "Extends into freshwater",
    "misId": "Other garfish"
  },
  "sooty-grunter": {
    "scientificName": "Hephaestus fuliginosus",
    "family": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 25cm; Maximum length: 45cm",
    "distribution": "Usually found in large flowing streams especially in the upper reaches over sandy or rocky bottoms with sparse aquatic vegetation; Sooty grunter taken in the Mary River Catchment are deemed to be a non-indigenous fisheries resource and must not be returned to the water after they've been removed",
    "misId": "Khaki grunter"
  },
  "southern-purplespotted-gudgeon": {
    "scientificName": "Mogurnda adspersa",
    "family": "Gudgeons"
  },
  "southern-saratoga": {
    "scientificName": "Scleropages leichardti",
    "family": "Saratoga",
    "sizeRange": "Common length: 50cm; Maximum length: 100cm",
    "distribution": "Native to the Fitzroy river system; Prefer still waters and slow flowing turbid sections of rivers and can be found sheltering in lily-pads or below fallen timber; Due to their restricted natural range and poor fecundity they are prone to overfishing and hence have a possession limit of one",
    "misId": "Northern saratoga"
  },
  "spangled-emperor": {
    "scientificName": "Lethrinus nebulosus",
    "family": "Emperors",
    "misId": "Grass emperor (sweetlip)"
  },
  "spangled-perch": {
    "scientificName": "Leiopotherapon unicolor",
    "family": "Perch and grunter (freshwater)"
  },
  "spanish-flag": {
    "scientificName": "Lutjanus carponatus",
    "family": "Tropical snappers and sea perches",
    "didYouKnow": "The largest stripey snapper recorded during boat ramp surveys hit an impressive 53 cm!"
  },
  "spanner-crab": {
    "scientificName": "Ranina ranina",
    "family": "Crabs"
  },
  "speartooth-shark": {
    "scientificName": "Glyphis glyphis",
    "family": "Sharks",
    "sizeRange": "Common length: 59cm-300cm",
    "distribution": "Captures reported in the southern and western gulf are unconfirmed",
    "misId": "Bull shark, Lemon shark, Northern river shark/New Guinea river shark"
  },
  "speckled-fin-rockcod": {
    "scientificName": "Epinephelus ongus",
    "family": "Cods and groupers"
  },
  "speckled-goby": {
    "scientificName": "Redigobius bikolanus",
    "family": "Goby"
  },
  "speckled-grouper": {
    "scientificName": "Epinephelus magniscuttis",
    "family": "Cods and groupers"
  },
  "spinner-shark": {
    "scientificName": "Carcharhinus brevipinna",
    "family": "Sharks",
    "sizeRange": "Common length: 60cm-280cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian blacktip (blacktip colour form), Australian sharpnose shark, Common blacktip, Graceful shark, Grey sharpnose shark, Hardnose shark, Milk shark, Sliteye shark"
  },
  "splitlevel-hogfish": {
    "scientificName": "Bodianus mesothorax",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "spot-tail-shark": {
    "scientificName": "Carcharhinus sorrah",
    "family": "Sharks",
    "sizeRange": "Common length: 50cm-160cm",
    "distribution": "Inshore/offshore"
  },
  "spotted-blue-eye": {
    "scientificName": "Pseudomugil gertrudae",
    "family": "Blue eye"
  },
  "spotted-flagtail": {
    "scientificName": "Kuhlia marginata",
    "family": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "misId": "Jungle perch"
  },
  "spotted-tilapia": {
    "scientificName": "Tilapia mariae",
    "family": "Cichlids",
    "sizeRange": "Grows to 30cm",
    "misId": "Mozambique tilapia, Australian bass (juvenile)"
  },
  "spotted-unicornfish": {
    "scientificName": "Naso brevirostris",
    "family": "Surgeonfishes"
  },
  "squaretail-coral-trout": {
    "scientificName": "Plectropomus areolatus",
    "family": "Coral trout"
  },
  "steephead-parrotfish": {
    "scientificName": "Chlorurus microrhinos",
    "family": "Parrotfishes"
  },
  "stout-whiting": {
    "scientificName": "Sillago robusta",
    "family": "Whiting",
    "sizeRange": "Common length: 25cm; Maximum length: 30cm",
    "distribution": "Predominantly offshore",
    "misId": "Tumpeter whiting"
  },
  "strawberry-rockcod": {
    "scientificName": "Cephalopholis spiloparaea",
    "family": "Cods and groupers"
  },
  "striated-surgeonfish": {
    "scientificName": "Ctenochaetus striatus",
    "family": "Surgeonfishes"
  },
  "striped-barracuda": {
    "scientificName": "Sphyraena obtusata",
    "family": "Barracuda",
    "sizeRange": "Common length: 30cm; Maximum length: 35cm",
    "distribution": "Bays and estuaries",
    "misId": "Blackfin barracuda"
  },
  "striped-gudgeon": {
    "scientificName": "Gobiomorphus australis",
    "family": "Gudgeons",
    "distribution": "Brackish to freshwater dwelling"
  },
  "swallowtail-dart": {
    "scientificName": "Trachinotus coppingeri",
    "family": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 35cm",
    "distribution": "Inhabits shallow coastal waters, often in the rough surf zone along sandy beaches",
    "misId": "Small spotted dart"
  },
  "tawny-shark": {
    "scientificName": "Nebrius ferrugineus",
    "family": "Sharks",
    "sizeRange": "Common length: 40cm-320cm",
    "distribution": "Inshore/offshore",
    "misId": "Lemon shark"
  },
  "thinspine-rockcod": {
    "scientificName": "Gracila albomarginata",
    "family": "Cods and groupers"
  },
  "three-by-two-garfish": {
    "scientificName": "Hemiramphus robustus",
    "family": "Garfish",
    "sizeRange": "Common length: 15-20cm; Maximum length: 32cm",
    "distribution": "More turbid inshore waters"
  },
  "three-spot-crab": {
    "scientificName": "Portunus sanguinolentus",
    "family": "Crabs"
  },
  "three-stripe-fusilier": {
    "scientificName": "Pterocaesio trilineata",
    "family": "Fusiliers"
  },
  "thresher-shark": {
    "scientificName": "Alopias sp.",
    "family": "Sharks",
    "sizeRange": "Thresher shark; Common length: 115cm-550cm Bigeye thresher shark; Common length: 100cm-460cm"
  },
  "thumbprint-emperor": {
    "scientificName": "Lethrinus harak",
    "family": "Emperors"
  },
  "tiger-shark": {
    "scientificName": "Galeocerdo cuvier",
    "family": "Sharks",
    "sizeRange": "Common length: 50cm-600cm",
    "distribution": "Inshore/offshore"
  },
  "tilapia-mozambique-re": {
    "scientificName": "Oreochromis mossambicus",
    "family": "Cichlids",
    "sizeRange": "Grows to more than 36cm",
    "misId": "Spotted tilapia, Australian bass (juvenile), Barred grunter (juvenile)"
  },
  "tomato-rockcod": {
    "scientificName": "Cephalopholis sonnerati",
    "family": "Cods and groupers"
  },
  "tripletail-maori-wrasse": {
    "scientificName": "Cheilinus trilobatus",
    "family": "Pigfish, tuskfish and wrasses"
  },
  "tropical": {
    "scientificName": "Family Palinuridae",
    "family": "Lobsters, crayfish and bugs",
    "distribution": "Usually in shallow water (less than 20m) on rock and coral reefs, although they can be found in over 100m"
  },
  "tropical-rocklobster": {
    "scientificName": "Family Palinuridae",
    "family": "Lobsters, crayfish and bugs",
    "distribution": "Usually in shallow water (less than 20m) on rock and coral reefs, although they can be found in over 100m"
  },
  "trout-cod": {
    "scientificName": "Epinephelus maculatus",
    "family": "Cods and groupers"
  },
  "trumpeter-whiting": {
    "scientificName": "Sillago maculata",
    "family": "Whiting",
    "sizeRange": "Common length: 25cm; Maximum length: 30cm",
    "distribution": "Silty and muddy substrates in the deeper waters of bays; Mouths of rivers, estuaries and mangrove creeks",
    "misId": "Sand whiting",
    "didYouKnow": "The scientific name Sillago maculata means \"blotched or patchy\", describing the fish's coloration with dark blotches along its flank."
  },
  "two-striped-sweetlips": {
    "scientificName": "Plectorhinchus albovittatus",
    "family": "Sweetlips"
  },
  "variegated-emperor": {
    "scientificName": "Lethrinus variegatus",
    "family": "Emperors"
  },
  "venus-tuskfish": {
    "scientificName": "Choerodon venustus",
    "family": "Pigfish, tuskfish and wrasses",
    "didYouKnow": "Through boat ramp surveys and compliance checks, it's been observed that tuskfish are often mistaken for parrotfish."
  },
  "weasel-shark": {
    "scientificName": "Hemigaleus australiensis",
    "family": "Sharks",
    "sizeRange": "Common length: 30cm-110cm",
    "distribution": "Inshore/offshore",
    "misId": "Fossil shark, Sicklefin weasel shark"
  },
  "wedge-clams": {
    "scientificName": "Paphies angusta : (family Mesodesmatidae)",
    "family": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 30 mm (average 20-25 mm)",
    "misId": "Australian pipi ( Plebidonax deltoides ) is larger, broader and often shows much colour variation (externally and internally)."
  },
  "welchs-grunter": {
    "scientificName": "Bidyanus welchi",
    "family": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 23cm; Maximum length: 40cm",
    "distribution": "Lake Eyre drainage (Barcoo, Diamintina, Georgina, Thompson and Wilson rivers) and also in the Bulloo River; Usually found in turbid waters of large rivers and waterholes",
    "misId": "Barcoo grunter, Silver perch Very similar to silver perch but found in different drainage systems"
  },
  "white-lined-rockcod": {
    "scientificName": "Anyperodon leucogrammicus",
    "family": "Cods and groupers"
  },
  "white-shark": {
    "scientificName": "Carcharodon carcharias",
    "family": "Sharks",
    "sizeRange": "Common length: 130cm-600cm",
    "distribution": "Inshore/offshore"
  },
  "white-spotted-guitarfish": {
    "scientificName": "Rhynchobatus australiae",
    "family": "Rays",
    "sizeRange": "Common length: 46cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Giant shovelnose ray"
  },
  "white-spotted-rockcod": {
    "scientificName": "Epinephelus coeruleopunctatus",
    "family": "Cods and groupers"
  },
  "whitecheek-shark": {
    "scientificName": "Carcharhinus coatesi",
    "family": "Sharks",
    "sizeRange": "Common length: 35cm-100cm",
    "distribution": "Inshore/offshore",
    "misId": "Blackspot shark"
  },
  "whitetip-reef-shark": {
    "scientificName": "Triaenodon obesus",
    "family": "Sharks",
    "sizeRange": "Common length: 52cm-170cm",
    "distribution": "Inshore/offshore; Reefs and shoals"
  },
  "winghead-shark": {
    "scientificName": "Eusphyra blochii",
    "family": "Sharks",
    "sizeRange": "Common length: 45cm-186cm",
    "distribution": "Inshore/offshore"
  },
  "wobbegong": {
    "family": "Sharks",
    "sizeRange": "Maximum length: 300cm",
    "distribution": "Coastal waters and offshore reefs"
  },
  "wolf-herring": {
    "scientificName": "Chirocentrus dorab",
    "family": "Anchovies, herrings and sardines",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Inshore coastal waters",
    "misId": "Hairtail"
  },
  "yellow-and-blue-back-fusilier": {
    "scientificName": "Caesio teres",
    "family": "Fusiliers"
  },
  "yellow-margined-seaperch": {
    "scientificName": "Lutjanus fulvus",
    "family": "Tropical snappers and sea perches"
  },
  "yellow-spotted-emperor": {
    "scientificName": "Lethrinus erythracanthus",
    "family": "Emperors"
  },
  "yellow-spotted-sawtail": {
    "scientificName": "Prionurus maculatus",
    "family": "Surgeonfishes"
  },
  "yellow-striped-emperor": {
    "scientificName": "Lethrinus ornatus",
    "family": "Emperors"
  },
  "yellow-tailed-emperor": {
    "scientificName": "Lethrinus atkinsoni",
    "family": "Emperors"
  },
  "yellowbanded-sweetlips": {
    "scientificName": "Plectorhinchus lineatus",
    "family": "Sweetlips"
  },
  "yellowfin-parrotfish": {
    "scientificName": "Scarus flavipectoralis",
    "family": "Parrotfishes"
  },
  "yellowfin-surgeonfish": {
    "scientificName": "Acanthurus xanthopterus",
    "family": "Surgeonfishes"
  },
  "yellowlip-emperor": {
    "scientificName": "Lethrinus xanthochilus",
    "family": "Emperors"
  },
  "yellowtail-blue-snapper": {
    "scientificName": "Paracaesio xanthura",
    "family": "Tropical snappers and sea perches"
  },
  "yellowtail-kingfish": {
    "scientificName": "Seriola lalandi",
    "family": "Trevally",
    "sizeRange": "Common length: 60cm; Maximum length: 173cm",
    "distribution": "Large offshore shoals at depths of 50m; Occasionally in surf zones",
    "misId": "Other Seriola species"
  },
  "yellowtail-scad": {
    "scientificName": "Trachurus novozelandiae",
    "family": "Trevally"
  },
  "yellowtailed-flathead": {
    "scientificName": "Platycephalus westraliae",
    "family": "Flathead",
    "sizeRange": "Common length: 30cm; Maximum length: 40cm",
    "distribution": "Shallow coastal waters and estuaries; Found on mud and sand",
    "misId": "Bartailed flathead"
  },
  "zebra-shark": {
    "scientificName": "Stegostoma fasciatum",
    "family": "Sharks",
    "sizeRange": "Common length: 20cm-235cm",
    "distribution": "Inshore/offshore"
  }
};
