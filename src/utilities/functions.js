import { projects } from "../data/projects"

export function hyphenateWords(str) {
  return str.replace(/\s+/g, '-').toLowerCase()
}

export function findProject(str) {
  return projects.find(project => {
    return hyphenateWords(project.title) === str
  })
}