const GRAPH_API = 'https://graph.facebook.com/v19.0'

async function sendMessage(text: string): Promise<void> {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const recipient = process.env.WHATSAPP_RECIPIENT_NUMBER

  if (!phoneNumberId || !token || !recipient) {
    throw new Error('WhatsApp environment variables not configured')
  }

  const res = await fetch(`${GRAPH_API}/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: recipient,
      type: 'text',
      text: { body: text },
    }),
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`WhatsApp API error ${res.status}: ${error}`)
  }
}

export function formatParentRequestMessage(data: {
  parentName: string
  phone: string
  email: string
  childName: string
  gradeLevel: string
  subjects: string[]
  goal: string
  lessonFormat: string
  area: string
}): string {
  return [
    'NEW PARENT REQUEST',
    `Parent: ${data.parentName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Child: ${data.childName}`,
    `Grade: ${data.gradeLevel}`,
    `Subjects: ${data.subjects.join(', ')}`,
    `Goal: ${data.goal}`,
    `Format: ${data.lessonFormat}`,
    `Area: ${data.area}`,
    `Time: ${new Date().toISOString()}`,
  ].join('\n')
}

export function formatTutorApplicationMessage(data: {
  firstName: string
  lastName: string
  phone: string
  email: string
  subjects: string[]
  gradeLevels: string[]
  qualification: string
  institution?: string
  area: string
  teachingFormat: string
  experience: string
  cvFilename?: string
}): string {
  return [
    'NEW TUTOR APPLICATION',
    `Name: ${data.firstName} ${data.lastName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Subjects: ${data.subjects.join(', ')}`,
    `Grades: ${data.gradeLevels.join(', ')}`,
    `Qualification: ${data.qualification}`,
    `Institution: ${data.institution ?? 'N/A'}`,
    `Area: ${data.area}`,
    `Format: ${data.teachingFormat}`,
    `Experience: ${data.experience}`,
    `CV: ${data.cvFilename ?? 'Not provided'}`,
    `Time: ${new Date().toISOString()}`,
  ].join('\n')
}

export { sendMessage }
