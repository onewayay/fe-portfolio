import styled from 'styled-components';

const FixedHeader = styled.header`
  position: fixed;
  top: 40px;
  right: 40px;

  ul {
    display: flex;
    gap: 24px;

    li {
      transition: 0.3s;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;

export default function Header() {
  const onClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onClickMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = e.currentTarget.dataset.scrollTarget;
    const target = document.querySelector(`[data-section="${targetName}"]`);

    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <FixedHeader>
      <ul>
        <li>
          <button type="button" onClick={onClickTop}>
            &lt;top /&gt;
          </button>
        </li>
        <li>
          <button
            type="button"
            data-scroll-target="about"
            onClick={onClickMove}
          >
            &lt;about /&gt;
          </button>
        </li>
        <li>
          <button
            type="button"
            data-scroll-target="projects"
            onClick={onClickMove}
          >
            &lt;projects /&gt;
          </button>
        </li>
      </ul>
    </FixedHeader>
  );
}
