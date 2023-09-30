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
          <div className="mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[15px] lg:mb-[10px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] sm:text-[18px] md:text-[22px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[15px] lg:mb-[10px] text-poppins">
              Name
            </text>
            <Field
              className="form-control w-[77.7vw] lg:w-[27vw] h-auto aspect-[308/30] lg:aspect-[520/50] rounded-[6px] lg:rounded-[10px] bg-white pl-[3vw] lg:pl-[1.25vw] text-[13px] sm:text-[17px] md:text-[21px] xl:text-[13px] lg:text-[11px] text-poppins"
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[15px] lg:mb-[10px] text-poppins flex flex-col ">
            <text className="font-medium text-[14px] sm:text-[18px] md:text-[22px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[15px] lg:mb-[10px] text-poppins">
              Email
            </text>
            <Field
              className="form-control w-[77.7vw] lg:w-[27vw] h-auto aspect-[308/30] lg:aspect-[520/50] rounded-[6px] lg:rounded-[10px] bg-white pl-[3vw] lg:pl-[1.25vw] text-[13px] sm:text-[17px] md:text-[21px] xl:text-[13px] lg:text-[11px] text-poppins"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[15px] lg:mb-[10px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] sm:text-[18px] md:text-[22px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[15px] lg:mb-[10px] text-poppins">
              Telephone Number
            </text>
            <Field
              className="form-control w-[77.7vw] lg:w-[27vw] h-auto aspect-[308/30] lg:aspect-[520/50] rounded-[6px] lg:rounded-[10px] bg-white  pl-[3vw] lg:pl-[1.25vw] sm:text-[17px] md:text-[21px] top-0 text-[13px] xl:text-[13px] lg:text-[11px] text-poppins"
              id="phone"
              type="phone"
              name="phone"
              placeholder="Your Number"
            />
          </div>

          <div className="mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[15px] lg:mb-[10px] text-poppins flex flex-col">
            <text className="font-medium text-[14px] sm:text-[18px] md:text-[22px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[15px] lg:mb-[10px] text-poppins">
              Message
            </text>
            <Field
              className="form-control w-[77.7vw] lg:w-[27vw] h-auto aspect-[307/151] lg:aspect-[520/120] rounded-[6px] lg:rounded-[15px] bg-white pl-[3vw] lg:pl-[1.25vw] text-[13px] sm:text-[17px] md:text-[21px] xl:text-[13px] lg:text-[11px] pt-[0.5vw] pr-[0.5vw] text-poppins"
              id="message"
              as="textarea"
              type="text"
              name="message"
              placeholder="Your Message"
            />
          </div>

          <div className="w-[77.7vw] lg:w-[27vw] flex flex-col items-center justify-center text-poppins">
            <button
              type="submit"
              className="btn hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] btn-primary w-[20.8vw] lg:w-[6.66vw] h-auto aspect-[75/27] lg:aspect-[128/47] bg-[#2E3362] text-white rounded-[6px] lg:rounded-[15px] flex items-center justify-center"
            >
              <text className="text-white font-bold text-[11px] sm:text-[16px] md:text-[20px] xl:text-[12px] lg:text-[10px] text-poppins">
                Submit
              </text>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
