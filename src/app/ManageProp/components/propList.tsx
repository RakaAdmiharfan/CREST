import React, { useState } from "react";

export default function propList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([
    { id: 1, name: "Property 1", address: "Address 1" },
    { id: 2, name: "Property 2", address: "Address 2" },
    { id: 3, name: "Property 3", address: "Address 3" },
    // Add more properties here
  ]);
}
