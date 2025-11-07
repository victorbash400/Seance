// Progress tracking utilities
export interface UserProgress {
  completedPaths: {
    [country: string]: {
      [path: string]: {
        completed: boolean;
        score: number;
        completedAt: string;
      };
    };
  };
}

export const getProgress = (): UserProgress => {
  if (typeof window === "undefined") {
    return { completedPaths: {} };
  }

  try {
    const stored = localStorage.getItem("seance-progress");
    return stored ? JSON.parse(stored) : { completedPaths: {} };
  } catch {
    return { completedPaths: {} };
  }
};

export const saveProgress = (country: string, path: string, score: number) => {
  if (typeof window === "undefined") return;

  const progress = getProgress();

  if (!progress.completedPaths[country]) {
    progress.completedPaths[country] = {};
  }

  progress.completedPaths[country][path] = {
    completed: true,
    score,
    completedAt: new Date().toISOString(),
  };

  localStorage.setItem("seance-progress", JSON.stringify(progress));
};

export const isPathCompleted = (country: string, path: string): boolean => {
  const progress = getProgress();
  return progress.completedPaths[country]?.[path]?.completed || false;
};

export const getPathScore = (country: string, path: string): number => {
  const progress = getProgress();
  return progress.completedPaths[country]?.[path]?.score || 0;
};
