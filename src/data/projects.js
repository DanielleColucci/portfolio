import WordleClone from '../assets/wordle-clone.jpeg'
import HealthyHabits from '../assets/healthy-habits.jpeg'
import TicTacToe from '../assets/tic-tac-toe.png'
import RecDrop from '../assets/rec-drop.jpeg'
import PatientSamples from '../assets/patient-samples.jpeg'
import Polymorphisms from '../assets/TCR-polymorphisms.jpeg'

const skillsObj = {
  javascript: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
  typescript: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
  python: 'https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  react: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  html: 'https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge',
  css: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', 
  express: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
  node: 'https://img.shields.io/badge/node.js-339933?logo=node.js&logoColor=white&style=for-the-badge',
  mongoDB: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
  postgres: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
}

export const projects = [
  {
    title: 'Patient Sample Tracker',
    description: 'A full stack web app inspired by patient derived model development in translational research, where authorized users can log patient sample data to track cell line and PDX model progress ',
    image: PatientSamples,
    repositoryLink: 'https://github.com/DanielleColucci/patient-sample-tracker-front-end',
    deploymentLink: 'https://patient-sample-tracker.netlify.app/',
    skills: [skillsObj.javascript, skillsObj.typescript, skillsObj.react, skillsObj.postgres, skillsObj.express, skillsObj.node, skillsObj.html, skillsObj.css]
  },
  {
    title: 'Rec Drop',
    description: 'A full stack web app where users can create movie, TV, music, and book recommendations and create personal playlists',
    image: RecDrop,
    repositoryLink: 'https://github.com/pat-kelly/rec-drop-front-end',
    deploymentLink: 'https://rec-drop.netlify.app/',
    skills: [skillsObj.javascript, skillsObj.react, skillsObj.mongoDB, skillsObj.express, skillsObj.node, skillsObj.html, skillsObj.css]
  },
  {
    title: 'Healthy Habits',
    description: 'A wellness-based MEN stack CRUD app where users can log recipes and exercises to encourage the development of healthy routines',
    image: HealthyHabits,
    repositoryLink: 'https://github.com/DanielleColucci/wellness-app',
    deploymentLink: 'https://healthy-habits.fly.dev/',
    skills: [skillsObj.javascript, skillsObj.mongoDB, skillsObj.express, skillsObj.node, skillsObj.html, skillsObj.css]
  },
  {
    title: 'Wordle Clone',
    description: 'A Wordle-style app that allows users to select a difficulty, guess a secret word, and play as many rounds as desired',
    image: WordleClone,
    repositoryLink: 'https://github.com/DanielleColucci/wordle-clone',
    deploymentLink: 'https://danielle-wordle-clone.netlify.app/',
    skills: [skillsObj.javascript, skillsObj.html, skillsObj.css]
  },
  {
    title: 'TCR Polymorphisms',
    description: 'A bioinformatic/immunology program that extracts key gene information from large data files and detects polymorphic changes between alleles',
    image: Polymorphisms,
    repositoryLink: 'https://github.com/DanielleColucci/V-gene-polymorphisms',
    skills: [skillsObj.python]
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'A retro neon themed recreation of a childhood classic!',
    image: TicTacToe,
    repositoryLink: 'https://github.com/DanielleColucci/ttt-weekend',
    deploymentLink: 'https://danielle-tic-tac-toe.netlify.app/',
    skills: [skillsObj.javascript, skillsObj.html, skillsObj.css]
  },
]