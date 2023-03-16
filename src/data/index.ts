import { pomodoro, rickandmorty, todo, wheather, profile } from '../assets';
export const languageData = {
  es: {
    profile: {
      image: profile,
      name: 'Ricardo Sanchez',
      about: `Desarrollador web con experiencia en tecnologias como React, Typescript, Django y Node. En mi tiempo libre, me gusta leer sobre tecnología y ciencia, practicar deportes al aire libre y pasar tiempo con mi familia y amigos.`,
      profession: 'Estudiante de Ingeniería en Sistemas de Información',
      socialLinks: [
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/ricardosnz',
        },
        { name: 'github', link: 'https://github.com/ricardosnz' },
        { name: 'mail', link: 'mailto:alanupstay@gmail.com' },
      ],
    },
    projects: [
      {
        image: pomodoro,
        type: 'Aplicación web',
        name: 'Pomodoro App',
        status: 'terminado',
        description: `Esta aplicación cuenta con tres tipos de temporizadores: normal, corto y largo, lo que permite a los usuarios personalizar el temporizador para ajustarlo a sus necesidades específicas.Tambien permite a los usuarios personalizar cada temporizador como ajustar la duración, cambiar entre diferentes temas y Fuentes. Utiliza tecnologías como React, Redux y CSS.modules`,
        source: 'https://github.com/ricardosnz/contador',
        link: 'https://you-pomodoro.vercel.app/',
      },
      {
        image: wheather,
        type: 'Aplicación web',
        name: 'Weather City App',
        status: 'terminado',
        description: `Una aplicacion que da a conocer las condiciones climáticas actuales y futuras de cualquier lugar del mundo. la aplicación les proporcionará detalles como la temperatura actual, la humedad, la velocidad del viento, la visibilidad y el pronóstico del tiempo para los próximos 5 días. Está construida con tecnologías como React, CSS modules`,
        source: 'https://github.com/ricardosnz/weather',
        link: 'https://searchweathertemp.vercel.app/',
      },
      {
        image: rickandmorty,
        type: 'Aplicación web',
        name: 'Find Character',
        status: 'en desarrollo',
        description: `Una aplicación que utiliza datos de la serie rick and morty donde se podra buscar personajes, locaciones y episodios. Podrás obtener detalles específicos de cada uno, como el género, fecha, de dónde es, estado, y qué episodios aparece. Tecnologias utilizadas React, CSS modules.`,
        source: 'https://github.com/ricardosnz/web-rick-morty/',
        link: 'https://rickandmortyapp.stackblitz.io/',
      },
      {
        image: todo,
        type: 'Aplicación web',
        name: 'ToDo App',
        status: 'terminado',
        description: `La aplicación permite crear lista de tus notas, es una herramienta simple y eficaz para mantener tus tareas organizadas y productivas. La aplicación te permite marcar las notas como completadas y eliminar las notas que ya no necesitas. La aplicación está desarrollada en React con Redux Toolkit, Typescript y módulos CSS.`,
        source: 'https://github.com/ricardosnz/notas',
        link: 'https://you-todo.vercel.app/',
      },
    ],
    skills: [
      {
        category: 'desarrollo frontend',
        skills: [
          'HTML',
          'CSS',
          'Javascript',
          'Typescript',
          'TailwindCSS',
          'React',
          'Redux',
        ],
      },
      {
        category: 'desarrollo backend',
        skills: ['Node', 'Python', 'Django', 'Django Rest Framework'],
      },
      { category: 'herramientas', skills: ['Git', 'Github', 'NPM'] },
    ],
    jobs: [
      {
        position: '',
        company: 'Universidad Autonoma del Estado de Mexico',
        startDate: 'Marzo 2022',
        endDate: 'actulidad',
        description: ``,
      },
      {
        position: '',
        company: '',
        startDate: 'Junio 2021',
        endDate: 'actualidad',
        description: ``,
      },
      {
        position: 'Técnico en redes',
        company: '',
        startDate: 'Enero 2020',
        endDate: 'Enero 2021',
        description: ``,
      },
    ],
  },
  en: {
    profile: {
      image: profile,
      name: 'Ricardo Sanchez',
      about: `Web developer with experience in technologies such as React, Typescript, Django, and Node. In my free time, I enjoy reading about technology and science, practicing outdoor sports, and spending time with my family and friends.`,
      profession: 'Information Systems Engineering Student',
      socialLinks: [
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/ricardosnz',
        },
        { name: 'github', link: 'https://github.com/ricardosnz' },
        { name: 'mail', link: 'mailto:alanupstay@gmail.com' },
      ],
    },
    projects: [
      {
        image: pomodoro,
        type: 'Web application',
        name: 'Pomodoro App',
        status: 'Finished',
        description: `This application has three types of timers: normal, short, and long, which allows users to customize the timer to suit their specific needs. It also allows users to customize each timer, such as adjusting the duration, switching between different themes and fonts. It uses technologies such as React, Redux, and CSS modules.`,
        source: 'https://github.com/ricardosnz/contador',
        link: 'https://you-pomodoro.vercel.app/',
      },
      {
        image: wheather,
        type: 'Web application',
        name: 'Weather City App',
        status: 'Finished',
        description: `An application that displays current and future weather conditions for any location in the world. The application will provide you with details such as the current temperature, humidity, wind speed, visibility, and weather forecast for the next 5 days. It is built with technologies such as React and CSS modules.`,
        source: 'https://github.com/ricardosnz/weather',
        link: 'https://searchweathertemp.vercel.app/',
      },
      {
        image: rickandmorty,
        type: 'Web application',
        name: 'Find Character',
        status: 'Developing',
        description: `An application that uses data from the Rick and Morty series where you can search for characters, locations, and episodes. You can get specific details of each one, such as gender, date, where they are from, status, and which episodes they appear in. Technologies used are React and CSS modules.`,
        source: 'https://github.com/ricardosnz/web-rick-morty/',
        link: 'https://rickandmortyapp.stackblitz.io/',
      },
      {
        image: todo,
        type: 'Web application',
        name: 'ToDo App',
        status: 'finished',
        description: `The application allows you to create a list of your notes, it is a simple and effective tool to keep your tasks organized and productive. The application allows you to mark notes as completed and delete notes that you no longer need. The application is developed in React with Redux Toolkit, Typescript, and CSS modules.`,
        source: 'https://github.com/ricardosnz/notas',
        link: 'https://you-todo.vercel.app/',
      },
    ],
    skills: [
      {
        category: 'frontend development',
        skills: [
          'HTML',
          'CSS',
          'Javascript',
          'Typescript',
          'TailwindCSS',
          'React',
          'Redux',
        ],
      },
      {
        category: 'backend development',
        skills: ['Node', 'Python', 'Django', 'Django Rest Framework'],
      },
      { category: 'tools', skills: ['Git', 'Github', 'Npm'] },
    ],
    jobs: [
      {
        position: '',
        company: '',
        startDate: 'March 2022',
        endDate: 'current',
        description: ``,
      },
      {
        position: '',
        company: '',
        startDate: 'June 2021',
        endDate: 'current',
        description: ``,
      },
      {
        position: 'Network Technician',
        company: '',
        startDate: 'january 2020',
        endDate: 'january 2021',
        description: ``,
      },
    ],
  },
};

const languageDataLocal = {
  en: {
    cvName: 'Download CV',
    tabs: [
      { name: 'projects', id: 'projects' },
      { name: 'skills', id: 'skills' },
    ],
  },
  es: {
    cvName: 'Descargar CV',
    tabs: [
      { name: 'proyectos', id: 'projects' },
      { name: 'tecnologias', id: 'skills' },
    ],
  },
};

export const updateLangData = (lang: string) => {
  const selectLang = lang === 'es' ? 'es' : 'en';
  const currentLanguage = languageData[selectLang];
  const { tabs, cvName } = languageDataLocal[selectLang];

  return {
    ...currentLanguage,
    tabs,
    profile: { ...currentLanguage.profile, cvName },
  };
};
