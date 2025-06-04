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
      game: 'Juego',
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
          },
          behindTheScenes: 'Detrás de Cámaras'
        },
        animationProject: {
          title: 'Araucaria',
          subtitle: 'Fotografía II',
          description: 'Proyecto de Fotografía - Segundo Semestre',
          content: {
            paragraph1: 'Este proyecto consiste en una serie de siete fotografías tomadas en intervalos regulares a lo largo de 24 horas. Cada imagen muestra el mismo árbol con el mismo encuadre, de esta forma, podemos observar cómo la luz natural y las sombras cambian a lo largo del día, así, cambiando nuestra percepción del color y la forma a lo largo del tiempo. La luz no solo actúa sobre los objetos, también se puede apreciar su evolución en el cielo y en ciertos reflejos marcados sobre el lente de la cámara.',
            paragraph2: 'El nombre de este proyecto surge en referencia al árbol que protagoniza la serie. El sujeto no fue escogido de forma arbitraria, la razón de este se origina con una conexión personal a este árbol en particular. Se trata de una araucaria, una especie que, además, me resulta especialmente significativa porque me gustan mucho las coníferas.',
            paragraph3: 'Este es una presencia constante en mi día a día, algo que observo todos los días y que, con el tiempo, se ha convertido en algo significativo. El árbol no solo es interesante visualmente, también me es emocionalmente relevante. Todo esto lo convierte en el sujeto ideal para este proyecto.'
          },
          technicalDetails: {
            capturedWith: 'Capturado con',
            camera: 'Cámara',
            lens: 'Lente'
          },
          behindTheScenes: 'Detrás de Cámaras'
        },
        objectProject: {
          title: 'Cubos',
          description: 'Objeto y Espacio',
          images: {
            image1: {
              title: 'Cubo 1',
              description: 'Descripción del primer cubo y su significado'
            },
            image2: {
              title: 'Cubo 2',
              description: 'Descripción del segundo cubo y su significado'
            },
            image3: {
              title: 'Cubo 3',
              description: 'Descripción del tercer cubo y su significado'
            },
            image4: {
              title: 'Cubo 4',
              description: 'Descripción del cuarto cubo y su significado'
            },
            image5: {
              title: 'Cubo 5',
              description: 'Descripción del quinto cubo y su significado'
            },
            image6: {
              title: 'Cubo 6',
              description: 'Descripción del sexto cubo y su significado'
            },
            image7: {
              title: 'Cubo 7',
              description: 'Descripción del séptimo cubo y su significado'
            },
            image8: {
              title: 'Cubo 8',
              description: 'Descripción del octavo cubo y su significado'
            }
          }
        },
        webProject: {
          title: 'Desarrollo y Diseño Web',
          subtitle: 'Segundo Semestre',
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
        followUs: 'Síguenos',
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
        subtitle: 'Si me conoces, quien es el mejor rapero? (una palabra)',
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
      game: 'Game',
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
          },
          behindTheScenes: 'Behind the Scenes'
        },
        animationProject: {
          title: 'Araucaria',
          subtitle: 'Photography II',
          description: 'Photography Project - Second Semester',
          content: {
            paragraph1: 'This project consists of a series of seven photographs taken at regular intervals over 24 hours. Each image shows the same tree with the same framing, allowing us to observe how natural light and shadows change throughout the day, thus changing our perception of color and form over time. The light not only acts on objects, but its evolution can also be appreciated in the sky and in certain reflections marked on the camera lens.',
            paragraph2: 'The name of this project comes from the tree that stars in the series. The subject was not chosen arbitrarily; the reason stems from a personal connection to this particular tree. It is an araucaria, a species that is especially significant to me because I really like conifers.',
            paragraph3: 'This is a constant presence in my daily life, something I observe every day and that, over time, has become significant. The tree is not only visually interesting but also emotionally relevant to me. All of this makes it the ideal subject for this project.'
          },
          technicalDetails: {
            capturedWith: 'Captured with',
            camera: 'Camera',
            lens: 'Lens'
          },
          behindTheScenes: 'Behind the Scenes'
        },
        objectProject: {
          title: 'Cubes',
          description: 'Object and Space',
          images: {
            image1: {
              title: 'Cube 1',
              description: 'Description of the first cube and its meaning'
            },
            image2: {
              title: 'Cube 2',
              description: 'Description of the second cube and its meaning'
            },
            image3: {
              title: 'Cube 3',
              description: 'Description of the third cube and its meaning'
            },
            image4: {
              title: 'Cube 4',
              description: 'Description of the fourth cube and its meaning'
            },
            image5: {
              title: 'Cube 5',
              description: 'Description of the fifth cube and its meaning'
            },
            image6: {
              title: 'Cube 6',
              description: 'Description of the sixth cube and its meaning'
            },
            image7: {
              title: 'Cube 7',
              description: 'Description of the seventh cube and its meaning'
            },
            image8: {
              title: 'Cube 8',
              description: 'Description of the eighth cube and its meaning'
            }
          }
        },
        webProject: {
          title: 'Web Development and Design',
          subtitle: 'Second Semester',
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
        description: 'I am a creative computing student, passionate about technology and music. I enjoy watching sports and spending time with my friends. I am a very social person and my relationships define me a lot as a person.',
      },
      store: {
        title: 'Store',
        comingSoon: 'Coming Soon',
        followUs: 'Follow Us',
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
        subtitle: 'if u know me, who\'s the best rapper? (one word)',
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