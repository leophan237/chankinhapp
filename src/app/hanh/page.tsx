'use client'

import { motion } from 'framer-motion'
import { Sun, Calendar, MapPin, Clock, Users } from 'lucide-react'

export default function HanhPage() {
  const events = [
    {
      id: 1,
      title: 'Mindful Leadership Retreat',
      subtitle: 'Tu Lĩnh Chân Kinh 2024',
      date: 'March 15-17, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Zen Garden Center, Hanoi',
      description:
        'A transformative 3-day retreat focusing on integrating mindfulness into business leadership practices.',
      capacity: 30,
      registered: 24,
      type: 'Retreat',
    },
    {
      id: 2,
      title: 'Monthly Dharma Talk',
      subtitle: 'Thuyết Pháp Tháng',
      date: 'Every First Saturday',
      time: '7:00 PM - 9:00 PM',
      location: 'Online & Zen Garden Center',
      description:
        'Regular teachings on applying Buddhist principles to modern entrepreneurship challenges.',
      capacity: 100,
      registered: 67,
      type: 'Talk',
    },
    {
      id: 3,
      title: 'Morning Meditation Circle',
      subtitle: 'Kinh Thiền Sáng',
      date: 'Every Tuesday & Thursday',
      time: '6:30 AM - 7:30 AM',
      location: 'Online',
      description:
        'Start your day with guided meditation and mindfulness practices for entrepreneurs.',
      capacity: 50,
      registered: 42,
      type: 'Meditation',
    },
  ]

  return (
    <div className="min-h-screen texture-overlay">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-silver/30 flex items-center justify-center bg-card">
            <Sun className="w-10 h-10 text-silver" />
          </div>
          <h1 className="text-5xl md:text-6xl font-sans text-gradient-silver font-semibold mb-4">
            Hành
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Events & Spiritual Practices
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div className="space-y-6">
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 md:p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-silver/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Date Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl border-2 border-silver/30 flex flex-col items-center justify-center bg-background">
                    <Calendar className="w-8 h-8 text-silver mb-1" />
                    <span className="text-xs text-muted-foreground font-light">{event.type}</span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-sans text-gradient-silver font-semibold mb-1">
                      {event.title}
                    </h3>
                    <p className="text-lg text-silver/70 font-light">{event.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground font-light leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-silver" />
                      <span className="font-light">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-silver" />
                      <span className="font-light">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-silver" />
                      <span className="font-light">{event.location}</span>
                    </div>
                  </div>

                  {/* Capacity Bar */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1 font-light">
                          <Users className="w-3 h-3" />
                          Registered: {event.registered}/{event.capacity}
                        </span>
                        <span className="font-light">
                          {Math.round((event.registered / event.capacity) * 100)}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(event.registered / event.capacity) * 100}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-silver/50 to-silver rounded-full"
                        />
                      </div>
                    </div>
                    <button className="px-6 py-2 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-colors font-light whitespace-nowrap">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Calendar Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-10 rounded-xl border border-silver/30 bg-gradient-to-br from-silver/5 to-transparent text-center"
        >
          <h2 className="text-3xl font-sans text-gradient-silver font-semibold mb-4">
            Join Our Community Events
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6 max-w-2xl mx-auto">
            Participate in regular meditation sessions, dharma talks, and retreats designed to
            deepen your practice and connect with like-minded entrepreneurs.
          </p>
          <button className="px-8 py-3 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-colors font-light">
            View Full Calendar
          </button>
        </motion.div>
      </div>
    </div>
  )
}
