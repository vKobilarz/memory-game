import styled, { css } from 'styled-components';

interface ContainerParams {
  isFlipped: boolean;
  isHidden: boolean;
}

export const Container = styled.div<ContainerParams>`
  margin: 8px;
  height: 128px;
  width: 128px;

  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
    `}

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const Front = styled.button`
  background-color: transparent;
  border-color: transparent;
  backface-visibility: hidden;
  position: absolute;
`;

export const Back = styled.button`
  background-color: transparent;
  border-color: transparent;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  position: absolute;
`;
