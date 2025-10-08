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
    id: "downtown-center",
    name: "Shuttle Smashers Downtown Center",
    shortName: "Downtown",
    address: "123 Badminton Street, Downtown District",
    city: "Mumbai, Maharashtra",
    phone: "+91-98765-43210",
    email: "downtown@shuttlesmashers.com",
    description: "Our flagship center located in the heart of the city, featuring premium facilities and expert coaching for all skill levels.",
    features: [
      "6 Professional Courts",
      "Modern Equipment",
      "Locker Rooms",
      "Cafeteria",
      "Parking Available",
      "Pro Shop"
    ],
    image: "/src/assets/downtown-center.jpg", // You'll need to add these images
    coordinates: {
      lat: 19.0760,
      lng: 72.8777
    },
    programs: ["beginner-training", "intermediate-training", "advanced-training", "junior-program", "adult-program"],
    coaches: ["abhinav-singh", "priya-sharma", "rahul-verma"],
    operatingHours: {
      monday: "6:00 AM - 10:00 PM",
      tuesday: "6:00 AM - 10:00 PM",
      wednesday: "6:00 AM - 10:00 PM",
      thursday: "6:00 AM - 10:00 PM",
      friday: "6:00 AM - 10:00 PM",
      saturday: "8:00 AM - 8:00 PM",
      sunday: "8:00 AM - 6:00 PM"
    }
  },
  {
    id: "suburban-center",
    name: "Shuttle Smashers Suburban Center",
    shortName: "Suburban",
    address: "456 Sports Avenue, Suburban Area",
    city: "Mumbai, Maharashtra",
    phone: "+91-98765-43211",
    email: "suburban@shuttlesmashers.com",
    description: "A modern facility in the suburbs, perfect for families and students looking for quality badminton training in a serene environment.",
    features: [
      "4 Professional Courts",
      "Kids Play Area",
      "Group Training Rooms",
      "Changing Facilities",
      "Free Parking",
      "Equipment Rental"
    ],
    image: "/src/assets/suburban-center.jpg",
    coordinates: {
      lat: 19.1136,
      lng: 72.8697
    },
    programs: ["beginner-training", "intermediate-training", "junior-program", "kids-camp", "senior-program"],
    coaches: ["priya-sharma", "rahul-verma", "sneha-patel"],
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
