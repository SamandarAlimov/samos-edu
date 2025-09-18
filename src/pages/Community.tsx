import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Clock,
  Heart,
  Reply,
  Eye,
  Star
} from "lucide-react";

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "Best practices for React state management in 2024?",
      author: "Alex Chen",
      category: "Web Development",
      replies: 23,
      views: 1247,
      likes: 15,
      timeAgo: "2 hours ago",
      isHot: true,
    },
    {
      id: 2,
      title: "How to break into UX design with no prior experience",
      author: "Maria Rodriguez", 
      category: "Design",
      replies: 18,
      views: 892,
      likes: 12,
      timeAgo: "4 hours ago",
      isAnswered: true,
    },
    {
      id: 3,
      title: "Python vs JavaScript for data science beginners",
      author: "David Kim",
      category: "Data Science",
      replies: 31,
      views: 2156,
      likes: 28,
      timeAgo: "6 hours ago",
      isHot: true,
    },
    {
      id: 4,
      title: "Study group for Full Stack Bootcamp - Week 8",
      author: "Sarah Johnson",
      category: "Study Groups",
      replies: 7,
      views: 234,
      likes: 5,
      timeAgo: "1 day ago",
    },
  ];

  const categories = [
    { name: "General Discussion", count: 1247, color: "bg-blue-100 text-blue-800" },
    { name: "Web Development", count: 892, color: "bg-green-100 text-green-800" },
    { name: "Design", count: 634, color: "bg-purple-100 text-purple-800" },
    { name: "Data Science", count: 521, color: "bg-orange-100 text-orange-800" },
    { name: "Career Advice", count: 438, color: "bg-pink-100 text-pink-800" },
    { name: "Study Groups", count: 356, color: "bg-indigo-100 text-indigo-800" },
  ];

  const topContributors = [
    { name: "Emily Davis", points: 2847, badge: "Expert", avatar: "ED" },
    { name: "Michael Chen", points: 2156, badge: "Mentor", avatar: "MC" },
    { name: "Sarah Wilson", points: 1934, badge: "Helper", avatar: "SW" },
    { name: "Alex Kumar", points: 1672, badge: "Active", avatar: "AK" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white mr-3" />
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  Community
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Connect with fellow learners, share knowledge, and get help from our vibrant community of students and instructors.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
                Start a Discussion
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Discussion Filters */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Button variant="default" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Hot
                </Button>
                <Button variant="outline" size="sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent
                </Button>
                <Button variant="outline" size="sm">
                  <Star className="w-4 h-4 mr-2" />
                  Most Liked
                </Button>
                <Button variant="outline" size="sm">
                  Unanswered
                </Button>
              </div>

              {/* Discussion List */}
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {discussion.isHot && (
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                              🔥 Hot
                            </Badge>
                          )}
                          {discussion.isAnswered && (
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                              ✓ Answered
                            </Badge>
                          )}
                          <Badge variant="outline">
                            {discussion.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer mb-2">
                          {discussion.title}
                        </h3>
                        
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>by <strong>{discussion.author}</strong></span>
                          <span className="mx-2">•</span>
                          <span>{discussion.timeAgo}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Reply className="w-4 h-4 mr-1" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{discussion.views} views</span>
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          <span>{discussion.likes} likes</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm">
                        Join Discussion
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline">
                  Load More Discussions
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Community Stats */}
              <div className="bg-card rounded-xl p-6 shadow-soft border">
                <h3 className="font-semibold text-foreground mb-4">Community Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Members</span>
                    <span className="font-medium">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Today</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discussions</span>
                    <span className="font-medium">4,892</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Answers</span>
                    <span className="font-medium">18,456</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-card rounded-xl p-6 shadow-soft border">
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{category.name}</span>
                      <Badge className={category.color}>
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div className="bg-card rounded-xl p-6 shadow-soft border">
                <h3 className="font-semibold text-foreground mb-4">Top Contributors</h3>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                        {contributor.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground text-sm">{contributor.name}</div>
                        <div className="text-xs text-muted-foreground">{contributor.points} points</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {contributor.badge}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;