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
                  {stageRun.wood1 && (
                    <GameStatsItem>
                      <p>Madeira I</p>
                      <p>
                        Número de tentativas:
                        {stageRun.wood1?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.wood1?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.paper1 && (
                    <GameStatsItem>
                      <p>Papel I</p>
                      <p>
                        Número de tentativas:
                        {stageRun.paper1?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.paper1?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.glass1 && (
                    <GameStatsItem>
                      <p>Vidro I</p>
                      <p>
                        Número de tentativas:
                        {stageRun.glass1?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.glass1?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.iron1 && (
                    <GameStatsItem>
                      <p>Ferro I</p>
                      <p>
                        Número de tentativas:
                        {stageRun.iron1?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.iron1?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.plastic1 && (
                    <GameStatsItem>
                      <p>Plástico I</p>
                      <p>
                        Número de tentativas:
                        {stageRun.plastic1?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.plastic1?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.wood2 && (
                    <GameStatsItem>
                      <p>Madeira II</p>
                      <p>
                        Número de tentativas:
                        {stageRun.wood2?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.wood2?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.paper2 && (
                    <GameStatsItem>
                      <p>Papel II</p>
                      <p>
                        Número de tentativas:
                        {stageRun.paper2?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.paper2?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.glass2 && (
                    <GameStatsItem>
                      <p>Vidro II</p>
                      <p>
                        Número de tentativas:
                        {stageRun.glass2?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.glass2?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.iron2 && (
                    <GameStatsItem>
                      <p>Ferro II</p>
                      <p>
                        Número de tentativas:
                        {stageRun.iron2?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.iron2?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
                  {stageRun.plastic2 && (
                    <GameStatsItem>
                      <p>Plástico II</p>
                      <p>
                        Número de tentativas:
                        {stageRun.plastic2?.totalGuesses}
                      </p>
                      <p>
                        Duração:
                        {Math.floor(stageRun.plastic2?.totalTimeSeconds)}
                        segundos
                      </p>
                    </GameStatsItem>
                  )}
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
