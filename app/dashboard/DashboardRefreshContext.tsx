"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type DashboardRefreshContextType = {
  refreshKey: number;
  triggerRefresh: () => void;
};

const DashboardRefreshContext = createContext<DashboardRefreshContextType | undefined>(undefined);

export function DashboardRefreshProvider({ children }: { children: ReactNode }) {
  const [refreshKey, setRefreshKey] = useState(0);
  const triggerRefresh = () => setRefreshKey((k) => k + 1);

  return (
    <DashboardRefreshContext.Provider value={{ refreshKey, triggerRefresh }}>
      {children}
    </DashboardRefreshContext.Provider>
  );
}

export function useDashboardRefresh() {
  const ctx = useContext(DashboardRefreshContext);
  return ctx;
}