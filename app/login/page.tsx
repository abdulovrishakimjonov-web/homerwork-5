"use client";
import { Button } from "@/Components/ui/button";
import { signIn } from "next-auth/react";

const Login = () => {
  const loginWithGitHub = () => {
    return signIn("github", {
      callbackUrl: "/",
      redirect: true,
    });
  };
  return (
    <div>
      Login with GitHub
      <Button
        onClick={loginWithGitHub}
        className="p-2 px-4 bg-amber-300 rounded-2xl text-white cursor-pointer"
      >
        Login GitHub
      </Button>
    </div>
  );
};

export default Login;
