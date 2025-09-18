import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Play,
  CheckCircle
} from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  isFree?: boolean;
  thumbnail?: string;
  category: string;
  lessonsCount: number;
  isEnrolled?: boolean;
  progress?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  instructor,
  duration,
  students,
  rating,
  level,
  price,
  isFree = false,
  category,
  lessonsCount,
  isEnrolled = false,
  progress = 0,
}) => {
  const levelColors = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200", 
    Advanced: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <div className="group bg-card rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center">
          <div className="text-center text-white">
            <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-80" />
            <div className="text-sm font-medium opacity-90">{category}</div>
          </div>
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-6 h-6 text-primary ml-1" />
          </div>
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 right-4">
          {isFree ? (
            <Badge className="bg-green-500 hover:bg-green-600 text-white font-semibold">
              FREE
            </Badge>
          ) : (
            <Badge className="bg-white/90 text-primary font-semibold">
              ${price}
            </Badge>
          )}
        </div>

        {/* Enrolled Badge */}
        {isEnrolled && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-accent hover:bg-accent text-white font-semibold">
              <CheckCircle className="w-3 h-3 mr-1" />
              Enrolled
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className={levelColors[level]}>
            {level}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{rating}</span>
            <span className="mx-1">•</span>
            <span>({students.toLocaleString()})</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Progress Bar (if enrolled) */}
        {isEnrolled && progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Instructor */}
        <div className="text-sm text-muted-foreground mb-4">
          by <span className="font-medium text-foreground">{instructor}</span>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>{lessonsCount} lessons</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className={`w-full font-medium ${
            isEnrolled 
              ? "bg-accent hover:bg-accent/90 text-white" 
              : "bg-primary hover:bg-primary-hover text-white"
          }`}
        >
          {isEnrolled ? "Continue Learning" : "Enroll Now"}
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;