"use client";

import { AUTH_TOKEN } from "@/services/axios/httpClient";
import { Tokens } from "@/services/axios/types/auth";
import { User } from "@/services/axios/types/user";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AuthActionsContext,
  AuthContext,
  AuthTokensContext,
  TokensInfo,
} from "./auth-context";
import Cookies from "js-cookie";
import { authApi } from "../axios/auth";

function AuthProvider(props: PropsWithChildren<{}>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const tokensInfoRef = useRef<Tokens>({
    apiToken: "",
    tokenType: "Bearer",
    expiresIn: 0,
    userId: 0,
  });

  const setTokensInfoRef = useCallback((tokens: TokensInfo) => {
    tokensInfoRef.current = tokens ?? {
      apiToken: "",
      tokenType: "Bearer",
      expiresIn: 0,
      userId: 0,
    };
  }, []);

  const setTokensInfo = useCallback(
    (tokensInfo: TokensInfo) => {
      setTokensInfoRef(tokensInfo);

      if (!tokensInfo) {
        Cookies.remove(AUTH_TOKEN);
        setUser(null);
        setIsLoaded(false);
        return;
      }
      Cookies.set(AUTH_TOKEN, JSON.stringify(tokensInfo), {
        expires: parseFloat((tokensInfo.expiresIn / 1440).toFixed(2)),
      });
      verifyToken();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setTokensInfoRef]
  );

  const logOut = useCallback(async () => {
    if (tokensInfoRef.current.apiToken) {
      await authApi.logout();
    }
    setTokensInfo(null);
  }, [setTokensInfo]);

  const verifyToken = useCallback(async () => {
    const tokens = JSON.parse(Cookies.get(AUTH_TOKEN) ?? "null") as TokensInfo;

    setTokensInfoRef(tokens);

    try {
      if (tokens?.apiToken) {
        const { data: user } = await authApi.verifyToken({
          token: tokens.apiToken,
        });

        if (!user) {
          Cookies.remove(AUTH_TOKEN);
          logOut();
          return;
        }

        setUser(user);
      }
    } catch {
      logOut();
    } finally {
      setIsLoaded(true);
    }
  }, [logOut, setTokensInfoRef]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken, setTokensInfo]);

  const contextValue = useMemo(
    () => ({
      isLoaded,
      user,
    }),
    [isLoaded, user]
  );

  const contextActionsValue = useMemo(
    () => ({
      setUser,
      logOut,
    }),
    [logOut]
  );

  const contextTokensValue = useMemo(
    () => ({
      tokensInfoRef,
      setTokensInfo,
    }),
    [setTokensInfo]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <AuthActionsContext.Provider value={contextActionsValue}>
        <AuthTokensContext.Provider value={contextTokensValue}>
          {props.children}
        </AuthTokensContext.Provider>
      </AuthActionsContext.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
