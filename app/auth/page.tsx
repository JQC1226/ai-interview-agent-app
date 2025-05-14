"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supobaseClient";

function Login() {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
      console.log("Sign in successful");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-8">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={400}
          height={100}
          className="w-[180px] rounded-2xl"
        />
        <div className="flex items-center flex-col">
          <Image
            src={"/login.png"}
            alt="login"
            width={600}
            height={400}
            className="w-[400px] h-[250px]"
          />
          <h2 className="text-2xl font-bold text-center">
            Welcome to Ai Interview Agent
          </h2>
          <p className="text-center text-gray-600 mt-5">
            Sign In With Google Authentication
          </p>
          <Button onClick={signInWithGoogle} className="mt-5 w-full">
            Login With Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
