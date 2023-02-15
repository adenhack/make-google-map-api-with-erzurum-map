let map;
const y = 15;

const ilceText = document.getElementById("ilceler");
ilceText.addEventListener("click", getir);

function erzurum() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:  39.90557957023148, lng: 41.265597886593845 },
    zoom: y,
  });
 
  map = new google.maps.Marker({
    position: { lat:  39.90557957023148, lng: 41.265597886593845 },
    map,
    title: "erzurum",
  });
}

function askale() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.92020016253661, lng: 40.69517509062403 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.92020016253661, lng: 40.69517509062403 },
    map,
    title: "Aşkale",
  });
}

function cat() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.612121042176184, lng: 40.97786678480181 },
    zoom: y,
  });
  
  map = new google.maps.Marker({
    position: { lat: 39.612121042176184, lng: 40.97786678480181 },
    map,
    title: "cat",
  });
}

function aziziye() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.945848167519564, lng: 41.10483183835606 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.945848167519564, lng: 41.10483183835606 },
    map,
    title: "aziziye",
  });
}

function senkaya() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.560109859039066, lng: 42.34529938448695 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 40.560109859039066, lng: 42.34529938448695 },
    map,
    title: "senkaya",
  });
}

function olur() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.82767213674458, lng: 42.12855449533003 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 40.82767213674458, lng: 42.12855449533003 },
    map,
    title: "olur",
  });
}

function oltu() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.546002308647275, lng: 41.9957874511121 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 40.546002308647275, lng: 41.9957874511121 },
    map,
    title: "oltu",
  });
}

function uzundere() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.5330375199229, lng: 41.54829593420339 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 40.5330375199229, lng: 41.54829593420339 },
    map,
    title: "uzundere",
  });
}

function pazaryolu() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.41592838491662, lng: 40.77502031886969 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 40.41592838491662, lng: 40.77502031886969 },
    map,
    title: "pazaryolu",
  });
}
 
function ispir() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:40.48460610329077, lng: 41.00039939187036 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat:40.48460610329077, lng: 41.00039939187036 },
    map,
    title: "ispir",
  });
}

function tortum() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.29459156282348, lng: 41.549825598103105 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 40.29459156282348, lng: 41.549825598103105 },
    map,
    title: "tortum",
  });
}

function narman() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.34389654061829, lng: 41.8704619574705 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 40.34389654061829, lng: 41.8704619574705 },
    map,
    title: "narman",
  });
}

function horasan() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.039987762685946, lng: 42.16904408687248 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 40.039987762685946, lng: 42.16904408687248 },
    map,
    title: "horasan",
  });
}

function pasinler() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.977177685812336, lng: 41.66749587936799 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.977177685812336, lng: 41.66749587936799 },
    map,
    title: "pasinler",
  });
}

function yakutiye() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.906528981042264, lng: 41.27227078153624},
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.906528981042264, lng: 41.27227078153624},
    map,
    title: "yakutiye",
  });
}

function tekman() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.6456477077989, lng: 41.50809399542638 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.6456477077989, lng: 41.50809399542638 },
    map,
    title: "tekman",
  });
}

function köprüköy() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:39.97394296978618, lng:41.873417151752975},
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.97394296978618, lng: 41.873417151752975 },
    map,
    title: "köprüköy",
  });
}

function hınıs() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.35958577242158, lng: 41.7097531797045 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.35958577242158, lng: 41.7097531797045 },
    map,
    title: "hınıs",
  });
}
 
function karayazı() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.70302925378546, lng: 42.1444591385787 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.70302925378546, lng: 42.1444591385787 },
    map,
    title: "karayazı",
  });
}

function palandöken() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.855953713459655, lng: 41.27912387618552 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.855953713459655, lng: 41.27912387618552 },
    map,
    title: "palandöken",
  });
}

function karaçoban() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.35109514144827, lng: 42.113082283971956 },
    zoom: y,
  });

  map = new google.maps.Marker({
    position: { lat: 39.35109514144827, lng: 42.113082283971956 },
    map,
    title: "karaçoban",
  });
}
 
window.erzurum = erzurum;
window.askale = askale;
window.cat = cat;
window.aziziye = aziziye;
window.karaçoban = karaçoban;
window.palandöken = palandöken;
window.karayazı = karayazı;
window.hınıs = hınıs;
window.köprüköy = köprüköy;
window.tekman = tekman;
window.yakutiye = yakutiye;
window.pasinler = pasinler;
window.horasan = horasan;
window.narman = narman;
window.tortum = tortum;
window.ispir = ispir;
window.pazaryolu = pazaryolu;
window.uzundere = uzundere;
window.oltu = oltu;
window.olur = olur;
window.senkaya = senkaya;

function getir(e) {
  if (ilceText.value === "") {
    erzurum();
  } else if (ilceText.value === "askale") {
    askale();
  } else if (ilceText.value === "aziziye") {
    aziziye();
  } else if (ilceText.value === "cat") {
    cat();
  } else if (ilceText.value === "senkaya") {
    senkaya();
  } else if (ilceText.value === "olur") {
    olur();
  } else if (ilceText.value === "oltu") {
    oltu();
  } else if (ilceText.value === "uzundere") {
    uzundere();
  } else if (ilceText.value === "pazaryolu") {
    pazaryolu();
  } else if (ilceText.value === "ispir") {
    ispir();
  } else if (ilceText.value === "tortum") {
    tortum();
  } else if (ilceText.value === "narman") {
    narman();
  } else if (ilceText.value === "horasan") {
    horasan();
  } else if (ilceText.value === "pasinler") {
    pasinler();
  } else if (ilceText.value === "yakutiye") {
    yakutiye();
  } else if (ilceText.value === "tekman") {
    tekman();
  } else if (ilceText.value === "köprüköy") {
    köprüköy();
  } else if (ilceText.value === "hınıs") {
    hınıs();
  } else if (ilceText.value === "karayazi") {
    karayazı();
  } else if (ilceText.value === "palandöken") {
    palandöken();
  } else if (ilceText.value === "karacoban") {
    karaçoban();
  }
}


