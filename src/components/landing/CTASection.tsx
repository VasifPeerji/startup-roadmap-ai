
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to build your MVP?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of founders who've turned their ideas into successful products. 
          Get your personalized MVP roadmap in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
            onClick={() => navigate('/dashboard')}
          >
            Start Planning Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-semibold"
            onClick={() => navigate('/consultation')}
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Free Consultation
          </Button>
        </div>
        <p className="text-blue-100 mt-6 text-sm">
          Free forever plan available • No credit card required • Setup in 2 minutes
        </p>
      </div>
    </section>
  );
};
