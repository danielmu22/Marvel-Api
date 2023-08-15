/*
Para hacer la llamada a la API necesitamos 5 cosas:
-Url Base: http://gateway.marvel.com/v1/public/
-Clave Pública
-Clave Privada
-TS: 1 (va a ser 1)
-Hash: Es una suma de TS + Clave Privada + Clave Pública. Luego con un convertidor a HASHMD5 online, la encriptas

URL FINAL: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}

*/

// Clave Pública: 1928dbc9bba11631437d27c1258a8e7a
// Clave Privada: fcf7345eb9fe3697999b6dbc2df107826d739ceb
// CLAVE A ENCRIPTAR= 1fcf7345eb9fe3697999b6dbc2df107826d739ceb1928dbc9bba11631437d27c1258a8e7a
// HASH = 79b39bc45ede5e3689d0b2c12862b630

const hash = '79b39bc45ede5e3689d0b2c12862b630';
const publicKey = '1928dbc9bba11631437d27c1258a8e7a';
const URLComics = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`;

//FUNCIÓN QUE DEVUELVE 20 COMICS
export async function accedeComics() {
  let datos = await fetch(URLComics);
  let comics = await datos.json();

  return comics.data.results;
}

//FUNCIÓN QUE DEVUELVE 20 COMICS QUE EMPIECEN CON LO QUE LE PONGAS EN EL BUSCADOR
export async function buscarComics(nombre) {
  let data = await fetch(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${nombre}&ts=1&apikey=${publicKey}&hash=${hash}`)
  let comics = await data.json();

  return comics.data.results;
}

//FUNCIÓN QUE BUSCA EL COMIC QUE HAS PINCHADO SEGÚN EL ID QUE LE PASAS
export async function infoComic(id){
  let data = await fetch (`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=${publicKey}&hash=${hash}`);
  let comic = await data.json();

  return comic.data.results;
}