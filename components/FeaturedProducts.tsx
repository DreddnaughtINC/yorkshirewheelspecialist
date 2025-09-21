import React from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "BMW Style 313 Refurbished",
      category: "Refurbished",
      price: 295,
      originalPrice: 450,
      rating: 4.8,
      reviews: 24,
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["18\" Diameter", "Powder Coated", "Balanced & Tested"]
    },
    {
      id: 2,
      name: "Audi RS6 Style Wheels",
      category: "New",
      price: 520,
      originalPrice: null,
      rating: 4.9,
      reviews: 18,
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["19\" Diameter", "Gloss Black", "OEM Quality"]
    },
    {
      id: 3,
      name: "Mercedes AMG Replica",
      category: "Refurbished",
      price: 340,
      originalPrice: 495,
      rating: 4.7,
      reviews: 31,
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["20\" Diameter", "Diamond Cut", "Like New Condition"]
    },
    {
      id: 4,
      name: "VW Golf GTI Wheels",
      category: "Repaired",
      price: 185,
      originalPrice: 280,
      rating: 4.6,
      reviews: 42,
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["17\" Diameter", "Professionally Repaired", "6 Month Warranty"]
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Alloy Wheels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse our selection of new, refurbished, and professionally repaired wheels. 
            All products come with our quality guarantee and perfect fit promise.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              View All Products
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-green-600 hover:text-green-600 transition-colors">
              Filter by Car
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    product.category === 'New' ? 'bg-green-600 text-white' :
                    product.category === 'Refurbished' ? 'bg-yellow-500 text-black' :
                    'bg-blue-600 text-white'
                  }`}>
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>

                {/* Features */}
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">£{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">£{product.originalPrice}</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                      Save £{product.originalPrice - product.price}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-xl mb-6 opacity-90">
            We source wheels from over 50 manufacturers. Get in touch and we'll find the perfect match for your vehicle.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;