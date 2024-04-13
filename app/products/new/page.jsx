"use client";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";
const NewProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const [submitting, setSubmitting] = useState(false);
  console.log("Parent:", product);
  const router = useRouter();
  const createProduct = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const data = product;
      console.log("parent:", data);
      axios
        .post("/api/products", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(router.push("/products"));
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Layout>
      <ProductForm
        type="New"
        product={product}
        setProduct={setProduct}
        submitting={submitting}
        handleSubmit={createProduct}
      />
    </Layout>
  );
};

export default NewProduct;
