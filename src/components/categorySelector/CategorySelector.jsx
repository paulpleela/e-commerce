"use client";

import styles from "./categorySelector.module.scss";
import { useState, useEffect } from "react";
import { useRouter, useParams, notFound } from "next/navigation";

const CategorySelector = () => {
  const router = useRouter();
  const params = useParams();

  const categories = [
    "all",
    "tables",
    "chairs",
    "shelves",
    "lighting",
    "decor",
  ];
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (!categories.includes(params.category) && !params.id) {
      notFound();
    }
    
    if (!params.id) {
      setCategory(params.category);
      document.getElementById(params.category).checked = true;
    }
  }, [params])

  const changeCategory = (value) => {
    setCategory(value);
    router.push(`/products/${value}`);
  };

  return (
    <div className={styles.container}>
      {categories.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="categories"
            value={option}
            checked={category === option}
            onChange={() => changeCategory(option)}
            className={styles.radio}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
