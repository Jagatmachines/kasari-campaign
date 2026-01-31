import { Search, FileText, Share2, Vote } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Choose Your Topic",
      description: "Select from key policy areas like education, healthcare, economy, infrastructure, or governance.",
      color: "blue"
    },
    {
      icon: FileText,
      number: "02",
      title: "Get Your Questions",
      description: "Access curated, research-backed questions designed to get clear, actionable answers from candidates.",
      color: "red"
    },
    {
      icon: Share2,
      number: "03",
      title: "Ask & Share",
      description: "Use these questions at rallies, town halls, or on social media. Make your voice heard.",
      color: "blue"
    },
    {
      icon: Vote,
      number: "04",
      title: "Vote Informed",
      description: "Make your decision based on real answers, not empty promises. Hold leaders accountable.",
      color: "red"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Four simple steps to become a more informed and empowered voter
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const bgColor = step.color === "blue" ? "bg-[#003DA5]" : "bg-[#DC143C]";
            const borderColor = step.color === "blue" ? "border-[#003DA5]/20" : "border-[#DC143C]/20";
            
            return (
              <div 
                key={index} 
                className={`relative bg-white rounded-xl p-6 border-2 ${borderColor} hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${bgColor}`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-gray-200">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}