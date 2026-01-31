import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Quote } from 'lucide-react';

export function Community() {
  const testimonials = [
    {
      quote: "Kasari helped me ask meaningful questions at a local rally. For the first time, I felt heard as a young voter.",
      name: "Priya S.",
      location: "Kathmandu",
      role: "First-time voter"
    },
    {
      quote: "As a teacher, I used these questions to educate my students about civic engagement. They're now more informed voters.",
      name: "Ramesh B.",
      location: "Pokhara",
      role: "Educator"
    },
    {
      quote: "I shared Kasari questions on social media and got thousands of shares. People are hungry for real accountability.",
      name: "Anjali T.",
      location: "Biratnagar",
      role: "Student activist"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50/50 via-white to-red-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the Movement
          </h2>
          <p className="text-lg text-gray-600">
            Thousands of Nepali voters are already using Kasari to demand accountability
          </p>
        </div>
        
        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1667184087086-ac955d1f300d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMGNvbW11bml0eSUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3Njk3NjczODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community discussion"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1523582407565-efee5cf4a353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMEFzaWFuJTIwc3R1ZGVudHMlMjBlbmdhZ2VkJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3Njk3NjczODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Youth engagement"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763478320236-beb72e6eca37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwU291dGglMjBBc2lhbiUyMHBlb3BsZSUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2OTc2NzM4OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Diverse community"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <Quote className="size-8 text-[#003DA5] mb-4" />
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}