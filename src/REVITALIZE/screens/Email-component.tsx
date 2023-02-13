import React, { createContext, useState } from 'react';

interface EmailContextType {
  email: string | null;
  setEmailGlobally: (email: string) => void;
}

export const EmailContext = createContext<EmailContextType>({ email: null, setEmailGlobally: () => {} });

const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [email, setEmailGlobally] = useState<string | null>(null);

  return (
    <EmailContext.Provider value={{ email, setEmailGlobally }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;