import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  img {
    height: 128px;
    width: 128px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
`;

export const LostPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #435049;
  font-size: 28px;

  h4 {
    margin-bottom: 32px;
  }

  a {
    color: darkblue;
    font-size: 58px;

    text-decoration: none;
  }
`;
