import WordleClone from '../assets/wordle-clone.jpeg'
import HealthyHabits from '../assets/healthy-habits.jpeg'
import TicTacToe from '../assets/tic-tac-toe.jpeg'
import RecDrop from '../assets/rec-drop.png'
import PatientSamples from '../assets/patient-sample.jpeg'
import Polymorphisms from '../assets/TCR-polymorphisms.jpeg'

export const projects = [
  {
    title: 'Patient Sample Tracker',
    description: 'A full stack web app inspired by patient derived model development in translational research, where authorized users can log patient sample data to track cell line and PDX model progress ',
    image: PatientSamples,
    repositoryLink: 'https://github.com/DanielleColucci/patient-sample-tracker-front-end',
    deploymentLink: 'https://patient-sample-tracker.netlify.app/'
  },
  {
    title: 'Rec Drop',
    description: 'A full stack web app where users can create movie, TV, music, and book recommendations and create personal playlists',
    image: RecDrop,
    repositoryLink: 'https://github.com/pat-kelly/rec-drop-front-end',
    deploymentLink: 'https://rec-drop.netlify.app/'
  },
  {
    title: 'Healthy Habits',
    description: 'A wellness-based MEN stack CRUD app where users can log recipes and exercises to encourage the development of healthy routines',
    image: HealthyHabits,
    repositoryLink: 'https://github.com/DanielleColucci/wellness-app',
    deploymentLink: 'https://healthy-habits.fly.dev/'
  },
  {
    title: 'Wordle Clone',
    description: 'A Wordle-style app that allows users to select a difficulty, guess a secret word, and play as many rounds as desired',
    image: WordleClone,
    repositoryLink: 'https://github.com/DanielleColucci/wordle-clone',
    deploymentLink: 'https://danielle-wordle-clone.netlify.app/'
  },
  {
    title: 'TCR Polymorphisms',
    description: 'A bioinformatic/immunology program that extracts key gene information from large data files and detects polymorphic changes between alleles',
    image: Polymorphisms,
    repositoryLink: 'https://github.com/DanielleColucci/V-gene-polymorphisms'
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'A retro neon themed recreation of a childhood classic!',
    image: TicTacToe,
    repositoryLink: 'https://github.com/DanielleColucci/ttt-weekend',
    deploymentLink: 'https://danielle-tic-tac-toe.netlify.app/'
  },
]