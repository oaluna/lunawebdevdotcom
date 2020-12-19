import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
  title: 'Oscar Armando Luna', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Web Developer for Hire', // e.g: Welcome to my website
}

// HERO DATA
export const heroData = {
  title: '',
  name: 'Oscar Armando Luna',
  subtitle: 'Freelance Web Developer',
  cta: 'Get Started',
}

// ABOUT DATA
export const aboutData = {
  img: 'meeeee.jpg',
  paragraphOne: `I'm `,
  paragraphOneName: `Oscar`,
  paragraphOneCont: `a San Francisco-based web developer. I create and deploy web applications for businesses in every market: sports stores, e-commerce,  booking, blogs, social media, media-streaming. I will work with your vision and bring it to life.`,
  paragraphTwo:
    'This is a one-stop-shop for web design/development services to help you create and launch your web application. Check us out and get your website quote today!',
  paragraphThree:
    'You can also schedule a free 30-minute web design consultation if you have questions regarding your web development needs, at no obligation.',
  resume: 'https://drive.google.com/file/d/1hWzIGHlLDWl5YxHG-6qoncbnNKYQbhuZ/view?usp=sharing', // if no resume, the button will not show up
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lws-landing-demo.png',
    title: 'Demo Landing Site',
    info:
      'I created a landing site that was initially inspired by the lovely gradient featured on Stripe.com. I attempted to recreate the animation in the banner, then went on to add demo sections.',
    info2: 'Contains functioning anchor links',
    url: 'https://lws-landing-demo.vercel.app/',
    repo: 'https://github.com/oaluna/luna-websolutions', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lunadevblog.png',
    title: 'Personal Blog',
    info: 'Personal blog site created using Stackbit through Dev.to',
    info2:
      'I document my learning path here. I use the Stackbit CMS to generate my blog site, then added some further styling customizations.',
    url: 'https://lunadevblog.netlify.app',
    repo: 'https://github.com/oaluna/lunadevblog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crwn-clothing-2020.png',
    title: 'Shopping App #2 - CRWN Clothing',
    info:
      'Shopping application created using Redux and Apollo. Includes Stripe payment API, Google Sign-in, and stunning UI.',
    info2: 'Deployed to Heroku',
    url: 'http://react-final-crwn-clothing.herokuapp.com',
    repo: 'https://github.com/oaluna/react-final-crwn-clothing', // if no repo, the button will not show up
  },
]

// CONTACT DATA
export const contactData = {
  cta: 'Book a free 30-minute web design/development consultation',
  btn: 'Book Now',
  email: 'oscarluna.webdev@gmail.com',
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/LunaWebDev',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/rocketnumbr9',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/oscar-a-luna',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/oaluna',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/aka.kay.drama',
    },
    {
      id: nanoid(),
      name: 'desktop',
      url: 'https://lunadevblog.netlify.app',
    },
  ],
}

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
}
