import React from "react";

interface ICONTEXTAPIPROPS {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

interface ICONTEXTAPISERVICEPROPS {
  children: React.ReactNode;
}

export const ContextApi = React.createContext<ICONTEXTAPIPROPS>(
  {} as ICONTEXTAPIPROPS
);

export function ContextApiService({ children }: ICONTEXTAPISERVICEPROPS) {
  const [isOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ContextApi.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </ContextApi.Provider>
  );
}
