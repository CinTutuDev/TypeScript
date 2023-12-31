/* ------------------Desestructuracion de Objetos-------------------------- */
interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  detail: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "La casita azul",
  detail: {
    author: "Pepe atontado",
    year: 2022,
  },
};

const song = "New Song";
const {
  song: anotherSong,
  songDuration: duration,
  detail: { author },
} = audioPlayer;
/* const {author} = detail; */

/* console.table({ audioPlayer });
console.log("Song:", song);
console.log("Duration:", duration);
console.log("Song:", anotherSong);
console.log("Autor:", author);
console.log("Detail:", audioPlayer.detail.author);
console.log({ audioPlayer });
 */

/* --------------------------------------Desestructuracion de Arreglos----------------------- */
  
 const[p1, p2, p3 = 'Not found' ]: string[] = ['Goku', 'Vegeta',/*  ' Trunk' */];
 /* const Trunk = dbz[3] ||'No hay personaje'; */

 console.log('Personaje 3:', p3);
console.log('Personaje 2:', p2);






export {};
