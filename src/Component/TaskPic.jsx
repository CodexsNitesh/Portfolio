import React from "react";

const Ecompic = () => {
  const ecommerceImages = [
    "/Task1.png", 
    "/Task2.png",
    "/Task3.png",
    "/Task4.png",
    "/Task5.png",
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Inventory Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {ecommerceImages.map((src, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={src} alt={`Ecommerce ${idx + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecompic;
