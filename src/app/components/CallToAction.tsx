import { ArrowRight, Download, Share2 } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#003DA5] via-[#002970] to-[#001a50] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Vote, Your Voice,
            <br />
            <span className="text-[#DC143C]">Your Nepal</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Don't let another election pass without asking the questions that matter. 
            Start holding candidates accountable today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003DA5] rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
              Browse Questions
              <ArrowRight className="size-5" />
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-bold text-lg">
              <Download className="size-5" />
              Download Guide
            </button>
          </div>
          
          {/* Social Share */}
          <div className="pt-8">
            <p className="text-blue-200 mb-4">Share with your community</p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Share2 className="size-5" />
              </button>
              <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC143C] rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}