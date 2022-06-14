const books = [{
        id: 1,
        type: 4,
        name: 'It A coisa',
        description: 'Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.',
        price: '32,00',
        category: 'Terror',
        comments: '"Ao mesmo tempo que chocante, traz um misto de emoções entre espantoso e aterrorizante. Devorei esse livro em menos de uma semana!" - Lia Mallerman',
        img: 'itcoisa.jpg'
    },
    {
        id: 2,
        type: 5,
        name: 'O nome do vento',
        description: 'Da infância numa trupe de artistas itinerantes, passando pelos anos vividos numa cidade hostil e pelo esforço para ingressar na escola de magia, O nome do vento acompanha a trajetória de Kote e as duas forças que movem sua vida: o desejo de aprender o mistério por trás da arte de nomear as coisas e a necessidade de reunir informações sobre o Chandriano – os lendários demônios que assassinaram sua família no passado.',
        price: '25,00',
        comments: '"Prendeu-me do início ao fim! A história super instigante do Kvothe"- John Meyers ',
        category: 'Fantasia',
        img: 'nomeDoVento.jpg'
    },
    {
        id: 3,
        type: 2,
        name: 'Harry Potter e o enigma do príncipe',
        description: 'Dumbledore convence seu velho amigo Horácio Slughorn para retornar a Hogwarts como professor de poções após Harry encontrar um estranho livro escolar. Draco Malfoy se esforça para realizar uma ação destinada por Voldemort, enquanto Dumbledore e Harry secretamente trabalham juntos a fim de descobrir o método para destruir o Lorde das Trevas uma vez por todas.',
        price: '39,99',
        comments: '"A história que encantou gerações." - Julia Green',
        category: 'Aventura',
        img: 'harryPotter.jpg'
    },
    {
        id: 4,
        type: 2,
        name: 'Maze Runner: Correr ou Morrer',
        description: 'Em um futuro, meio apocalíptico, meio utópico, o jovem Thomas é escolhido para enfrentar o sistema. Ao acordar dentro de um escuro elevador em movimento, ele não consegue se lembrar nem de seu nome. Na comunidade isolada em que foi abandonado, ele conhece outros garotos que passaram pelo mesmo. Para conseguir escapar, Thomas precisa descobrir os sombrios segredos guardados em sua mente e correr muito.',
        price: '30,00',
        category: 'Aventura',
        comments: '"Uma jornada alucinante com protagonistas tão cantivantes que fazem você suspirar a cada página virada" - Diana Mc\'Coven',
        img: 'mazeRunner.jpg'
    },
    {
        id: 5,
        type: 1,
        name: 'Five Nights at Freddy: Olhos Prateados',
        description: ' Em 1995, Charlie, uma adolescente de 17 anos, retorna à sua casa de infância em Hurricane, no estado de Utah, para celebrar o lançamento da bolsa de estudos de um amigo de sua escola, Michael Brooks, que desapareceu há dez anos. Um romance de mistério e terror escrito por Scott Cawthon e Kira Geibe da Kevin Anderson & Associates',
        price: '35,99',
        category: 'Mistério',
        comments: 'Um mistério intrigante do começo ao fim! Assim como no jogo fiquei ansioso com os animatrônicos! - Maethe Greeves',
        img: 'fnafOlhosPrateados.jpg'
    },
    {
        id: 6,
        type: 5,
        name: 'A lâmina da assassina',
        description: 'Implacável. Sedutora. Letal. A Assassina de Adarlan é tudo isso. Em A lâmina da Assassina: Historias de Trono de Vidro conhecemos Celaena, sua fama ultrapassa os muros de Forte da Fenda, mais brilhante que as torres do castelo de vidro, onde o usurpador governa com mão de ferro o destino de todos em Erilea.',
        price: '30,00',
        comments: 'A fantasia que despedaça seu coração e revigora sua alma com a jornada da coração de fogo. - Larissa Direnzi',
        category: 'Fantasia',
        img: 'laminaAssassina.jpg'
    },
    {
        id: 7,
        type: 3,
        name: 'Box Game Of Thrones',
        description: 'O conjunto de 5 (cinco) livros de George R. R. Martin, contendo: A guerra dos Tronos, A Fúria dos reis, A tormenta de espadas, O festim dos corvos e A dança dos dragões.',
        price: '150,00',
        comments: 'Melhor que a série. (Justiça a Daenerys Targaryen e a Catelyn Stark Lady Stoneheart)- Todo mundo',
        category: 'Box',
        img: 'boxGuerraTrono.jpg'
    },
    {
        id: 8,
        type: 2,
        name: 'Biblioteca de Almas',
        description: '"Biblioteca de Almas" é o último volume da celebrada trilogia iniciada com O lar da srta. Peregrine para crianças peculiares. Neste terceiro livro, depois de sofrer com a morte do avô, conhecer crianças com habilidades peculiares em uma fenda temporal e partir pelo mar em uma busca desesperada para curar a srta.',
        price: '35,00',
        category: 'Aventura',
        comments: '"Tenso, emocionante e maravilhosamente estranho (...) As fotografias e o texto se combinam de forma brilhante, criando uma história inesquecível." - John Green',
        img: 'bibliotecaAlmas.jpg'
    }
];


const getBook = id => {
    var book;
    books.forEach(b => {
        if (b.id === id) {
            book = b;
        }
    });
    return book;
}