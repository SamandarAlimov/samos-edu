import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCatalog from "@/components/CourseCatalog";
import { BookOpen, Filter, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-white mr-3" />
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                All Courses
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our comprehensive collection of expert-led courses. 
              Find the perfect learning path to advance your career.
            </p>
          </div>
        </section>

        {/* Advanced Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
              <Button variant="outline" className="flex items-center">
                <SortAsc className="w-4 h-4 mr-2" />
                Sort by Popularity
              </Button>
              <div className="flex-1" />
              <div className="text-sm text-muted-foreground">
                Showing 128 courses
              </div>
            </div>
          </div>
        </section>

        {/* Course Catalog */}
        <CourseCatalog />
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;