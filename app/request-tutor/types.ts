export interface ParentFormData {
  // Step 1 — about the parent
  parentName: string;
  phone: string;
  email: string;
  // Step 2 — about the child
  childName: string;
  gradeLevel: string;
  // Step 3 — subjects
  subjects: string[];
  // Step 4 — goals
  goal: string;
  // Step 5 — logistics
  lessonFormat: string;
  area: string;
  // Step 6 — confirmation (no extra fields)
}

export const GRADE_OPTIONS = [
  { value: "grade-r", label: "Grade R" },
  { value: "grade-1", label: "Grade 1" },
  { value: "grade-2", label: "Grade 2" },
  { value: "grade-3", label: "Grade 3" },
  { value: "grade-4", label: "Grade 4" },
  { value: "grade-5", label: "Grade 5" },
  { value: "grade-6", label: "Grade 6" },
  { value: "grade-7", label: "Grade 7" },
  { value: "grade-8", label: "Grade 8" },
  { value: "grade-9", label: "Grade 9" },
  { value: "grade-10", label: "Grade 10" },
  { value: "grade-11", label: "Grade 11" },
  { value: "grade-12", label: "Grade 12 (Matric)" },
  { value: "university", label: "University / College" },
];

export const SUBJECT_OPTIONS = [
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

export const LESSON_FORMAT_OPTIONS = [
  { value: "in-person", label: "In-person (at home)" },
  { value: "online", label: "Online (video call)" },
  { value: "either", label: "Either works for us" },
];

export const AREA_OPTIONS = [
  { value: "pretoria-east", label: "Pretoria East" },
  { value: "pretoria-north", label: "Pretoria North" },
  { value: "pretoria-west", label: "Pretoria West" },
  { value: "centurion", label: "Centurion" },
  { value: "midrand", label: "Midrand" },
  { value: "sandton", label: "Sandton" },
  { value: "fourways", label: "Fourways" },
  { value: "randburg", label: "Randburg" },
  { value: "online-only", label: "Online only (anywhere)" },
  { value: "other", label: "Other" },
];
