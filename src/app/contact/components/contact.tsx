"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  name: string;
  password: string;
  phone: number;
  message: string;
}

export default function ContactForm() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", password: "", phone: 0, message: "" }}
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
          <div className="mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] mb-[15px] text-poppins">
              Name
            </text>
            <Field
              className="form-control w-[27vw] h-auto aspect-[520/50] rounded-[10px] bg-white pl-[1.25vw] text-[13px] text-poppins"
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-[15px] text-poppins flex flex-col ">
            <text className="font-medium text-[14px] mb-[15px] text-poppins">
              Email
            </text>
            <Field
              className="form-control w-[27vw] h-auto aspect-[520/50] rounded-[10px] bg-white pl-[1.25vw] text-[13px] text-poppins"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] mb-[15px] text-poppins">
              Telephone Number
            </text>
            <Field
              className="form-control w-[27vw] h-auto aspect-[520/50] rounded-[15px] bg-white pl-[1.25vw] top-0 text-[13px] text-poppins"
              id="phone"
              type="number"
              name="phone"
              placeholder="Your Number"
            />
          </div>

          <div className="mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] mb-[15px] text-poppins">
              Message
            </text>
            <Field
              className="form-control w-[27vw] h-auto aspect-[520/120] rounded-[15px] bg-white pl-[1.25vw] text-[13px] text-poppins"
              id="message"
              type="text"
              name="message"
              placeholder="Your Message"
            />
          </div>

          <div className="w-[27vw] flex flex-col items-center justify-center text-poppins">
            <button
              type="submit"
              className="btn btn-primary w-[6.66vw] h-auto aspect-[128/47] bg-[#2E3362] text-white rounded-[15px] flex items-center justify-center"
            >
              <text className="text-white font-bold text-[12px] text-poppins">
                Submit
              </text>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
