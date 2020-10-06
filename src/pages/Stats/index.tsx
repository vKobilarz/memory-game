import React, { FC } from 'react';

import Container from '../../components/Container';
import { useData } from '../../hooks/DataContext';
import {
  StatsCard,
  StatsContainer,
  GameStats,
  GameStatsItem,
  StatsCardTitle,
  GameStatsContent,
  GameStatsTitle,
} from './styles';

const Stats: FC = () => {
  const { usersData } = useData();

  return (
    <Container>
      <h1>Relatórios dos Jogadores</h1>
      <StatsContainer>
        {usersData.map((user, i) => (
          <StatsCard key={`${user.name}_${i}`}>
            <StatsCardTitle>Jogador: {user.name}</StatsCardTitle>
            {user.stageRuns.map((stageRun, j) => (
              <GameStats key={j}>
                <GameStatsTitle>Jogo {j + 1}</GameStatsTitle>
                <GameStatsContent>
                  {stageRun.introduction ? (
                    <GameStatsItem>
                      <p>Introdução</p>
                      <p>
                        Número de tentativas:
                        {stageRun.introduction?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.introduction?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  ) : (
                    <GameStatsItem>
                      <p>* Introdução não finalizada</p>
                    </GameStatsItem>
                  )}
                  {/* {stageRun.stage2 ? (
                    <GameStatsItem>
                      <p>Terceira fase</p>
                      <p>
                        Número de tentativas:
                        {stageRun.stage2?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.stage2?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  ) : null} */}
                </GameStatsContent>
              </GameStats>
            ))}
          </StatsCard>
        ))}
      </StatsContainer>
    </Container>
  );
};

export default Stats;
