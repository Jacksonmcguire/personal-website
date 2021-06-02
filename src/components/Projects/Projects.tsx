import './Projects.css'
import { Project } from '../Project/Project'
import { projectData } from '../../project-data'
export const Projects = () => {
  const projects = projectData.map(project => {
    return <Project 
    name={project.name}
    github={project.github}
    deploy={project.deploy}
    desc={project.desc}
    tech={project.tech}
    gif={project.gif}></Project>
  })
  return (
    <section className="project-container" id="projects">
      <h3>Projects</h3>
      {projects}
    </section>

  )
}