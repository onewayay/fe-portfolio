import styled from 'styled-components';
import type { Project } from '../types/project';
import CustomLink from './common/CustomLink';
import Label from './common/Label';

const ProjectItemLi = styled.li`
  width: calc((100% - 50px) / 2);
  height: fit-content;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: 0.3s;
  overflow: hidden;

  &:hover {
    box-shadow: 2px 2px 14px rgba(48, 211, 183, 0.25);
  }
`;

const ProjectThumbnail = styled.div<{ $bgImg: string }>`
  position: relative;
  width: 100%;
  height: 300px;
  background: url(${(props) => props.$bgImg}) no-repeat center;
  background-size: cover;

  span {
    position: absolute;
    bottom: 12px;
    left: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10px;
    color: var(--color-white);
    background: #222222;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 25px;

  .title {
    font-size: 22px;
    color: var(--color-primary);
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
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;

export default function FeProjectItem(project: Project) {
  const { id, title, bgImg, type, desc, skills, notionUrl, deployUrl } =
    project;

  const skillList = skills.map((skill) => {
    return (
      <li key={skill}>
        <Label>{skill}</Label>
      </li>
    );
  });

  return (
    <ProjectItemLi key={id} className="move-item">
      <ProjectThumbnail $bgImg={bgImg!}>
        <span>{type}</span>
      </ProjectThumbnail>
      <ProjectInfo>
        <div>
          <h3 className="title">{title}</h3>
          <p className="desc">{desc}</p>
        </div>
        <ul className="skill-list">{skillList}</ul>
        <div className="links">
          {notionUrl && (
            <CustomLink variant="gray" size="base" href={notionUrl}>
              프로젝트 자세히 보기
            </CustomLink>
          )}
          {deployUrl && (
            <CustomLink variant="primary" size="base" href={deployUrl}>
              배포 URL
            </CustomLink>
          )}
        </div>
      </ProjectInfo>
    </ProjectItemLi>
  );
}
