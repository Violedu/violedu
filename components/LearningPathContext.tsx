import React, { createContext, useState, useContext, ReactNode } from "react";

type LearningPathContextType = {
  learningPath: string;
  setLearningPath: (path: string) => void;
};

const LearningPathContext = createContext<LearningPathContextType | undefined>(undefined);

export const LearningPathProvider = ({ children }: { children: ReactNode }) => {
  const [learningPath, setLearningPath] = useState<string>("");

  return (
    <LearningPathContext.Provider value={{ learningPath, setLearningPath }}>
      {children}
    </LearningPathContext.Provider>
  );
};

export const useLearningPath = () => {
  const context = useContext(LearningPathContext);
  if (!context) {
    throw new Error("useLearningPath must be used within a LearningPathProvider");
  }
  return context;
};
