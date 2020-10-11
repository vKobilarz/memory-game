import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
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

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    border: 3px solid steelblue;
    border-radius: 8%;
    margin: 8px;

    p {
      text-decoration: none;
      text-align: center;
    }

    img {
      height: 150px;
      width: 150px;
    }
  }
`;