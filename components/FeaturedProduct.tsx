// components/FeaturedProducts.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Star } from 'lucide-react';

type FeaturedItem = {
  id: string;
  name: string;
  category: 'Premium' | 'New' | 'Refurbished' | 'Other';
  price?: number | null;
  originalPrice?: number | null;
  rating?: number;
  reviews?: number;
  image: string;
  features: string[];
  href: string; // where to view/enquire
};

const products: FeaturedItem[] = [
  {
    id: 'gwagon-amg-style-20',
    name: 'Mercedes G-Wagon W463 AMG Style Wheels',
    category: 'Premium',
    price: null, // encourage contact for best price
    originalPrice: null,
    rating: 5.0,
    reviews: 12,
    image: '/images/shop/gwagen/1.JPG', // ensure this exists under public/
    features: ['20×9.5J ET48', '5×130 • CB 84.1mm', 'Michelin Latitude Sport 275/50 R20'],
    href: '/shop',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Alloy Wheels</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            New, refurbished and professionally finished sets — load-rated, true, and ready to bolt on.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/shop"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              View Current Listing
            </Link>
            
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex justify-center mb-12">
          {products.map((product) => {
            const badgeClasses =
              product.category === 'Premium'
                ? 'bg-yellow-500 text-black'
                : product.category === 'New'
                ? 'bg-green-600 text-white'
                : product.category === 'Refurbished'
                ? 'bg-yellow-500 text-black'
                : 'bg-blue-600 text-white';

            return (
              <article
                key={product.id}
                className="bg-white border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group max-w-md w-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                      priority
                    />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${badgeClasses}`}>
                      {product.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={product.href}
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                      aria-label="Preview product"
                    >
                      <Eye className="w-4 h-4 text-gray-600" />
                    </Link>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                  {/* Rating */}
                  {(product.rating || product.reviews) && (
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating ?? 0)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {!!product.reviews && (
                        <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                      )}
                    </div>
                  )}

                  {/* Features */}
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/10 px-3 py-1.5 ring-1 ring-emerald-600/20">
                        <span className="text-emerald-600 font-extrabold">£1195</span>
                        <span className="h-1 w-1 rounded-full bg-emerald-600" />
                        <span className="text-xs text-emerald-700">or Best Offer</span>
                    </div>
                    {product.originalPrice && typeof product.price === 'number' && (
                        <span className="text-sm text-gray-500 line-through">£{product.originalPrice}</span>
                    )}
                    </div>


                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href={product.href}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                    >
                      View / Enquire
                    </Link>
                    <Link
                      href={product.href}
                      className="border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors text-center"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Can’t find what you’re after?</h3>
          <p className="text-lg mb-6 opacity-90">
            We source wheels across the UK. Tell us your vehicle — we’ll do the rest.
          </p>
          <Link
            href="/services"
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
