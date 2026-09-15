'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface PlotMapContextType {
  isOpen: boolean;
  activePlot: string | null;
  openPlotMap: (plotNumber?: string) => void;
  closePlotMap: () => void;
  setActivePlot: (plotNumber: string) => void;
}

const PlotMapContext = createContext<PlotMapContextType | undefined>(undefined);

export function PlotMapProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePlot, setActivePlotState] = useState<string | null>('198');

  const openPlotMap = useCallback((plotNumber?: string) => {
    if (plotNumber) {
      setActivePlotState(plotNumber);
    }
    setIsOpen(true);
  }, []);

  const closePlotMap = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setActivePlot = useCallback((plotNumber: string) => {
    setActivePlotState(plotNumber);
  }, []);

  return (
    <PlotMapContext.Provider
      value={{
        isOpen,
        activePlot,
        openPlotMap,
        closePlotMap,
        setActivePlot,
      }}
    >
      {children}
    </PlotMapContext.Provider>
  );
}

export function usePlotMapModal() {
  const context = useContext(PlotMapContext);
  if (!context) {
    throw new Error('usePlotMapModal must be used within a PlotMapProvider');
  }
  return context;
}
