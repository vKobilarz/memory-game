import styled from 'styled-components';

export const StatsContainer = styled.div`
  color: #435049;
  margin-top: 12px;
`;

export const StatsCard = styled.div`
  border-radius: 8px;
  border: 3px solid gray;
  background-color: rgba(240, 240, 240, 0.95);
  padding: 24px;
  margin-top: 12px;
`;

export const StatsCardTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const GameStats = styled.div`
  margin-top: 12px;
`;

export const GameStatsTitle = styled.div`
  font-style: italic;
  font-size: 20px;
`;

export const GameStatsContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 12px;
`;

export const GameStatsItem = styled.div`
  font-size: 20px;
  padding: 16px;
`;
