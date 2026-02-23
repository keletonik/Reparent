import type { CrisisContact, SafetyPlanStep } from './types'

export const crisisContacts: CrisisContact[] = [
  {
    country: 'Australia',
    services: [
      {
        name: 'Lifeline',
        phone: '13 11 14',
        description: '24/7 crisis support and suicide prevention',
        url: 'https://www.lifeline.org.au',
        type: 'general',
      },
      {
        name: 'Beyond Blue',
        phone: '1300 22 4636',
        description: 'Anxiety, depression, and suicide prevention support',
        url: 'https://www.beyondblue.org.au',
        type: 'general',
      },
      {
        name: '1800RESPECT',
        phone: '1800 737 732',
        description: 'National sexual assault, domestic and family violence counselling',
        url: 'https://www.1800respect.org.au',
        type: 'dv',
      },
      {
        name: 'Kids Helpline',
        phone: '1800 55 1800',
        description: 'Free counselling for young people aged 5-25',
        url: 'https://kidshelpline.com.au',
        type: 'youth',
      },
    ],
  },
  {
    country: 'United Kingdom',
    services: [
      {
        name: 'Samaritans',
        phone: '116 123',
        description: 'Free, confidential support 24/7',
        url: 'https://www.samaritans.org',
        type: 'general',
      },
      {
        name: 'National Domestic Abuse Helpline',
        phone: '0808 2000 247',
        description: 'Free 24-hour helpline for domestic abuse',
        url: 'https://www.nationaldahelpline.org.uk',
        type: 'dv',
      },
      {
        name: 'SHOUT',
        phone: 'Text 85258',
        description: 'Free, confidential crisis text service',
        url: 'https://giveusashout.org',
        type: 'general',
      },
      {
        name: 'Childline',
        phone: '0800 1111',
        description: 'Free counselling for children and young people',
        url: 'https://www.childline.org.uk',
        type: 'youth',
      },
    ],
  },
  {
    country: 'United States',
    services: [
      {
        name: '988 Suicide & Crisis Lifeline',
        phone: '988',
        description: 'Free, confidential support via call, text, or chat 24/7',
        url: 'https://988lifeline.org',
        type: 'suicide',
      },
      {
        name: 'Crisis Text Line',
        phone: 'Text HOME to 741741',
        description: 'Free crisis counselling via text',
        url: 'https://www.crisistextline.org',
        type: 'general',
      },
      {
        name: 'National Domestic Violence Hotline',
        phone: '1-800-799-7233',
        description: '24/7 confidential support for domestic violence',
        url: 'https://www.thehotline.org',
        type: 'dv',
      },
      {
        name: 'SAMHSA Helpline',
        phone: '1-800-662-4357',
        description: 'Treatment referral and information service',
        url: 'https://www.samhsa.gov/find-help/national-helpline',
        type: 'general',
      },
    ],
  },
  {
    country: 'Canada',
    services: [
      {
        name: 'Talk Suicide Canada',
        phone: '988',
        description: '24/7 suicide prevention support',
        url: 'https://talksuicide.ca',
        type: 'suicide',
      },
      {
        name: 'Crisis Services Canada',
        phone: '1-833-456-4566',
        description: '24/7 crisis support',
        url: 'https://www.crisisservicescanada.ca',
        type: 'general',
      },
    ],
  },
  {
    country: 'New Zealand',
    services: [
      {
        name: 'Lifeline NZ',
        phone: '0800 543 354',
        description: '24/7 counselling and support',
        url: 'https://www.lifeline.org.nz',
        type: 'general',
      },
      {
        name: "Women's Refuge",
        phone: '0800 733 843',
        description: 'Support for women and children experiencing family violence',
        url: 'https://womensrefuge.org.nz',
        type: 'dv',
      },
    ],
  },
]

export const safetyPlanTemplate: SafetyPlanStep[] = [
  {
    id: 'warning-signs',
    title: 'Warning Signs',
    description: 'What thoughts, feelings, or situations tell you a crisis might be developing?',
    items: [],
  },
  {
    id: 'coping-strategies',
    title: 'Internal Coping Strategies',
    description: 'Things you can do on your own to take your mind off problems without contacting another person.',
    items: [],
  },
  {
    id: 'social-contacts',
    title: 'People and Places for Distraction',
    description: 'People and social settings that provide distraction.',
    items: [],
  },
  {
    id: 'support-people',
    title: 'People I Can Ask for Help',
    description: 'People you can reach out to when you need support.',
    items: [],
  },
  {
    id: 'professionals',
    title: 'Professionals and Agencies',
    description: 'Mental health professionals, local emergency services, and crisis lines.',
    items: [],
  },
  {
    id: 'safe-environment',
    title: 'Making the Environment Safe',
    description: 'Steps to reduce access to things that could put you at risk.',
    items: [],
  },
]

export const groundingExercises = [
  {
    id: '5-4-3-2-1',
    title: '5-4-3-2-1 Grounding',
    description: 'Use your senses to ground yourself in the present moment.',
    steps: [
      'Name 5 things you can see right now',
      'Name 4 things you can touch or feel',
      'Name 3 things you can hear',
      'Name 2 things you can smell',
      'Name 1 thing you can taste',
    ],
  },
  {
    id: 'box-breathing',
    title: 'Box Breathing',
    description: 'A calming breathing technique used by the military and first responders.',
    steps: [
      'Breathe in slowly for 4 seconds',
      'Hold your breath for 4 seconds',
      'Breathe out slowly for 4 seconds',
      'Hold for 4 seconds',
      'Repeat 4 times',
    ],
  },
  {
    id: 'cold-water',
    title: 'Cold Water Reset (TIPP)',
    description: 'A DBT skill that uses temperature to calm your nervous system quickly.',
    steps: [
      'Fill a bowl with cold water or get a cold pack',
      'Hold your breath and put your face in cold water for 30 seconds',
      'Or hold a cold pack to your forehead and cheeks',
      'This activates the dive reflex and calms your heart rate',
    ],
  },
  {
    id: 'body-scan',
    title: 'Brief Body Scan',
    description: 'Gently notice what is happening in your body right now.',
    steps: [
      'Sit or lie down comfortably',
      'Starting at the top of your head, slowly scan down through your body',
      'Notice any tension, warmth, tingling, or numbness — without trying to change it',
      'When you reach your feet, take 3 slow breaths',
      'You can pause or stop at any time',
    ],
  },
]
