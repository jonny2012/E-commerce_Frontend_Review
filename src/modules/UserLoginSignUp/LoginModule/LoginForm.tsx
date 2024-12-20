import styles from "../LoginSignUpForm.module.scss";
import { Link } from "react-router-dom";
import { userApi } from "./../../../services/UserServices";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserLogin } from "./LoginTypes.dto";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query";


export const LoginForm = () => {

  const navigate = useNavigate()

const [createUser,{data,isError,isLoading,isSuccess,error}]= userApi.useGetLoginUserMutation()
  let LoginError = error

const { register, handleSubmit, formState } = useForm<IUserLogin>({
    mode: "onChange",
  });
const [errorMessage, setErrorMessage]= useState<string>()
  const onSubmit: SubmitHandler<IUserLogin> = (data) => {
    createUser(data)
  };

  useEffect(()=>{
    if(error){
      if ('data' in error) {
        const fetchError = error as FetchBaseQueryError;
        setErrorMessage((fetchError.data as { message?: string })?.message);
      } 
  }
    if(data){ navigate("/profile")
      console.log(data)
    }
  },[data, error])

  console.log(errorMessage)
  const emailErrors = formState.errors["email"]?.message;
  const passwordError = formState.errors["password"]?.message;
  return (
    <div className={styles.signUp}>
      <h1>Login to Exclusive</h1>
      <span>Enter your details below</span>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          className={styles.userDataInput}
          type="email"
          placeholder="Email"
          style={emailErrors ?{borderBottomColor:"red"}:{}}
          autoComplete="email"
          {...register("email", {
            required: "This field is  required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Invalid email address",
            
            },
       
          })}
        />
        {emailErrors && <p className={styles.errorMessage}>{emailErrors}</p>}
        {isError && <p className={styles.errorMessage}>{}</p>}
        <input
          className={styles.userDataInput}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          style={ passwordError?{borderBottomColor:"red"}:{}}
          {...register("password", {
            required: "This field is  required",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "Minimum eight characters, at least one letter and one number",
            },
          })}
        />
        {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
        {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
        <div
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          className={styles.submitBox}
        >
          <button
            style={{ padding: "15px 45px" }}
            className={styles.redButton}
            type="submit"
          >
            Login
          </button>
          <Link style={{ color: "#DB4444" }} to={"/"}>
            {" "}
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};