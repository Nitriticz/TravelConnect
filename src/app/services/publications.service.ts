import { Injectable } from '@angular/core';
import { Publication } from '../publications/publications.model'

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  private publications: Publication[] = [
    {
      id: 1,
      title: 'Viaje a París',
      photo: 'https://media.istockphoto.com/id/1037553058/es/foto/selfie-en-par%C3%ADs.jpg?s=170667a&w=0&k=20&c=3aR_wteB0DJhjqfawixUQPa25KZ6-bWfRmVVjoTwDq0=',
      description: 'Emprendiendo mi propia aventura en la ciudad de los sueños. Cada calle emana historia, cada rincón cuenta una historia. Desde perderme en los pasillos del Louvre hasta sentir la brisa en un café en Montmartre, cada instante en París es mágico. Capturando momentos que atesoraré para siempre mientras recorro las calles empedradas y me maravillo ante la grandeza de la Torre Eiffel. ¡Viviendo mi sueño parisino paso a paso! 🗼🥐✨',
      hotels: [
        'Hotel Malte - Astotel',
        'Hotel Astoria - Astotel',
        'Novotel Paris Les Halles'
      ],
      hashtags: [
        '#MiAventuraEnParís',
        '#ExplorandoLaCiudadDelAmor'
      ]
    },
    {
      id: 2,
      title: 'Escapada a Venecia',
      photo: 'https://saltaconmigo.com/blog/wp-content/uploads/2019/02/Fotos-de-Venecia-Puente-Suspiros-Selfie.jpg',
      description: 'Navegando por las serenas vías acuáticas de Venecia: ¡mi sueño hecho realidad! Cada góndola que pasa, cada puente que conecta, es como un cuento de hadas que cobra vida. Me pierdo en las estrechas calles, descubriendo encantadores cafés y plazas históricas. Venecia es más que una ciudad, es un romance con la historia y la arquitectura que me rodea. ¡Capturando momentos inolvidables en esta joya italiana! 🛶🇮🇹✨',
      hotels: [
        'Hotel Ai Due Fanali',
        'Unahotels Ala Venezia',
        'Hotel Ai Due Fanali'
      ],
      hashtags: [
        '#MiAventuraEnVenecia',
        '#ExplorandoLaSerenidad'
      ]
    },
    {
      id: 3,
      title: 'Escalada en los Alpes',
      photo: 'https://cdn.pixabay.com/photo/2014/10/25/00/28/selfie-501994_1280.jpg',
      description: 'Respirando el aire puro de las alturas en los majestuosos Alpes. Cada cumbre es un desafío conquistado, cada paisaje una obra maestra natural. Caminar por senderos rodeados de picos nevados es una experiencia que llena el alma de asombro. Desde las cimas que tocan el cielo hasta los valles serenos, cada rincón de los Alpes es un regalo para los sentidos. ¡Explorando la grandeza de la naturaleza en este increíble viaje a las alturas! 🏞️❄️⛰️',
      hotels: [
        'Madrisa Lodge',
        'Hotel Edelweiss Davos',
        'LUGANODANTE'
      ],
      hashtags: [
        '#MiAventuraEnLosAlpes',
        '#NaturalezaImpresionante'
      ]
    },
    {
      id: 4,
      title: 'Relajo en Miami',
      photo: 'https://www.defensacentral.com/userfiles/2014/Sep_08/James_Miami_15_original.jpg',
      description: 'Sumergiéndome en el vibrante paraíso costero: ¡Miami, me tienes cautivado! Cada ola es una canción de libertad, cada rayo de sol acaricia la piel con energía. Explorar las playas de arena dorada y sumergirme en las aguas turquesas es un sueño hecho realidad. Desde el arte callejero de Wynwood hasta la elegancia de South Beach, cada rincón de Miami es una expresión única. ¡Viviendo al ritmo de esta ciudad llena de vida y color! 🏖️🌴☀️',
      hotels: [
        'Loews Miami Beach Hotel',
        'Hotel South Beach',
        'Eden Roc Miami Beach'
      ],
      hashtags: [
        '#MiAventuraEnMiami',
        '#ViviendoMiami'
      ]
    },
    {
      id: 5,
      title: 'Recorriendo la Muralla China',
      photo: 'https://live.staticflickr.com/7297/11107699966_af90a8e013_b.jpg',
      description: 'Caminando sobre siglos de historia en la Gran Muralla China. Cada ladrillo cuenta una historia, cada torre guarda secretos del pasado. Recorriendo este prodigio arquitectónico siento la grandeza de las civilizaciones que la construyeron. Desde las alturas de las torres, el paisaje se despliega como una pintura épica. Una experiencia que me conecta con el legado de la humanidad y me deja sin palabras. ¡Explorando la majestuosidad de la Gran Muralla y dejando mi huella en la eternidad! 🏯🏞️🇨🇳',
      hotels: [
        'YHA Mei Ho House Youth Hostel',
        'Y Loft (Youth Square)',
        'Urban Pack'
      ],
      hashtags: [
        '#MiAventuraEnLaMurallaChina',
        '#HistoriaImpresionante'
      ]
    }
  ];

  constructor() { }

  getPublications() {
    return [...this.publications];
  }
}
