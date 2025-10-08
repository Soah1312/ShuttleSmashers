import vidyaVikasiniImg from "@/assets/vidya-vikasini.jpg";
import dcClubImg from "@/assets/dc-club.jpg";

export interface Location {
  id: string;
  name: string;
  shortName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  description: string;
  features: string[];
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  programs: string[]; // Program IDs available at this location
  coaches: string[]; // Coach IDs working at this location
  operatingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export const locations: Location[] = [
  {
    id: "vidya-vikasini",
    name: "Vidya Vikasini Badminton Court",
    shortName: "Vidya Vikasini",
    address: "Vidya Vikasini Badminton Court, Mumbai",
    city: "Mumbai, Maharashtra",
    phone: "+91-98765-43210",
    email: "vidyavikasini@shuttlesmashers.com",
    description: "Located in the heart of Mumbai, Vidya Vikasini offers premium badminton facilities with professional courts and expert coaching for players of all skill levels.",
    features: [
      "Professional Courts",
      "Modern Equipment",
      "Locker Rooms",
      "Parking Available",
      "Expert Coaching",
      "Group Classes"
    ],
    image: vidyaVikasiniImg,
    coordinates: {
      lat: 19.4083,
      lng: 72.8404
    },
    programs: ["beginner-training", "intermediate-training", "advanced-training", "junior-program", "adult-program"],
    coaches: ["abhinav-singh", "priya-sharma"],
    operatingHours: {
      monday: "6:00 AM - 9:00 PM",
      tuesday: "6:00 AM - 9:00 PM",
      wednesday: "6:00 AM - 9:00 PM",
      thursday: "6:00 AM - 9:00 PM",
      friday: "6:00 AM - 9:00 PM",
      saturday: "8:00 AM - 8:00 PM",
      sunday: "8:00 AM - 6:00 PM"
    }
  },
  {
    id: "dc-club",
    name: "DC Club",
    shortName: "DC Club",
    address: "DC Club, Mumbai",
    city: "Mumbai, Maharashtra",
    phone: "+91-87654-32109",
    email: "dcclub@shuttlesmashers.com",
    description: "A premier badminton destination featuring state-of-the-art facilities, perfect for serious players and families seeking quality training in a vibrant environment.",
    features: [
      "Professional Courts",
      "Kids Training Area",
      "Modern Amenities",
      "Changing Facilities",
      "Free Parking",
      "Equipment Available"
    ],
    image: dcClubImg,
    coordinates: {
      lat: 19.3611,
      lng: 72.8092
    },
    programs: ["beginner-training", "intermediate-training", "junior-program", "kids-camp", "senior-program"],
    coaches: ["priya-sharma", "rahul-verma"],
    operatingHours: {
      monday: "7:00 AM - 9:00 PM",
      tuesday: "7:00 AM - 9:00 PM",
      wednesday: "7:00 AM - 9:00 PM",
      thursday: "7:00 AM - 9:00 PM",
      friday: "7:00 AM - 9:00 PM",
      saturday: "9:00 AM - 7:00 PM",
      sunday: "9:00 AM - 5:00 PM"
    }
  }
];

export const getLocationById = (id: string): Location | undefined => {
  return locations.find(location => location.id === id);
};

export const getLocationsByCoach = (coachId: string): Location[] => {
  return locations.filter(location => location.coaches.includes(coachId));
};

export const getLocationsByProgram = (programId: string): Location[] => {
  return locations.filter(location => location.programs.includes(programId));
};
