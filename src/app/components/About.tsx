import { Target, Users, Shield } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Kasari?
          </h2>
          <p className="text-lg text-gray-600">
            In Nepali, "कसरी" (Kasari) means "How?" — the most powerful question 
            a voter can ask. We help you transform political promises into actionable policy questions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#003DA5]/10">
              <Target className="size-8 text-[#003DA5]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Ask the Right Questions</h3>
            <p className="text-gray-600">
              Access research-backed questions across education, health, economy, 
              infrastructure, and governance to hold candidates accountable.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DC143C]/10">
              <Shield className="size-8 text-[#DC143C]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Non-Partisan Platform</h3>
            <p className="text-gray-600">
              We don't support any political party. Our mission is to empower 
              informed civic participation, regardless of political affiliation.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#003DA5]/10">
              <Users className="size-8 text-[#003DA5]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Community Powered</h3>
            <p className="text-gray-600">
              Join thousands of voters across Nepal who are demanding transparency, 
              accountability, and real solutions from their representatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}