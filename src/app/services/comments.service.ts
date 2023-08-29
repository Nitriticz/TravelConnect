import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private comments: Comment[] = [
    /*
    {
      id: '1',
      publicationId: '1',
      content: '¡Qué envidia! Paris es simplemente mágico ✨🗼 Disfruta cada segundo de tu aventura',
      userId: '3'
    },
    {
      id: '2',
      publicationId: '1',
      content: 'Que hermosa foto. Parece sacada de una película. ¡Disfruta cada instante en la Ciudad de la Luz! ✨🇫🇷',
      userId: '5'
    },
    {
      id: '3',
      publicationId: '1',
      content: '¡Espero que estés probando todos los croissants por mí! ¡Diviértete muchísimo en París! 🥐🥖🇫🇷',
      userId: '2'
    },
    {
      id: '4',
      publicationId: '1',
      content: 'Me encanta cómo capturaste la esencia de París en esta foto. ¡Que tengas un viaje increíble!',
      userId: '6'
    },
    {
      id: '5',
      publicationId: '1',
      content: '¡Paris es siempre una buena idea! Disfruta de todos los encantos que esta ciudad tiene para ofrecer. 🇫🇷✨',
      userId: '1'
    },
    */
    {
      id: '6',
      publicationId: '2',
      content: '¡Qué envidia! Venecia siempre ha estado en mi lista de lugares por visitar. ¡Espero que estés teniendo un tiempo increíble! 🛶🇮🇹',
      userId: '6'
    },
    {
      id: '7',
      publicationId: '2',
      content: 'Las fotos que estás compartiendo de Venecia son impresionantes. Parece que estás viviendo un auténtico cuento de hadas. ¡Disfruta cada momento! 📸🏰 ',
      userId: '3'
    },
    {
      id: '8',
      publicationId: '2',
      content: 'Venecia tiene un encanto único que no se compara con ningún otro lugar. ¡Que sigas teniendo una experiencia asombrosa llena de aventuras y descubrimientos! ✨🌆 ',
      userId: '1'
    },
    {
      id: '9',
      publicationId: '2',
      content: 'Las calles empedradas y los canales serenos de Venecia me hacen soñar despierto. ¡Espero que estés capturando todos esos momentos mágicos! 📷🍀',
      userId: '2'
    },
    {
      id: '10',
      publicationId: '2',
      content: '¡Estoy viviendo vicariamente a través de tus fotos en Venecia! Cada imagen cuenta una historia y me transporta a esa maravillosa ciudad. ¡Disfruta al máximo! 🌅🍝',
      userId: '4'
    },
    {
      id: '11',
      publicationId: '3',
      content: 'Las montañas majestuosas de los Alpes son simplemente impresionantes. ¡Espero que estés teniendo una aventura increíble rodeado de tanta belleza natural! 🏔️❄️ ',
      userId: '2'
    },
    {
      id: '12',
      publicationId: '3',
      content: 'Respirar el aire fresco de alta montaña debe ser revitalizante. ¡Que sigas disfrutando cada momento en los Alpes y creando recuerdos inolvidables! 🌄🏞️ ',
      userId: '4'
    },
    {
      id: '13',
      publicationId: '3',
      content: 'Las fotos de tu viaje a los Alpes me hacen sentir como si estuviera allí contigo. ¡Espero que estés esquiando, caminando y absorbiendo toda esa energía montañosa! ⛷️🚶‍♂️  ',
      userId: '3'
    },
    {
      id: '14',
      publicationId: '3',
      content: '¡Los Alpes son un paraíso para los amantes de la naturaleza y la fotografía! Me encanta seguir tu aventura a través de tus fotos. ¡Sigue compartiendo la magia alpina! 📸🌲 ',
      userId: '6'
    },
    {
      id: '15',
      publicationId: '3',
      content: 'Explorar los Alpes debe ser una experiencia inigualable. Disfruta de los panoramas espectaculares, los lagos cristalinos y las cumbres desafiantes. ¡Que tengas un viaje lleno de emociones y vistas asombrosas! 🏞️🌍',
      userId: '4'
    },
    {
      id: '16',
      publicationId: '4',
      content: 'Viviendo el sueño en Miami. ¡Las playas, el sol y la diversión son insuperables! Espero que estés teniendo un tiempo increíble. ☀️🏖️',
      userId: '1'
    },
    {
      id: '17',
      publicationId: '4',
      content: 'Las fotos que estás compartiendo de tu viaje a Miami me tienen completamente emocionado. ¡Esa ciudad siempre tiene una energía única y vibrante! ¡Disfruta al máximo! 🌴🌆',
      userId: '6'
    },
    {
      id: '18',
      publicationId: '4',
      content: 'Desde las playas de arena blanca hasta los emocionantes lugares de vida nocturna, Miami lo tiene todo. ¡Espero que estés absorbiendo cada momento de esta experiencia inolvidable! 🍹🌴',
      userId: '2'
    },
    {
      id: '19',
      publicationId: '4',
      content: 'Miami siempre me ha fascinado con su fusión de culturas y su estilo de vida relajado. ¡Sigue disfrutando de la comida deliciosa y las vistas espectaculares que ofrece esta increíble ciudad! 🍔🌇',
      userId: '5'
    },
    {
      id: '20',
      publicationId: '4',
      content: 'Me encanta seguir tus aventuras en Miami. Ya sea que estés relajando en la playa o explorando los vecindarios únicos, tu viaje parece ser un verdadero escape. ¡Que sigan los momentos increíbles! 🏄‍♂️🌞',
      userId: '4'
    },
    {
      id: '21',
      publicationId: '5',
      content: '¡Qué increíble experiencia explorar la majestuosa Muralla China! Debe ser asombroso estar allí y contemplar la grandiosidad de la historia. 🏯🏞️',
      userId: '4'
    },
    {
      id: '22',
      publicationId: '5',
      content: '"Las fotos que compartes de tu viaje a la Muralla China me dejan sin palabras. Es como un viaje a través del tiempo y la cultura. ¡Espero que estés teniendo un viaje inolvidable! 📸🇨🇳 ',
      userId: '5'
    },
    {
      id: '23',
      publicationId: '5',
      content: 'Caminando por los mismos pasos que han dado innumerables generaciones en la Muralla China debe ser una experiencia realmente conmovedora. ¡Espero que estés disfrutando cada instante en ese lugar icónico! 🚶‍♀️🏰 ',
      userId: '6'
    },
    {
      id: '24',
      publicationId: '5',
      content: 'La Muralla China es un testimonio impresionante del ingenio humano y la perseverancia. Tu viaje me inspira a explorar este increíble patrimonio cultural algún día. ¡Sigue compartiendo estas vistas asombrosas! 🌄🧱',
      userId: '1'
    },
    {
      id: '25',
      publicationId: '5',
      content: 'Las vistas panorámicas desde la Muralla China son de otro mundo. Espero que sigas capturando momentos mágicos y sumergiéndote en la rica historia y cultura que este lugar tiene para ofrecer. ¡Disfruta cada paso! 📷🏞️',
      userId: '3'
    },
  ];

  constructor() { }

  getComments(id: string): Comment[] {
    return [...this.comments.filter(comment => comment.publicationId === id)]
  }

  addComment(comment: string, publicationId: string, userId: string) {
    const newComment: Comment = {
      id: this.comments.length + 1 + '',
      publicationId: publicationId,
      content: comment,
      userId: userId
    }
    this.comments.push(newComment);
  }
}
