'use client'

import { useState } from 'react'
import { crisisContacts } from '@/lib/crisis-data'
import { ExternalLinkIcon, PhoneIcon, BookOpenIcon, ShieldIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

const readingResources = [
  {
    title: 'Attached',
    author: 'Amir Levine & Rachel Heller',
    description: 'An accessible introduction to adult attachment styles and how they affect romantic relationships. Grounded in research by Bowlby and Ainsworth.',
    category: 'Attachment',
  },
  {
    title: 'Hold Me Tight',
    author: 'Dr Sue Johnson',
    description: 'The developer of Emotionally Focused Therapy explains the science of love and how to strengthen your bond through understanding attachment needs.',
    category: 'Attachment',
  },
  {
    title: 'The Body Keeps the Score',
    author: 'Bessel van der Kolk',
    description: 'A landmark book on how trauma reshapes the body and brain, and evidence-based paths toward healing including EMDR, yoga, and neurofeedback.',
    category: 'Trauma',
  },
  {
    title: 'Self-Compassion: The Proven Power of Being Kind to Yourself',
    author: 'Dr Kristin Neff',
    description: 'The pioneer of self-compassion research explains her three-component model and provides exercises used in clinical practice worldwide.',
    category: 'Self-Compassion',
  },
  {
    title: 'Codependent No More',
    author: 'Melody Beattie',
    description: 'The foundational text on codependency. Practical guidance for breaking free from patterns of controlling and caretaking in relationships.',
    category: 'Codependency',
  },
  {
    title: 'Facing Codependence',
    author: 'Pia Mellody',
    description: 'A clinical guide to understanding how childhood trauma creates codependent patterns in adulthood, with a framework for recovery.',
    category: 'Codependency',
  },
  {
    title: 'Polyvagal Theory in Therapy',
    author: 'Deb Dana',
    description: 'Understanding the nervous system and its role in safety, connection, and trauma responses. Based on Stephen Porges\' polyvagal theory.',
    category: 'Nervous System',
  },
  {
    title: 'DBT Skills Training Handouts and Worksheets',
    author: 'Marsha M. Linehan',
    description: 'The comprehensive resource for Dialectical Behaviour Therapy skills practice, from the creator of DBT.',
    category: 'DBT',
  },
  {
    title: 'Why Does He Do That?',
    author: 'Lundy Bancroft',
    description: 'Understanding the mindset of controlling and abusive partners. Essential reading for those in or leaving unsafe dynamics.',
    category: 'Safety',
  },
  {
    title: 'Complex PTSD: From Surviving to Thriving',
    author: 'Pete Walker',
    description: 'A practical guide to recovering from Complex PTSD, including the four F trauma responses (fight, flight, freeze, fawn).',
    category: 'Trauma',
  },
]

const videoResources = [
  {
    title: 'How Childhood Trauma Affects Health Across a Lifetime',
    channel: 'TED — Nadine Burke Harris',
    description: 'Paediatrician Nadine Burke Harris explains the science of adverse childhood experiences (ACEs) and their lasting impact on health and relationships.',
    url: 'https://www.youtube.com/watch?v=95ovIJ3dsNk',
    category: 'Trauma',
  },
  {
    title: 'The Power of Vulnerability',
    channel: 'TED — Brené Brown',
    description: 'Brené Brown\'s groundbreaking talk on why vulnerability is the birthplace of connection, belonging, and love — essential for healing attachment wounds.',
    url: 'https://www.youtube.com/watch?v=iCvmsMzlF7o',
    category: 'Self-Compassion',
  },
  {
    title: 'Polyvagal Theory Explained Simply',
    channel: 'Therapy in a Nutshell',
    description: 'A clear explanation of how your nervous system\'s three states (ventral vagal, sympathetic, dorsal vagal) affect your safety, relationships, and trauma responses.',
    url: 'https://www.youtube.com/watch?v=br8-qebjIgs',
    category: 'Nervous System',
  },
  {
    title: 'Attachment Theory — How Your Childhood Affects Your Love Style',
    channel: 'The School of Life',
    description: 'An animated overview of Bowlby\'s attachment theory and how anxious, avoidant, and secure patterns develop from early caregiving experiences.',
    url: 'https://www.youtube.com/watch?v=2s9ACDMcpjA',
    category: 'Attachment',
  },
  {
    title: 'The Space Between Self-Esteem and Self-Compassion',
    channel: 'TEDx — Kristin Neff',
    description: 'Dr Kristin Neff explains why self-compassion is more effective and stable than self-esteem, and introduces her three-component model.',
    url: 'https://www.youtube.com/watch?v=IvtZBUSplr4',
    category: 'Self-Compassion',
  },
  {
    title: 'Understanding Trauma Bonding',
    channel: 'Dr Ramani Durvasula',
    description: 'A clinical psychologist explains the neurochemistry of trauma bonding, intermittent reinforcement, and why leaving abusive relationships is so difficult.',
    url: 'https://www.youtube.com/watch?v=kmB9fpHVd2o',
    category: 'Safety',
  },
  {
    title: 'DBT Distress Tolerance Skills',
    channel: 'Therapy in a Nutshell',
    description: 'An overview of DBT distress tolerance skills including TIPP, STOP, and radical acceptance — practical tools for surviving emotional crises.',
    url: 'https://www.youtube.com/watch?v=dKbP0MIo8II',
    category: 'DBT',
  },
  {
    title: 'Signs of Codependency',
    channel: 'Patrick Teahan',
    description: 'Licensed therapist Patrick Teahan explains the roots and signs of codependency, and how it connects to childhood emotional neglect.',
    url: 'https://www.youtube.com/watch?v=oMafjhmxCdA',
    category: 'Codependency',
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
  {
    country: 'Canada',
    resources: [
      { name: 'Psychology Today (Canada)', description: 'Find therapists and counsellors across Canada' },
      { name: 'Canadian Mental Health Association', description: 'Local CMHA branches offer programs and support' },
    ],
  },
  {
    country: 'New Zealand',
    resources: [
      { name: 'New Zealand Psychologists Board', description: 'Find a registered psychologist' },
      { name: 'Supporting Families', description: 'Free support for families affected by mental illness' },
    ],
  },
]

const categoryFilters = ['All', 'Attachment', 'Trauma', 'DBT', 'Self-Compassion', 'Codependency', 'Nervous System', 'Safety']

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredBooks = activeFilter === 'All' ? readingResources : readingResources.filter((r) => r.category === activeFilter)
  const filteredVideos = activeFilter === 'All' ? videoResources : videoResources.filter((r) => r.category === activeFilter)

  return (
    <div className="page-width py-6 sm:py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-calm-900">Resources & Support</h1>
        <p className="mt-2 text-calm-600">
          Curated resources from leading clinicians and researchers in attachment, trauma, and recovery.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
              activeFilter === filter ? 'bg-brand-600 text-white' : 'bg-calm-50 text-calm-600 hover:bg-calm-100'
            )}
          >
            {filter}
          </button>
        ))}
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

      {/* Video Resources */}
      {filteredVideos.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
              <polygon points="6 3 20 12 6 21 6 3"/>
            </svg>
            <h2 className="text-xl font-semibold text-calm-900">Recommended Videos</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredVideos.map((video) => (
              <a
                key={video.title}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="badge bg-calm-100 text-calm-600 text-xs">{video.category}</span>
                  <ExternalLinkIcon size={14} className="text-calm-400 group-hover:text-brand-500 shrink-0 mt-0.5" />
                </div>
                <h3 className="font-semibold text-calm-900 text-sm mt-2 group-hover:text-brand-700">{video.title}</h3>
                <p className="text-xs text-brand-600 font-medium mt-0.5">{video.channel}</p>
                <p className="text-xs text-calm-600 mt-1.5 leading-relaxed">{video.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}

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
            Look for therapists who specialise in attachment, trauma (EMDR, Somatic Experiencing),
            or evidence-based approaches like CBT, DBT, or EFT.
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
      {filteredBooks.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BookOpenIcon size={20} className="text-calm-600" />
            <h2 className="text-xl font-semibold text-calm-900">Recommended Reading</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredBooks.map((resource) => (
              <div key={resource.title} className="card p-5">
                <span className="badge bg-calm-100 text-calm-600 text-xs mb-2">{resource.category}</span>
                <h3 className="font-semibold text-calm-900 text-sm">{resource.title}</h3>
                <p className="text-xs text-brand-600 font-medium">{resource.author}</p>
                <p className="text-xs text-calm-600 mt-1.5 leading-relaxed">{resource.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <div className="bg-calm-50 border border-calm-200 rounded-xl p-4">
        <p className="text-xs text-calm-600">
          <strong>Disclaimer:</strong> The resources listed here are for informational purposes only.
          Reparent does not endorse specific practitioners or guarantee the quality of external services.
          Always verify credentials and suitability for your needs. The books and videos recommended are widely
          cited in clinical literature but are not substitutes for professional assessment or treatment.
          YouTube links are to content from licensed clinicians and reputable organisations.
        </p>
      </div>
    </div>
  )
}
