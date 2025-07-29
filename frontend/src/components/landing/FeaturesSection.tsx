
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Clock, Zap, BarChart3, Brain, Code, Calendar } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our AI analyzes your idea, target audience, and budget to create personalized recommendations.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Feature Prioritization",
    description: "Get a clear roadmap of features ranked by importance and impact for your MVP success.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Code,
    title: "Tech Stack Recommendations",
    description: "Receive curated technology recommendations based on your requirements and team expertise.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "Development Timeline",
    description: "Realistic project timelines with milestones and dependencies clearly mapped out.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    title: "Budget Optimization",
    description: "Optimize your development budget with cost estimates and resource allocation guidance.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Book one-on-one sessions with startup advisors to refine your MVP strategy.",
    gradient: "from-teal-500 to-green-500"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> build smart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your startup idea into a actionable plan with our comprehensive suite of AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to validate your idea?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join hundreds of founders who've successfully launched their MVPs with LeanScope AI.
            </p>
            <div className="flex justify-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 border-2 border-white"></div>
                ))}
              </div>
              <span className="ml-4 text-sm text-gray-600 self-center">500+ founders trust LeanScope AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
