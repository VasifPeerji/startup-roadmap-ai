
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, ArrowLeft, Sparkles, Target, Code, Calendar, DollarSign, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MVPForm } from "./MVPForm";
import { FeatureRoadmap } from "./FeatureRoadmap";
import { TechStackRecommendations } from "./TechStackRecommendations";
import { DevelopmentTimeline } from "./DevelopmentTimeline";

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    idea: "",
    targetAudience: "",
    budget: "",
    timeline: "",
    experience: ""
  });

  const handleFormSubmit = (data: typeof formData) => {
    setFormData(data);
    setStep(2);
  };

  const handleBack = () => {
    if (step === 1) {
      navigate('/');
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">LeanScope AI</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden sm:flex">
                <Sparkles className="w-4 h-4 mr-1" />
                AI-Powered
              </Badge>
              <Button variant="outline" onClick={() => navigate('/consultation')}>
                Get Expert Help
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {[1, 2].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stepNumber}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    step >= stepNumber ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {stepNumber === 1 ? 'Enter Details' : 'Review Plan'}
                  </span>
                  {stepNumber < 2 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        {step === 1 ? (
          <MVPForm onSubmit={handleFormSubmit} />
        ) : (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your MVP Roadmap is Ready! 🚀
              </h1>
              <p className="text-lg text-gray-600">
                Based on your input, here's your personalized development plan
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureRoadmap idea={formData.idea} budget={formData.budget} />
              <TechStackRecommendations idea={formData.idea} experience={formData.experience} />
            </div>

            <DevelopmentTimeline timeline={formData.timeline} budget={formData.budget} />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={() => navigate('/consultation')}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Strategy Session
              </Button>
              <Button variant="outline" size="lg">
                Download PDF Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
