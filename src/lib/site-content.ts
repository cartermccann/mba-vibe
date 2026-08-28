export type ProgramService = {
  id: "team-workshops" | "coach-training" | "athlete-wellness-initiative" | "org-club-licensing"
  name: string
  description: string
  photo: string
  photoAlt: string
}

export type Testimonial = {
  quote: string
  name: string
  attribution: string
}

export const CONTACT_EMAIL = "info@mindbodyathletes.com"

export const clinicalBoundary =
  "Mind Body Athletes is an educational and wellness program. It is not psychotherapy and is not offered under a clinical license."

export const programServices = [
  {
    id: "team-workshops",
    name: "Team Workshops",
    description: "A single session, or a short series spread across the season.",
    photo: "/photos/offering-workshops.jpg",
    photoAlt: "Athletes in a Mind Body Athletes team workshop session",
  },
  {
    id: "coach-training",
    name: "Coach Training",
    description: "In person, with a virtual option available.",
    photo: "/photos/offering-coaches.jpg",
    photoAlt: "Athletes stretching together during a coach-supported training session",
  },
  {
    id: "athlete-wellness-initiative",
    name: "The Athlete Wellness Initiative (In-Person ACTIVE Series)",
    description:
      "The complete program. A 6-session ACTIVE series with your team, in person: team bonding, guided workbook sessions, and mental performance and regulation tools. Yoga and breathwork are built into every session. Plus coach training so it carries past the season.",
    photo: "/photos/offering-active.jpg",
    photoAlt: "Athletes in an in-person ACTIVE series session with Mind Body Athletes",
  },
  {
    id: "org-club-licensing",
    name: "Org & Club Licensing",
    description: "Annual access for schools and clubs bringing this across multiple teams.",
    photo: "/photos/offering-licensing.jpg",
    photoAlt: "Athletes resting on mats during a licensed team session on an outdoor court",
  },
] as const satisfies readonly ProgramService[]

export const homeCopy = {
  eyebrow: "FOR COACHES AND THE PROGRAMS BEHIND THEM",
  h1: "What if the mind was the missing rep?",
  subhead:
    "Mind Body Athletes is an Athlete Wellness Initiative, giving coaches the science-backed tools and education to help athletes handle pressure, in the season and in life.",
  heroButton: "Bring Mind Body Athletes to Your Program",
  stats: [
    { value: "71%", label: "meaningful personal growth" },
    { value: "68%", label: "improved athletic performance" },
    { value: "75%", label: "would recommend to a teammate" },
    { value: "95%", label: "felt prepared for life beyond sport" },
  ],
  statsFootnote: "Based on post-program survey results from Mind Body Athletes' pilot program.",
  statsHeadline: "One Athlete. One System.",
  statsSubtitle: "Support the system, and you support the athlete.",
  statsBadge: "Pilot program survey results",
  systemTitle: "One Athlete. One System.",
  systemLine: "Support the system, and you support the athlete.",
  systemNodes: ["Coach", "Parent", "Team", "School"] as const,
  systemCenter: "Athlete",
  whatWeKnow: {
    title: "WHAT WE KNOW",
    body: 'Athletes operate from the nervous system first. When the brain is in "yes Coach" checkout, you cannot coach what the brain cannot access.',
  },
  howItWorks: {
    title: "HOW IT WORKS",
    body: "The work starts with regulation so athletes can recover faster, and so coaches can read behavior as signal.",
  },
  whatChanges: {
    title: "WHAT CHANGES",
    items: [
      "Athletes recover faster",
      "Behavior is read as signal",
      "Parents can support without escalating",
      "Teams share a language",
    ],
  },
  walkAway: {
    title: "WHAT YOU WALK AWAY WITH",
    body: "A practical framework coaches and programs can use in the season and in life.",
  },
  teasers: [
    {
      eyebrow: "FOUNDER",
      title: "Player. Parent. Coach.",
      body: "Meet Allie Chapman, founder of Mind Body Athletes.",
      href: "/about",
      linkLabel: "Read Her Story",
    },
    {
      eyebrow: "WHAT WE OFFER",
      title: "What We Offer",
      body: "Team Workshops · Coach Training · The Athlete Wellness Initiative · Org & Club Licensing",
      href: "/programs",
      linkLabel: "See All Programs",
    },
    {
      eyebrow: "FOR ATHLETES & PARENTS",
      title: "For Athletes & Parents",
      body: "This isn't something you need a coach to access. It's built for the athlete at home too.",
      href: "/athletes-parents",
      linkLabel: "Explore Resources",
    },
  ],
  closingTitle: "Ready to bring this to your team?",
  closingBody: "One conversation is all it takes to figure out what your team needs to get started.",
  closingButton: "Get Started",
  closingQuestions: "Questions first?",
} as const

export const aboutCopy = {
  h1Lead: "Regulation",
  h1Gold: "Precedes",
  h1End: "Performance.",
  h1: "Regulation Precedes Performance.",
  intro:
    "Allie Chapman is the founder of Mind Body Athletes and a mom of six athletes, from rec league beginners to competitive high school veterans.",
  storyEyebrow: "OUR STORY",
  storyTitle: "Where This Started",
  story: [
    "Allie Chapman grew up in basketball, first as a player and later from the bleachers as a parent. Those years made the gap obvious: coaches were asked to handle everything the game asked of an athlete, with almost no training for the nervous system underneath the performance.",
    "She spent years in middle-school and group-home settings, then earned her MSW from the University of Southern California. She studied sport social work at the University of Michigan, completed MBSR through the UCSD Center for Mindfulness, trained as a yoga instructor, and studied the neurosequential model of sport. She later served as a school social worker in a Title I school.",
    "That path is why Mind Body Athletes exists: so coaches and the programs behind them have a practical way to support the whole athlete.",
  ],
  credentialsName: "Allie Chapman, MSW",
  credentialsRole: "MENTAL PERFORMANCE COACH & FOUNDER, MIND BODY ATHLETES",
  credentials: [
    "MSW, University of Southern California",
    "Sports and Social Work, University of Michigan",
    "MBSR through the UCSD Center for Mindfulness",
    "200 hour yoga teacher training",
    "Trauma informed practice",
    "Neurosequential model of sport",
    "ASW #134932",
    "Practice under LCSW supervision through Generational Wellness",
  ],
  featured: [
    {
      title: "USC Suzanne Dworak-Peck School of Social Work",
      detail: "MSW graduate empowers young athletes through the transformative capacity of social work.",
      href: "https://dworakpeck.usc.edu/news/msw-graduate-empowers-young-athletes-through-the-transformative-capacity-of-social-work",
    },
    {
      title: "ASWIS Symposium, Tulane University",
      detail: "September 2025",
    },
  ],
  closingTitle: "This is the culture worth building:",
  closingGold: "kids who come out of sport still knowing who they are.",
  closingButton: "Bring Mind Body Athletes to Your Program",
} as const

export const programsCopy = {
  h1Lead: "Bring Mind Body Athletes",
  h1Gold: "to",
  h1End: "Your Program",
  h1: "Bring Mind Body Athletes to Your Program",
  subhead: "The missing piece between potential and performance.",
  heroButton: "Get Started",
  ctaTitle: "Every program starts with a conversation, not a price tag.",
  ctaBody: "Tell us a bit about your team, and we will set up a call to figure out what actually fits.",
  ctaButton: "Tell Us About Your Program",
  trio: [
    {
      title: "PREVENT",
      body: "Equip athletes with the mental skills to handle pressure before it hits.",
    },
    {
      title: "NOTICE",
      body: "Recognize the early signs of stress and struggle so support can come earlier.",
    },
    {
      title: "RESPOND",
      body: "Use practical strategies to respond in the moment and guide athletes through pressure.",
    },
  ],
} as const

export const athletesParentsCopy = {
  h1: "For Athletes & Parents",
  subhead: "This isn't something you need a coach to access. It's built for the athlete at home too.",
  tagline: [
    { title: "Train your mind." },
    { title: "Move your body." },
    { title: "Live your purpose." },
  ],
  workbookTitle: "The ACTIVE Series Workbook",
  workbookBody:
    "A self-led, 6-week program for athletes. Built for one athlete to work through on their own or alongside a parent.",
  parentTitle: "Parent Support",
  parentGuideTitle: "What's Happening in Your Athlete's Brain Right Now, and What They Need From You",
  parentGuideBody: "A free parent guide for the moments that ask more of you than a pep talk.",
  podcastTitle: "The Soul of Sports Podcast",
  podcastStatus: "Coming Soon",
  recommendedTitle: "Recommended",
  recommendedHref: "https://www.theheatherexperience.com/resources",
  recommendedLabel: "theheatherexperience.com/resources",
  tipOffTitle: "The Parent Tip Off",
  tipOffHref: "https://www.theheatherexperience.com/parent-tip-off",
  tipOffLabel: "theheatherexperience.com/parent-tip-off",
  closingTitle: "Simple, practical support for the moments that matter most.",
  closingButton: "Support Your Athlete at Home",
} as const

export const contactCopy = {
  h1: "Let's Get Started",
  lede: "Tell us a bit about your team, and we will follow up to figure out what actually fits.",
  questions: "Questions first?",
  submit: "Send message",
  submitting: "Sending…",
  success: "Your message is in. We will follow up soon.",
  formHeading: "Tell us about your program",
} as const

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "I would highly recommend any club, program or team to participate in the Mind Body Athletes program. Anytime you bring someone in, you are always hesitant of the training, the message and the person who will be working with your athletes. With Mind Body Athletes you get an incredible recovery and injury prevention program that benefits your athletes in the midst of a long grueling season, you get an incredible and insightful message that helps your athletes handle the ups and downs of any season and if that was not enough you get an incredible person to lead you through it all. Allie Chapman is an exceptional blend of experience, education and organization. I truly believe Allie and her Mind Body Athletes program not only refreshed my basketball team but helped keep us healthy and fresh into February which helped us win a championship! I can not say enough good things about what her program did and meant to our team!",
    name: "Corey Clark",
    attribution: "Coach, Poway HS Boys Varsity Basketball 2022-2026, D2 CIF Champions 2026",
  },
  {
    quote:
      "It is the perfect complement to Elite sport training. It creates a perfect balance and helps players gain a broader perspective and self awareness.",
    name: "Mike W.",
    attribution: "Coach, Soccer, Legends FC SC 2009 ECNL",
  },
  {
    quote:
      "Allie really targeted important factors that will help my athletes be great. She helped give us the tools to be prepared for obstacles. She was great in communicating with the team and as a former athlete she was able to relate to the players really well. Most importantly she had their focus and attention at all times which I believe is very important.",
    name: "Lizardo R.",
    attribution: "Coach, Del Lago HS Boys Varsity",
  },
  {
    quote:
      "During the ACTIVE series, I truly found ways to benefit my mind on and off the field. From using different breathing techniques and visualization’s I found ways to decompress and block out all the stress and chaos around me. Not only was this very beneficial for me individually, but this experience also made my team grow closer together.",
    name: "Ellie D.",
    attribution: "HS Jr., Soccer, Legends FC SD 2009 ECNL",
  },
  {
    quote:
      "Mind Body Athletes really helped me in the areas that I struggled with most in soccer which is the mental aspect. This program helped my focus under pressure a lot as well as my thoughts after mistakes and how I continue to play through them",
    name: "Bella D.",
    attribution: "HS Jr., Soccer, Legends FC SC 2009 ECNL",
  },
  {
    quote:
      "Mind Body Athletes A.C.T.I.V.E Series has helped me tremendously with my mental thought process when it comes to being in the middle of a intense competition, most importantly with the steps in order to come back to the present moment when things aren’t going my way or even when they are. I would 100% recommend this program to any athlete who wants a mental advantage over there opponents.",
    name: "Malakai A.",
    attribution: "HS Sr., Basketball, Del Lago HS Boys Varsity",
  },
  {
    quote:
      "I really enjoyed learning more about how visualization and self talk can contribute to your mindset going into a game, along with your actual performance.",
    name: "Gabby C.",
    attribution: "HS Jr., Soccer, Legends FC SD 2009 ECNL",
  },
  {
    quote:
      "I enjoyed the Mind Body Athlete's sessions as I found clarity in my thinking and was able to focus more positively. It was very relaxing and put me in the right state of mind for my upcoming tournament.",
    name: "Zoe D.",
    attribution: "HS Jr., Soccer, Legends FC SD 2009 ECNL",
  },
  {
    quote:
      "My experience with the mind body athlete’s session was amazing it allowed me to be mentally focused in situations where I use to not be able to handle well and it helped me on the court, allowing my body to feel more flexible and comfortable while making certain moves.",
    name: "Dawere T.",
    attribution: "HS Jr., Basketball, Del Lago HS Boys Varsity",
  },
  {
    quote:
      "This was such a great opportunity for the team and myself I’ve learned a lot and something that I found really helpful was being present and slowing things down on and off the field.",
    name: "Anonymous",
    attribution: "HS Soph., Soccer, Legends FC SD 2009 ECNL",
  },
]

export const MARQUEE_OFFERINGS = [
  "Team Workshops",
  "Coach Training",
  "Athlete Wellness Initiative",
  "Org & Club Licensing",
  "Regulation precedes performance",
]

export const MARQUEE_SYSTEM = [
  "Coach",
  "Parent",
  "Team",
  "School",
  "One athlete. One system.",
]

export const ANNOUNCEMENT_MESSAGES = [
  "FOR COACHES AND THE PROGRAMS BEHIND THEM",
  "Regulation precedes performance.",
  "One Athlete. One System.",
]
