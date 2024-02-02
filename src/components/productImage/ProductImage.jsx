"use client";

import styles from "./productImage.module.scss";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const ProductImage = ({ images, title }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const mainImageRef = useRef(null);

  const handleSideImageClick = (index) => {
    setSelectedImageIndex(index);
    scrollMainImageIntoView(index);
  };

  const scrollMainImageIntoView = (index) => {
    if (mainImageRef.current) {
      mainImageRef.current.children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <div className={styles.images}>
      <div className={styles.sideimages}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.sidenav} ${selectedImageIndex === index ? styles.selected : ''}`}
            onClick={() => handleSideImageClick(index)}
          >
            <Image
              className={styles.sideimage}
              src={`/images/products/${image}`}
              width={60}
              height={60}
              alt={title}
            />
          </div>
        ))}
      </div>
      <div className={styles.mainimage} ref={mainImageRef}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/images/products/${image}`}
            width={400}
            height={400}
            alt={title}
            priority={index === 0 ? true : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
