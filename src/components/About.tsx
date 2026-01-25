import { ReactTyped } from 'react-typed';
import CustomLink from './common/CustomLink';
import { StyledLabel } from './common/Label';

export function AboutTypedTitle() {
  return (
    <ReactTyped
      strings={['안녕하세요!\n프론트엔드 개발자 임한길 입니다.']}
      typeSpeed={60}
      backSpeed={40}
      backDelay={2000}
      loop
    >
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
          <p>
            깔끔한 UI, 자연스러운 인터랙션, 그리고 사용자 친화적인 웹 경험을
            좋아합니다.
            <br />
            React 기반 웹 애플리케이션과 인터랙션 구현에 관심이 많습니다.
            <br />늘 성실함과 우직함으로 끊임없이 배우고 발전하겠습니다!
          </p>
          <div className="links">
            <CustomLink
              variant="primary"
              size="lg"
              href="https://github.com/onewayay"
            >
              GitHub
            </CustomLink>
            <CustomLink variant="outline" size="lg" href="/resume/resume.pdf">
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
            <h3>Career</h3>
            <ul className="career-list">
              <li>
                <strong>
                  유영인포테크 <span>(2023.03 ~ 2024.09)</span>
                </strong>
                <p>
                  웹 퍼블리셔로 근무하며 홈페이지 제작, 웹 접근성 작업 및
                  유지보수 작업을 하였습니다.
                </p>
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
        </ul>
      </div>
    </section>
  );
}
