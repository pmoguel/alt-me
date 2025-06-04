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
          description: 'Una serie de composiciones creadas a partir de ligas y cubos.',
          images: {
            image1: {
              title: 'Cubo 1: Repetición',
              description: 'Siguiendo el concepto general de mis primeros cuatro cubos el cual es contraste, creare una composición a partir de ligas en la cual aprovechó el cubo para demostrar distintas formas de contraste, utilizando la repetición como herramienta. Para representar la repetición toda la composición estará creada a partir de acomodar las ligas de forma en la que estas creen un patrón, ya sea colocando ligas paralelas entre sí en una cara pero contrastando en cantidad y dirección con ligas en la cara opuesta del cubo. En otras dos caras del cubo haré contraste al crear curvas con las ligas.'
            },
            image2: {
              title: 'Cubo 2: Composición Balanceada',
              description: 'Para este cubo busco crear un balance entre todos las caras sin olvidar el contraste. Utilizando un acercamiento minimalista puedo crear un contraste entre el espacio positivo y el negativo, por otro lado creando un contraste entre direcciones. Para darle balance a la composición me asegurare de que cada cara tenga exactamente los mismos elementos y que desde donde el cubo sea observado haya una armonía visual. Un último aspecto que ayuda a balancear la composición es el poder observar líneas paralelas a lo largo de todo el cubo.'
            },
            image3: {
              title: 'Cubo 3: Espacio Negativo',
              description: 'Para este cubo busco presentar el espacio negativo como el punto focal de mi composición y no como algo complementario. Para lograr esto voy a agregar elementos por todo el cubo excepto en el centro, creando una especie de marco que le da énfasis al espacio en el centro. Al posicionar este espacio negativo en el centro el ojo se dirige automáticamente ahí. Este mismo espacio negativo es algo que presenta contraste, el cual también es representado con las distintas direcciones que siguen las líneas en la composición'
            },
            image4: {
              title: 'Cubo 4: Soporte',
              description: 'Después de trabajar bocetos a partir de mi definición para soporte se me ocurrió crear una composición que se soportará entre sí. Al discutir sobre soporte con mi grupo llegamos a la conclusión que el cubo puede ser soportado por la composición o la composición puede ser soportada por el cubo. Por lo tanto decidí no solo que los elementos se soportan entre sí, sino que también sean soportados por el cubo. El contraste en este cubo lo conseguimos con una diferencia entre direcciones y con espacio negativo y positivo, por último hay contraste entre las ligas estando completamente lisas en la parte exterior del cubo y una sobre la otra dentro de este.'
            },
            image5: {
              title: 'Cubo 5: Tensión',
              description: 'Para este cubo y los siguientes tres cambiamos de concepto, para estos cuatro cubos yo utilizaré la profundidad como concepto principal. Para este cubo de tensión decidí que la mejor forma de representarla visualmente sería crear un objeto con mi material (cinchos) y deformar este con pura tensión. Para lograr esto cree un cubo a partir de 12 cinchos completos, este cubo lo uni al cubo de metal con ayuda de otros 8 cinchos completamente tensados, esto logró deformar mi cubo lo suficiente como para que la tensión fuera visible. Como último detalle para trabajar la profundidad así como para tener una mejor composición, cree un cubo más pequeño el cual coloque en el centro de la composición, esta vez solo sostenido por dos cinchos en direcciones opuestas, así repre de forma textual la definición de tensión que saque, la cual fue: "la tensión se forma cuando dos fuerzas opuestas actúan sobre un objeto"'
            },
            image6: {
              title: 'Cubo 6: Profundidad',
              description: 'Para este cubo al igual que en el pasado y los dos siguientes mi concepto personal es la profundidad, el mismo concepto designado para este sexto cubo. En este cubo quiero representar la profundidad utilizando la distancia y la escala, esto generado a través de un túnel hecho de cuadrados que varían en tamaño, empezando por los más grandes a las orillas y los más pequeños al centro. Para hacer más claro el efecto de profundidad jugue con los límites del cubo, permitiendo que ciertos cuadrados salgan de esta así haciendo énfasis en la profundidad. Hacer que el túnel crezca desde el centro hacia ambos lados le agrega balance y estética a la composición. La disminución de tamaño en el centro obliga la profundidad del cubo a ser percibida desde cualquier ángulo, sea a través del túnel o desde afuera'
            },
            image7: {
              title: 'Cubo 7: Contención',
              description: 'Para este séptimo cubo en el que trabajamos contención yo busqué crear una composición en la que cierto objeto fuera libre y no estuviese sostenido. Pero que este estuviera contenido en un espacio delimitado. Para esto cree un cubo pequeño el cual coloque dentro de un cubo mas grande. Estos dos cubos están completamente cerrados y actuando como una jaula para aire y para el otro cubo respectivamente. Por último coloque estos dos cubos dentro de él de metal y este lo delimite con dos sets de cinchos, conteniendo así los dos cubos mas pequeños de una forma más minimalista. Utilizando 3 cubos de distintos tamaños y con espacio negativo trabaje también la profundidad en el cubo'
            },
            image8: {
              title: 'Cubo 8: Tema Libre',
              description: 'Para este último cubo mi idea era crear una composición que tuviera un poco de todos los conceptos trabajados anteriormente, desde balance hasta contención. Este cubo lo trabaje con cinchos acomodados como estrella de 4 puntas, una en cada cara. Al terminar todas las caras aparte de ser una composición estética, se crea un juego visual en el que las formas aparentan ir hacia el centro del cubo.'
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
          description: 'A series of compositions created using rubber bands and cubes.',
          images: {
            image1: {
              title: 'Cube 1: Repetition',
              description: 'Following the general concept of my first four cubes, which is contrast, I will create a composition using rubber bands in which I take advantage of the cube to demonstrate different forms of contrast, using repetition as a tool. To represent repetition, the entire composition will be created by arranging the rubber bands in a way that creates a pattern, either by placing parallel rubber bands on one face but contrasting in quantity and direction with rubber bands on the opposite face of the cube. On two other faces of the cube, I will create contrast by making curves with the rubber bands.'
            },
            image2: {
              title: 'Cube 2: Balanced Composition',
              description: 'For this cube, I seek to create a balance between all faces without forgetting contrast. Using a minimalist approach, I can create a contrast between positive and negative space, while also creating a contrast between directions. To give balance to the composition, I will ensure that each face has exactly the same elements and that there is visual harmony from wherever the cube is observed. A final aspect that helps balance the composition is being able to observe parallel lines throughout the entire cube.'
            },
            image3: {
              title: 'Cube 3: Negative Space',
              description: 'For this cube, I seek to present negative space as the focal point of my composition rather than as something complementary. To achieve this, I will add elements throughout the cube except in the center, creating a kind of frame that emphasizes the space in the center. By positioning this negative space in the center, the eye is automatically drawn there. This same negative space presents contrast, which is also represented by the different directions that the lines follow in the composition'
            },
            image4: {
              title: 'Cube 4: Support',
              description: 'After working on sketches based on my definition of support, I came up with the idea of creating a composition that would support itself. When discussing support with my group, we concluded that the cube could be supported by the composition or the composition could be supported by the cube. Therefore, I decided that not only would the elements support each other, but they would also be supported by the cube. The contrast in this cube is achieved through differences in directions and through negative and positive space, and finally, there is contrast between the rubber bands being completely smooth on the exterior of the cube and overlapping each other inside it.'
            },
            image5: {
              title: 'Cube 5: Tension',
              description: 'For this cube and the next three, we changed concepts. For these four cubes, I will use depth as the main concept. For this tension cube, I decided that the best way to represent it visually would be to create an object with my material (cable ties) and deform it with pure tension. To achieve this, I created a cube using 12 complete cable ties, which I attached to the metal cube using 8 more completely tensioned cable ties. This deformed my cube enough to make the tension visible. As a final detail to work on depth and to have a better composition, I created a smaller cube which I placed in the center of the composition, this time only supported by two cable ties in opposite directions, thus literally representing the definition of tension that I came up with: "tension is formed when two opposing forces act on an object"'
            },
            image6: {
              title: 'Cube 6: Depth',
              description: 'For this cube, as with the previous and the next two, my personal concept is depth, the same concept designated for this sixth cube. In this cube, I want to represent depth using distance and scale, generated through a tunnel made of squares that vary in size, starting with the largest at the edges and the smallest in the center. To make the depth effect clearer, I played with the cube\'s boundaries, allowing certain squares to extend beyond it, thus emphasizing the depth. Making the tunnel grow from the center towards both sides adds balance and aesthetics to the composition. The decrease in size in the center forces the cube\'s depth to be perceived from any angle, whether through the tunnel or from the outside'
            },
            image7: {
              title: 'Cube 7: Containment',
              description: 'For this seventh cube where we worked on containment, I sought to create a composition in which a certain object would be free and not supported. But this object would be contained within a delimited space. For this, I created a small cube which I placed inside a larger cube. These two cubes are completely closed and act as a cage for air and for the other cube respectively. Finally, I placed these two cubes inside the metal one and delimited it with two sets of cable ties, thus containing the two smaller cubes in a more minimalist way. Using 3 cubes of different sizes and with negative space, I also worked on depth in the cube'
            },
            image8: {
              title: 'Cube 8: Free Theme',
              description: 'For this last cube, my idea was to create a composition that incorporated a bit of all the concepts worked on previously, from balance to containment. I worked on this cube with cable ties arranged as 4-pointed stars, one on each face. When all faces are completed, besides being an aesthetic composition, it creates a visual play where the forms appear to converge towards the center of the cube.'
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