import '../styles/projects.css';
import feProject from '../data/fe-projects.json';
import ProjectItem from './FeProjectItem';

export default function Projects() {
  const projcetList = feProject.map((project) => {
    return <ProjectItem key={project.id} {...project} />;
  });

  return (
    <section className="projects">
      <h2 className="librebaskerville">PROJECTS</h2>
      <ul className="project-list">{projcetList}</ul>
    </section>
  );
}
