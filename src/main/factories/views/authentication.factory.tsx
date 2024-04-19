import { AuthenticationView as LoginView } from "@/presentation";
import { makeLogin } from "../usecases";

export const AuthenticationView = () => {
  return <LoginView authentication={makeLogin()} />;
};
