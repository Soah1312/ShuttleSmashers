export interface Coach {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  specializations: string[];
  achievements: string[];
  certifications: string[];
  testimonials: {
    name: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  availability: {
    day: string;
    slots: string[];
  }[];
  pricing: Record<string, string>;
  locations: string[]; // Location IDs where this coach works
}

export const coaches: Coach[] = [
  {
    id: "abhinav-singh",
    name: "Abhinav Singh",
    role: "Head Coach & Director",
    image: "/src/assets/coach-1.jpg",
    bio: "With over 15 years of experience in badminton coaching, Abhinav Singh has established himself as one of the region's most respected coaches. He founded Shuttle Smashers Academy in 2009 with a vision to create champions both on and off the court.",
    experience: "15+ years",
    specializations: [
      "Advanced stroke techniques",
      "Tournament preparation",
      "Mental training and psychology",
      "Youth development programs",
      "Technical analysis and video review"
    ],
    achievements: [
      "National Coach of the Year 2022",
      "Led 50+ students to state championships",
      "Developed 3 national level players",
      "Published badminton training methodology",
      "Coached at international tournaments"
    ],
    certifications: [
      "Level 3 Badminton Coach Certification",
      "Sports Psychology Certification",
      "Strength & Conditioning Specialist",
      "First Aid & CPR Certified"
    ],
    testimonials: [
      {
        name: "Rahul Sharma",
        rating: 5,
        comment: "Coach Abhinav transformed my game completely. His attention to detail and strategic thinking helped me win the state championship.",
        date: "2024"
      },
      {
        name: "Priya Patel",
        rating: 5,
        comment: "Amazing coach! Very patient and knowledgeable. My daughter improved tremendously under his guidance.",
        date: "2024"
      }
    ],
    availability: [
      { day: "Monday", slots: ["6:00 AM", "7:00 AM", "5:00 PM", "6:00 PM"] },
      { day: "Tuesday", slots: ["6:00 AM", "7:00 AM", "5:00 PM"] },
      { day: "Wednesday", slots: ["6:00 AM", "7:00 AM", "5:00 PM", "6:00 PM"] },
      { day: "Thursday", slots: ["6:00 AM", "7:00 AM", "5:00 PM"] },
      { day: "Friday", slots: ["6:00 AM", "5:00 PM", "6:00 PM"] },
      { day: "Saturday", slots: ["8:00 AM", "9:00 AM", "10:00 AM", "2:00 PM"] },
      { day: "Sunday", slots: ["8:00 AM", "9:00 AM"] }
    ],
    pricing: {
      "Private Session": "$80/hour",
      "Group Training": "$40/hour",
      "Tournament Prep": "$100/hour",
      "Youth Coaching": "$60/hour"
    },
    locations: ["downtown-center"]
  },
  {
    id: "prajjawal-singh",
    name: "Prajjawal Singh",
    role: "Senior Coach",
    image: "/src/assets/coach-2.jpg",
    bio: "Prajjawal brings 12 years of competitive badminton experience and coaching expertise to Shuttle Smashers. Having represented at national level tournaments, he understands the demands of high-level competition.",
    experience: "12+ years",
    specializations: [
      "Competitive training",
      "Footwork and agility",
      "Match strategy and tactics",
      "Physical conditioning",
      "Injury prevention"
    ],
    achievements: [
      "Former National Junior Champion",
      "State Coach of the Year 2021",
      "Coached 25+ championship winners",
      "Developed regional level players",
      "Tournament coaching experience"
    ],
    certifications: [
      "Level 2 Badminton Coach Certification",
      "Athletic Training Certification",
      "Sports Nutrition Specialist",
      "Emergency Response Certified"
    ],
    testimonials: [
      {
        name: "Arjun Kumar",
        rating: 5,
        comment: "Coach Prajjawal's competitive experience really shows in his coaching. He knows exactly what it takes to win.",
        date: "2024"
      }
    ],
    availability: [
      { day: "Monday", slots: ["7:00 AM", "6:00 PM", "7:00 PM"] },
      { day: "Tuesday", slots: ["7:00 AM", "6:00 PM"] },
      { day: "Wednesday", slots: ["7:00 AM", "6:00 PM", "7:00 PM"] },
      { day: "Thursday", slots: ["7:00 AM", "6:00 PM"] },
      { day: "Friday", slots: ["7:00 AM", "6:00 PM", "7:00 PM"] },
      { day: "Saturday", slots: ["9:00 AM", "10:00 AM", "3:00 PM"] },
      { day: "Sunday", slots: ["9:00 AM", "10:00 AM"] }
    ],
    pricing: {
      "Private Session": "$70/hour",
      "Group Training": "$35/hour",
      "Tournament Prep": "$90/hour",
      "Youth Coaching": "$50/hour"
    },
    locations: ["suburban-center"]
  },
  {
    id: "himanshu",
    name: "Himanshu",
    role: "Senior Coach",
    image: "/src/assets/coach-2.jpg",
    bio: "Himanshu specializes in youth development and beginner coaching. With 10 years of experience, he has a passion for introducing young players to the sport and building strong foundations.",
    experience: "10+ years",
    specializations: [
      "Beginner and youth coaching",
      "Fundamental techniques",
      "Sportsmanship and character development",
      "Fun-based learning methods",
      "Long-term player development"
    ],
    achievements: [
      "Youth Coach of the Year 2023",
      "Developed 100+ beginner players",
      "Specialized in youth programs",
      "Community outreach programs",
      "Beginner tournament success"
    ],
    certifications: [
      "Level 2 Badminton Coach Certification",
      "Youth Sports Development Certified",
      "Child Psychology for Coaches",
      "Safe Sport Certified"
    ],
    testimonials: [
      {
        name: "Meera Joshi",
        rating: 5,
        comment: "Perfect coach for beginners! Himanshu made learning badminton so much fun for my kids.",
        date: "2024"
      }
    ],
    availability: [
      { day: "Monday", slots: ["4:00 PM", "5:00 PM", "6:00 PM"] },
      { day: "Tuesday", slots: ["4:00 PM", "5:00 PM"] },
      { day: "Wednesday", slots: ["4:00 PM", "5:00 PM", "6:00 PM"] },
      { day: "Thursday", slots: ["4:00 PM", "5:00 PM"] },
      { day: "Friday", slots: ["4:00 PM", "5:00 PM", "6:00 PM"] },
      { day: "Saturday", slots: ["10:00 AM", "11:00 AM", "1:00 PM"] },
      { day: "Sunday", slots: ["10:00 AM", "11:00 AM"] }
    ],
    pricing: {
      "Private Session": "$60/hour",
      "Group Training": "$30/hour",
      "Youth Beginner": "$40/hour",
      "Family Sessions": "$50/hour"
    },
    locations: ["downtown-center", "suburban-center"]
  }
];

export const getCoachById = (id: string): Coach | undefined => {
  return coaches.find(coach => coach.id === id);
};

export const getCoachesByLocation = (locationId: string): Coach[] => {
  return coaches.filter(coach => coach.locations.includes(locationId));
};
