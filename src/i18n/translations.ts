export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const translations = {
  es: {
    nav: {
      projects: 'Proyectos',
      myLinks: 'Mis Links',
      game: 'Juego Interactivo',
      store: 'Tienda',
      realShit: 'Real Sh!t',
    },
    pages: {
      work: {
        title: 'Proyectos',
        photoProject: {
          title: 'Distinas Realidades',
          subtitle: 'Fotografía I',
          description: 'Proyecto de Fotografía - Primer Semestre',
          technicalDetails: {
            capturedWith: 'Capturado con',
            camera: 'Cámara',
            lens: 'Lente'
          },
          content: {
            paragraph1: 'En este proyecto se combina la realidad con lo virtual para contrastar las aspiraciones de muchas personas con la cruda realidad que se vive en México. Bastan diez minutos caminando para encontrar una gran cantidad de vehículos maltratados y abandonados. Por otro lado, en los espacios virtuales como son los videojuegos, muchos encuentran un escape, un lugar donde pueden comprar y manejar cientos de supercarros. En este proyecto también podemos ver el consumismo que sucede en este país y la desigualdad que existe.',
            paragraph2: 'Buscando reflexionar sobre este contraste, originalmente tomé fotografías de supercarros dentro de un videojuego. Estas fotos las imprimí y les recorté ciertas partes, las cuales llené con carros que encontré en las calles cerca de mi casa.',
            paragraph3: 'El proyecto nos enseña un poco de cómo nos relacionamos con nuestro entorno y los escapes virtuales que utilizamos para evadir la realidad.'
          }
        },
        animationProject: {
          title: 'Araucaria',
          subtitle: 'Fotografía II',
          description: 'Proyecto de Fotografía - Segundo Semestre',
          content: {
            paragraph1: 'Este proyecto explora la relación entre la naturaleza y la urbanización a través de la lente de la Araucaria, un árbol icónico que ha sido testigo del desarrollo de la ciudad. Las fotografías capturan la coexistencia de estos árboles centenarios con el entorno urbano moderno, creando un diálogo visual entre lo natural y lo construido.',
            paragraph2: 'La Araucaria, con su forma distintiva y su historia en la región, sirve como metáfora de la resistencia y adaptación. A través de diferentes perspectivas y momentos del día, el proyecto busca documentar cómo estos árboles han logrado mantener su presencia y significado en un entorno que cambia constantemente.',
            paragraph3: 'Cada imagen cuenta una historia de supervivencia y belleza, invitando al espectador a reflexionar sobre la importancia de preservar estos elementos naturales en nuestro entorno urbano.'
          },
          technicalDetails: {
            capturedWith: 'Capturado con',
            camera: 'Cámara',
            lens: 'Lente'
          }
        },
        objectProject: {
          title: 'Objeto y Espacio',
          description: 'Proyecto de Diseño - Segundo Semestre',
        },
        webProject: {
          title: 'Desarrollo y Diseño Web',
          description: 'Proyecto de Programación - Segundo Semestre',
        },
      },
      photos: {
        title: 'Fotografías',
        imageDescriptions: {
          photo1: 'Descripción de la foto 1',
          photo2: 'Descripción de la foto 2',
          photo3: 'Descripción de la foto 3',
        },
      },
      game: {
        title: 'Juego Interactivo',
        description: 'Un juego interactivo creado con p5.js que explora la creatividad y la interacción del usuario.',
      },
      about: {
        title: 'fanatico perr1',
        description: 'Soy un estudiante de computación creativa, me apasiona la tecnología y la música. Disfruto de ver deportes y pasar tiempo con mis amigos. Soy una persona muy sociable y mis relaciones me definen mucho como persona.',
      },
      store: {
        title: 'Tienda',
        comingSoon: 'Próximamente',
        products: {
          tshirt: {
            name: 'Camiseta fanatico perr1',
            description: 'Camiseta de algodón 100% con el logo de fanatico perr1'
          },
          hoodie: {
            name: 'Sudadera fanatico perr1',
            description: 'Sudadera con capucha y el logo de fanatico perr1'
          },
          hat: {
            name: 'Gorra fanatico perr1',
            description: 'Gorra ajustable con el logo de fanatico perr1'
          }
        },
      },
      realShit: {
        title: 'Real Sh!t',
        subtitle: 'Ingresa la contraseña para acceder',
        passwordLabel: 'Contraseña',
        passwordPlaceholder: 'Ingresa la contraseña',
        submitButton: 'Acceder',
        storeDescription: 'Accede a la tienda de fanatico perr1',
        gameDescription: 'Juega el juego interactivo de fanatico perr1',
        privateInstagram: {
          title: 'Instagram Privado',
          description: 'Mi cuenta personal de Instagram'
        },
        privateTikTok: {
          title: 'TikTok Privado',
          description: 'Mi cuenta personal de TikTok'
        }
      },
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      myLinks: 'My Links',
      game: 'Interactive Game',
      store: 'Store',
      realShit: 'Real Sh!t',
    },
    pages: {
      work: {
        title: 'Projects',
        photoProject: {
          title: 'Different Realities',
          subtitle: 'Photography I',
          description: 'Photography Project - First Semester',
          technicalDetails: {
            capturedWith: 'Captured with',
            camera: 'Camera',
            lens: 'Lens'
          },
          content: {
            paragraph1: 'This project combines reality with the virtual to contrast people\'s aspirations with the harsh reality lived in Mexico. It only takes ten minutes of walking to find a large number of damaged and abandoned vehicles. On the other hand, in virtual spaces such as video games, many find an escape, a place where they can buy and drive hundreds of supercars. In this project, we can also see the consumerism that happens in this country and the inequality that exists.',
            paragraph2: 'Seeking to reflect on this contrast, I originally took photographs of supercars within a video game. I printed these photos and cut out certain parts, which I filled with cars I found on the streets near my home.',
            paragraph3: 'The project teaches us a bit about how we relate to our environment and the virtual escapes we use to evade reality.'
          }
        },
        animationProject: {
          title: 'Araucaria',
          subtitle: 'Photography II',
          description: 'Photography Project - Second Semester',
          content: {
            paragraph1: 'This project explores the relationship between nature and urbanization through the lens of the Araucaria, an iconic tree that has witnessed the city\'s development. The photographs capture the coexistence of these centennial trees with the modern urban environment, creating a visual dialogue between the natural and the built.',
            paragraph2: 'The Araucaria, with its distinctive shape and history in the region, serves as a metaphor for resistance and adaptation. Through different perspectives and times of day, the project aims to document how these trees have managed to maintain their presence and significance in an ever-changing environment.',
            paragraph3: 'Each image tells a story of survival and beauty, inviting the viewer to reflect on the importance of preserving these natural elements in our urban environment.'
          },
          technicalDetails: {
            capturedWith: 'Captured with',
            camera: 'Camera',
            lens: 'Lens'
          }
        },
        objectProject: {
          title: 'Object and Space',
          description: 'Design Project - Second Semester',
        },
        webProject: {
          title: 'Web Development and Design',
          description: 'Programming Project - Second Semester',
        },
      },
      photos: {
        title: 'Photos',
        imageDescriptions: {
          photo1: 'Photo 1 description',
          photo2: 'Photo 2 description',
          photo3: 'Photo 3 description',
        },
      },
      game: {
        title: 'Interactive Game',
        description: 'An interactive game created with p5.js that explores creativity and user interaction.',
      },
      about: {
        title: 'fanatico perr1',
        description: 'I am a creative computing student, passionate about technology and music. I enjoy watching sports and spending time with my friends. I am a very sociable person and my relationships define me a lot as a person.',
      },
      store: {
        title: 'Store',
        comingSoon: 'Coming Soon',
        products: {
          tshirt: {
            name: 'fanatico perr1 T-Shirt',
            description: '100% cotton t-shirt with fanatico perr1 logo'
          },
          hoodie: {
            name: 'fanatico perr1 Hoodie',
            description: 'Hooded sweatshirt with fanatico perr1 logo'
          },
          hat: {
            name: 'fanatico perr1 Hat',
            description: 'Adjustable hat with fanatico perr1 logo'
          }
        },
      },
      realShit: {
        title: 'Real Sh!t',
        subtitle: 'Enter password to access',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Enter password',
        submitButton: 'Access',
        storeDescription: 'Access the fanatico perr1 store',
        gameDescription: 'Play the fanatico perr1 interactive game',
        privateInstagram: {
          title: 'Private Instagram',
          description: 'My personal Instagram account'
        },
        privateTikTok: {
          title: 'Private TikTok',
          description: 'My personal TikTok account'
        }
      },
    },
  },
} as const; 