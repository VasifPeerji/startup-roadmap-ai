
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Star, Zap } from "lucide-react";

interface FeatureRoadmapProps {
  idea: string;
  budget: string;
}

export const FeatureRoadmap = ({ idea, budget }: FeatureRoadmapProps) => {
  // Mock feature recommendations based on budget
  const getFeatures = () => {
    const baseFeatures = [
      { name: "User Authentication", priority: "High", phase: "MVP", description: "Sign up, login, password reset" },
      { name: "Core Functionality", priority: "High", phase: "MVP", description: "Main product features" },
      { name: "Basic Dashboard", priority: "High", phase: "MVP", description: "User interface and navigation" },
      { name: "Payment Integration", priority: "Medium", phase: "Phase 2", description: "Stripe/PayPal integration" },
      { name: "Admin Panel", priority: "Medium", phase: "Phase 2", description: "Content and user management" },
      { name: "Email Notifications", priority: "Low", phase: "Phase 3", description: "Automated email system" },
      { name: "Mobile App", priority: "Low", phase: "Phase 3", description: "iOS and Android apps" },
      { name: "Analytics Dashboard", priority: "Medium", phase: "Phase 2", description: "User behavior tracking" }
    ];

    if (budget === "under-5k" || budget === "5k-15k") {
      return baseFeatures.filter(f => f.phase === "MVP");
    }
    
    if (budget === "15k-50k") {
      return baseFeatures.filter(f => f.phase === "MVP" || f.phase === "Phase 2");
    }
    
    return baseFeatures;
  };

  const features = getFeatures();
  const priorityColors = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800", 
    Low: "bg-green-100 text-green-800"
  };

  const phaseColors = {
    MVP: "bg-blue-100 text-blue-800",
    "Phase 2": "bg-purple-100 text-purple-800",
    "Phase 3": "bg-gray-100 text-gray-800"
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          Feature Roadmap
        </CardTitle>
        <CardDescription>
          Prioritized features based on your budget and timeline
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="mt-1">
                {feature.phase === "MVP" ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-900">{feature.name}</h4>
                  <div className="flex space-x-2">
                    <Badge className={priorityColors[feature.priority as keyof typeof priorityColors]} variant="secondary">
                      {feature.priority}
                    </Badge>
                    <Badge className={phaseColors[feature.phase as keyof typeof phaseColors]} variant="secondary">
                      {feature.phase}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Zap className="w-4 h-4 mr-2 text-blue-600" />
            <span className="font-medium text-blue-900">AI Recommendation</span>
          </div>
          <p className="text-sm text-blue-800">
            Focus on MVP features first to validate your idea quickly. Consider Phase 2 features only after getting user feedback.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
