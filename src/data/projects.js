import WordleClone from "../assets/wordle-clone.jpeg";
import HealthyHabits from "../assets/healthy-habits.jpeg";
import RecDrop from "../assets/rec-drop.jpeg";
import PatientSamples from "../assets/patient-samples.jpeg";
import Polymorphisms from "../assets/TCR-polymorphisms.jpeg";
import PaShare from "../assets/pa-share.png";
import NHEmmit from "../assets/nh-emmit.png";
import WayneCounty from "../assets/wayne-county.png";
import EssexCounty from "../assets/essex-county.png";
import GeoVHB from "../assets/geo-vhb.png";
import Nysddot from "../assets/nysdot.png";

const skillsObj = {
  javascript:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  typescript:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  python:
    "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  react:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  html: "https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge",
  css: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  express:
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  node: "https://img.shields.io/badge/node.js-339933?logo=node.js&logoColor=white&style=for-the-badge",
  mongoDB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  postgres:
    "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  angular:
    "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
  csharp:
    "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
  dotnet:
    "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
  mSql: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white",
  nx: "https://img.shields.io/badge/nx-%234ea94b.svg?style=for-the-badge&logo=nx&logoColor=132f52&color=fff",
};

export const projects = [
  {
    title: "PA SHARE",
    description:
      "GIS-based web application for PA's State Historic Preservation Office where users can submit Federal Section 106 Reviews, and where internal SHPOs can approve projects, maintain inventory records, and communicate with the agencies and municipalities of the state.",
    image: PaShare,
    deploymentLink: "https://share.phmc.pa.gov/pashare/landing",
    skills: [
      skillsObj.angular,
      skillsObj.typescript,
      skillsObj.csharp,
      skillsObj.dotnet,
      skillsObj.mSql,
    ],
  },
  {
    title: "NH EMMIT+",
    description:
      "GIS-based web application for NH's Division of Historical Resources where users can submit Federal Section 106 Reviews, and where internal SHPOs can approve projects, maintain inventory records, and communicate with the agencies and municipalities of the state.",
    image: NHEmmit,
    deploymentLink: "https://emmitprod.azurewebsites.net/emmit/landing",
    skills: [
      skillsObj.angular,
      skillsObj.typescript,
      skillsObj.csharp,
      skillsObj.dotnet,
      skillsObj.mSql,
      skillsObj.nx,
    ],
  },
  {
    title: "GeoVHB",
    description: `VHB's  internal, geospatial, centralized, and web-based portal that provides easy access to geospatial data and applications across our entire footprint`,
    image: GeoVHB,
    skills: [
      skillsObj.angular,
      skillsObj.typescript,
      skillsObj.csharp,
      skillsObj.dotnet,
    ],
  },
  {
    title: "Parcel Viewer",
    description:
      "Online parcel viewer for Wayne County, NY where users can perform criteria and spatial searches, view parcel data, and visualize GIS data",
    image: WayneCounty,
    deploymentLink: "https://gis.co.wayne.ny.us/pv/search",
    skills: [skillsObj.angular, skillsObj.typescript, skillsObj.nx],
  },
  {
    title: "Parcel Viewer",
    description:
      "Online parcel viewer for Essex County, NY where users can perform criteria and spatial searches, view parcel data, and visualize GIS data",
    image: EssexCounty,
    deploymentLink: "https://essex-gis.co.essex.ny.us/",
    skills: [skillsObj.angular, skillsObj.typescript, skillsObj.nx],
  },
  {
    title: "NYSDOT",
    description:
      "An internal algorithm-based application for VHB’s marketing team to predict NYSDOT RFP success",
    image: Nysddot,
    skills: [
      skillsObj.angular,
      skillsObj.typescript,
      skillsObj.csharp,
      skillsObj.dotnet,
      skillsObj.mSql,
    ],
  },
  {
    title: "Patient Sample Tracker",
    description:
      "A full stack web app inspired by patient derived model development in translational research, where authorized users can log patient sample data to track cell line and PDX model progress ",
    image: PatientSamples,
    repositoryLink:
      "https://github.com/DanielleColucci/patient-sample-tracker-front-end",
    deploymentLink: "https://patient-sample-tracker.netlify.app/",
    skills: [
      skillsObj.javascript,
      skillsObj.typescript,
      skillsObj.react,
      skillsObj.postgres,
      skillsObj.express,
      skillsObj.node,
      skillsObj.html,
      skillsObj.css,
    ],
  },
  {
    title: "Rec Drop",
    description:
      "A full stack web app where users can create movie, TV, music, and book recommendations and create personal playlists",
    image: RecDrop,
    repositoryLink: "https://github.com/pat-kelly/rec-drop-front-end",
    deploymentLink: "https://rec-drop.netlify.app/",
    skills: [
      skillsObj.javascript,
      skillsObj.react,
      skillsObj.mongoDB,
      skillsObj.express,
      skillsObj.node,
      skillsObj.html,
      skillsObj.css,
    ],
  },
  {
    title: "Healthy Habits",
    description:
      "A wellness-based MEN stack CRUD app where users can log recipes and exercises to encourage the development of healthy routines",
    image: HealthyHabits,
    repositoryLink: "https://github.com/DanielleColucci/wellness-app",
    deploymentLink: "https://healthy-habits.fly.dev/",
    skills: [
      skillsObj.javascript,
      skillsObj.mongoDB,
      skillsObj.express,
      skillsObj.node,
      skillsObj.html,
      skillsObj.css,
    ],
  },
  {
    title: "Wordle Clone",
    description:
      "A Wordle-style app that allows users to select a difficulty, guess a secret word, and play as many rounds as desired",
    image: WordleClone,
    repositoryLink: "https://github.com/DanielleColucci/wordle-clone",
    deploymentLink: "https://danielle-wordle-clone.netlify.app/",
    skills: [skillsObj.javascript, skillsObj.html, skillsObj.css],
  },
  {
    title: "TCR Polymorphisms",
    description:
      "A bioinformatic/immunology program that extracts key gene information from large data files and detects polymorphic changes between alleles",
    image: Polymorphisms,
    repositoryLink: "https://github.com/DanielleColucci/V-gene-polymorphisms",
    skills: [skillsObj.python],
  },
];
