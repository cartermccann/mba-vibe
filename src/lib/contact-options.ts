export const CONTACT_ROLES = [
  { value: "coach", label: "Coach" },
  { value: "athletic-director", label: "Athletic Director or School Admin" },
  { value: "club-director", label: "Club or Org Director" },
  { value: "parent", label: "Parent" },
  { value: "athlete", label: "Athlete" },
  { value: "other", label: "Other" },
] as const

export type ContactRole = (typeof CONTACT_ROLES)[number]["value"]

export const CONTACT_PROGRAMS = [
  { value: "team-workshops", label: "Team Workshops" },
  { value: "coach-training", label: "Coach Training" },
  {
    value: "athlete-wellness-initiative",
    label: "The Athlete Wellness Initiative (In-Person ACTIVE Series)",
  },
  { value: "org-club-licensing", label: "Org & Club Licensing" },
  { value: "not-sure", label: "Not sure yet, just have questions" },
] as const

export type ContactProgram = (typeof CONTACT_PROGRAMS)[number]["value"]

export const ATHLETE_AGE_NOTICE =
  "Thanks! Please have a parent or coach submit this form with you,"
