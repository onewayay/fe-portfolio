import { ReactTyped } from 'react-typed';
import CustomLink from './common/CustomLink';
import { StyledLabel } from './common/Label';

export function AboutTypedTitle() {
  return (
    <ReactTyped strings={['안녕하세요!\n프론트엔드 개발자 임한길 입니다.']} typeSpeed={60} backSpeed={40} backDelay={2000} loop>
      <pre className="about-typed" />
    </ReactTyped>
  );
}

export default function About() {
  return (
    <section className="about" data-section="about">
      <div className="inner">
        <div className="about-title">
          <h2>
            <AboutTypedTitle />
          </h2>
          <ul>
            <li>깔끔한 UI와 사용자 친화적인 웹 경험을 위해 노력하는 개발자입니다.</li>
            <li>개발에 앞서 사용자 입장에서 생각하며 기획하는 것을 좋아합니다.</li>
            <li>작업자가 즐거우면 사용자에게도 즐거운 결과물이 나온다고 믿으며 언제나 긍정적인 마음과 함께 새로움에 도전하고 있습니다.</li>
          </ul>
          <div className="links">
            <CustomLink variant="primary" size="lg" href="https://github.com/onewayay">
              GitHub
            </CustomLink>
            <CustomLink variant="outline" size="lg" href="/resume/LIMHANGIL_PORTFOLIO_RESUME.pdf" download={true}>
              이력서 다운로드
            </CustomLink>
          </div>
        </div>
        <ul className="about-list">
          <li className="move-item">
            <h3>Profile</h3>
            <ul className="profile-list">
              <li>
                <strong>이름:</strong>
                <p>임한길</p>
              </li>
              <li>
                <strong>주소:</strong>
                <p>서울특별시 영등포구 영등포동2가 27-21 2층</p>
              </li>
              <li>
                <strong>연락처:</strong>
                <p>010-2532-5460</p>
              </li>
              <li>
                <strong>이메일:</strong>
                <p>onewayay@naver.com</p>
              </li>
            </ul>
          </li>
          <li className="move-item">
            <h3>Skills</h3>
            <ul className="skill-list">
              <li>
                <StyledLabel>HTML</StyledLabel>
              </li>
              <li>
                <StyledLabel>CSS</StyledLabel>
              </li>
              <li>
                <StyledLabel>Tailwind CSS</StyledLabel>
              </li>
              <li>
                <StyledLabel>shadcn/ui</StyledLabel>
              </li>
              <li>
                <StyledLabel>JavaScript</StyledLabel>
              </li>
              <li>
                <StyledLabel>jQuery</StyledLabel>
              </li>
              <li>
                <StyledLabel>TypeScript</StyledLabel>
              </li>
              <li>
                <StyledLabel>React</StyledLabel>
              </li>
              <li>
                <StyledLabel>Next.js</StyledLabel>
              </li>
              <li>
                <StyledLabel>Zustand</StyledLabel>
              </li>
              <li>
                <StyledLabel>Tanstack Query</StyledLabel>
              </li>
              <li>
                <StyledLabel>Figma</StyledLabel>
              </li>
            </ul>
          </li>
          <li className="move-item">
            <h3>Educated</h3>
            <ul className="educated-list">
              <li>
                <strong>
                  멋쟁이사자처럼 <span>(2025.02 ~ 2025.08)</span>
                </strong>
                <p>멋쟁이사자처럼 프론트엔드 부트캠프 13기 과정 수료</p>
              </li>
              <li>
                <strong>
                  하이미디어컴퓨터학원 <span>(2022.07 ~ 2023.01)</span>
                </strong>
                <p>UI/UX 웹디자인&웹퍼블리셔 과정 수료</p>
              </li>
            </ul>
          </li>
          <li className="move-item">
            <h3>Career</h3>
            <ul className="career-list">
              <li>
                <strong>
                  멋쟁이사자처럼 인턴십 <span>(2026.02)</span>
                </strong>
                <p>프론트엔드 단기 인턴으로 근무하며 AI 기술 블로그 글 생성 서비스 작업을 진행하였습니다.</p>
              </li>
              <li>
                <strong>
                  유영인포테크 <span>(2023.03 ~ 2024.09)</span>
                </strong>
                <p>웹 퍼블리셔로 근무하며 홈페이지 제작, 웹 접근성 작업 및 유지보수 작업을 하였습니다.</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
