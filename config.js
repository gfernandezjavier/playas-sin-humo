var config = {
    style: 'mapbox://styles/jfguiadanes/cmnn3a0wm000i01qrdccn8yr6',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiamZndWlhZGFuZXMiLCJhIjoiY21ubjJ2dm4yMW9wZjJvcXQ1bWJ1bGx5NCJ9.R8ZXKMkbr-CbY8iRRkqFxw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Playas sin HUMOS de Ibiza, Menorca y Formentera',
    subtitle: 'Playas Adheridas al Programa de Antitabaquismo',
    byline: 'Javier Fernández',
    footer: '<br>Desafío 2 </br> Curso de Visualización de Datos.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Caló des Moro / Cala del Moro',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/View_of_the_bay_at_Calo_des_Moro%2C_Mallorca_%28Spain%29_%2823899506181%29.jpg/330px-View_of_the_bay_at_Calo_des_Moro%2C_Mallorca_%28Spain%29_%2823899506181%29.jpg',
            description: 'Playa que está situada junto a la localidad española de Cala Llombards, municipio de Santañí, Mallorca.',
            location: {
                center: [1.296634841374926, 38.98518553528329],
                zoom: 18.12,
                pitch: 31,
                bearing: 49.60,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Platges de Comte / Playas del Conde',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cala_Conta_17_May_2011.JPG/330px-Cala_Conta_17_May_2011.JPG',
            description: 'Constituyen un conglomerado de pequeñas calas ubicadas en la costa occidental de la isla de Ibiza. Se extienden a lo largo de 800 metros con una anchura variable entre 15 y 30 metros.',
            location: {
                center: [1.2201294592778194, 38.9627832089263],
                zoom: 17.41,
                pitch: 26,
                bearing: 125.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cala Sant Vicenç / Cala San Vicente',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Cala_de_San_Vicent%2C_Ibiza.JPG/330px-Cala_de_San_Vicent%2C_Ibiza.JPG',
            description: 'Situada en San Juan Bautista, en la parte norte de la isla de Ibiza. Es una playa urbanizada que acoge gran cantidad del turismo que frecuenta el norte de la isla.',
            location: {
                center: [1.59222725234829, 39.0756196621257],
                zoom: 15.71,
                pitch: 56.50,
                bearing: -40.80,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cala dHort / Cala del Huerto',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ibiza_rock_volcano_%28747230830%29.jpg/250px-Ibiza_rock_volcano_%28747230830%29.jpg',
            description: 'Playa en la costa occidental de la isla. Se encuentra en el municipio de Sant Josep de sa Talaia y está a 21,4 km al oeste de la ciudad de Ibiza.',
            location: {
                center: [1.2242837334564, 38.890033911908],
                zoom: 16.56,
                pitch: 38.56,
                bearing: 38.36,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Platja des Cavallet / Playa del Caballo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Es_Cavallet-Ibiza-Beach-2019.jpg/330px-Es_Cavallet-Ibiza-Beach-2019.jpg',
            description: 'Situada en el municipio de San José. Es reconocida por ser una de las playas más famosas de la isla, destacando por su carácter natural y su popularidad dentro del colectivo gay.',
            location: {
                center: [1.4025690532016402, 38.84456460730627],
                zoom: 16.15,
                pitch: 47.06,
                bearing: -79.24,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Platja des Bol Nou / Playa del Bol Nuevo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Platja_bot.jpg/330px-Platja_bot.jpg',
            description: 'Se encuentra concretamente en el Norte del municipio de Ciutadella de Menorca. Se caracteriza por tener forma rectangular ubicada dentro de la reserva marina. Es una playa ubicada en el noreste de Cala Morell.',
            location: {
                center: [1.33211835549535, 38.8681308313548],
                zoom: 18.03,
                pitch: 37.03,
                bearing: 27.19,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Platja des Port de Sant Miquel / Playa del Puerto de San Miguel',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ibiza_Sant_Joan_bay_asv2023-04_img2.jpg/250px-Ibiza_Sant_Joan_bay_asv2023-04_img2.jpg',
            description: 'Playa de arena blanca en la costa noroeste de Ibiza.  Este pequeño asentamiento fue antiguamente el puerto pesquero del cercano pueblo de Sant Miquel de Balansat.',
            location: {
                center: [1.44051766909286, 39.0803503673816],
                zoom: 17.73,
                pitch: 48.01,
                bearing: 179.39,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cala des Degollador / Cala del Degolladero',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Calanque_de_Sormiou_5.jpg',
            description: 'También conocida como Sa Platja Gran. Forma parte del litoral urbano de Ciutadella. Este entrante de mar se caracteriza por ser muy alargado (se adentra en tierra firme medio kilómetro) y estrecho, tiene unas dimensiones pequeñas, el agua es tranquila y sus bañistas locales suelen ser familias y turistas.',
            location: {
                center: [3.8357927345777, 39.9942664346054],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Punta Prima / Punta Primera',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Playa_de_punta_prima.jpg',
            description: 'Playa situada en el término de Sant Lluís, al sur de la Isla de Menorca. Durante la dominación ínglesa fue bautizada con el nombre de Sandy Bay ( bahía arenosa), por ser esta una playa de fina y abundante arena blanca que penetra en el mar en forma de suave pendiente.',
            location: {
                center: [4.28051246747272, 39.8137659832656],
                zoom: 16.87,
                pitch: 55.51,
                bearing: -57.41,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cala dAlcalfar / Cala de Alcaufar',
            image: 'https://www.menorca.org/static/bloques/textos/fotos/829.g.jpg?1506066370',
            description: 'Esta cala se formó a partir de un entrante alargado o mas bien conocido como una manga de mar, y su entrada esta protegida por SIllot des Torn aunque tiene una exposición al oleaje y vientos del Sureste.',
            location: {
                center: [4.29249208412678, 39.8289790254641],
                zoom: 18.66,
                pitch: 64.01,
                bearing: -81.41,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Platja de Binibéquer Nou / Playa de Binibéquer Nuevo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Binibeca01.jpg/250px-Binibeca01.jpg',
            description: 'Situada en el término municipal de San Luis, dista 5 km de San Luis, por 8 km de la capital insular, Mahón. Mide unos 200 m de longitud, tiene arena blanca y está rodeada de un bosque de pinos.',
            location: {
                center: [4.2399356792223, 39.8165957557772],
                zoom: 18.62,
                pitch: 59.01,
                bearing: -19.81,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cala de Binissafúller / Cala de Binisafúller',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Binissafuller.jpg/330px-Binissafuller.jpg',
            description: 'Situada al sur del municipio de Sant Lluís, en la costa meridional de Menorca. Se encuentra entre el Cap den Font y Binissafúller Roters y un poco más al este se encuentra el famoso pueblo de pescadores.',
            location: {
                center: [4.21859025582032, 39.8291470484376],
                zoom: 18.48,
                pitch: 54.94,
                bearing: -32,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Es Pujols / Los Montículos',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Platja_des_Fonoll_Mar%C3%AD.JPG/330px-Platja_des_Fonoll_Mar%C3%AD.JPG',
            description: 'Mide 690 metros de longitud y 25 metros de anchura. Es una playa semiurbana y la más concurrida de la isla. Es de arena blanca y finas aguas tranquilas y transparentes.',
            location: {
                center: [1.454387900953426, 38.726666227690735],
                zoom: 16.80,
                pitch: 48.01,
                bearing: -102.21,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
