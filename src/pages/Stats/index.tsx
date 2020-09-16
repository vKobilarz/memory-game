import React, { FC } from 'react';

import Container from '../../components/Container';
import { useData } from '../../hooks/DataContext';

const Stats: FC = () => {
  const { usersData } = useData();

  return (
    <Container>
      <h1>stats</h1>
    </Container>
  );
};

export default Stats;
