import { ArrowRight, MessageCircleQuestion } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-red-50/30 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#003DA5]/10 text-[#003DA5] text-sm font-medium">
              <MessageCircleQuestion className="size-4" />
              <span>Non-Partisan • Empowering Voters</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              कसरी:
              <br />
              <span className="text-[#003DA5]">From Promise</span>
              <br />
              <span className="text-[#DC143C]">to Policy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Empowering Nepali voters to ask the right questions. 
              Hold candidates accountable before you cast your vote.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#003DA5] text-white rounded-lg hover:bg-[#002970] transition-colors font-medium">
                Start Asking Questions
                <ArrowRight className="size-5" />
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium">
                Learn More
              </button>
            </div> */}
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Questions Asked</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-2xl font-bold text-gray-900">77 Districts</div>
                <div className="text-sm text-gray-600">Across Nepal</div>
              </div>
            </div>
          </div>
          
          {/* Right Logo */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kasari-logo.png"
                alt="कसरी? From Promise to Policy"
                className="w-full max-w-md h-auto"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#DC143C] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#003DA5] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#003DA5] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC143C] rounded-full opacity-5 blur-3xl"></div>
      </div>
    </section>
  );
}