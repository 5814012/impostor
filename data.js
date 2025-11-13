const palabras = {
  objetos: [
    "Silla", "Mesa", "Laptop", "Libro", "Teléfono", "Bolígrafo", "Cuaderno", "Reloj", "Lámpara", "Cama",
    "Sofá", "Espejo", "Ventana", "Puerta", "Zapato", "Sombrero", "Mochila", "Bolso", "Cuchara", "Tenedor",
    "Cuchillo", "Plato", "Vaso", "Botella", "Cojín", "Almohada", "Manta", "Cartera", "Llaves", "Mapa",
    "Pintura", "Cuadro", "Vela", "Florero", "Planta", "Ropa", "Chaqueta", "Pantalón", "Camisa", "Calcetín",
    "Gafas", "Auriculares", "Altavoz", "Microondas", "Horno", "Refrigerador", "Tostadora", "Batidora", "Cafetera", "Taza",
    "Paraguas", "Escoba", "Cepillo", "Espejo de mano", "Sombrilla", "Carpeta", "Tijeras", "Linterna", "Candado", "Portafolio",
    "Bicicleta", "Patineta", "Casco", "Cinturón", "Bufanda", "Guantes", "Cuchara de madera", "Botiquín", "Molinillo", "Regla",
    "Tetera", "Sacapuntas", "Tablero", "Candelabro", "Reloj de pared", "Pizarra", "Marcador", "Borrador", "Cubo", "Escalera",
    "Silla de ruedas", "Tendedero", "Rastrillo", "Pala", "Carretilla", "Maceta", "Cojín decorativo", "Alfombra", "Perchero", "Sombrero de paja",
    "Canasta", "Botella de vidrio", "Fiambrera", "Vasija", "Candelita", "Atril", "Estantería", "Taza de té", "Cucharón", "Balanza"
  ],
  animales: [
    "Gato", "Perro", "Periquito", "Oso polar", "Elefante", "Tigre", "León", "Jirafa", "Mono", "Caballo",
    "Vaca", "Cerdo", "Oveja", "Conejo", "Lobo", "Zorro", "Canguro", "Panda", "Tortuga", "Delfín",
    "Ballena", "Tiburón", "Pulpo", "Medusa", "Cangrejo", "Langosta", "Serpiente", "Araña", "Hormiga", "Mariposa",
    "Abeja", "Pato", "Gallina", "Pavo", "Águila", "Halcón", "Búho", "Pingüino", "Foca", "Oso",
    "Rinoceronte", "Hipopótamo", "Camello", "Llama", "Erizo", "Topo", "Castor", "Nutria", "Guepardo", "Jaguar",
    "Lémur", "Koala", "Orangután", "Caracol", "Erizo de mar", "Tiburón martillo", "Caballito de mar", "Dromedario", "Rinoceronte blanco", "Cisne",
    "Pelícano", "Flamenco", "Golondrina", "Tarántula", "Ciempiés", "Escorpión", "Salamandra", "Serpiente de cascabel", "Lince", "Ocelote",
    "Pez payaso", "Estrella de mar", "Nutria marina", "Ganso", "Albatros", "Lobo marino", "Caribú", "Búfalo", "Gorila", "Mandril",
    "Orca", "Pingüino emperador", "Pangolín", "Tucán", "Cotorra", "Aye-aye", "Ardilla", "Mapache", "Zorrillo", "Camaleón",
    "Iguana", "Salamandra gigante", "Cangrejo ermitaño", "Medusa luna", "Pez globo", "Avispa", "Hormiga cortadora", "Caracol gigante africano", "Murciélago", "Rata almizclera"
  ],
  personajes: [
    "Harry", "Hermione", "Gandalf", "Batman", "Mario", "Luigi", "Link", "Zelda", "Sonic", "Pikachu",
    "Ash", "Mickey", "Donald", "Goofy", "Elsa", "Anna", "Olaf", "Simba", "Nala", "Shrek",
    "Fiona", "Donkey", "Iron Man", "Capitán América", "Thor", "Hulk", "Black Widow", "Spider-Man", "Doctor Strange", "Thanos",
    "Joker", "Harley Quinn", "Wonder Woman", "Aquaman", "Flash", "Green Lantern", "Catwoman", "Daredevil", "Deadpool", "Wolverine",
    "Magneto", "Professor X", "Loki", "Hawkeye", "Black Panther", "Scarlet Witch", "Vision", "Star-Lord", "Gamora", "Rocket",
    "Elsa de Frozen 2", "Anna de Frozen 2", "Moana", "Maui", "Rapunzel", "Flynn Rider", "Merida", "Hércules", "Megara", "Tarzán",
    "Jane Porter", "Simba joven", "Scar", "Nemo", "Dory", "Buzz Lightyear", "Woody", "Carl Fredricksen", "Russell", "Kevin el pájaro",
    "Gru", "Dru", "Minion", "Lucy Wilde", "Willy Wonka", "Charlie Bucket", "Matilda", "Bruce Bogtrotter", "Voldemort", "Severus Snape",
    "Drácula", "Frankenstein", "Caperucita Roja", "Lobo Feroz", "Hada Madrina", "Peter Pan", "Campanita", "Hook", "Capitán Garfio", "Hércules joven"
  ],
  peliculas: [
    "Titanic", "Matrix", "Inception", "Avatar", "Joker", "Avengers", "Iron Man", "Thor", "Black Panther", "Deadpool",
    "The Godfather", "Pulp Fiction", "Forrest Gump", "The Dark Knight", "Harry Potter", "The Lord of the Rings", "The Hobbit", "Frozen", "Finding Nemo", "Toy Story",
    "Shrek", "Jurassic Park", "Star Wars", "The Mandalorian", "Guardians of the Galaxy", "Incredibles", "Coco", "Moana", "Aladdin", "The Lion King",
    "Spider-Man", "Doctor Strange", "Thor: Ragnarok", "Captain America", "Iron Man 3", "Avengers: Endgame", "Black Widow", "Wonder Woman", "Batman Begins", "Jumanji",
    "The Matrix Reloaded", "The Matrix Revolutions", "Interstellar", "Dunkirk", "Tenet", "Parasite", "La La Land", "Frozen 2", "Ratatouille", "Up",
    "Encanto", "Luca", "Soul", "Turning Red", "Lightyear", "Spider-Man: No Way Home", "Doctor Strange in the Multiverse", "Thor: Love and Thunder", "Black Panther: Wakanda Forever", "Avatar: The Way of Water",
    "Everything Everywhere All At Once", "Top Gun: Maverick", "Elvis", "Oppenheimer", "Dune", "The Batman", "Nope", "Barbie", "The Fabelmans", "John Wick: Chapter 4",
    "The Flash", "Guardians of the Galaxy Vol. 3", "The Super Mario Bros. Movie", "Ant-Man and the Wasp: Quantumania", "Shazam! Fury of the Gods", "Aquaman and the Lost Kingdom", "Indiana Jones and the Dial of Destiny", "Spider-Man: Across the Spider-Verse", "Puss in Boots: The Last Wish", "Minions: The Rise of Gru"
  ],
  comida: [
  "Pollo al ajillo", "Macarrones a la carbonara", "Paella de marisco", "Tortilla de patatas", "Croquetas de jamón",
  "Gazpacho andaluz", "Salmorejo cordobés", "Ensaladilla rusa", "Calamares a la romana", "Pulpo a la gallega",
  "Lentejas con chorizo", "Cocido madrileño", "Fabada asturiana", "Pisto manchego", "Rabo de toro",
  "Albóndigas en salsa", "Merluza a la plancha", "Sepia con alioli", "Chuletillas de cordero", "Entrecot a la parrilla",
  "Huevos rotos con jamón", "Revuelto de setas", "Arroz al horno", "Fideuá valenciana", "Empanada gallega",
  "Caldo gallego", "Migas extremeñas", "Patatas bravas", "Callos a la madrileña", "Boquerones en vinagre",
  "Bacalao al pil pil", "Pimientos rellenos", "Tarta de queso", "Flan de huevo", "Natillas caseras",
  "Arroz con leche", "Leche frita", "Torrijas", "Churros con chocolate", "Crema catalana",
  "Pollo asado", "Carrilleras en vino tinto", "Conejo al ajillo", "Paella mixta", "Arroz negro",
  "Lubina al horno", "Dorada a la sal", "Ensalada mixta", "Espaguetis boloñesa", "Verduras al vapor",
  "Empanadillas de atún", "Montaditos variados", "Sándwich mixto", "Tostas de jamón ibérico", "Queso manchego",
  "Pan con tomate", "Jamón serrano", "Tarta de Santiago", "Bizcocho casero", "Helado de turrón",
  "Sorbetes de limón", "Mousse de chocolate", "Pastel de manzana", "Tarta de tres chocolates", "Crepes de nata y fresa",
  "Lomo adobado", "Chorizo a la sidra", "Morcilla de Burgos", "Cochinillo asado", "Cordero al horno",
  "Gambas al ajillo", "Mejillones al vapor", "Almejas a la marinera", "Tigres rellenos", "Caldo de pescado",
  "Salpicón de marisco", "Ensalada campera", "Pisto con huevo", "Huevos a la flamenca", "Patatas a lo pobre"
],
bebidas: [
  // Sin alcohol
  "Agua mineral", "Agua con gas", "Refresco de cola", "Refresco de naranja", "Refresco de limón",
  "Zumo de naranja natural", "Zumo de piña", "Zumo de melocotón", "Zumo de manzana", "Zumo de tomate",
  "Café solo", "Café con leche", "Café cortado", "Café americano", "Café bombón",
  "Capuchino", "Carajillo", "Té negro", "Té verde", "Té de manzanilla",
  "Té de menta", "Infusión de tila", "Infusión de frutos rojos", "Chocolate caliente", "Leche fría",
  "Batido de fresa", "Batido de vainilla", "Batido de chocolate", "Horchata de chufa", "Granizado de limón",
  "Limonada casera", "Mosto", "Cacaolat", "Nestea", "Tónica",
  "Agua con rodajas de limón", "Café con hielo", "Aquarius de limón", "Aquarius de naranja", "Bitter sin alcohol",

  // Con alcohol
  "Cerveza rubia", "Cerveza tostada", "Cerveza negra", "Cerveza de trigo", "Cerveza artesanal",
  "Cerveza sin alcohol", "Cerveza IPA", "Clara con limón", "Tinto de verano", "Sangría",
  "Vino tinto", "Vino blanco", "Vino rosado", "Vino de Rioja", "Vino de Ribera del Duero",
  "Vino dulce de Málaga", "Vino de Jerez", "Moscatel", "Pedro Ximénez", "Cava brut",
  "Cava rosado", "Champán francés", "Vermú rojo", "Vermú blanco", "Vermut con sifón",
  "Sidra natural", "Sidra espumosa", "Gin-tonic", "Ron cola", "Whisky con hielo",
  "Vodka con naranja", "Cuba libre", "Mojito", "Piña colada", "Caipiriña",
  "Daiquiri", "Negroni", "Bloody Mary", "Margarita", "Tequila sunrise",
  "Agua de Valencia", "Orujo de hierbas", "Orujo blanco", "Crema de orujo", "Pacharán",
  "Licor de hierbas", "Anís seco", "Anís dulce", "Brandy", "Coñac",
  "Licor de café", "Baileys", "Amaretto", "Limoncello", "Jägermeister"
]

};
