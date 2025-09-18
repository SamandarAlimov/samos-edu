import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  Clock, 
  Award,
  TrendingUp,
  Calendar
} from "lucide-react";

const MyLearning = () => {
  const enrolledCourses = [
    {
      id: "1",
      title: "Full Stack Web Development Bootcamp",
      description: "Master modern web development with React, Node.js, and MongoDB. Build real-world projects from scratch.",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      students: 2847,
      rating: 4.9,
      level: "Intermediate" as const,
      price: 299,
      category: "Web Development",
      lessonsCount: 156,
      isEnrolled: true,
      progress: 65,
    },
    {
      id: "4",
      title: "Digital Marketing Mastery",
      description: "Complete guide to modern digital marketing strategies, SEO, social media, and analytics.",
      instructor: "David Wilson",
      duration: "6 weeks",
      students: 1638,
      rating: 4.7,
      level: "Beginner" as const,
      price: 149,
      category: "Business",
      lessonsCount: 72,
      isEnrolled: true,
      progress: 23,
    },
  ];

  const stats = [
    { label: "Courses Enrolled", value: "2", icon: BookOpen },
    { label: "Hours Learned", value: "47", icon: Clock },
    { label: "Certificates Earned", value: "1", icon: Award },
    { label: "Current Streak", value: "5 days", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  My Learning Dashboard
                </h1>
                <p className="text-xl text-white/90">
                  Continue your learning journey and track your progress.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-center text-white">
                    <Calendar className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-sm opacity-80">Day Streak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center shadow-soft">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Continue Learning */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">Continue Learning</h2>
              <Button variant="outline">View All</Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {enrolledCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Recent Achievements</h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">First Certificate</h3>
                    <p className="text-sm text-muted-foreground">Completed your first course</p>
                  </div>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  Achievement Unlocked
                </Badge>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">5-Day Streak</h3>
                    <p className="text-sm text-muted-foreground">Consistent daily learning</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Active
                </Badge>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">Fast Learner</h3>
                    <p className="text-sm text-muted-foreground">Completed 10+ lessons this week</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  This Week
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyLearning;