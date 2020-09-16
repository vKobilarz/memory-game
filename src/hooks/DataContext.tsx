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
  stage1?: Stage;
  stage2?: Stage;
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
  setIntroductionData(stages: Stage): void;
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

  function setIntroductionData({ totalGuesses, totalTimeSeconds }: Stage) {
    const stageRun = getActiveStageRun();
    const updatedUsersData = [...usersData];

    updatedUsersData[activeUserIndex].stageRuns[activeStageRunIndex] = {
      ...stageRun,
      introduction: {
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
        setIntroductionData,
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
