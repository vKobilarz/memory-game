import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Stage {
  totalTimeSeconds: number;
  totalGuesses: number;
}

interface Stages {
  introduction?: Stage;
  wood1?: Stage;
  paper1?: Stage;
  glass1?: Stage;
  iron1?: Stage;
  plastic1?: Stage;
  wood2?: Stage;
  paper2?: Stage;
  glass2?: Stage;
  iron2?: Stage;
  plastic2?: Stage;
}

interface UserData {
  name: string;
  stageRuns: Stages[];
}

interface DataContextState {
  usersData: UserData[];
  createUser(params: CreateUserParams): void;
  getActiveUser(): UserData | null;
  getActiveStageRun(): Stages | null;
  setStageData(stages: ISetStageData): void;
}

interface ISetStageData extends Stage {
  stage: 'introduction' | 'wood1' | 'paper1' | 'glass1' | 'iron1' | 'plastic1' | 'wood2' | 'paper2' | 'glass2' | 'iron2' | 'plastic2'
}

interface CreateUserParams {
  name: string;
}

const DataContext = createContext<DataContextState>({} as DataContextState);

export const DataProvider: FC = ({ children }) => {
  const [usersData, setUsersData] = useState<UserData[]>(() => {
    const usersDataString = localStorage.getItem('@MemoryGame::users_data');

    return usersDataString ? JSON.parse(usersDataString) : [];
  });

  const [activeUserIndex, setActiveUserIndex] = useState(() => {
    const activeUserIndexString = localStorage.getItem(
      '@MemoryGame::active_user_index',
    );

    return activeUserIndexString ? JSON.parse(activeUserIndexString) : -1;
  });

  const [activeStageRunIndex, setActiveStageRunIndex] = useState(() => {
    const activeStageRunIndex = localStorage.getItem(
      '@MemoryGame::active_stage_run_index',
    );

    return activeStageRunIndex ? JSON.parse(activeStageRunIndex) : -1;
  });

  useEffect(() => {
    localStorage.setItem('@MemoryGame::users_data', JSON.stringify(usersData));
  }, [usersData]);

  useEffect(() => {
    localStorage.setItem(
      '@MemoryGame::active_user_index',
      JSON.stringify(activeUserIndex),
    );
  }, [activeUserIndex]);

  useEffect(() => {
    localStorage.setItem(
      '@MemoryGame::active_stage_run_index',
      JSON.stringify(activeStageRunIndex),
    );
  }, [activeStageRunIndex]);

  function createUser({ name }: CreateUserParams) {
    const userIndex = usersData.findIndex(u => u.name === name);

    const updatedUserDatas = [...usersData];
    if (userIndex >= 0) {
      setActiveStageRunIndex(usersData[userIndex].stageRuns.push({}) - 1);
    } else {
      updatedUserDatas.push({ name, stageRuns: [{}] });
      setActiveStageRunIndex(0);
    }

    const activeUserIndex = updatedUserDatas.findIndex(u => u.name === name);

    setActiveUserIndex(activeUserIndex);
    setUsersData(updatedUserDatas);
  }

  function getActiveUser() {
    const activeUser = usersData[activeUserIndex];

    return activeUser || null;
  }

  function getActiveStageRun() {
    const activeStageRun = getActiveUser()?.stageRuns[activeStageRunIndex];

    return activeStageRun || null;
  }

  function setStageData({ totalGuesses, totalTimeSeconds, stage }: ISetStageData) {
    const stageRun = getActiveStageRun();
    const updatedUsersData = [...usersData];

    updatedUsersData[activeUserIndex].stageRuns[activeStageRunIndex] = {
      ...stageRun,
      [stage]: {
        totalGuesses,
        totalTimeSeconds,
      },
    };

    setUsersData(updatedUsersData);
  }

  return (
    <DataContext.Provider
      value={{
        usersData,
        createUser,
        getActiveUser,
        getActiveStageRun,
        setStageData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useData(): DataContextState {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within an DataProvider');
  }

  return context;
}
