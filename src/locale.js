

export const hu = {
  app: {
    title: 'Logotools',
  },
  help: {
    title: 'Logopédiai segédeszközök',
    footer: {
      version: 'v1.0.0',
      legal: 'Az alkalmazás a Creative Commons Nevezd meg! - Ne add el! - Így add tovább! 2.5 Magyarország Licenc feltételeinek megfelelően felhasználható.',
    },
  },
  dates: {
    title: 'Dátumok',
    format: 'YYYY MMMM DD',
    age: {
      title: 'Hány éves?',
      year: 'év',
      month: 'hónap',
      day: 'nap',
    },
    birth: {
      title: 'Mikor született?',
      year: 'éves',
      month: 'hónapos',
    },
    help: {
      title: 'Dátumok',
      content: {__html: 'Kor és születési idő számoló kalkulátor.<br /><br />A <b>HÁNY ÉVES?</b> módban kiszámolható a <b>gyerek</b> születési dátuma alapján a <b>pontos kora</b>. A születési dátum megadása gyors és intuitív. Először az évet választjuk ki, majd a hónapot és a napot. Ha a keresett év nem szerepel az első oldalon, a fenti nyilakkal lehet lapozni az előző és következő évekre. Hiba esetén visszalépésre is van lehetőség. Ha kiszámoltunk egy dátumot, a kalkulátor egy gombnyomásra alaphelyzetbe is állítható.<br /><br />A <b>MIKOR SZÜLETETT?</b> módban a <b>gyerek születési dátuma</b> számolható ki a megadott korhoz képest.'},
    },
  },
  words: {
    title: 'Szókereső',
    search: {
      title: 'Szókereső',
      inputs: {
        start: 'Kezdet',
        inner: 'Belső betűk',
        end: 'Végződés'
      },
      method: (m) => {
        switch (m) {
          case "irrelevant":
            return 'nem számít'
          case "min":
            return 'minimum'
          case "max":
            return 'maximum'
          case "exactly":
            return 'pontosan'
          default:
            return ""
        }
      },
    },
    collection: {
      title: 'Mentett szavak',
      save: 'Szólista letöltése',
    },
    help: {
      title: 'Szókereső',
      content: {__html: 'Keress a több, mint <i>10.000</i> szavas <b>szógyűjteményben</b> a megadott feltételeknek megfelelően.<br /><br />Meghatározhatod, hogy hogyan <b>kezdődjön</b> és hogyan <b>végződjön</b> a szó, megadhatod, hogy a szó belseje milyen <b>betűket tartalmazzon</b> (a sorrend tetszőleges lesz), valamint megkötéseket tehetsz a <b>szó hosszára</b> vonatkozóan is.<br /><br />A keresési eredményből a szavakat <b>elmentheted</b> az adott szóra kattintva. A mentett szavak a böngésződ átmeneti tárolójába kerülnek <i>(local storage)</i>, ahonnan le is tudod menteni azokat egy <b>txt fájl</b> formájában.'}
    },
  },
  dice:{
    title: 'Dobókocka',
    regular: {
      title: 'Hagyományos',
    },
    multi: {
      title: 'Tetszőleges',
      roll: 'Dobás',
      lower: 'alsó határ',
      upper: 'felső határ',
    },
    help: {
      title: 'Dobókocka',
      content: {__html: 'Hagyományos <b>hatoldalú dobókocka</b> és <b>véletlenszám generátor</b> tetszőlegesen állítható alsó és felső határokkal.<br /><br />A hagyományos kockával a képernyőre kattintva lehet dobni. Az eredmény 1 és 6 között lesz.<br /><br />A véletlenszám generátorral egy alsó és egy felső határ között generál az alkalmazás véletlenszerűen számokat.'},
    },
  }
}
