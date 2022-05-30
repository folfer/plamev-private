import { useCallback, useState, useContext, ReactNode, useEffect } from "react";
import { createContext, useContextSelector } from "use-context-selector";
// interface User {
//   id: number;
//   email: string;
//   name: string;
//   phone: string;
//   groups: [];
// }

// interface AuthState {
//   token: string;
//   user: User;
// }

// interface SignInCredentials {
//   email: string;
//   password: string;
// }

interface AuthContextData {
  // user: User;
  // signIn(credentials: SignInCredentials): Promise<void>;
  // signOut(): void;
  newStep: number;
  setNewStep(step: number): void;
  setPlanType(planType: string): void;
  planType: string;
  petName: string;
  setPetName(petName: string): void;
}

interface ProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [newStep, setNewStep] = useState<number>(0);
  const [planType, setPlanType] = useState<string>("");
  const [petName, setPetName] = useState<string>("");

  // const [data, setData] = useState<AuthState>(() => {
  //   const token = localStorage.getItem("@SAE:token");
  //   const user = localStorage.getItem("@SAE:user");

  //   if (token && user) {
  //     return { token, user: JSON.parse(user) };
  //   }

  //   return {} as AuthState;
  // });

  // const signIn = useCallback(async ({ email, password }) => {
  //   const response = await api.post("/authenticate/token/obtain/", {
  //     email,
  //     password,
  //   });

  //   const { token, user } = response.data;

  //   localStorage.setItem("@PLAMEV:token", token);
  //   localStorage.setItem("@PLAMEV:user", JSON.stringify(user));

  //   setData({ token, user });
  // }, []);

  // const signOut = useCallback(() => {
  //   localStorage.removeItem("@PLAMEV:token");
  //   localStorage.removeItem("@PLAMEV:user");

  //   setData({} as AuthState);
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        newStep,
        setNewStep,
        setPlanType,
        planType,
        petName,
        setPetName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  return {
    newStep: useContextSelector(AuthContext, ({ newStep }) => newStep),
    setNewStep: useContextSelector(AuthContext, ({ setNewStep }) => setNewStep),
    setPlanType: useContextSelector(
      AuthContext,
      ({ setPlanType }) => setPlanType
    ),
    planType: useContextSelector(AuthContext, ({ planType }) => planType),
    petName: useContextSelector(AuthContext, ({ petName }) => petName),
    setPetName: useContextSelector(AuthContext, ({ setPetName }) => setPetName),
  };
}
