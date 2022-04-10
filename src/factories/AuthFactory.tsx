import { setCookie } from 'nookies';
import baseUrl from '../configs/axios';
import { IAuthRequest, IAuthResponse } from '../interfaces/auth';
import { IUser } from '../interfaces/user';

type AuthFactoryData = {
    me: () => Promise<IUser>;
    signIn: (form: IAuthRequest) => Promise<void>;
    signUp: (form: IAuthRequest) => Promise<void>;
    logout: () => void;
};

const AuthFactory = (): AuthFactoryData => {
    const me = async (): Promise<IUser> => {
        try {
            const token = localStorage.getItem('@cof:token');

            baseUrl.defaults.headers.common['Authorization'] = `Bearer ${token};`
            const { data } = await baseUrl.get<IUser>('/me');

            return data;
        } catch (err: any) {
            throw new Error(err.response.data.message);
        }
    }

    const signIn = async (form: IAuthRequest): Promise<void> => {
        try {
            const {
                data: { token },
            } = await baseUrl.post<IAuthResponse>('/login', form);
    
            setCookie(null, 'token', token, {
                maxAge: 86400, // duração de 1 dia
                path: '/',
            });
            return;
        } catch (err: any) {
            throw new Error(err.response.data.message);
        }
    };

    const signUp = async (form: IAuthRequest): Promise<void> => {
        try {
            const {
                data: { token },
            } = await baseUrl.post<IAuthResponse>('/register', form);
    
            setCookie(null, 'token', token, {
                maxAge: 86400, // duração de 1 dia
                path: '/',
            });
            return;
        } catch (err: any) {
            throw new Error(err.response.data.message);
        }
    };

    const logout = () => {
        
    };

    return {
        me, signIn, signUp, logout
    };
};

export default AuthFactory;
