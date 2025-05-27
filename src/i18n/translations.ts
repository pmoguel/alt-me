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
    },
    pages: {
      work: {
        title: 'Proyectos',
        photoProject: {
          title: 'Distinas Realidades',
          description: 'Proyecto de Fotografía - Primer Semestre',
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
      about: {
        title: 'fanatico perr1',
        description: 'Soy un estudiante de computación creativa, me apasiona la tecnología y la música. Disfruto de ver deportes y pasar tiempo con mis amigos. Soy una persona muy sociable y mis relaciones me definen mucho como persona.',
      },
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      myLinks: 'My Links',
    },
    pages: {
      work: {
        title: 'Projects',
        photoProject: {
          title: 'Different Realities',
          description: 'Photography Project - First Semester',
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
      about: {
        title: 'fanatico perr1',
        description: 'I am a creative computing student, passionate about technology and music. I enjoy watching sports and spending time with my friends. I am a very sociable person and my relationships define me a lot as a person.',
      },
    },
  },
} as const; 