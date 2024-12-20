import styles from "../LoginSignUpForm.module.scss";
import { Link, redirect } from "react-router-dom";
import { userApi } from "./../../../services/UserServices";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { IForm } from "./RegisterTypes.dto";

export const SignUpForm = () => {
  const [createUser, { isError, isSuccess, data, error, isLoading }] =
    userApi.useRegisterUserMutation();
  const navigate = useNavigate();
  let userData = data;


  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: "onChange",
  });
  const emailError = formState.errors["email"]?.message;
  const nameError = formState.errors["username"]?.message;
  const passwordError = formState.errors["password"]?.message;
  const onSubmit: SubmitHandler<IForm> = (data) => {
    createUser(data);
  };
  useEffect(() => {
    if (isSuccess) navigate("/login");
    console.log(isSuccess);
  }, [isSuccess]);

  return (
    <div className={styles.signUp}>
      <h1>Create an account</h1>
      <span>Enter your details below</span>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          className={styles.userDataInput}
          type="text"
          placeholder="Name"
          autoComplete="username"
          style={ nameError?{borderBottomColor:"red"}:{}}
          {...register("username", {
            required: "This field is  required",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Name can not contain caracters, symbols,numbers",
            },
            minLength: {
              value: 2,
              message: "Not valid Name length",
            },
          })}
        />
        {nameError && <p className={styles.errorMessage}>{nameError}</p>}
        <input
          className={styles.userDataInput}
          type="email"
          placeholder="Email"
          autoComplete="email"
          style={ emailError?{borderBottomColor:"red"}:{}}
          {...register("email", {
            required: "This field is  required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Invalid email address",
            },
          })}
        />
        {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        {isError && <p className={styles.errorMessage}>Error</p>}
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
        {passwordError && (
          <p className={styles.errorMessage}>{passwordError}</p>
        )}
        {isLoading ? <p>Loading</p> : null}

        <button className={styles.redButton} type="submit">
          Create Account
        </button>
      </form>
      <div className={styles.submitBox}>
        <div className={styles.questionBox}>
          <p>Already have account?</p>
          <Link style={{ color: "#DB4444" }} to={"/login"}>
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};
