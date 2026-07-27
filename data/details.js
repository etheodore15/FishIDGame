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
    "category": "Glassfish"
  },
  "anchor-tuskfish": {
    "scientificName": "Choerodon anchorago",
    "category": "Pigfish, tuskfish and wrasses"
  },
  "archerfish": {
    "scientificName": "Toxotes chatareus",
    "category": "Sevenspot archer fish"
  },
  "areolate-rockcod": {
    "scientificName": "Epinephelus areolatus",
    "category": "Cods and groupers"
  },
  "aru-gudgeon": {
    "scientificName": "Oxyeleotris aruensis",
    "category": "Gudgeons"
  },
  "australian-anchovy": {
    "scientificName": "Engraulis australis",
    "category": "Anchovies, herrings and sardines"
  },
  "australian-butterfly-ray": {
    "category": "Rays"
  },
  "australian-cownose-ray": {
    "category": "Rays"
  },
  "australian-mud-ark": {
    "scientificName": "Anadara trapezia",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 80 mm (average 50-60 mm)",
    "misId": "Cockles (Cardiidae) also ribbed but hinge teeth are few and large."
  },
  "australian-sardine": {
    "scientificName": "Sardinops sagax",
    "category": "Anchovies, herrings and sardines"
  },
  "australian-sharpnose-shark": {
    "scientificName": "Rhizoprionodon taylori",
    "category": "Sharks",
    "sizeRange": "Common length: 25cm-67cm",
    "distribution": "Inshore/offshore",
    "misId": "Grey sharpnose shark"
  },
  "australian-smelt": {
    "scientificName": "Retropinna semoni",
    "category": "Australian Smelt"
  },
  "banana-fusilier": {
    "scientificName": "Pterocaesio pisang",
    "category": "Fusiliers"
  },
  "banded-rainbowfish": {
    "scientificName": "Melanotaenia trifasciata",
    "category": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "banded-rockcod": {
    "scientificName": "Formerly known as Epinephelus ergastularius (37 311147) and E. septemfasciatus (37 311060), this species is now recognised as Hyporthodus ergastularius.",
    "category": "Cods and groupers",
    "misId": "Eightbar grouper"
  },
  "barcoo-grunter": {
    "scientificName": "Scortum barcoo",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 25cm; Maximum length: 35cm",
    "distribution": "Hatchery-reared fingerlings have been stocked at Jericho Waterholes, Jericho; Usually turbid waters of large rivers and waterholes",
    "misId": "Silver perch, Welsh's grunter"
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
    "category": "Cods and groupers"
  },
  "barred-cheek-coral-trout": {
    "scientificName": "Plectropomus maculatus",
    "category": "Coral trout",
    "didYouKnow": "Barcheek coral trout are protogynous hermaphrodites, starting life as females and transitioning to males as they mature."
  },
  "barred-grunter": {
    "scientificName": "Amniataba percoides",
    "category": "Perch and grunter (freshwater)",
    "misId": "Mozambique tilapia (juvenile)"
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
    "misId": "Other queenfish species"
  },
  "bartail-flathead": {
    "scientificName": "Platycephalus australis",
    "category": "Flathead",
    "sizeRange": "Common length: 35cm; Maximum length: 50cm",
    "distribution": "Shallow coastal waters and estuaries",
    "misId": "Yellowtailed flathead, Dusky flathead, Sand flathead"
  },
  "beche-de-mer": {
    "category": "Sea cucumbers"
  },
  "bicolour-parrotfish": {
    "scientificName": "Cetoscarus ocellatus",
    "category": "Parrotfishes"
  },
  "big-eye-bream": {
    "scientificName": "Monotaxis grandoculis",
    "category": "Emperors"
  },
  "big-mullet": {
    "category": "Mullet"
  },
  "bigeye-seaperch": {
    "scientificName": "Lutjanus lutjanus",
    "category": "Tropical snappers and sea perches",
    "misId": "Brownstripe seaperch"
  },
  "bigeye-trevally": {
    "scientificName": "Caranx sexfasciatus",
    "category": "Trevally",
    "sizeRange": "Common length: 40cm; Maximum length: 78cm",
    "distribution": "Juveniles may be found in estuaries",
    "misId": "Bludger trevally, Giant trevally"
  },
  "bignose-shark": {
    "scientificName": "Carcharhinus altimus",
    "category": "Sharks",
    "sizeRange": "Common length: 60cm-300cm",
    "distribution": "Demersal on deep continental shelves and insular slopes by day and may be pelagic by night",
    "misId": "Galapagos shark (C. galapagensis - no records in Queensland coastal waters)"
  },
  "black-and-white-snapper": {
    "scientificName": "Macolor niger",
    "category": "Tropical snappers and sea perches"
  },
  "black-banded-rainbowfish": {
    "scientificName": "Melanotaenia nigrans",
    "category": "Rainbowfish",
    "sizeRange": "Common length: 11cm"
  },
  "black-banded-snapper": {
    "scientificName": "Lutjanus semicinctus",
    "category": "Tropical snappers and sea perches"
  },
  "black-catfish": {
    "scientificName": "Neosilirus ater",
    "category": "Catfish"
  },
  "black-jewfish": {
    "scientificName": "Protonibea diacanthus",
    "category": "Jewfish",
    "sizeRange": "Common length: 80cm; Maximum length: 150cm",
    "distribution": "Coastal waters (to a depth of 100 m); Ascends tidal rivers and estuaries",
    "misId": "Mulloway, Silver jewfish"
  },
  "black-spot-snapper": {
    "scientificName": "Lutjanus fulviflamma",
    "category": "Tropical snappers and sea perches"
  },
  "black-teatfish": {
    "scientificName": "Holothuria (Microthele) whitmaei",
    "category": "Sea cucumbers"
  },
  "black-tipped-rockcod": {
    "scientificName": "Epinephelus fasciatus",
    "category": "Cods and groupers"
  },
  "black-tipped-rockcod-underwater": {
    "scientificName": "Epinephelus fasciatus",
    "category": "Cods and groupers"
  },
  "blackbanded-amberjack": {
    "scientificName": "Seriolina nigrofasciata",
    "category": "Trevally",
    "sizeRange": "Maximum length: 173cm",
    "distribution": "Offshore reefs (near continental shelfs) at depths of 20m-150 m",
    "misId": "Other Seriola species"
  },
  "blackfin-pigfish": {
    "scientificName": "Bodianus loxozonus",
    "category": "Pigfish, tuskfish and wrasses"
  },
  "blackfin-slatey": {
    "scientificName": "Diagramma melanacrum",
    "category": "Sweetlips"
  },
  "blacklip-oyster": {
    "scientificName": "Pinctada margaritifera",
    "category": "Bivalve molluscs and gastropods"
  },
  "blackmast": {
    "scientificName": "Craterocephalus stramineus",
    "category": "Blackmast"
  },
  "blacksaddle-rockcod": {
    "scientificName": "Epinephelus howlandi",
    "category": "Cods and groupers"
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
    "misId": "Greasy cod, Goldspotted rockcod"
  },
  "blackspotted-whipray": {
    "category": "Rays"
  },
  "blacktip-reef-shark": {
    "scientificName": "Carcharhinus melanopterus",
    "category": "Sharks",
    "sizeRange": "Common length: 48cm-140cm; Maximum length: 180cm",
    "distribution": "Inshore/offshore; Associated with coral reefs and shoals",
    "misId": "Nervous shark ( C. cautus )"
  },
  "blind-shark": {
    "category": "Sharks",
    "sizeRange": "Maximum length: 120cm"
  },
  "bloomfield-river-cod": {
    "scientificName": "Guyu wujalwujalensis",
    "category": "Cods (freshwater)",
    "sizeRange": "Maximum length: 10cm",
    "distribution": "Bloomfield River (north eastern Australia); Shelters in the cover of undercut banks, boulders, logs, snags and submerged root masses during the day"
  },
  "blue-catfish": {
    "scientificName": "Neoarius graeffei",
    "category": "Catfish"
  },
  "blue-lined-rockcod": {
    "scientificName": "Cephalopholis formosa",
    "category": "Cods and groupers"
  },
  "blue-mackerel": {
    "scientificName": "Scomber australasicus",
    "category": "Mackerel and tuna"
  },
  "blue-maori-rockcod": {
    "scientificName": "Epinephelus cyanopodus",
    "category": "Cods and groupers"
  },
  "blue-marlin": {
    "scientificName": "Makaira nigricans",
    "category": "Billfish and swordfish",
    "sizeRange": "Common length: 2.9m; Maximum length: 5m",
    "distribution": "Typically found at depths from 0-1000 metres, usually seen above 40 metres; Rarely found near shore or islands except near deep drop-offs; Centred around equatorial regions; Migrates to higher latitudes during summer",
    "misId": "Black marlin, Striped marlin"
  },
  "blue-shark": {
    "scientificName": "Prionace glauca",
    "category": "Sharks",
    "sizeRange": "Common length: 35cm to at least 380cm",
    "distribution": "Mostly offshore",
    "misId": "Shortfin mako"
  },
  "blue-spotted-coral-trout": {
    "scientificName": "Plectropomus laevis",
    "category": "Coral trout"
  },
  "blue-spotted-rockcod": {
    "scientificName": "Cephalopholis cyanostigma",
    "category": "Cods and groupers"
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
    "misId": "King threadfin"
  },
  "blue-tuskfish": {
    "scientificName": "Choerodon cyanodus",
    "category": "Pigfish, tuskfish and wrasses"
  },
  "bluebarred-parrotfish": {
    "scientificName": "Scarus ghobban",
    "category": "Parrotfishes"
  },
  "blueclaw": {
    "scientificName": "Cherax destructor",
    "category": "Lobsters, crayfish and bugs",
    "sizeRange": "Common length: 10cm; Maximum length: 20cm",
    "distribution": "Natural distribution: Murray-Darling basin, Lake Eyre and Bulloo-Bancannia divisions and the Dawson River catchment on the east coast drainage; Outside the natural distribution, this species is considered non-indigenous so must not be returned to the water. This includes berried females",
    "misId": "Redclaw"
  },
  "bluespine-unicornfish": {
    "scientificName": "Naso unicornis",
    "category": "Surgeonfishes"
  },
  "bluestripe-seaperch": {
    "scientificName": "Lutjanus kasmira",
    "category": "Tropical snappers and sea perches",
    "misId": "Five-lined seaperch"
  },
  "bony-bream": {
    "scientificName": "Nematalosa erebi",
    "category": "Anchovies, herrings and sardines"
  },
  "bridled-parrotfish": {
    "scientificName": "Scarus frenatus",
    "category": "Parrotfishes"
  },
  "brown-barred-rockcod": {
    "scientificName": "Cephalopholis boenak",
    "category": "Cods and groupers"
  },
  "brown-surgeonfish": {
    "scientificName": "Acanthurus nigrofuscus",
    "category": "Surgeonfishes"
  },
  "brown-whipray": {
    "category": "Rays"
  },
  "brownstripe-seaperch": {
    "scientificName": "Lutjanus vitta",
    "category": "Tropical snappers and sea perches"
  },
  "bull-shark": {
    "scientificName": "Carcharhinus leucas",
    "category": "Sharks",
    "sizeRange": "Common length: 55cm to at least 340cm",
    "distribution": "Inshore (and rare large specimens in offshore)",
    "misId": "Pigeye shark"
  },
  "bumphead-parrotfish": {
    "scientificName": "Bolbometopon muricatum",
    "category": "Parrotfishes"
  },
  "cairns-rainbowfish": {
    "scientificName": "Cairnsichthys rhombosomoides",
    "category": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "camouflage-grouper": {
    "scientificName": "Epinephelus polyphekadion",
    "category": "Cods and groupers"
  },
  "carolines-parrotfish": {
    "scientificName": "Calotomus carolinus",
    "category": "Parrotfishes"
  },
  "celebes-sweetlips": {
    "scientificName": "Plectorhinchus chrysotaenia",
    "category": "Sweetlips"
  },
  "chequered-rainbowfish": {
    "scientificName": "Melanotaenia inornata",
    "category": "Rainbowfish",
    "sizeRange": "Common length: 9cm"
  },
  "chinaman-rockcod": {
    "scientificName": "Epinephelus rivulatus",
    "category": "Cods and groupers"
  },
  "chinamanfish": {
    "scientificName": "Symphorus nematophorus",
    "category": "Tropical snappers and sea perches"
  },
  "chinese-weatherfish": {
    "scientificName": "Misgurnus anguillicaudatus",
    "category": "Loaches",
    "sizeRange": "Grows to 25cm",
    "distribution": "Native to Europe and Asia"
  },
  "climbing-perch-anabas-testudineus": {
    "scientificName": "Anabas testudineus",
    "category": "Climbing perches",
    "sizeRange": "10cm-23cm",
    "distribution": "Native to Asia"
  },
  "coal-grunter": {
    "scientificName": "Hephaestus carbo",
    "category": "Perch and grunter (freshwater)"
  },
  "collared-carpetshark": {
    "scientificName": "Parascyllium collare",
    "category": "Sharks",
    "sizeRange": "Maximum length: 86cm",
    "distribution": "Demersal in coastal waters south of Mooloolaba",
    "misId": "Catshark"
  },
  "collared-sea-bream": {
    "scientificName": "Gymnocranius audleyi",
    "category": "Emperors"
  },
  "comet-grouper": {
    "scientificName": "Epinephelus morrhua",
    "category": "Cods and groupers"
  },
  "common-carp": {
    "scientificName": "Cyprinus carpio",
    "category": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s"
  },
  "common-coral-trout": {
    "scientificName": "Plectropomus leopardus",
    "category": "Coral trout",
    "misId": "Bluespotted coral trout",
    "didYouKnow": "Common coral trout are fierce, predatory coral reef fish that are highly regarded table fare."
  },
  "common-hardyhead": {
    "scientificName": "Atherinomorus vaigiensis",
    "category": "Hardyhead"
  },
  "common-silverbiddy": {
    "scientificName": "Gerrees subfasciatus",
    "category": "Silver biddies"
  },
  "convict-surgeonfish": {
    "scientificName": "Acanthurus triostegus",
    "category": "Surgeonfishes"
  },
  "coral-cod": {
    "scientificName": "Cephalopholis miniata",
    "category": "Cods and groupers"
  },
  "coral-rockcod": {
    "scientificName": "Epinephelus corallicola",
    "category": "Cods and groupers"
  },
  "coronation-trout": {
    "scientificName": "Variola louti",
    "category": "Coral trout"
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
    "distribution": "Northern Australia"
  },
  "daisy-parrotfish": {
    "scientificName": "Chlorurus sordidus",
    "category": "Parrotfishes"
  },
  "dark-banded-fusilier": {
    "scientificName": "Pterocaesio tile",
    "category": "Fusiliers"
  },
  "dark-tailed-seaperch": {
    "scientificName": "Lutjanus lemniscatus",
    "category": "Tropical snappers and sea perches"
  },
  "desert-rainbowfish": {
    "scientificName": "Melanotaenia tatei",
    "category": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "diamondfish": {
    "scientificName": "Monodactylus argenteus",
    "category": "Diamondfishes"
  },
  "diamondscale-mullet": {
    "scientificName": "Liza vaigiensis",
    "category": "Mullet",
    "sizeRange": "Common length: 35cm; Maximum length: 60cm",
    "distribution": "Shallow coastal areas; Protected sandy shores in lagoons, reef flats, estuaries and coastal creeks; Usually under tidal influence (but may enter freshwater); Juveniles may be found in mangroves",
    "misId": "Other mullet species"
  },
  "dianas-hogfish": {
    "scientificName": "Bodianus diana",
    "category": "Pigfish, tuskfish and wrasses"
  },
  "dogfish": {
    "category": "Sharks",
    "distribution": "Deeper, cooler waters"
  },
  "double-line-fusilier": {
    "scientificName": "Pterocaesio digramma",
    "category": "Fusiliers"
  },
  "dusky-snapper": {
    "scientificName": "Paracaesio sordida",
    "category": "Tropical snappers and sea perches"
  },
  "dwarf-sawfish": {
    "scientificName": "Pristis clavata",
    "category": "Sawfish",
    "sizeRange": "Common length: Up to 150cm (locally caught at 310cm)",
    "distribution": "Juveniles more commonly encountered in coastal foreshores and embankments; adults in marine waters",
    "misId": "Freshwater sawfish"
  },
  "dwarf-spotted-rockcod": {
    "scientificName": "Epinephelus merra",
    "category": "Cods and groupers"
  },
  "eel-tailed-catfish": {
    "scientificName": "Tandanus tandanus",
    "category": "Catfish",
    "sizeRange": "Common length: 40cm; Maximum length: 90cm",
    "distribution": "Widely distributed in the Murray-Darling River system and east coast drainages; Often found on sand or gravel bottoms in slow moving streams; Often found in stocked impoundments"
  },
  "eight-bar-grouper": {
    "scientificName": "Formally known a s Epinephelus octofasciatus, this species is now recognised as Hyporthodus octofasciatus.",
    "category": "Cods and groupers",
    "misId": "Bar rockcod"
  },
  "ember-parrotfish": {
    "scientificName": "Scarus rubroviolaceus",
    "category": "Parrotfishes"
  },
  "empire-gudgeon": {
    "scientificName": "Hypseleotris compressa",
    "category": "Gudgeons"
  },
  "eyestripe-surgeonfish": {
    "scientificName": "Acanthurus dussumieri",
    "category": "Surgeonfishes"
  },
  "firetail-gudgeon": {
    "scientificName": "Hypseleotris galii",
    "category": "Gudgeons"
  },
  "five-lined-seaperch": {
    "scientificName": "Lutjanus quinquelineatus",
    "category": "Tropical snappers and sea perches"
  },
  "flagtail-glassfish": {
    "scientificName": "Ambassis miops",
    "category": "Glassfish"
  },
  "flagtail-rockcod": {
    "scientificName": "Cephalopholis urodeta",
    "category": "Cods and groupers"
  },
  "flame-snapper": {
    "scientificName": "Etelis coruscans",
    "category": "Tropical snappers and sea perches"
  },
  "flowery-rockcod": {
    "scientificName": "Epinephelus fuscoguttatus",
    "category": "Cods and groupers"
  },
  "flyspecked-hardyhead": {
    "scientificName": "Craterocephalus stercusmuscarum",
    "category": "Hardyhead"
  },
  "fossil-shark": {
    "scientificName": "Hemipristis elongata",
    "category": "Sharks",
    "sizeRange": "Common length: 52cm-230cm",
    "distribution": "Inshore/offshore",
    "misId": "Hooktooth shark, Weasel shark"
  },
  "foursaddle-rockcod": {
    "scientificName": "Epinephelus spilotoceps",
    "category": "Cods and groupers"
  },
  "freshwater-sawfish": {
    "scientificName": "Pristis pristis",
    "category": "Sawfish",
    "sizeRange": "Common length: 150cm; Maximum length: 600cm",
    "distribution": "Relatively uncommon; Coastal drainages in northern Australia; Sometimes upstream freshwater creeks"
  },
  "frypan-bream": {
    "scientificName": "Argyrops spinifer",
    "category": "Breams and snapper",
    "sizeRange": "Common length: 30cm; Maximum length: 70 cm",
    "distribution": "Bottom-dwelling (wide range of grounds at depths 5-100m)",
    "misId": "Pink snapper"
  },
  "gambusia": {
    "scientificName": "Gambusia holbrooki",
    "category": "Mosquitofishes",
    "sizeRange": "3cm-4cm up to 7cm",
    "distribution": "Eastern Australia"
  },
  "giant-queenfish": {
    "scientificName": "Scomberoides commersonnianus",
    "category": "Trevally",
    "sizeRange": "Common length: 60cm; Maximum length: 120cm",
    "distribution": "Reefs and offshore islands; Periodically enters estuaries",
    "misId": "Banded queenfish"
  },
  "giant-shovelnose-ray": {
    "category": "Rays"
  },
  "giant-trevally": {
    "scientificName": "Caranx ignoblis",
    "category": "Trevally",
    "sizeRange": "Common length: 80cm; Maximum length: 146cm",
    "distribution": "All marine habitats (juveniles may occur in estuaries)",
    "misId": "Bigeye trevally, Brassy trevally"
  },
  "gilberts-grunter": {
    "scientificName": "Pingalla gilberti",
    "category": "Perch and grunter (freshwater)"
  },
  "gold-lined-sea-bream": {
    "scientificName": "Gnathodentex aureolineatus",
    "category": "Emperors"
  },
  "goldband-fusilier": {
    "scientificName": "Pterocaesio chrysozona",
    "category": "Fusiliers"
  },
  "goldband-snapper": {
    "scientificName": "Pristipomoides multidens",
    "category": "Tropical snappers and sea perches"
  },
  "golden-eye-jobfish": {
    "scientificName": "Pristipomoides flavipinnis",
    "category": "Tropical snappers and sea perches"
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
    "category": "Tropical snappers and sea perches"
  },
  "goldlip-pearl-oyster": {
    "scientificName": "Pinctada maxima",
    "category": "Bivalve molluscs and gastropods"
  },
  "goldspot-pigfish": {
    "scientificName": "Bodianus perdition",
    "category": "Pigfish, tuskfish and wrasses"
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
    "misId": "Australian blacktip, Common blacktip, Spinner shark (blacktip colour form)"
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
    "category": "Pigfish, tuskfish and wrasses"
  },
  "greasy-rockcod": {
    "scientificName": "Epinephelus tauvina",
    "category": "Cods and groupers"
  },
  "great-barracuda": {
    "scientificName": "Sphyraena barracuda",
    "category": "Barracuda",
    "sizeRange": "Common length: 100cm; Maximum length: 170cm",
    "distribution": "Open sea and close to the reef; Juveniles found inshore, mainly in estuaries or mangrove swamps",
    "misId": "Other barracuda"
  },
  "great-hammerhead-shark": {
    "scientificName": "Sphyrna mokarran",
    "category": "Sharks",
    "sizeRange": "Common length: 65cm-600cm",
    "distribution": "Inshore/offshore",
    "misId": "Scalloped hammerhead shark"
  },
  "green-jobfish": {
    "scientificName": "Aprion virescens",
    "category": "Tropical snappers and sea perches"
  },
  "green-sawfish": {
    "scientificName": "Pristis zijsron",
    "category": "Sawfish",
    "sizeRange": "Common length: 80-500cm; Maximum length: 700cm",
    "distribution": "Inshore/offshore; Juveniles found inshore in foreshores and embankments; Adults found in deeper shelf waters and seasonally inshore",
    "misId": "Dwarf sawfish"
  },
  "grey-mackerel": {
    "scientificName": "Scomberomorus semifasciatus",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 70-90cm; Maximum length: 120cm",
    "distribution": "In major bays",
    "misId": "Spanish mackerel"
  },
  "grey-nurse-shark": {
    "scientificName": "Carcharias taurus",
    "category": "Sharks",
    "sizeRange": "Common length: 318cm; Maximum length: 400cm",
    "distribution": "Inshore/offshore",
    "misId": "Fossil shark, Lemon shark, Speartooth shark, Tawny shark"
  },
  "grey-reef-shark": {
    "scientificName": "Carcharhinus amblyrhynchos",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-180cm; Maximum length: 255cm",
    "distribution": "Inshore/offshore; Reefs and shoals",
    "misId": "Dusky shark"
  },
  "grey-sharpnose-shark": {
    "scientificName": "Rhizoprionodon oligolinx",
    "category": "Sharks",
    "sizeRange": "Common length: 20cm-70cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Hardnose shark, Milk shark, Sliteye shark, Spinner shark (drab form)"
  },
  "hapuku": {
    "scientificName": "Polyprion oxygeneios",
    "category": "Cods and groupers"
  },
  "hardnose-shark": {
    "scientificName": "Carcharhinus macloti",
    "category": "Sharks",
    "sizeRange": "Common length: 45cm-110cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Milk shark, Sliteye shark, Spinner shark (drab form)"
  },
  "harlequin-sweetlips": {
    "scientificName": "Plectorhinchus chaetodontoides",
    "category": "Sweetlips"
  },
  "hercules-club-mud-whelk": {
    "scientificName": "Pyrazus ebeninus : family Batillariidae",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 100 mm (average 70-90 mm)",
    "misId": "Juveniles often confused with Australian mud whelk ( Batillaria australis ), a coexisting (smaller) species of the same family."
  },
  "herring": {
    "scientificName": "Herklotsichthys spp",
    "category": "Anchovies, herrings and sardines"
  },
  "hexagon-rockcod": {
    "scientificName": "Epinephelus hexagonatus",
    "category": "Cods and groupers"
  },
  "highfin-amberjack": {
    "scientificName": "Seriola rivoliana",
    "category": "Trevally",
    "sizeRange": "Common length: 65cm",
    "distribution": "Mainly oceanic waters; Bottom dwelling and pelagic",
    "misId": "Greater amberjack, Other seriola species"
  },
  "highfin-coral-trout": {
    "scientificName": "Plectropomus oligacanthus",
    "category": "Coral trout"
  },
  "hound-shark": {
    "category": "Sharks",
    "sizeRange": "Common length: 70cm-170cm",
    "distribution": "Deeper waters"
  },
  "humphead-maori-wrasse": {
    "scientificName": "Cheilinus undulatus",
    "category": "Pigfish, tuskfish and wrasses"
  },
  "hyrtl-s-tandan": {
    "scientificName": "Neosilurus hyrtlii",
    "category": "Catfish"
  },
  "japanese-sea-bream": {
    "scientificName": "Gymnocranius euanus",
    "category": "Emperors"
  },
  "jungle-perch": {
    "scientificName": "Kuhlia rupestris",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "distribution": "Found in clear running mountain streams/slower pools on the east coast",
    "misId": "Spotted flagtail"
  },
  "khaki-grunter": {
    "scientificName": "Hephaestus tulliensis",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 30cm",
    "distribution": "Usually found in faster flowing streams, including riffles, over gravel, cobble and rock bottoms",
    "misId": "Sooty grunter"
  },
  "king-threadfin": {
    "scientificName": "Polydactylus macrochir",
    "category": "Threadfin",
    "sizeRange": "Common length: 80cm; Maximum length: 170cm",
    "distribution": "Rivers and estuaries; Sand or mud flats (to a depth of 5m)",
    "misId": "Blue threadfin"
  },
  "koi-carp": {
    "scientificName": "Cyprinus carpio",
    "category": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s"
  },
  "lake-eacham-rainbowfish": {
    "scientificName": "Melanotaenia eachamensis",
    "category": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "lancer": {
    "scientificName": "Lethrinus genivittatus",
    "category": "Emperors"
  },
  "lavendar-snapper": {
    "scientificName": "Pristipomoides sieboldii",
    "category": "Tropical snappers and sea perches"
  },
  "leaping-bonito": {
    "scientificName": "Cybiosarda elegans",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 35-45cm; Maximum length: 70cm",
    "distribution": "Coastal bays, inlets and estuaries",
    "misId": "Other bonito, Mackerel tuna"
  },
  "lemon-shark": {
    "scientificName": "Negaprion acutidens",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Tawny shark, Speartooth shark"
  },
  "leopard-rockcod": {
    "scientificName": "Cephalopholis leopardus",
    "category": "Cods and groupers"
  },
  "lesser-queenfish": {
    "scientificName": "Scomberoides lysan",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 58.5cm",
    "distribution": "Inshore waters such as shallow lagoons; Offshore areas (to a depth of 100 m); Enters estuaries periodically",
    "misId": "Other queenfish species"
  },
  "lessons-sweetlips": {
    "scientificName": "Plectorhinchus lessonii",
    "category": "Sweetlips"
  },
  "lined-surgeonfish": {
    "scientificName": "Acanthurus lineatus",
    "category": "Surgeonfishes"
  },
  "logan-freshwater-mullet": {
    "scientificName": "Trachystoma petardi",
    "category": "Mullet"
  },
  "long-nosed-emperor": {
    "scientificName": "Lethrinus olivaceus",
    "category": "Emperors"
  },
  "longfin-rockcod": {
    "scientificName": "Epinephelus quoyanus",
    "category": "Cods and groupers"
  },
  "longtail-carpetshark": {
    "category": "Sharks",
    "sizeRange": "Common length: 107cm",
    "distribution": "Coastal waters"
  },
  "longtail-tuna": {
    "scientificName": "Thunnus tonggol",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 70cm; Maximum length: 130cm",
    "distribution": "Largely coastal but avoids low-salinity areas near mouths of large rivers",
    "misId": "Other tuna species"
  },
  "lunar-fusilier": {
    "scientificName": "Caesio lunaris",
    "category": "Fusiliers"
  },
  "lungfish": {
    "scientificName": "Neocertaodus forsteri",
    "category": "Lungfish",
    "sizeRange": "Common length: 100cm; Maximum length: 150cm"
  },
  "lyretail-trout": {
    "scientificName": "Variola albimarginata",
    "category": "Coral trout"
  },
  "mackerel-tuna": {
    "scientificName": "Euthynnus affinis",
    "category": "Mackerel and tuna",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Coastal waters and around offshore islands",
    "misId": "Bonito"
  },
  "maori-cod": {
    "scientificName": "Epinephelus undulatostriatus",
    "category": "Cods and groupers"
  },
  "maori-seaperch": {
    "scientificName": "Lutjanus rivulatus",
    "category": "Tropical snappers and sea perches"
  },
  "marbled-parrotfish": {
    "scientificName": "Leptoscarus vaigiensis",
    "category": "Parrotfishes"
  },
  "marjorie-s-hardyhead": {
    "scientificName": "Craterocephalus marjoriae",
    "category": "Hardyhead"
  },
  "mary-river-cod": {
    "scientificName": "Maccullochella mariensis",
    "category": "Cods (freshwater)",
    "sizeRange": "Common length: 50cm; Maximum length: 120cm",
    "distribution": "Restricted to the Mary River catchment; Found in some SEQ stocked impoundments; Low flow areas around undercut banks and fallen timber",
    "misId": "Murray cod"
  },
  "mcculloch-s-rainbowfish": {
    "scientificName": "Melanotaenia maccullochi",
    "category": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "midnight-seaperch": {
    "scientificName": "Macolor macularis",
    "category": "Tropical snappers and sea perches",
    "misId": "Black and white seaperch"
  },
  "milk-shark": {
    "scientificName": "Rhizoprionodon acutus",
    "category": "Sharks",
    "sizeRange": "Common length: 30cm-110cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Hardnose shark, Sliteye shark, Spinner shark (drab form)"
  },
  "mirror-carp": {
    "scientificName": "Cyprinus carpio",
    "category": "Carps",
    "sizeRange": "40cm-80cm; Can grow up to 120cm",
    "distribution": "Native to central Asia; Introduced to Australia as a sportfish in the late 1800s"
  },
  "moreton-bay-bug": {
    "scientificName": "Thenus australiensis",
    "category": "Lobsters, crayfish and bugs",
    "sizeRange": "Maximum length: 28cm",
    "distribution": "Lives on muddy or sandy bottoms in oceanic waters to depths of up to 60m; Buries itself during the day and is active at night"
  },
  "mozambique-large-eye-bream": {
    "scientificName": "Wattsia mossambica",
    "category": "Emperors"
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
    "misId": "Green sawfish"
  },
  "needleskin-queenfish": {
    "scientificName": "Scomberoides tol",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 47cm",
    "distribution": "Near the surface in coastal waters",
    "misId": "Other queenfish species"
  },
  "nervous-shark": {
    "scientificName": "Carcharhinus cautus",
    "category": "Sharks",
    "sizeRange": "Common length: 35cm-150cm",
    "distribution": "Inshore/offshore, but more commonly reported inshore",
    "misId": "Blacktip reef shark"
  },
  "northern-purplespotted-gudgeon": {
    "scientificName": "Mogurnda mogurnda",
    "category": "Gudgeons"
  },
  "northern-sand-flathead": {
    "scientificName": "Platycephalus endrachtensis",
    "category": "Flathead",
    "sizeRange": "Common length: 35cm; Maximum length: 46cm",
    "distribution": "Sandy beaches to a depth of 55m",
    "misId": "Dusky flathead, Bartailed flathead, Yellowtailed flathead"
  },
  "northern-saratoga": {
    "scientificName": "Scleropages jardinii",
    "category": "Saratoga",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Upper reaches of fast-flowing streams and still billabongs; Prefer clear streams and rivers",
    "misId": "Southern saratoga"
  },
  "northern-whiting": {
    "scientificName": "Sillago sihama",
    "category": "Whiting",
    "sizeRange": "Common length: 20cm; Maximum length: 30cm",
    "distribution": "Near the shore; Shallow water along beaches, sandbars, mangrove creeks, estuaries",
    "misId": "Other whiting species"
  },
  "oblique-banded-groper": {
    "scientificName": "Epinephelus radiatus",
    "category": "Cods and groupers"
  },
  "oblique-banded-snapper": {
    "scientificName": "Pristipomoides zonatus",
    "category": "Tropical snappers and sea perches"
  },
  "oceanic-whitetip-shark": {
    "scientificName": "Carcharhinus longimanus",
    "category": "Sharks",
    "sizeRange": "Common length: 60cm-300cm",
    "distribution": "Offshore"
  },
  "onespot-seaperch": {
    "scientificName": "Lutjanus monostigma",
    "category": "Tropical snappers and sea perches"
  },
  "orange-cockle": {
    "scientificName": "Vasticardium vertebratum",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 80 mm (average 50-60 mm)",
    "misId": "Australian mud ark ( Anadara trapezia ) has a white, angulate shell and hinge teeth are tiny and numerous."
  },
  "orange-striped-emperor": {
    "scientificName": "Lethrinus obsoletus",
    "category": "Emperors"
  },
  "ornate-eagle-ray": {
    "category": "Rays"
  },
  "ornate-jobfish": {
    "scientificName": "Pristipomoides argyrogrammicus",
    "category": "Tropical snappers and sea perches"
  },
  "ornate-rainbowfish": {
    "scientificName": "Rhadinocentrus ornatus",
    "category": "Rainbowfish",
    "distribution": "Northern Australia"
  },
  "pacific-blue-eye": {
    "scientificName": "Pseudomugil signifer",
    "category": "Blue eye"
  },
  "pacific-longnose-parrotfish": {
    "scientificName": "Hipposcarus longiceps",
    "category": "Parrotfishes"
  },
  "pacific-shortfin-eel": {
    "scientificName": "Anguilla obscura",
    "category": "Eels",
    "sizeRange": "Average length: 60cm; Maximum growth: 110cm",
    "distribution": "Coastal lagoons and the lower reaches of rivers",
    "misId": "Other eel species"
  },
  "paddletail": {
    "scientificName": "Lutjanus gibbus",
    "category": "Tropical snappers and sea perches"
  },
  "painted-crayfish": {
    "scientificName": "Panulirus ornatus",
    "category": "Lobsters, crayfish and bugs"
  },
  "painted-sweetlips": {
    "scientificName": "Diagramma pictum",
    "category": "Sweetlips"
  },
  "peacock-rockcod": {
    "scientificName": "Cephalopholis argus",
    "category": "Cods and groupers"
  },
  "photololigo-pencil-squid": {
    "category": "Squid and cuttlefish"
  },
  "pigeye-shark": {
    "scientificName": "Carcharhinus amboinensis",
    "category": "Sharks",
    "sizeRange": "Common length: 60cm-280cm",
    "distribution": "Inshore (including estuaries and rivers) and offshore",
    "misId": "Bull shark ( C. leucas )"
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
    "category": "Emperors"
  },
  "pink-hussar": {
    "scientificName": "Lutjanus adetii",
    "category": "Tropical snappers and sea perches"
  },
  "polyprion-americanus-bass-groper": {
    "scientificName": "Polyprion americanus",
    "category": "Cods and groupers"
  },
  "potato-rockcod": {
    "scientificName": "Epinephelus tukula",
    "category": "Cods and groupers"
  },
  "prawns": {
    "category": "Prawns"
  },
  "queensland-groper": {
    "scientificName": "Epinephelus lanceolatus",
    "category": "Cods and groupers"
  },
  "razor-clams": {
    "scientificName": "(family Pinnae) Most common species in South East Queensland: Atrina pectinata and Pinna bicolor",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length 300 mm or more (average 150-200 mm)"
  },
  "red-bass": {
    "scientificName": "Lutjanus bohar",
    "category": "Tropical snappers and sea perches"
  },
  "red-eared-emperor": {
    "scientificName": "Lethrinus rubrioperculatus",
    "category": "Emperors"
  },
  "red-emperor": {
    "scientificName": "Lutjanus sebae",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "A stunning deep-bodied fish, juveniles of the red emperor boast striking red and white colours, earning them admiration as the 'Queen of the sea'."
  },
  "redbreasted-maori-wrasse": {
    "scientificName": "Cheilinus fasciatus",
    "category": "Pigfish, tuskfish and wrasses"
  },
  "redclaw": {
    "scientificName": "Cherax quadricarinatus",
    "category": "Lobsters, crayfish and bugs",
    "distribution": "Outside its natural range, this species is considered non-indigenous so must not be returned to the water. This includes berried females",
    "misId": "Blueclaw"
  },
  "redmouth-rockcod": {
    "scientificName": "Aethaloperca rogaa",
    "category": "Cods and groupers"
  },
  "redthroat-emperor": {
    "scientificName": "Lethrinus miniatus",
    "category": "Emperors",
    "didYouKnow": "The largest recorded redthroat emperor from boat ramp surveys measured 69 cm!"
  },
  "rendahl-s-catfish": {
    "scientificName": "Porochilus rendahli",
    "category": "Catfish"
  },
  "river-blackfish": {
    "scientificName": "Gadopsis marmoratus",
    "category": "River blackfish",
    "sizeRange": "Common length: 30cm; Maximum length: 60cm",
    "distribution": "Restricted distribution in some parts of the Murray-Darling basin; Prefers clear, gently flowing streams with abundant log snags; Protected species as it is prone to overfishing due to its limited distribution and low fertility",
    "misId": "Two spine blackfish"
  },
  "river-garfish": {
    "scientificName": "Hyporhamphus regularis",
    "category": "Garfish",
    "sizeRange": "Common length: 15-20cm; Maximum length: 30cm",
    "distribution": "Shallow estuaries, bays and lakes",
    "misId": "Three-by-two garfish"
  },
  "river-perch": {
    "scientificName": "Johnius borneensis",
    "category": "Jewfish",
    "sizeRange": "Common length: 20cm; Maximum length: 35cm",
    "distribution": "Inshore estuarine rivers and bays; Benthic feeder",
    "misId": "Mulloway (juvenile)"
  },
  "robinsons-sea-bream": {
    "scientificName": "Gymnocranius grandoculis",
    "category": "Emperors"
  },
  "roman-nosed-goby": {
    "scientificName": "Awaous acritosus",
    "category": "Goby"
  },
  "rosy-snapper": {
    "scientificName": "Pristipomoides filamentosus",
    "category": "Tropical snappers and sea perches"
  },
  "ruby-snapper": {
    "scientificName": "Etelis carbunculus",
    "category": "Tropical snappers and sea perches",
    "distribution": "The caudal fin is forked; Pink-red, fading to white on the lower sides of the belly"
  },
  "saddle-back-snapper": {
    "scientificName": "Paracaesio kusakarii",
    "category": "Tropical snappers and sea perches"
  },
  "saddletail-snapper": {
    "scientificName": "Lutjanus malabaricus",
    "category": "Tropical snappers and sea perches",
    "misId": "Crimson snapper",
    "didYouKnow": "Saddletail snapper can grow to more than 13 kg, reach lengths of up to 100 cm, and ages of at least 39 years."
  },
  "sailfin-snapper": {
    "scientificName": "Symphorichthys spilurus",
    "category": "Tropical snappers and sea perches"
  },
  "sandbar-shark": {
    "scientificName": "Carcharhinus plumbeus",
    "category": "Sharks",
    "sizeRange": "Common length: 55cm-240cm",
    "distribution": "Inshore/offshore"
  },
  "scalloped-hammerhead-shark": {
    "scientificName": "Sphyrna lewini",
    "category": "Sharks",
    "sizeRange": "Common length: 45cm-350cm",
    "distribution": "Inshore/offshore"
  },
  "scaly-jewfish": {
    "scientificName": "Nibea squamosa",
    "category": "Jewfish",
    "misId": "Black jewfish, Silver jewfish"
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
    "misId": "Other mackerel species"
  },
  "shark-ray": {
    "scientificName": "Rhina ancylostoma",
    "category": "Rays",
    "sizeRange": "Maximum length: 270cm",
    "distribution": "Inshore/offshore"
  },
  "shortfin-mako": {
    "scientificName": "Isurus oxyrinchus",
    "category": "Sharks",
    "sizeRange": "Common length: 70cm-400cm",
    "distribution": "Mostly offshore",
    "misId": "Blue shark, Juvenile white shark"
  },
  "silky-shark": {
    "scientificName": "Carcharhinus falciformis",
    "category": "Sharks",
    "sizeRange": "Common length: 55cm-350cm",
    "distribution": "Offshore"
  },
  "silver-javelin": {
    "scientificName": "Pomadasys argenteus",
    "category": "Javelins",
    "sizeRange": "Common length: 30cm; Maximum length: 60cm",
    "distribution": "Coastal inshore waters (open bays and estuaries)",
    "misId": "Barred javelin"
  },
  "silver-jewfish": {
    "scientificName": "Nibea soldado",
    "category": "Jewfish",
    "sizeRange": "Common length: 40cm; Maximum length: 60cm",
    "distribution": "Coastal waters and estuaries",
    "misId": "Black jewfish, Scaly jewfish"
  },
  "silvertip-shark": {
    "scientificName": "Carcharhinus albimarginatus",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Whitetip reef shark"
  },
  "six-bar-rockcod": {
    "scientificName": "Epinephelus sexfasciatus",
    "category": "Cods and groupers"
  },
  "six-spot-rockcod": {
    "scientificName": "Cephalopholis sexmaculata",
    "category": "Cods and groupers"
  },
  "sixplate-sawtail": {
    "scientificName": "Prionurus microlepidotus",
    "category": "Surgeonfishes"
  },
  "sleepy-cod": {
    "scientificName": "Oxyeleotris lineolata",
    "category": "Cods (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "distribution": "Weedy, timbered and quiet areas; Stocked in a number of northern impoundments"
  },
  "sliteye-shark": {
    "scientificName": "Loxodon macrorhinus",
    "category": "Sharks",
    "sizeRange": "Common length: 40cm-90cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian sharpnose shark, Grey sharpnose shark, Hardnose shark, Milk shark, Spinner shark (drab form)"
  },
  "small-spotted-dart": {
    "scientificName": "Trachinotus baillonii",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 53.5cm",
    "distribution": "Surf zone along sandy beaches",
    "misId": "Swallowtail dart"
  },
  "small-toothed-jobfish": {
    "scientificName": "Aphareus furca",
    "category": "Tropical snappers and sea perches"
  },
  "snake-head-gudgeon": {
    "scientificName": "Giuris margaritacea",
    "category": "Gudgeons"
  },
  "snub-nosed-dart": {
    "scientificName": "Trachinotus blochii",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 74cm",
    "misId": "Other dart"
  },
  "snubnose-rockcod": {
    "scientificName": "Epinephelus macrospilos",
    "category": "Cods and groupers"
  },
  "snubnosed-garfish": {
    "scientificName": "Arrhamphus sclerolepis",
    "category": "Garfish",
    "sizeRange": "Common length: 10-15cm; Maximum length: 22cm",
    "distribution": "Extends into freshwater",
    "misId": "Other garfish"
  },
  "sooty-grunter": {
    "scientificName": "Hephaestus fuliginosus",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 25cm; Maximum length: 45cm",
    "distribution": "Usually found in large flowing streams especially in the upper reaches over sandy or rocky bottoms with sparse aquatic vegetation; Sooty grunter taken in the Mary River Catchment are deemed to be a non-indigenous fisheries resource and must not be returned to the water after they've been removed",
    "misId": "Khaki grunter"
  },
  "southern-purplespotted-gudgeon": {
    "scientificName": "Mogurnda adspersa",
    "category": "Gudgeons"
  },
  "southern-saratoga": {
    "scientificName": "Scleropages leichardti",
    "category": "Saratoga",
    "sizeRange": "Common length: 50cm; Maximum length: 100cm",
    "distribution": "Native to the Fitzroy river system; Prefer still waters and slow flowing turbid sections of rivers and can be found sheltering in lily-pads or below fallen timber",
    "misId": "Northern saratoga"
  },
  "spangled-emperor": {
    "scientificName": "Lethrinus nebulosus",
    "category": "Emperors",
    "misId": "Grass emperor (sweetlip)"
  },
  "spangled-perch": {
    "scientificName": "Leiopotherapon unicolor",
    "category": "Perch and grunter (freshwater)"
  },
  "spanish-flag": {
    "scientificName": "Lutjanus carponatus",
    "category": "Tropical snappers and sea perches",
    "didYouKnow": "The largest stripey snapper recorded during boat ramp surveys hit an impressive 53 cm!"
  },
  "spanner-crab": {
    "scientificName": "Ranina ranina",
    "category": "Crabs"
  },
  "speartooth-shark": {
    "scientificName": "Glyphis glyphis",
    "category": "Sharks",
    "sizeRange": "Common length: 59cm-300cm",
    "distribution": "Captures reported in the southern and western gulf are unconfirmed",
    "misId": "Bull shark, Lemon shark, Northern river shark/New Guinea river shark"
  },
  "speckled-fin-rockcod": {
    "scientificName": "Epinephelus ongus",
    "category": "Cods and groupers"
  },
  "speckled-goby": {
    "scientificName": "Redigobius bikolanus",
    "category": "Goby"
  },
  "speckled-grouper": {
    "scientificName": "Epinephelus magniscuttis",
    "category": "Cods and groupers"
  },
  "spinner-shark": {
    "scientificName": "Carcharhinus brevipinna",
    "category": "Sharks",
    "sizeRange": "Common length: 60cm-280cm",
    "distribution": "Inshore/offshore",
    "misId": "Australian blacktip (blacktip colour form), Australian sharpnose shark, Common blacktip, Graceful shark, Grey sharpnose shark, Hardnose shark, Milk shark, Sliteye shark"
  },
  "splitlevel-hogfish": {
    "scientificName": "Bodianus mesothorax",
    "category": "Pigfish, tuskfish and wrasses"
  },
  "spot-tail-shark": {
    "scientificName": "Carcharhinus sorrah",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-160cm",
    "distribution": "Inshore/offshore"
  },
  "spotted-blue-eye": {
    "scientificName": "Pseudomugil gertrudae",
    "category": "Blue eye"
  },
  "spotted-flagtail": {
    "scientificName": "Kuhlia marginata",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 20cm; Maximum length: 45cm",
    "misId": "Jungle perch"
  },
  "spotted-tilapia": {
    "scientificName": "Tilapia mariae",
    "category": "Cichlids",
    "sizeRange": "Grows to 30cm",
    "misId": "Mozambique tilapia, Australian bass (juvenile)"
  },
  "spotted-unicornfish": {
    "scientificName": "Naso brevirostris",
    "category": "Surgeonfishes"
  },
  "squaretail-coral-trout": {
    "scientificName": "Plectropomus areolatus",
    "category": "Coral trout"
  },
  "steephead-parrotfish": {
    "scientificName": "Chlorurus microrhinos",
    "category": "Parrotfishes"
  },
  "stout-whiting": {
    "scientificName": "Sillago robusta",
    "category": "Whiting",
    "sizeRange": "Common length: 25cm; Maximum length: 30cm",
    "distribution": "Predominantly offshore",
    "misId": "Tumpeter whiting"
  },
  "strawberry-rockcod": {
    "scientificName": "Cephalopholis spiloparaea",
    "category": "Cods and groupers"
  },
  "striated-surgeonfish": {
    "scientificName": "Ctenochaetus striatus",
    "category": "Surgeonfishes"
  },
  "striped-barracuda": {
    "scientificName": "Sphyraena obtusata",
    "category": "Barracuda",
    "sizeRange": "Common length: 30cm; Maximum length: 35cm",
    "distribution": "Bays and estuaries",
    "misId": "Blackfin barracuda"
  },
  "striped-gudgeon": {
    "scientificName": "Gobiomorphus australis",
    "category": "Gudgeons",
    "distribution": "Brackish to freshwater dwelling"
  },
  "swallowtail-dart": {
    "scientificName": "Trachinotus coppingeri",
    "category": "Trevally",
    "sizeRange": "Common length: 30cm; Maximum length: 35cm",
    "distribution": "Inhabits shallow coastal waters, often in the rough surf zone along sandy beaches",
    "misId": "Small spotted dart"
  },
  "tawny-shark": {
    "scientificName": "Nebrius ferrugineus",
    "category": "Sharks",
    "sizeRange": "Common length: 40cm-320cm",
    "distribution": "Inshore/offshore",
    "misId": "Lemon shark"
  },
  "thinspine-rockcod": {
    "scientificName": "Gracila albomarginata",
    "category": "Cods and groupers"
  },
  "three-by-two-garfish": {
    "scientificName": "Hemiramphus robustus",
    "category": "Garfish",
    "sizeRange": "Common length: 15-20cm; Maximum length: 32cm",
    "distribution": "More turbid inshore waters"
  },
  "three-spot-crab": {
    "scientificName": "Portunus sanguinolentus",
    "category": "Crabs"
  },
  "three-stripe-fusilier": {
    "scientificName": "Pterocaesio trilineata",
    "category": "Fusiliers"
  },
  "thresher-shark": {
    "scientificName": "Alopias sp.",
    "category": "Sharks",
    "sizeRange": "Thresher shark; Common length: 115cm-550cm Bigeye thresher shark; Common length: 100cm-460cm"
  },
  "thumbprint-emperor": {
    "scientificName": "Lethrinus harak",
    "category": "Emperors"
  },
  "tiger-shark": {
    "scientificName": "Galeocerdo cuvier",
    "category": "Sharks",
    "sizeRange": "Common length: 50cm-600cm",
    "distribution": "Inshore/offshore"
  },
  "tilapia-mozambique-re": {
    "scientificName": "Oreochromis mossambicus",
    "category": "Cichlids",
    "sizeRange": "Grows to more than 36cm",
    "misId": "Spotted tilapia, Australian bass (juvenile), Barred grunter (juvenile)"
  },
  "tomato-rockcod": {
    "scientificName": "Cephalopholis sonnerati",
    "category": "Cods and groupers"
  },
  "tripletail-maori-wrasse": {
    "scientificName": "Cheilinus trilobatus",
    "category": "Pigfish, tuskfish and wrasses"
  },
  "tropical-rocklobster": {
    "scientificName": "Family Palinuridae",
    "category": "Lobsters, crayfish and bugs",
    "distribution": "Usually in shallow water (less than 20m) on rock and coral reefs, although they can be found in over 100m"
  },
  "trout-cod": {
    "scientificName": "Epinephelus maculatus",
    "category": "Cods and groupers"
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
    "category": "Sweetlips"
  },
  "variegated-emperor": {
    "scientificName": "Lethrinus variegatus",
    "category": "Emperors"
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
    "misId": "Fossil shark, Sicklefin weasel shark"
  },
  "wedge-clams": {
    "scientificName": "Paphies angusta : (family Mesodesmatidae)",
    "category": "Bivalve molluscs and gastropods",
    "sizeRange": "Length to 30 mm (average 20-25 mm)",
    "misId": "Australian pipi ( Plebidonax deltoides ) is larger, broader and often shows much colour variation (externally and internally)."
  },
  "welchs-grunter": {
    "scientificName": "Bidyanus welchi",
    "category": "Perch and grunter (freshwater)",
    "sizeRange": "Common length: 23cm; Maximum length: 40cm",
    "distribution": "Lake Eyre drainage (Barcoo, Diamintina, Georgina, Thompson and Wilson rivers) and also in the Bulloo River; Usually found in turbid waters of large rivers and waterholes",
    "misId": "Barcoo grunter, Silver perch Very similar to silver perch but found in different drainage systems"
  },
  "white-lined-rockcod": {
    "scientificName": "Anyperodon leucogrammicus",
    "category": "Cods and groupers"
  },
  "white-shark": {
    "scientificName": "Carcharodon carcharias",
    "category": "Sharks",
    "sizeRange": "Common length: 130cm-600cm",
    "distribution": "Inshore/offshore"
  },
  "white-spotted-guitarfish": {
    "scientificName": "Rhynchobatus australiae",
    "category": "Rays",
    "sizeRange": "Common length: 46cm-300cm",
    "distribution": "Inshore/offshore",
    "misId": "Giant shovelnose ray"
  },
  "white-spotted-rockcod": {
    "scientificName": "Epinephelus coeruleopunctatus",
    "category": "Cods and groupers"
  },
  "whitecheek-shark": {
    "scientificName": "Carcharhinus coatesi",
    "category": "Sharks",
    "sizeRange": "Common length: 35cm-100cm",
    "distribution": "Inshore/offshore",
    "misId": "Blackspot shark"
  },
  "whitetip-reef-shark": {
    "scientificName": "Triaenodon obesus",
    "category": "Sharks",
    "sizeRange": "Common length: 52cm-170cm",
    "distribution": "Inshore/offshore; Reefs and shoals"
  },
  "winghead-shark": {
    "scientificName": "Eusphyra blochii",
    "category": "Sharks",
    "sizeRange": "Common length: 45cm-186cm",
    "distribution": "Inshore/offshore"
  },
  "wobbegong": {
    "category": "Sharks",
    "sizeRange": "Maximum length: 300cm",
    "distribution": "Coastal waters and offshore reefs"
  },
  "wolf-herring": {
    "scientificName": "Chirocentrus dorab",
    "category": "Anchovies, herrings and sardines",
    "sizeRange": "Common length: 60cm; Maximum length: 100cm",
    "distribution": "Inshore coastal waters",
    "misId": "Hairtail"
  },
  "yellow-and-blue-back-fusilier": {
    "scientificName": "Caesio teres",
    "category": "Fusiliers"
  },
  "yellow-margined-seaperch": {
    "scientificName": "Lutjanus fulvus",
    "category": "Tropical snappers and sea perches"
  },
  "yellow-spotted-emperor": {
    "scientificName": "Lethrinus erythracanthus",
    "category": "Emperors"
  },
  "yellow-spotted-sawtail": {
    "scientificName": "Prionurus maculatus",
    "category": "Surgeonfishes"
  },
  "yellow-striped-emperor": {
    "scientificName": "Lethrinus ornatus",
    "category": "Emperors"
  },
  "yellow-tailed-emperor": {
    "scientificName": "Lethrinus atkinsoni",
    "category": "Emperors"
  },
  "yellowbanded-sweetlips": {
    "scientificName": "Plectorhinchus lineatus",
    "category": "Sweetlips"
  },
  "yellowfin-parrotfish": {
    "scientificName": "Scarus flavipectoralis",
    "category": "Parrotfishes"
  },
  "yellowfin-surgeonfish": {
    "scientificName": "Acanthurus xanthopterus",
    "category": "Surgeonfishes"
  },
  "yellowlip-emperor": {
    "scientificName": "Lethrinus xanthochilus",
    "category": "Emperors"
  },
  "yellowtail-blue-snapper": {
    "scientificName": "Paracaesio xanthura",
    "category": "Tropical snappers and sea perches"
  },
  "yellowtail-kingfish": {
    "scientificName": "Seriola lalandi",
    "category": "Trevally",
    "sizeRange": "Common length: 60cm; Maximum length: 173cm",
    "distribution": "Large offshore shoals at depths of 50m; Occasionally in surf zones",
    "misId": "Other Seriola species"
  },
  "yellowtail-scad": {
    "scientificName": "Trachurus novozelandiae",
    "category": "Trevally"
  },
  "yellowtailed-flathead": {
    "scientificName": "Platycephalus westraliae",
    "category": "Flathead",
    "sizeRange": "Common length: 30cm; Maximum length: 40cm",
    "distribution": "Shallow coastal waters and estuaries; Found on mud and sand",
    "misId": "Bartailed flathead"
  },
  "zebra-shark": {
    "scientificName": "Stegostoma fasciatum",
    "category": "Sharks",
    "sizeRange": "Common length: 20cm-235cm",
    "distribution": "Inshore/offshore"
  }
};
