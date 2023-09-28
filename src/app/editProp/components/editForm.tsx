"use client";

import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import InputField from "./inputBox";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

const EditFormComponent: React.FC = () => {
  const [initialData, setInitialData] = useState({
    namaProperti: "",
    Alamat: "",
    Latitude: "",
    Longitude: "",
    BasePrice: "",
    Multiplier: "",
    Tipe: "",
    DeskripsiBisnis: "",
    DeskripsiPribadi: "",
  });

  // const router = useRouter();
  // const { id } = router.query;

  // Function to fetch data from the database (you need to implement this)
  const fetchDataFromDatabase = async () => {
    try {
      // Replace with actual fetch logic to get data from your database
      const response = await fetch("your-database-api-endpoint");
      const data = await response.json();
      setInitialData(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Use useEffect to fetch data from the database when the component mounts
  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  const handleSubmit = (values: typeof initialData) => {
    console.log("Form submitted with values:", values);
    // Here, you can send the updated values back to your database
    // using an API call or any other method.
  };

  return (
    <Formik initialValues={initialData} onSubmit={handleSubmit}>
      <Form>
        <div className="Nama Properti mb-[20px]">
          <h5 className="text-poppins font-medium mb-[20px]">
            {"Nama Properti"}
          </h5>
          <div className="w-[68.75vw]">
            <InputField
              name="namaProperti"
              label="Nama Properti"
              placeholder="Nama Properti"
            />
          </div>
        </div>

        <div className="Alamat mb-[20px]">
          <h5 className="text-poppins font-medium mb-[20px]">Alamat</h5>
          <div className="w-[68.75vw]">
            <InputField name="Alamat" label="Alamat" placeholder="Alamat" />
          </div>
        </div>

        <div className="ltlo flex flex-row mb-[20px]">
          <div className="Latitude mr-[44px]">
            <h5 className="text-poppins font-medium mb-[20px]">Latitude</h5>
            <div className="w-[33.23vw]">
              <InputField
                name="Latitude"
                label="Latitude"
                placeholder="Latitude"
              />
            </div>
          </div>

          <div className="Longitude">
            <h5 className="text-poppins font-medium mb-[20px]">Longitude</h5>
            <div className="w-[33.23vw]">
              <InputField
                name="Longitude"
                label="Longitude"
                placeholder="Longitude"
              />
            </div>
          </div>
        </div>

        <div className="cp flex flex-row mb-[20px]">
          <div className="Agent Name mr-[44px]">
            <h5 className="text-poppins font-medium mb-[20px]">Agent Name</h5>
            <div className="w-[33.23vw]">
              <InputField
                name="AgentName"
                label="Agent Name"
                placeholder="Agent Name"
              />
            </div>
          </div>

          <div className="Agent ID">
            <h5 className="text-poppins font-medium mb-[20px]">Agent ID</h5>
            <div className="w-[33.23vw]">
              <InputField
                name="AgentID"
                label="Agent ID"
                placeholder="Agent ID"
              />
            </div>
          </div>
        </div>

        <div className="BPMT flex flex-row mb-[20px]">
          <div className="Base Price mr-[44px]">
            <h5 className="text-poppins font-medium mb-[20px]">Base Price</h5>
            <div className="w-[18.95vw]">
              <InputField
                name="BasePrice"
                label="Base Price"
                placeholder="Base Price"
              />
            </div>
          </div>

          <div className="Multiplier mr-[44px]">
            <h5 className="text-poppins font-medium mb-[20px]">Multiplier</h5>
            <div className="w-[11.97vw]">
              <InputField
                name="Multiplier"
                label="Multiplier"
                placeholder="Multiplier"
              />
            </div>
          </div>

          <div className="Tipe">
            <h5 className="text-poppins font-medium mb-[20px]">Tipe</h5>
            <div className="w-[33.22vw]">
              <InputField name="Tipe" label="Tipe" placeholder="Tipe" />
            </div>
          </div>
        </div>

        <div className="Deskripsi Bisnis mb-[20px]">
          <h5 className="text-poppins font-medium mb-[20px]">
            Deskripsi Bisnis
          </h5>
          <div className="w-[68.75vw] h-[184px]">
            <InputField
              as="textarea"
              name="DeskripsiBisnis"
              label="Deskripsi Bisnis"
              placeholder="Deskripsi Bisnis"
            />
          </div>
        </div>

        <div className="Deskripsi Pribadi mb-[20px]">
          <h5 className="text-poppins font-medium mb-[20px]">
            Deskripsi Pribadi
          </h5>
          <div className="w-[68.75vw] h-[184px]">
            <InputField
              as="textarea"
              name="DeskripsiPribadi"
              label="Deskripsi Pribadi"
              placeholder="Deskripsi Pribadi"
            />
          </div>
        </div>

        <div className="mx-[596px] mt-[64px] mb-[84px]">
          <button
            type="submit"
            className="bg-[#2E3362] text-white p-2 rounded-[15px] items-center justify-center px-[30px] py-[10px]"
          >
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditFormComponent;
