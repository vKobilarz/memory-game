import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 100%;
  text-align: center;
`;

export const InstructionsContainer = styled.div`
  color: #435049;

  h4 {
    font-size: 38px;
    margin-bottom: 16px;
  }

  p {
    font-size: 30px;
    padding: 32px;
  }

  a {
    text-decoration: none;
    color: darkblue;
    font-size: 48px;
  }
`;
