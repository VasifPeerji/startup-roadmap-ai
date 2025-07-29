
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            🚀 AI-Powered MVP Planning
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Perfect MVP</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your startup idea into a detailed roadmap with AI-powered insights. Get feature priorities, tech stack recommendations, and realistic timelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4"
              onClick={() => navigate('/dashboard')}
            >
              Start Planning Your MVP
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Free consultation included
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Setup in 5 minutes
            </div>
          </div>
        </div>

        {/* Hero Image/Demo Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-500">leanscope.ai/dashboard</div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2">Feature Roadmap</h3>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-200 rounded"></div>
                    <div className="h-2 bg-blue-200 rounded w-4/5"></div>
                    <div className="h-2 bg-blue-200 rounded w-3/5"></div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="w-8 h-8 bg-green-600 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tech Stack</h3>
                  <div className="space-y-2">
                    <div className="h-2 bg-green-200 rounded"></div>
                    <div className="h-2 bg-green-200 rounded w-4/5"></div>
                    <div className="h-2 bg-green-200 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2">Timeline</h3>
                  <div className="space-y-2">
                    <div className="h-2 bg-purple-200 rounded"></div>
                    <div className="h-2 bg-purple-200 rounded w-3/4"></div>
                    <div className="h-2 bg-purple-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
