import feProject from '../data/fe-projects.json';
import FeProjectItem from './FeProjectItem';

export default function Projects() {
  const projcetList = feProject.map((project) => {
    return <FeProjectItem key={project.id} {...project} />;
  });

  return (
    <section className="projects" data-section="projects">
      <div className="inner">
        <h2 className="librebaskerville">PROJECTS</h2>
        <ul className="project-list">{projcetList}</ul>
      </div>
    </section>
  );
}
