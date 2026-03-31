import React from "react";

const ProductCard = ({ product }) => {
    const { name, price, billing, badge, description, features, image } = product;
    const badgeStyles = {
        "Best Seller": "bg-yellow-100 text-yellow-700",
        "Popular": "bg-purple-100 text-purple-700",
        "New": "bg-green-100 text-green-700"
    };

    return (
        <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 max-w-95 flex flex-col">

            {/* Badge */}
            {badge && (
                <span
                    className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-semibold ${badgeStyles[badge]}`}
                >
                    {badge}
                </span>
            )}

            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <img src={image} alt={name} className="w-7 h-7 object-contain" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#101727] mb-2">
                {name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-4">
                {description}
            </p>

            {/* Price */}
            <h2 className="text-2xl font-bold text-[#101727] mb-4">
                ${price}
                <span className="text-gray-400 text-sm font-medium">
                    /{billing}
                </span>
            </h2>

            {/* Features */}
            <ul className="space-y-2 mb-6 grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✔</span>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className="mt-auto w-full py-3 rounded-full text-white font-semibold
      bg-linear-to-r from-[#4F39F6] to-[#9514FA]
      hover:opacity-90 transition">
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;