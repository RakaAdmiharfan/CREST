"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";

import PasswordInput from "./passwordinput";

interface Values {
  newpassword: string;
  confirmPassword: string;
}

export default function ChangePasswordForm() {
  return (
    <div>
      <Formik
        initialValues={{ newpassword: "", confirmPassword: "" }}
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
          <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              New Password
            </text>
            <Field
              className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
              id="newpassword"
              type="password"
              name="newpassword"
              placeholder="New Password"
              component={PasswordInput}
            />
          </div>

          <div className="mb-[20px] sm:mb-[25px] md:mb-[30px] xl:mb-[35px] lg:mb-[25px] text-poppins flex flex-col">
            <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Confirm New Password
            </text>
            <Field
              className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              component={PasswordInput}
            />
          </div>

          <div className="w-[82.2vw] lg:w-[39.4vw] flex justify-center">
            <button
              type="submit"
              className="btn btn-primary hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] w-[17.5vw] lg:w-[5.93vw] h-auto aspect-[63/26] lg:aspect-[114/47] text-[#2E3362] border-[#2E3362] border-[3px] rounded-[8px] lg:rounded-[15px] flex items-center justify-center"
            >
              <text className="text-[#2E3362] font-bold text-[12px] sm:text-[15px] md:text-[18px] xl:text-[12px] lg:text-[10px] text-poppins">
                Confirm
              </text>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
