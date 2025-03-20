"use client";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.location.href = "/";
  });

  return <div>This page Not development</div>;
};

export default page;
