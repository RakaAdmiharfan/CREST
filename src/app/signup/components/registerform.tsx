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
          <div className="mb-[20px]">
            <h2 className="font-medium text-[14px] mb-[20px]">Email</h2>
            <Field
              className="form-control w-[39.6vw] h-auto aspect-[760/48] rounded-[15px] bg-[#E6EAF4] pl-[1.25vw] text-[13px]"
              id="email"
              name="email"
              placeholder="Email"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-[35px]">
            <h2 className="font-medium text-[14px] mb-[20px]">Password</h2>
            <Field
              className="form-control w-[39.6vw] h-auto aspect-[760/48] rounded-[15px] bg-[#E6EAF4] pl-[1.25vw] text-[13px]"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              component={PasswordInput}
            />
          </div>

          <div className="mb-[35px]">
            <h2 className="font-medium text-[14px] mb-[20px]">
              Confirm Password
            </h2>
            <Field
              className="form-control w-[39.6vw] h-auto aspect-[760/48] rounded-[15px] bg-[#E6EAF4] pl-[1.25vw] text-[13px]"
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
              <p className="text-[#2E3362] font-bold text-[12px]">Sign Up</p>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
