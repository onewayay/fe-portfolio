import styled from 'styled-components';
import type { Project } from '../types/project';
import CustomLink from './common/CustomLink';
import Label from './common/Label';

const ProjectItemDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 25px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: 0.3s;
  overflow: hidden;

  .type {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10px;
    color: var(--color-white);
    background: #222222;
  }

  .title {
    font-size: 22px;
    color: var(--color-secondary);
  }

  .desc {
    margin-top: 8px;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 2px 2px 14px rgba(77, 163, 255, 0.25);
  }
`;

export default function PubProjectItem(project: Project) {
  const { title, type, desc, skills, githubUrl, deployUrl } = project;

  const skillList = skills.map((skill) => {
    return (
      <li key={skill}>
        <Label>{skill}</Label>
      </li>
    );
  });

  return (
    <ProjectItemDiv>
      <span className="type">{type}</span>
      <div>
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
      <ul className="skill-list">{skillList}</ul>
      <div className="links">
        {githubUrl && (
          <CustomLink variant="gray" href={githubUrl}>
            GitHub Repository
          </CustomLink>
        )}
        <CustomLink variant="secondary" href={deployUrl!}>
          배포 URL
        </CustomLink>
      </div>
    </ProjectItemDiv>
  );
}
