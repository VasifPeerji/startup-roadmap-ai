
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Lightbulb, Target, DollarSign, Clock, Code } from "lucide-react";

interface MVPFormProps {
  onSubmit: (data: {
    idea: string;
    targetAudience: string;
    budget: string;
    timeline: string;
    experience: string;
  }) => void;
}

export const MVPForm = ({ onSubmit }: MVPFormProps) => {
  const [formData, setFormData] = useState({
    idea: "",
    targetAudience: "",
    budget: "",
    timeline: "",
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.idea && formData.targetAudience && formData.budget && formData.timeline && formData.experience;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Let's plan your perfect MVP
        </h1>
        <p className="text-lg text-gray-600">
          Tell us about your idea and we'll create a personalized roadmap
        </p>
      </div>

      <Card className="shadow-xl border-0">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center text-2xl">
            <Lightbulb className="w-6 h-6 mr-2 text-blue-600" />
            Project Details
          </CardTitle>
          <CardDescription>
            The more details you provide, the better recommendations we can give you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6 md:col-span-2">
                <div>
                  <Label htmlFor="idea" className="text-base font-medium flex items-center mb-2">
                    <Target className="w-4 h-4 mr-2 text-blue-600" />
                    What's your startup idea?
                  </Label>
                  <Textarea
                    id="idea"
                    placeholder="Describe your product or service idea in detail. What problem does it solve? What makes it unique?"
                    value={formData.idea}
                    onChange={(e) => setFormData({...formData, idea: e.target.value})}
                    className="min-h-[120px] resize-none"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="audience" className="text-base font-medium flex items-center mb-2">
                    <Target className="w-4 h-4 mr-2 text-green-600" />
                    Who is your target audience?
                  </Label>
                  <Textarea
                    id="audience"
                    placeholder="Describe your target customers. Include demographics, pain points, and how they currently solve this problem."
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                    className="min-h-[100px] resize-none"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="budget" className="text-base font-medium flex items-center mb-2">
                  <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                  Development Budget
                </Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="over-100k">Over $100,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timeline" className="text-base font-medium flex items-center mb-2">
                  <Clock className="w-4 h-4 mr-2 text-purple-600" />
                  Desired Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})} required>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you want to launch?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2-months">1-2 months</SelectItem>
                    <SelectItem value="3-4-months">3-4 months</SelectItem>
                    <SelectItem value="5-6-months">5-6 months</SelectItem>
                    <SelectItem value="6-12-months">6-12 months</SelectItem>
                    <SelectItem value="over-1-year">Over 1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="experience" className="text-base font-medium flex items-center mb-2">
                  <Code className="w-4 h-4 mr-2 text-indigo-600" />
                  Technical Experience Level
                </Label>
                <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})} required>
                  <SelectTrigger>
                    <SelectValue placeholder="What's your technical background?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-technical">Non-technical founder</SelectItem>
                    <SelectItem value="some-technical">Some technical knowledge</SelectItem>
                    <SelectItem value="technical">Experienced developer</SelectItem>
                    <SelectItem value="team">Have a technical team</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                size="lg" 
                className={`w-full ${isFormValid ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : ''}`}
                disabled={!isFormValid}
              >
                Generate My MVP Roadmap
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
