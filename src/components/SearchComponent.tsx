import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { locations } from "@/data/locations";
import { coaches } from "@/data/coaches";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'coach' | 'program' | 'achievement' | 'location' | 'page';
  url: string;
}

const SearchComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Sample searchable content - in a real app, this could come from a CMS or API
  const searchableContent: SearchResult[] = [
    // Coaches - dynamically added from coaches data
    ...coaches.map(coach => ({
      id: coach.id,
      title: coach.name,
      description: `${coach.role} with ${coach.experience} experience`,
      type: "coach" as const,
      url: `/coach/${coach.id}`
    })),
    // Programs
    {
      id: "foundation-program",
      title: "Foundation Program",
      description: "Perfect for young players starting their badminton journey",
      type: "program",
      url: "/#programs"
    },
    {
      id: "development-program",
      title: "Development Program",
      description: "Build on fundamentals with advanced techniques",
      type: "program",
      url: "/#programs"
    },
    {
      id: "performance-program",
      title: "Performance Program",
      description: "High-intensity training for competitive excellence",
      type: "program",
      url: "/#programs"
    },
    // Achievements
    {
      id: "winter-cup-2024",
      title: "Winter Cup 2024",
      description: "Our students dominated the Winter Cup, securing top positions",
      type: "achievement",
      url: "/achievement/winter-cup-2024"
    },
    {
      id: "state-junior-championship",
      title: "State Junior Championship",
      description: "Outstanding performance with multiple medal winners",
      type: "achievement",
      url: "/achievement/state-junior-championship"
    },
    {
      id: "regional-finals-2024",
      title: "Regional Finals 2024",
      description: "Our players reached the finals in multiple regional tournaments",
      type: "achievement",
      url: "/achievement/regional-finals-2024"
    },
    // Pages
    {
      id: "about",
      title: "About Us",
      description: "Learn about Shuttle Smashers Academy's mission and facilities",
      type: "page",
      url: "/#about"
    },
    {
      id: "gallery",
      title: "Gallery",
      description: "View our training sessions, tournaments, and achievements",
      type: "page",
      url: "/#gallery"
    },
    {
      id: "contact",
      title: "Contact Us",
      description: "Get in touch for inquiries and enrollment",
      type: "page",
      url: "/#contact"
    },
    // Locations - dynamically added from locations data
    ...locations.map(location => ({
      id: location.id,
      title: `${location.shortName} Center`,
      description: location.description,
      type: "location" as const,
      url: `/location/${location.id}`
    }))
  ];

  useEffect(() => {
    if (query.length > 2) {
      const filtered = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleResultClick = (url: string) => {
    setIsOpen(false);
    setQuery("");
    // Handle navigation (scroll to section for anchor links)
    if (url.startsWith("/#")) {
      const sectionId = url.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search coaches, programs, achievements..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1 h-8 w-8 p-0"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {results.length > 0 && (
            <div className="max-h-80 overflow-y-auto space-y-2">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="p-3 rounded-lg border hover:bg-secondary cursor-pointer transition-colors"
                  onClick={() => handleResultClick(result.url)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-sm">{result.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          result.type === 'coach' ? 'bg-blue-100 text-blue-800' :
                          result.type === 'program' ? 'bg-green-100 text-green-800' :
                          result.type === 'achievement' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {result.type}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {query.length > 2 && results.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{query}"</p>
            </div>
          )}

          {query.length <= 2 && query.length > 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Type at least 3 characters to search</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchComponent;
