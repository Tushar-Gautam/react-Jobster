import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    margin-top: 0.8rem;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    z-index: -1;
    position: absolute;
    opacity: 0.27;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      position: static;
      opacity: 1;
    }
  }
  @media (max-width: 500px) {
    .page {
      min-height: calc(70vh - var(--nav-height));
      margin-top: -2rem;
    }
  }
`;
export default Wrapper;
