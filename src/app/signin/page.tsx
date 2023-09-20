"use client";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import '../globals.css'
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className="bg-white">
      <Button variant="darkblue">Log In</Button>
    </div>
    
  );
};

export default LoginPage;