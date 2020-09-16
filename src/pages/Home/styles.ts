import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > h1 {
    color: #435049;
    font-size: 64px;
  }

  a {
    background-color: transparent;
    border: transparent;
    color: darkblue;
    text-decoration: none;

    > h2 {
      font-size: 80px;
    }
    > h3 {
      font-size: 52px;
    }
  }
`;
