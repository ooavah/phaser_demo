# phaser_demo

Phaser-demo tietotekniikan laboratoriokurssille

Tavoitteet:
Käytä phaser.js
Taustakuva
Scrollaava teksti
Efekti
Ääni

Demossa käytetään mustavalkoista taustakuvaa, johon lisätään liikkuva tekstilaatikko, joka kimpoilee ruudun reunoista. Klikkaamalla ruutua näyttöön ilmestyy kuvia koiran päistä. Taustalla soi musiikki.



preload()

Lataa tiedostot media-hakemistosta.

create()

Käynnistää fysiikka-osan phaser-kirjastosta.
Asettaa taustakuvan ja sen sijainnin.
Asettaa tekstin, fontin ja nopeuden, jolla teksti liikkuu.
Tekstiin asetetaan fysiikka ja se laitetaan kimpoilemaan reunoista.

Luodaan emitteri, johon asetetaan doggo-kuva. Luotavien koirien maksimimäärä määritetään ja rajat kuvien koolle. 
Asetetaan koirien sijainti hiiren klikkaukseen. 

Soitetaan musiikki.

particleBurst()

Asettaa emitterin sijainnin hiiren osoittimen sijaintiin sekä annetaan aika, joina emitterin luomat koiran häviävät.




