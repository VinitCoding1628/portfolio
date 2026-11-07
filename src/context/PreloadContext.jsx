import React, { createContext, useContext, useState, useRef } from "react";

const PreloadContext = createContext({
  isLoading: true,
  isCompleted: false,
  hasAvatarAnimated: false,
  finishLoading: () => {},
  markAvatarAnimated: () => {},
});

export function PreloadProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasAvatarAnimated, setHasAvatarAnimated] = useState(false);

  const finishLoading = () => {
    setIsLoading(false);
    setIsCompleted(true);
  };

  const markAvatarAnimated = () => {
    setHasAvatarAnimated(true);
  };

  return (
    <PreloadContext.Provider
      value={{
        isLoading,
        isCompleted,
        hasAvatarAnimated,
        finishLoading,
        markAvatarAnimated,
      }}
    >
      {children}
    </PreloadContext.Provider>
  );
}

export function usePreload() {
  return useContext(PreloadContext);
}
