
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Smartphone, Zap } from "lucide-react";

interface TechStackRecommendationsProps {
  idea: string;
  experience: string;
}

export const TechStackRecommendations = ({ idea, experience }: TechStackRecommendationsProps) => {
  const getTechStack = () => {
    if (experience === "non-technical") {
      return {
        frontend: { name: "WordPress/Webflow", reason: "No-code solution", icon: "🌐" },
        backend: { name: "Airtable/Zapier", reason: "No-code automation", icon: "⚡" },
        database: { name: "Built-in", reason: "Managed automatically", icon: "💾" },
        hosting: { name: "Platform hosting", reason: "Handled by provider", icon: "☁️" }
      };
    }
    
    if (experience === "some-technical") {
      return {
        frontend: { name: "React + Next.js", reason: "Easy to learn, great ecosystem", icon: "⚛️" },
        backend: { name: "Supabase", reason: "Backend-as-a-service", icon: "🔥" },
        database: { name: "PostgreSQL", reason: "Built into Supabase", icon: "🐘" },
        hosting: { name: "Vercel", reason: "One-click deployment", icon: "▲" }
      };
    }
    
    return {
      frontend: { name: "React/Vue.js", reason: "Modern, flexible framework", icon: "⚛️" },
      backend: { name: "Node.js/Python", reason: "Scalable and fast", icon: "🟢" },
      database: { name: "PostgreSQL/MongoDB", reason: "Production-ready", icon: "🗄️" },
      hosting: { name: "AWS/Digital Ocean", reason: "Full control and scaling", icon: "☁️" }
    };
  };

  const techStack = getTechStack();
  const categories = [
    { key: "frontend", title: "Frontend", icon: Code, color: "blue" },
    { key: "backend", title: "Backend", icon: Server, color: "green" },
    { key: "database", title: "Database", icon: Database, color: "purple" },
    { key: "hosting", title: "Hosting", icon: Smartphone, color: "orange" }
  ];

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Code className="w-5 h-5 mr-2 text-blue-500" />
          Tech Stack Recommendations
        </CardTitle>
        <CardDescription>
          Curated based on your technical experience level
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => {
            const tech = techStack[category.key as keyof typeof techStack];
            return (
              <div key={category.key} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl">{tech.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-900">{category.title}</h4>
                    <Badge variant="secondary" className={`bg-${category.color}-100 text-${category.color}-800`}>
                      Recommended
                    </Badge>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">{tech.name}</span>
                    <span className="text-gray-500 ml-2">• {tech.reason}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 space-y-3">
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Zap className="w-4 h-4 mr-2 text-green-600" />
              <span className="font-medium text-green-900">Why This Stack?</span>
            </div>
            <p className="text-sm text-green-800">
              {experience === "non-technical" 
                ? "This no-code approach lets you validate your idea quickly without technical expertise."
                : experience === "some-technical"
                ? "This stack offers the perfect balance of simplicity and power for your skill level."
                : "This stack provides maximum flexibility and scalability for complex applications."
              }
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-semibold text-blue-900">
                {experience === "non-technical" ? "2-4 weeks" : experience === "some-technical" ? "6-8 weeks" : "8-12 weeks"}
              </div>
              <div className="text-sm text-blue-700">Development Time</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-semibold text-purple-900">
                {experience === "non-technical" ? "$50-200/mo" : experience === "some-technical" ? "$20-100/mo" : "$100-500/mo"}
              </div>
              <div className="text-sm text-purple-700">Monthly Costs</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
