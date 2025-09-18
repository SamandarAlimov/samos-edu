import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import CourseCard from "./CourseCard";
import { 
  Search, 
  Filter, 
  BookOpen, 
  Code, 
  Palette, 
  TrendingUp,
  Brain,
  Smartphone
} from "lucide-react";

const CourseCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", icon: BookOpen, count: 128 },
    { name: "Web Development", icon: Code, count: 45 },
    { name: "Design", icon: Palette, count: 32 },
    { name: "Business", icon: TrendingUp, count: 28 },
    { name: "AI & ML", icon: Brain, count: 15 },
    { name: "Mobile Development", icon: Smartphone, count: 8 },
  ];

  const courses = [
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
      id: "2", 
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles, user research, wireframing, and prototyping with industry-standard tools.",
      instructor: "Michael Chen",
      duration: "8 weeks",
      students: 1924,
      rating: 4.8,
      level: "Beginner" as const,
      price: 199,
      category: "Design",
      lessonsCount: 84,
    },
    {
      id: "3",
      title: "Python for Data Science",
      description: "Comprehensive introduction to data analysis, visualization, and machine learning using Python.",
      instructor: "Dr. Emily Rodriguez",
      duration: "10 weeks", 
      students: 3156,
      rating: 4.9,
      level: "Intermediate" as const,
      price: 0,
      isFree: true,
      category: "AI & ML",
      lessonsCount: 127,
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
    {
      id: "5",
      title: "React Native Mobile Development",
      description: "Build cross-platform mobile apps using React Native. Deploy to both iOS and Android stores.",
      instructor: "Alex Kumar",
      duration: "14 weeks",
      students: 892,
      rating: 4.8,
      level: "Advanced" as const,
      price: 399,
      category: "Mobile Development", 
      lessonsCount: 189,
    },
    {
      id: "6",
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into modern JavaScript, ES6+, async programming, and advanced patterns.",
      instructor: "Lisa Thompson",
      duration: "5 weeks",
      students: 2134,
      rating: 4.9,
      level: "Advanced" as const,
      price: 179,
      category: "Web Development",
      lessonsCount: 96,
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Our Course Catalog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class courses designed by industry experts. 
            From beginner to advanced, find the perfect learning path for your goals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <Button variant="outline" className="lg:hidden">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.name
                    ? "bg-primary text-white shadow-soft"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
                <Badge 
                  variant="secondary" 
                  className={`ml-2 ${
                    selectedCategory === category.name 
                      ? "bg-white/20 text-white border-white/30" 
                      : ""
                  }`}
                >
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-white transition-colors"
          >
            Load More Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;