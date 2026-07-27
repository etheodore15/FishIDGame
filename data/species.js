// Fish species data for Blair's Fish ID Game.
//
// PLACEHOLDER DATA: these six species use simple cartoon illustrations so the
// game is playable right away. Once the NSW Recreational Fishing Guide PDF is
// added to the project, its real photos and details replace/extend this list.
//
// Schema per species:
//   id             unique slug
//   commonName     name shown as the answer (required)
//   scientificName optional
//   image          path to the picture shown in the question (required)
//   source         which guide it came from, e.g. "nsw" (see FISH_DATA.sources)
//   sizeLimit      legal size limit text, used for future size-limit questions
//   bagLimit       daily bag limit text
//   habitat        where it lives, used for future habitat questions
//   funFact        shown after answering
//
// Loaded as a plain script (not fetch) so the game works when index.html is
// opened directly from disk, with no web server needed.

window.FISH_DATA = {
  sources: [
    { id: "nsw", name: "NSW Recreational Fishing Guide", note: "placeholder entries pending PDF import" }
  ],
  species: [
    {
      id: "dusky-flathead",
      commonName: "Dusky Flathead",
      scientificName: "Platycephalus fuscus",
      image: "images/dusky-flathead.svg",
      source: "nsw",
      sizeLimit: "36 cm minimum",
      bagLimit: "5",
      habitat: "Estuaries and coastal bays",
      funFact: "Flathead lie flat on the sandy bottom and ambush their prey!"
    },
    {
      id: "snapper",
      commonName: "Snapper",
      scientificName: "Chrysophrys auratus",
      image: "images/snapper.svg",
      source: "nsw",
      sizeLimit: "30 cm minimum",
      bagLimit: "10",
      habitat: "Coastal reefs and offshore waters",
      funFact: "Big old snapper can grow a bony bump on their forehead!"
    },
    {
      id: "yellowfin-bream",
      commonName: "Yellowfin Bream",
      scientificName: "Acanthopagrus australis",
      image: "images/yellowfin-bream.svg",
      source: "nsw",
      sizeLimit: "25 cm minimum",
      bagLimit: "10",
      habitat: "Estuaries, rivers and beaches",
      funFact: "Bream can live for more than 20 years!"
    },
    {
      id: "sand-whiting",
      commonName: "Sand Whiting",
      scientificName: "Sillago ciliata",
      image: "images/sand-whiting.svg",
      source: "nsw",
      sizeLimit: "27 cm minimum",
      bagLimit: "20",
      habitat: "Sandy beaches and estuary flats",
      funFact: "Whiting love eating little worms and pipis found in the sand."
    },
    {
      id: "australian-bass",
      commonName: "Australian Bass",
      scientificName: "Percalates novemaculeata",
      image: "images/australian-bass.svg",
      source: "nsw",
      sizeLimit: "None (closed season applies)",
      bagLimit: "2",
      habitat: "Coastal rivers and freshwater creeks",
      funFact: "Bass swim downstream to salty estuaries in winter to breed."
    },
    {
      id: "murray-cod",
      commonName: "Murray Cod",
      scientificName: "Maccullochella peelii",
      image: "images/murray-cod.svg",
      source: "nsw",
      sizeLimit: "55–75 cm slot limit",
      bagLimit: "2",
      habitat: "Murray–Darling rivers and lakes",
      funFact: "The Murray Cod is Australia's biggest freshwater fish — it can grow over a metre long!"
    }
  ]
};
