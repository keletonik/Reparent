'use client'

import { crisisContacts } from '@/lib/crisis-data'
import { ExternalLinkIcon, PhoneIcon, BookOpenIcon, ShieldIcon } from '@/components/ui/Icons'

const readingResources = [
  {
    title: 'Attached by Amir Levine & Rachel Heller',
    description: 'An accessible introduction to adult attachment styles and how they affect relationships.',
    category: 'Attachment',
  },
  {
    title: 'The Body Keeps the Score by Bessel van der Kolk',
    description: 'A landmark book on how trauma reshapes the body and brain, and paths toward healing.',
    category: 'Trauma',
  },
  {
    title: 'Self-Compassion by Kristin Neff',
    description: 'The science of self-compassion and practical exercises for building a kinder relationship with yourself.',
    category: 'Self-Compassion',
  },
  {
    title: 'Polyvagal Theory in Therapy by Deb Dana',
    description: 'Understanding the nervous system and its role in safety, connection, and trauma responses.',
    category: 'Nervous System',
  },
  {
    title: 'DBT Skills Training Handouts and Worksheets by Marsha M. Linehan',
    description: 'The comprehensive resource for Dialectical Behaviour Therapy skills practice.',
    category: 'DBT',
  },
  {
    title: 'Why Does He Do That? by Lundy Bancroft',
    description: 'Understanding the mindset of controlling and abusive partners. Essential reading for those in or leaving unsafe dynamics.',
    category: 'Safety',
  },
]

const professionalDirectories = [
  {
    country: 'Australia',
    resources: [
      { name: 'Psychology Today (Australia)', description: 'Find therapists, counsellors, and psychologists' },
      { name: 'Australian Psychological Society', description: 'Find a psychologist referral service' },
    ],
  },
  {
    country: 'United Kingdom',
    resources: [
      { name: 'BACP Therapist Directory', description: 'Find a British Association for Counselling and Psychotherapy member' },
      { name: 'NHS Talking Therapies', description: 'Free NHS-funded psychological therapy' },
    ],
  },
  {
    country: 'United States',
    resources: [
      { name: 'Psychology Today', description: 'Find therapists, psychiatrists, and treatment centres' },
      { name: 'SAMHSA Treatment Locator', description: 'Find substance use and mental health treatment' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="page-width py-6 sm:py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-calm-900">Resources & Support</h1>
        <p className="mt-2 text-calm-600">
          Curated resources for continued learning and professional support.
        </p>
      </div>

      {/* Crisis Contacts */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <PhoneIcon size={20} className="text-safety-600" />
          <h2 className="text-xl font-semibold text-calm-900">Crisis Support</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {crisisContacts.map((country) => (
            <div key={country.country} className="card p-5">
              <h3 className="font-semibold text-calm-900 mb-3">{country.country}</h3>
              <div className="space-y-2">
                {country.services.map((service) => (
                  <div key={service.name} className="text-sm">
                    <p className="font-medium text-calm-800">{service.name}</p>
                    <p className="font-mono text-calm-600">{service.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Help */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <ShieldIcon size={20} className="text-brand-600" />
          <h2 className="text-xl font-semibold text-calm-900">Finding Professional Help</h2>
        </div>
        <div className="bg-warmth-50 border border-warmth-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-warmth-700">
            <strong>When to seek professional help:</strong> If you are experiencing ongoing distress,
            flashbacks, severe anxiety, depression, thoughts of self-harm, or are in an abusive relationship,
            a qualified mental health professional can provide the support this program cannot.
            Look for therapists who specialise in trauma, attachment, or your specific needs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {professionalDirectories.map((dir) => (
            <div key={dir.country} className="card p-5">
              <h3 className="font-semibold text-calm-900 mb-3">{dir.country}</h3>
              <div className="space-y-3">
                {dir.resources.map((resource) => (
                  <div key={resource.name}>
                    <p className="text-sm font-medium text-calm-800">{resource.name}</p>
                    <p className="text-xs text-calm-500">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reading Resources */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <BookOpenIcon size={20} className="text-calm-600" />
          <h2 className="text-xl font-semibold text-calm-900">Recommended Reading</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {readingResources.map((resource) => (
            <div key={resource.title} className="card p-5">
              <span className="badge bg-calm-100 text-calm-600 text-xs mb-2">{resource.category}</span>
              <h3 className="font-semibold text-calm-900 text-sm">{resource.title}</h3>
              <p className="text-xs text-calm-600 mt-1">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-calm-50 border border-calm-200 rounded-xl p-4">
        <p className="text-xs text-calm-600">
          <strong>Disclaimer:</strong> The resources listed here are for informational purposes only.
          Reparent does not endorse specific practitioners or guarantee the quality of external services.
          Always verify credentials and suitability for your needs. The books recommended are widely
          cited in clinical literature but are not substitutes for professional assessment or treatment.
        </p>
      </div>
    </div>
  )
}
