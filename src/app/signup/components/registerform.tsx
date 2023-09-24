"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";

import PasswordInput from "./passwordinput";

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function LoginForm() {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <div className="mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] xl:text-[14px] lg:text-[12px] mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Email
            </text>
            <Field
              className="form-control w-[39.6vw] h-auto aspect-[760/48] rounded-[15px] bg-[#E6EAF4] pl-[1.25vw] text-[13px] xl:text-[13px] lg:text-[11px]"
              id="email"
              name="email"
              placeholder="Email"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] xl:text-[14px] lg:text-[12px] mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Password
            </text>
            <Field
              className="form-control w-[39.6vw] h-auto aspect-[760/48] rounded-[15px] bg-[#E6EAF4] pl-[1.25vw] text-[13px] xl:text-[13px] lg:text-[11px]"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              component={PasswordInput}
            />
          </div>

          <div className="mb-[35px] xl:mb-[35px] lg:mb-[25px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] xl:text-[14px] lg:text-[12px] mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Confirm Password
            </text>
            <Field
              className="form-control w-[39.6vw] h-auto aspect-[760/48] rounded-[15px] bg-[#E6EAF4] pl-[1.25vw] text-[13px] xl:text-[13px] lg:text-[11px]"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              component={PasswordInput}
            />
          </div>

          <div className="w-[39.4vw] flex justify-center">
            <button
              type="submit"
              className="btn btn-primary w-[5.93vw] h-auto aspect-[114/47] text-[#2E3362] border-[#2E3362] border-[3px] rounded-[15px] flex items-center justify-center"
            >
              <text className="text-[#2E3362] font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                Sign Up
              </text>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
