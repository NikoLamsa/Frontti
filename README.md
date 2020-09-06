Sovellusta varten node.js asennus. 


Sovelluksen käyttö: 
Navigoi komentorivillä kansioon jossa projektin package.json tiedosto sijaitsee. 

Aja komento "npm start" jonka jälkee sovellus toimii selaimessa osoitteessa http://localhost:3000/

Mikäli ei toimi suoraan asenna vielä "npm install react" sekä npm "install redux-react"


Sovellus hakee tietoja 
http://jsonplaceholder.typicode.com/posts osoitteessa löytyvältä testaus APIlta 

Sovellus listaa JSONina saadut otsikot. Klikkaamalla listalta otsikkoa valinnan tietueet pidetään tallessa reduxia käyttäen.

MuokkausLomake näyttää valinnan lisätiedot reduxin kautta. Sisältää myös kentän jonka sisältö lähetetään PUT API kutsuna käyttäen valitun
objektin ID arvoa. Delete lähettää myös  DELETE komennon APIlle käyttäen valinnan ID arvoa.

FilterComponent lähettää reduxille kenttien tiedot filtteri arvoja varten ja lista suodattuu. 


käytetty API ei ota vastaan muutoksia joten nämä eivät näy sovelluksessa. 

