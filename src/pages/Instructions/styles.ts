import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100%;
`;

export const InstructionsContainer = styled.div`
  color: #435049;

  h4 {
    font-size: 38px;
    margin-bottom: 16px;
  }

  p {
    font-size: 30px;

    & + p {
      margin-top: 8px;
    }
  }
`;

interface NameContainerProps {
  error: boolean;
}

export const NameContainer = styled.form<NameContainerProps>`
  color: #435049;
  font-size: 38px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin: 16px;
    border-radius: 4px;
    padding: 4px;
    border: 1px solid ${({ error }) => (error ? 'red' : 'darkgray')};
    width: 360px;
  }

  button {
    background-color: transparent;
    border-color: transparent;
    color: darkblue;
    font-size: 64px;
  }
`;
