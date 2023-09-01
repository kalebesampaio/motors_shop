import { ReactNode, createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { api } from "../services/api";
import { notify } from "../utils/toast";
interface ListProvaiderProps {
  children: ReactNode;
}

interface DataLogin {
  email?: string;
  password?: string;
}

interface IUser {
  id: number;
  abbreviation: string;
  address: IAddress;
  admin: boolean;
  birthday: string;
  cpf: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string;
  descripition: string;
  phone: string;
  seller: boolean;
  email: string;
  name: string;
  password: string;
}
interface IAddress {
  cep: string;
  city: string;
  complement: string;
  number: string;
  state: string;
}

export interface IUserContext {
  user: IUser | null;
  signIn: (data: DataLogin) => void;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}
export interface IToken {
  iat: number;
  exp: number;
  sub: string;
}

export const AuthContext = createContext({} as IUserContext);

export const AuthProvider = ({ children }: ListProvaiderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("@TOKEN");

        if (!token) {
          return;
        }

        const { sub }: IToken = jwtDecode(token);

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const response = await api.get(`users/${sub}`);

        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const signIn = async (data: DataLogin) => {
    const response = await api.post("/login", data).catch((err) => {
      console.log(err);
      notify("Login failed");
    });

    const { token } = response?.data;
    notify("Login sucess");

    const { sub }: IToken = jwtDecode(token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    localStorage.setItem("@TOKEN", token);
    localStorage.setItem("@USERID", sub);
    const res = await api.get(`users/${sub}`);
    setUser(res.data);

    const toNavigate = location.state?.pathname || "/home";

    navigate(toNavigate);
  };

  return (
    <AuthContext.Provider value={{ signIn, user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
