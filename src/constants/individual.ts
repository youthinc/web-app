interface Options {
  [key: string]: string;
}

export const gender: Options = {
  a: "Male",
  b: "Female",
  c: "Other",
};

export const ageRange: Options = {
  a: "14 and less",
  b: "15-19",
  c: "20-24",
  d: "25-29",
  e: "30-34",
  f: "35-39",
  g: "40-44",
  h: "45 and more",
};

export const interests: Options = {
  a: "Healthy Lifestyle - Bfit Events & Demos",
  b: "Quality Education - Lifelong Learning & Training",
  c: "Decent Work - Employability & Mediation",
  d: "Partnership - Development Projects",
};

export const roles: {
  [key: string]: {
    role: string;
    description: string;
  };
} = {
  a: {
    role: "COACH- Life, Fitness Coaching",
    description:
      "support goal-setting, personal growth, and behavior modification to empower and develop self- confidence to maintain a fit and healthy lifestyle by analyzing their performances, instructing in relevant skills and by providing encouragement.",
  },
  b: {
    role: "CLIENT",
    description:
      "Person or the benefactor who is advised, trained or counselled by the life, fitness coach",
  },
  c: {
    role: "TRAINER- Academic Training",
    description:
      "Lead content-driven learning process; develop capacities, skills; teaching",
  },
  d: {
    role: "TRAINEE",
    description:
      "Student or the benefactor who is advised, trained or counselled by the trainer",
  },
  e: {
    role: "MENTOR- Mentoring, Advising, Coaching",
    description:
      "Person with experience in a job who plays supportive and advisory role for the student or the mentee to help them develop in their work",
  },
  f: {
    role: "MENTEE- Student, Intern, Trainee, Coachee",
    description:
      "Student or the benefactor who is advised, trained or counselled by the mentor",
  },
  g: {
    role: "VOLUNTEER- skills, time, interest",
    description:
      "gain or give skills based on your time and interest, meet new people, give back to the community, feel valued, be part of Youth Inc. team to make a difference",
  },
  h: {
    role: "DESIGNER- Creativity, Design",
    description:
      "Prepares drawings and plans of the look or workings of something prior to it being made",
  },
  i: {
    role: "DEVELOPER- Software, Application",
    description:
      "writes, debugs and executes the source code of a software application.",
  },
  j: {
    role: "EVENT COORDINATOR- Planning, Coordinating Events",
    description:
      "Event planning and management; control an event from conception to cleanup",
  },
  k: {
    role: "FACILITATOR- Guiding Participation",
    description:
      "Design and lead groups discussion; help the group accomplish the purpose of the group activities, meetings and retreat",
  },
  l: {
    role: "GUEST SPEAKER- Sharing, Motivating",
    description:
      "Present, share, demonstrate, experience, stories, know-how, motivate, lead, inspire",
  },
  m: {
    role: "MARKETER- Promoting, Advertising",
    description:
      "Present, share, demonstrate, experience, stories, know-how, motivate, lead, inspire",
  },
  n: {
    role: "WRITER- Content Contribution",
    description:
      "write blog, post, articles and do vlog, podcast contents useful for youth development and empowerment to be posted with your name and contribution on our web & social media.",
  },
  o: {
    role: "YOUTH AMBASSADOR- Advocating, Leading, Inspiring",
    description:
      "promote mutual understanding, cross-cultural dialogue, share your story, lead to inspire and motivate others",
  },
};

export const activities: Options = {
  a: "Assessment",
  b: "Capacity building",
  c: "Events & Seminars",
  d: "Knowledge Sharing & Demos",
  e: "Internship",
  f: "Membership",
  g: "Mentorship & Mediation",
  h: "Networking",
  i: "Online Webinars",
  j: "Personal development",
  k: "Professional development",
  l: "Projects",
  m: "Skills development",
  n: "Study Tours",
  o: "Trainings & Workshops",
};

export const education: Options = {
  a: "Secondary (six years of primary education)",
  b: "High school diploma or equivalent",
  c: "TVET (Technical and Vocational Education and Training)",
  d: "Associate degree (2 years)",
  e: "Bachelor's degree (4 years)",
  f: "Master's degree (1-2 years)",
  g: "Doctoral degree (2+ years)",
  h: "Other/don't know",
};

export const status: Options = {
  a: "Student (Secondary School)",
  b: "Student (High School)",
  c: "Student (University)",
  d:
    "Graduate (Gap year - within two years of graduation from a full-time Bachelors, Masters or PhD program)",
  e: "Working Professional or Employed",
  f: "Entrepreneur or Self Employed",
  g: "Unemployed or NEET (Not in Education, Employment, or Training",
  h: "Other",
};

export const occupation: Options = {
  a: "Manager or upper level",
  b: "Professionals",
  c: "Technicians and associate professionals",
  d: "Clerical support workers",
  e: "Services and sales workers",
  f: "Skilled agricultural, forestry and fishery workers",
  g: "Crafts and related trades workers",
  h: "Plant and machine operators and assemblers",
  i: "Elementary occupations",
  j: "Armed forces occupations",
  k: "Students",
};

export const field: Options = {
  a: "Arts, Culture",
  b: "Agriculture, Forestry, Fishery",
  c: "Architecture and Civil Engineering",
  d: "Communications, Journalism",
  e: "Computers and Technology",
  f: "Education and Social Services",
  g: "Employment and Human Resource",
  h: "Health Care and Allied Health",
  i: "Hospitality, Tourism, and the Service Industry",
  j: "Law and Law Enforcement",
  k: "Linguistics, Interpretation, Translation",
  l: "Management, Business, and Finance",
  m: "Marketing, Digital Marketing",
  n: "Public Relations",
  o: "Science & Engineering",
  p: "Statistics and Epidemiology",
  q: "Trades and Transportation",
  r: "Other",
};

export const softSkills: Options = {
  a: "Adaptability",
  b: "Creativity",
  c: "Communication",
  d: "Critical thinking",
  e: "Emotional Intelligence",
  f: "Flexibility",
  g: "Integrity",
  h: "Leadership",
  i: "Positive Attitude",
  j: "Problem Solving",
  k: "Teamwork",
  l: "Willingness to learn",
  m: "Work Ethic",
  n: "Other",
};

export const hardSkills: Options = {
  a: "Analytical reasoning",
  b: "Artificial Intelligence",
  c: "Bilingual or Multilingual/ Translation",
  d: "Blockchain",
  e: "Business Analysis",
  f: "Cloud Computing",
  g: "Computer/Technology",
  h: "Data Analysis/Data management",
  i: "Design/UX design/all design",
  j: "Digital /Social Media Marketing",
  k: "Marketing/Events/PR",
  l: "Mobile & Web Development",
  m: "People Management",
  n: "Project Management",
  o: "Research",
  p: "Sales",
  q: "Video production",
  r: "Web development",
  s: "Writing",
  t: "Other",
};

export const days: Options = {
  a: "Weekdays (1,2,3,4,5)",
  b: "Weekends (6,7)",
  c: "Other (1,3,5)",
  d: "Other (2,4,6)",
  e: "Flexible",
  f: "Not Available",
};

export const times: Options = {
  a: "Early Morning (6-9)",
  b: "Morning (9-12)",
  c: "Day (12-15)",
  d: "Afternoon (15 -18)",
  e: "Evening (18 - 21)",
  f: "Flexible",
  g: "Not Available",
  h: "Other",
};

export const contact: Options = {
  a: "Email",
  b: "Social Media (Facebook, Instagram, LinkedIn...)",
  c: "Phone (Whats App, Viber..)",
  d: "Online Meeting (Skype, Zoom, GotoMeeting…)",
  e: "Meet Up (Youth Inc. office, coffee shop…)",
  f: "Other/ Not Interested",
};
