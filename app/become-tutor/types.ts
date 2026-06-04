export interface TutorFormData {
  // Step 1 — personal details
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  // Step 2 — subjects & grades
  subjects: string[];
  gradeLevels: string[];
  // Step 3 — qualifications
  qualification: string;
  institution: string;
  // Step 4 — logistics
  area: string;
  teachingFormat: string;
  // Step 5 — experience & motivation
  experience: string;
  motivation: string;
}

export const TUTOR_SUBJECT_OPTIONS = [
  "Mathematics",
  "Mathematical Literacy",
  "Physical Sciences",
  "Life Sciences",
  "English",
  "Afrikaans",
  "Accounting",
  "Economics",
  "Geography",
  "History",
  "Business Studies",
  "Computer Applications Technology",
  "Information Technology",
  "Other",
];

export const GRADE_LEVEL_OPTIONS = [
  "Grade R–3 (Foundation Phase)",
  "Grade 4–6 (Intermediate Phase)",
  "Grade 7–9 (Senior Phase)",
  "Grade 10–12 (FET / Matric)",
  "University / College",
];

export const QUALIFICATION_OPTIONS = [
  { value: "matric", label: "Matric (Grade 12)" },
  { value: "diploma", label: "Diploma" },
  { value: "degree", label: "Bachelor's degree" },
  { value: "honours", label: "Honours degree" },
  { value: "masters", label: "Master's degree" },
  { value: "phd", label: "PhD / Doctorate" },
  { value: "pgce", label: "PGCE (Teaching qualification)" },
];

export const TUTOR_AREA_OPTIONS = [
  { value: "pretoria-east", label: "Pretoria East" },
  { value: "pretoria-north", label: "Pretoria North" },
  { value: "pretoria-west", label: "Pretoria West" },
  { value: "centurion", label: "Centurion" },
  { value: "midrand", label: "Midrand" },
  { value: "sandton", label: "Sandton" },
  { value: "fourways", label: "Fourways" },
  { value: "randburg", label: "Randburg" },
  { value: "online-only", label: "Online only" },
  { value: "other", label: "Other" },
];

export const TEACHING_FORMAT_OPTIONS = [
  { value: "in-person", label: "In-person only" },
  { value: "online", label: "Online only" },
  { value: "both", label: "Both in-person and online" },
];
