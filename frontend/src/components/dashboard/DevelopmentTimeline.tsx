
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, CheckCircle2, Circle } from "lucide-react";

interface DevelopmentTimelineProps {
  timeline: string;
  budget: string;
}

export const DevelopmentTimeline = ({ timeline, budget }: DevelopmentTimelineProps) => {
  const getTimeline = () => {
    const phases = [
      {
        name: "Planning & Design",
        duration: "1-2 weeks",
        progress: 100,
        status: "completed",
        tasks: ["Market research", "User personas", "Wireframes", "UI/UX design"]
      },
      {
        name: "Core Development",
        duration: timeline === "1-2-months" ? "3-5 weeks" : timeline === "3-4-months" ? "6-8 weeks" : "8-12 weeks",
        progress: 0,
        status: "pending",
        tasks: ["Frontend development", "Backend setup", "Database design", "API integration"]
      },
      {
        name: "Testing & Launch",
        duration: "1-2 weeks",
        progress: 0,
        status: "pending", 
        tasks: ["Quality assurance", "Performance testing", "Deployment", "Launch preparation"]
      }
    ];

    if (budget === "over-100k" || timeline === "over-1-year") {
      phases.push({
        name: "Post-Launch Growth",
        duration: "Ongoing",
        progress: 0,
        status: "future",
        tasks: ["User feedback", "Feature iterations", "Scaling", "Marketing optimization"]
      });
    }

    return phases;
  };

  const phases = getTimeline();
  const totalWeeks = timeline === "1-2-months" ? "6-8 weeks" : timeline === "3-4-months" ? "10-14 weeks" : "12-20 weeks";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-green-500" />
          Development Timeline
        </CardTitle>
        <CardDescription>
          Estimated project phases and milestones (Total: {totalWeeks})
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {index < phases.length - 1 && (
                <div className="absolute left-4 top-8 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  {phase.status === "completed" ? (
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  ) : phase.status === "pending" ? (
                    <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-50 flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  ) : (
                    <Circle className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                
                <div className="flex-1 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{phase.name}</h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {phase.duration}
                      </Badge>
                      {phase.status === "completed" && (
                        <Badge className="bg-green-100 text-green-800">Completed</Badge>
                      )}
                      {phase.status === "pending" && (
                        <Badge className="bg-blue-100 text-blue-800">Next</Badge>
                      )}
                    </div>
                  </div>
                  
                  {phase.progress > 0 && (
                    <Progress value={phase.progress} className="mb-3" />
                  )}
                  
                  <div className="grid grid-cols-2 gap-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          phase.status === "completed" ? "bg-green-500" : 
                          phase.status === "pending" ? "bg-blue-500" : "bg-gray-300"
                        }`}></div>
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">🎯 Success Milestones</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-medium text-blue-900">Week 2</div>
              <div className="text-blue-700">Design Complete</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-green-900">Week {timeline === "1-2-months" ? "6" : "10"}</div>
              <div className="text-green-700">MVP Ready</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-purple-900">Week {timeline === "1-2-months" ? "8" : "12"}</div>
              <div className="text-purple-700">Public Launch</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
