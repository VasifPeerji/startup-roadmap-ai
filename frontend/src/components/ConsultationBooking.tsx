
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, ArrowLeft, Lightbulb, Video, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ConsultationBooking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
    consultationType: "",
    timeSlot: "",
    timezone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const timeSlots = [
    "9:00 AM - 9:30 AM",
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM", 
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "4:00 PM - 4:30 PM"
  ];

  const consultationTypes = [
    {
      type: "strategy",
      title: "Strategy Session",
      description: "Comprehensive MVP planning and strategy review",
      duration: "45 minutes",
      icon: Lightbulb,
      price: "Free"
    },
    {
      type: "technical",
      title: "Technical Review",
      description: "Tech stack recommendations and architecture planning",
      duration: "30 minutes", 
      icon: Video,
      price: "$99"
    },
    {
      type: "launch",
      title: "Launch Planning",
      description: "Go-to-market strategy and launch timeline",
      duration: "60 minutes",
      icon: MessageCircle,
      price: "$149"
    }
  ];

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full shadow-xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              Consultation Booked! 🎉
            </CardTitle>
            <CardDescription className="text-lg">
              We've sent a confirmation email with your meeting details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">1</div>
                  <span className="text-gray-700">You'll receive a calendar invite within 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">2</div>
                  <span className="text-gray-700">We'll send you a preparation questionnaire</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">3</div>
                  <span className="text-gray-700">Join the call and get personalized recommendations</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Your Session</h4>
                <p className="text-sm text-gray-600">{consultationTypes.find(c => c.type === bookingData.consultationType)?.title}</p>
                <p className="text-sm text-gray-500">{bookingData.timeSlot}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Contact</h4>
                <p className="text-sm text-gray-600">{bookingData.name}</p>
                <p className="text-sm text-gray-500">{bookingData.email}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate('/dashboard')} className="flex-1">
                Continue to Dashboard
              </Button>
              <Button variant="outline" onClick={() => navigate('/')} className="flex-1">
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
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
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Free
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Strategy Session</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized advice from startup experts who've helped hundreds of founders build successful MVPs.
          </p>
        </div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {consultationTypes.map((consultation) => (
            <Card key={consultation.type} className={`cursor-pointer transition-all hover:shadow-lg ${
              bookingData.consultationType === consultation.type ? 'ring-2 ring-blue-600' : ''
            }`} onClick={() => setBookingData({...bookingData, consultationType: consultation.type})}>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <consultation.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{consultation.title}</CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  {consultation.duration} • {consultation.price}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {consultation.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Form */}
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Calendar className="w-6 h-6 mr-2 text-blue-600" />
              Book Your Session
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company/Startup Name</Label>
                <Input
                  id="company"
                  value={bookingData.company}
                  onChange={(e) => setBookingData({...bookingData, company: e.target.value})}
                  placeholder="Your startup name"
                />
              </div>

              <div>
                <Label htmlFor="challenge">What's your biggest challenge right now?</Label>
                <Textarea
                  id="challenge"
                  value={bookingData.challenge}
                  onChange={(e) => setBookingData({...bookingData, challenge: e.target.value})}
                  placeholder="Describe what you're struggling with or what you'd like to discuss..."
                  className="min-h-[100px] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="timeSlot">Preferred Time Slot</Label>
                  <Select value={bookingData.timeSlot} onValueChange={(value) => setBookingData({...bookingData, timeSlot: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={bookingData.timezone} onValueChange={(value) => setBookingData({...bookingData, timezone: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">PST (UTC-8)</SelectItem>
                      <SelectItem value="mst">MST (UTC-7)</SelectItem>
                      <SelectItem value="cst">CST (UTC-6)</SelectItem>
                      <SelectItem value="est">EST (UTC-5)</SelectItem>
                      <SelectItem value="utc">UTC (UTC+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                disabled={!bookingData.name || !bookingData.email || !bookingData.consultationType}
              >
                Book Free Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
