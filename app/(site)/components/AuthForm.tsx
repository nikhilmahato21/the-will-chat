"use client";
import axios from "axios";
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import toast from "react-hot-toast";
<<<<<<< HEAD
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
=======
import { signIn } from "next-auth/react";
>>>>>>> f9d21b4badcc4e3dc20e8b81867f402f3f45bee1

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/users");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      //axios register
      axios
        .post("/api/register", data)
<<<<<<< HEAD
        .then(() => signIn("credentials", data))
=======
>>>>>>> f9d21b4badcc4e3dc20e8b81867f402f3f45bee1
        .catch(() => toast.error("something went wrong!"))
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      //axios
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged in");
<<<<<<< HEAD
            router.push("/users");
=======
>>>>>>> f9d21b4badcc4e3dc20e8b81867f402f3f45bee1
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Logged in");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="mt-8 mx-2 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow rounded-lg sm:px-10">
        <h2 className="mt-6 text-center text-2xl font-semibold leading-6 tracking-tight text-gray-900 font-concert">
          {variant === "LOGIN" ? "Sign In" : "Sign Up"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-center text-sm">
              <span
                className="
                bg-white 
                px-2
               text-gray-500"
              >
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>

        <div
          className="flex
         gap-2 
         justify-center
        text-sm
        mt-6
        px-2
        text-gray-500
        "
        >
          <div>
            {variant === "LOGIN"
              ? "New to thewill?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer ">
            {variant === "LOGIN" ? "Create an account" : "Log in"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
