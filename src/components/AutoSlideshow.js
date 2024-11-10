import React, { useState, useEffect } from "react";

const images = [
    "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-black-hybrid-clear-case-cover-for-iphone-12-images/DailyObjects-Black-Hybrid-Clear-Case-Cover-for-iPhone-12.png?tr=cm-pad_resize,v-3,w-412,h-490,dpr-2,q-60",
    "https://pngimg.com/d/iphone_14_PNG6.png",
    "https://www.spark.co.nz/content/dam/spark/images/product-images/devices/phones/apple/iphone-16/iphone-16/iPhone_16_Ultramarine_1.png",
    "https://images.samsung.com/is/image/samsung/p6pim/nz/sm-a356elvbxnz/gallery/nz-galaxy-a35-5g-sm-a356-sm-a356elvbxnz-540083422?$650_519_PNG$",
    "https://www.spark.co.nz/content/dam/spark/images/product-images/devices/phones/nokia/nokia-c32/nokia-c32-charcoal-4.png",
    "https://cdn11.bigcommerce.com/s-rv26v3fbbl/images/stencil/570x570/attribute_rule_images/25622_source_1727142646.png"
  ];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        }, 3000);

    return () => clearInterval(interval);}, []);

    const goToSlide = (index) => {setCurrentIndex(index); 
    };

    return (
        <div className="slideshow-container">
            <div className="slideshow">
            {images.map((image, index) => (
                <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
                    <img src={image} alt={`Slide ${index + 1}`}/>
                </div>
            ))}
            </div>

            <div className="dots-container">
                {images.map((_, index) => (
                <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => goToSlide(index)}></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
