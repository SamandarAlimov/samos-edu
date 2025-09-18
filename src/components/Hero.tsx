import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Award } from "lucide-react";

const Hero = () => {
  const stats = [
    { label: "Active Students", value: "10,000+", icon: Users },
    { label: "Expert Courses", value: "500+", icon: BookOpen },
    { label: "Certificates Earned", value: "25,000+", icon: Award },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              World-Class Education Platform
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master New Skills with 
              <span className="block text-accent"> Expert-Led Courses</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Join thousands of learners worldwide. Access high-quality courses, interactive bootcamps, 
              and earn industry-recognized certificates from Samos Global Technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              >
                Start Learning Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-5 h-5 text-accent mr-2" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-strong">
              <div className="aspect-video bg-gradient-card rounded-xl flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Interactive Learning</h3>
                    <p className="text-sm text-white/70">Hands-on projects and real-world applications</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3 px-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-white text-sm">Course Progress</span>
                  <span className="text-accent font-semibold">78%</span>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;