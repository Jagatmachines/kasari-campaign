import { GraduationCap, Heart, TrendingUp, Building2, Scale, Leaf } from 'lucide-react';

export function PolicyAreas() {
  const areas = [
    {
      icon: GraduationCap,
      title: "Education",
      questions: [
        "How will you improve school infrastructure in rural areas?",
        "What is your plan to reduce the student-teacher ratio?",
        "How will you support technical and vocational training?"
      ],
      color: "blue"
    },
    {
      icon: Heart,
      title: "Healthcare",
      questions: [
        "How will you ensure medicines reach remote health posts?",
        "What is your strategy to retain doctors in public hospitals?",
        "How will you expand health insurance coverage?"
      ],
      color: "red"
    },
    {
      icon: TrendingUp,
      title: "Economy & Jobs",
      questions: [
        "What policies will create jobs for returning migrants?",
        "How will you support small businesses and startups?",
        "What is your plan to reduce youth unemployment?"
      ],
      color: "blue"
    },
    {
      icon: Building2,
      title: "Infrastructure",
      questions: [
        "How will you ensure quality road construction and maintenance?",
        "What is your plan for reliable electricity and internet?",
        "How will you improve water supply and sanitation?"
      ],
      color: "red"
    },
    {
      icon: Scale,
      title: "Governance",
      questions: [
        "How will you ensure transparency in budget allocation?",
        "What mechanisms will you create for citizen feedback?",
        "How will you tackle corruption in local offices?"
      ],
      color: "blue"
    },
    {
      icon: Leaf,
      title: "Environment",
      questions: [
        "How will you address waste management in cities?",
        "What is your plan to protect forests and wildlife?",
        "How will you support climate-resilient agriculture?"
      ],
      color: "red"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Policy Areas
          </h2>
          <p className="text-lg text-gray-600">
            Explore curated questions across critical issues affecting Nepal&apos;s future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const bgColor = area.color === "blue" ? "bg-[#003DA5]" : "bg-[#DC143C]";
            const hoverBg = area.color === "blue" ? "hover:bg-[#003DA5]/5" : "hover:bg-[#DC143C]/5";
            const borderColor = area.color === "blue" ? "border-blue-700" : "border-red-600";
            
            return (
              <div 
                key={index}
                className={`group bg-white border-2 border-gray-200 rounded-xl p-6 ${hoverBg} transition-all hover:shadow-lg cursor-pointer`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${bgColor} mb-4`}>
                  <Icon className="size-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                
                <ul className="space-y-2">
                  {area.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full ${bgColor} flex-shrink-0`}></span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <button className={`mt-4 text-sm font-medium ${area.color === "blue" ? "text-[#003DA5]" : "text-[#DC143C]"} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  View All Questions
                  <span>→</span>
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}