// Phase 2: Feza CRM integration stubs
// Implement these functions when Feza API docs are available

export type ParentLead = {
  parentName: string
  childName: string
  phone: string
  email: string
  gradeLevel: string
  subjects: string[]
  goal: string
  lessonFormat: string
  area: string
}

export type TutorApplication = {
  firstName: string
  lastName: string
  phone: string
  email: string
  subjects: string[]
  gradeLevels: string[]
  qualification: string
  institution?: string
  yearOfStudy?: string
  area: string
  teachingFormat: string
  experience: string
  cvFilename?: string
  notes?: string
}

export async function createParentLead(_lead: ParentLead): Promise<void> {
  // TODO: POST to Feza CRM API
}

export async function createTutorApplication(_application: TutorApplication): Promise<void> {
  // TODO: POST to Feza CRM API
}
