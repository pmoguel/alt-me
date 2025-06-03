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
          description: 'Proyecto de Fotografía - Primer Semestre',
        },
        animationProject: {
          title: 'Animación Final',
          description: 'Proyecto de Animación - Segundo Semestre',
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
        gameDescription: 'Juega el juego interactivo de fanatico perr1'
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
          description: 'Photography Project - First Semester',
        },
        animationProject: {
          title: 'Final Animation',
          description: 'Animation Project - Second Semester',
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
        gameDescription: 'Play the fanatico perr1 interactive game'
      },
    },
  },
} as const; 