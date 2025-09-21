import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Sheffield",
      rating: 5,
      text: "Absolutely fantastic service! My BMW wheels were badly kerbed and I thought they were beyond repair. Yorkshire Wheel Specialist made them look brand new again. The mobile service was so convenient too.",
      service: "Mobile Repair Service",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Mike Thompson",
      location: "Rotherham",
      rating: 5,
      text: "Professional, reliable, and reasonably priced. Had all four wheels refurbished and they look better than when I bought the car! Highly recommend their workshop service.",
      service: "Full Refurbishment",
      avatar: "MT"
    },
    {
      id: 3,
      name: "Emma Davies",
      location: "Doncaster",
      rating: 5,
      text: "Great communication throughout the process. They came to my office car park and repaired my Audi wheels while I was at work. Couldn't be happier with the results and convenience.",
      service: "Mobile Repair Service",
      avatar: "ED"
    },
    {
      id: 4,
      name: "James Wilson",
      location: "Barnsley",
      rating: 5,
      text: "I've used Yorkshire Wheel Specialist three times now for different cars. Always excellent quality work and fair pricing. They're my go-to for any wheel repairs or refurbishments.",
      service: "Repeat Customer",
      avatar: "JW"
    },
    {
      id: 5,
      name: "Lisa Carter",
      location: "Chesterfield",
      rating: 5,
      text: "Cracked wheel on my Mercedes was welded and refinished perfectly. You can't even tell where the damage was. The 12-month warranty gives great peace of mind too.",
      service: "Crack Repair",
      avatar: "LC"
    },
    {
      id: 6,
      name: "David Brown",
      location: "Wakefield",
      rating: 5,
      text: "Bought refurbished wheels from their online shop. Perfect fit, great quality, and saved me hundreds compared to buying new. Fast delivery and excellent customer service.",
      service: "Online Purchase",
      avatar: "DB"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what hundreds of satisfied customers 
            across Yorkshire have to say about our wheel repair and refurbishment services.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-green-600 mb-4" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600 font-medium">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white mt-16">
          <h3 className="text-2xl font-bold mb-4">Had a Great Experience?</h3>
          <p className="text-xl mb-6 opacity-90">
            We'd love to hear about your experience with Yorkshire Wheel Specialist. 
            Leave us a review and help other customers make the right choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Leave Google Review
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Write Testimonial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;