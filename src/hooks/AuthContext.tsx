import {
  useCallback,
  useState,
  useContext,
  ReactNode,
  useEffect,
  createContext,
} from 'react';
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

interface IPetDetails {
  petName: string;
  birthDate: string;
}

interface AuthContextData {
  // user: User;
  // signIn(credentials: SignInCredentials): Promise<void>;
  // signOut(): void;
  newStep: number;
  setNewStep(step: number): void;
  setPlanType(planType: string): void;
  planType: string;
  pet: any;
  setPet(petName: any): void;
  setPlanName(planName: string): void;
  planName: string;
}

interface ProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [newStep, setNewStep] = useState<number>(0);
  const [planType, setPlanType] = useState<string>('');
  const [planName, setPlanName] = useState<string>('');
  const [pet, setPet] = useState<IPetDetails[]>();

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
        pet,
        setPet,
        setPlanName,
        planName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth precisa ser utilizado junto ao AuthProvider');
  }

  return context;
}
