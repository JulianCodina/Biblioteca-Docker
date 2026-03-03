//import db from "../db/database.js";

export function getAllBooks() {
  return [
    {
      id: 1,
      title: "Principito",
      author: "Antoine de Saint-Exupéry",
      date: "1943",
      genre: "ficción",
      cover:
        "https://tienda.planetadelibros.com.ar/cdn/shop/products/portada_el-principito_antoine-de-saint-exupery_201507152131.jpg?v=1684356025",
      content:
        "En mis años más vulnerables, mi padre me dio un consejo que no ha dejado de darme vueltas en la cabeza desde entonces. «Cuando sientas deseos de criticar a alguien —me dijo—, recuerda simplemente que no todo el mundo ha tenido las ventajas que tú has tenido». No dijo nada más, pero siempre hemos sido inusualmente comunicativos a nuestra manera reservada, y comprendí que el consejo encerraba un significado mucho más amplio. Como consecuencia, tiendo a reservarme todos mis juicios, un hábito que me ha abierto el camino hacia muchas naturalezas curiosas y que también me ha convertido en víctima de unos cuantos pelmazos veteranos. ",
    },
    {
      id: 2,
      title: "Metamorfosis",
      author: "Franz Kafka",
      date: "1915",
      genre: "ficción",
      cover:
        "https://editorialverbum.es/wp-content/uploads/2018/08/La-metamorfosis.jpg",
      content:
        "Cuando Gregorio Samsa se despertó una mañana después de un sueño intranquilo, se encontró sobre su cama convertido en un monstruoso insecto. Estaba tumbado sobre su espalda, que resultaba ser dura como una coraza, y al levantar un poco la cabeza veía su vientre abombado, oscuro y segmentado, sobre el cual la colcha, a punto de resbalar al suelo, apenas se sostenía. Sus muchas patas, ridículamente pequeñas en comparación con el resto de su cuerpo, le ofrecían un espectáculo desconcertante. «¿Qué me ha pasado?», pensó. No era un sueño. Su habitación, una habitación propiamente dicha, aunque algo pequeña, estaba tranquila y yacía entre las cuatro paredes bien conocidas. Por la ventana entraba la luz de la mañana —se veían los rayos grises—, pero en general el ambiente era somnoliento. «¿Cuánto tiempo llevo dormido?», se preguntó. «¿Habré hecho perder el tiempo a la oficina?». Era un viajante de comercio y la pereza le hacía perder el tren de las cinco. Si seguía así, el jefe le llamaría la atención; el viejo criado, además, no lo despertaría con amabilidad. El insecto se agitó un poco, pero no podía moverse; estaba atrapado en la cama por la colcha, que parecía demasiado pesada. «Qué lástima —pensó—, qué trabajo me cuesta girar sobre mí mismo; si tan solo fuera más fuerte».",
    },
    {
      id: 3,
      title: "Frankenstein",
      author: "Mary Shelley",
      date: "1818",
      genre: "ciencia",
      cover:
        "https://preview.redd.it/frankenstein-my-latest-work-v0-c3v7bz7ni0re1.png?width=640&crop=smart&auto=webp&s=8692137a90b6f0105163752f09948aef0a6307a2",
      content:
        "La historia sigue a Victor Frankenstein, un joven y ambicioso científico que, obsesionado con la idea de desafiar a la muerte, crea una criatura a partir de partes de cadáveres. Sin embargo, al ver el resultado de su experimento, se horroriza y abandona a su creación. La criatura, sola y rechazada por todos debido a su apariencia monstruosa, busca comprensión y amor, pero solo encuentra odio y miedo. A medida que su soledad y desesperación crecen, la criatura se convierte en un ser vengativo que decide destruir todo lo que Victor ama. La novela explora temas profundos como la ambición desmedida, la responsabilidad del creador, la naturaleza humana, el prejuicio y la soledad.",
    },
    {
      id: 4,
      title: "Napoleón",
      author: "Max Gallo",
      date: "1997",
      genre: "historia",
      cover:
        "https://media.cnn.com/api/v1/images/stellar/prod/napoleon-bonaparte.jpg?q=w_1110,c_fill",
      content:
        "La biografía de Napoleón Bonaparte escrita por Max Gallo es un relato detallado y apasionante de la vida del emperador francés. Gallo narra desde sus humildes orígenes en Córcega hasta su ascenso al poder, sus conquistas militares, sus reformas políticas y su eventual caída. El libro explora la complejidad de la personalidad de Napoleón, su genio estratégico, su ambición desmedida y su impacto duradero en la historia de Europa y del mundo. Gallo no solo se centra en los aspectos militares y políticos, sino que también profundiza en la vida personal de Napoleón, sus relaciones amorosas, sus amistades y sus conflictos internos. Es una obra que permite comprender mejor a uno de los personajes más fascinantes y controvertidos de la historia.",
    },
  ];
}

export function createBook(title, author, date, genre, content) {
  const newBook = {
    id: Date.now(),
    title,
    author,
    date,
    genre,
    content,
  };
  return newBook;
}
