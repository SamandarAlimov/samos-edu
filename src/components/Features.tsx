import { 
  BookOpen, 
  Users, 
  Award, 
  Clock,
  MessageCircle,
  Smartphone,
  Brain,
  BarChart3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Engage with hands-on projects, coding exercises, and real-world simulations that make learning stick."
    },
    {
      icon: Users,
      title: "Expert Instructors", 
      description: "Learn from industry professionals and thought leaders with years of practical experience."
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Earn industry-recognized certificates that validate your skills and boost your career prospects."
    },
    {
      icon: Clock,
      title: "Self-Paced Learning",
      description: "Study at your own pace with lifetime access to course materials and 24/7 availability."
    },
    {
      icon: MessageCircle,
      title: "Community Support",
      description: "Connect with fellow learners, join study groups, and get help from our vibrant community."
    },
    {
      icon: Smartphone,
      title: "Mobile Learning",
      description: "Access your courses anytime, anywhere with our responsive platform and mobile apps."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get personalized learning recommendations and track your progress with intelligent analytics."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress reports and achievement milestones."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Samos Education?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need for a successful learning journey, 
            from world-class content to cutting-edge technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of successful learners who have transformed their careers 
              with our comprehensive education platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg transition-colors">
                Browse All Courses
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;