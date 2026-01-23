'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Lock, PlayCircle, CheckCircle, Clock, Trophy } from 'lucide-react'
import { useState } from 'react'

export default function HocLuyenPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const courses = [
    {
      id: 1,
      title: 'Mindful Leadership Foundation',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      lastAccessed: '2 days ago',
      totalHours: 12,
    },
    {
      id: 2,
      title: 'Conscious Business Strategy',
      progress: 30,
      totalLessons: 16,
      completedLessons: 5,
      lastAccessed: '1 week ago',
      totalHours: 4,
    },
    {
      id: 3,
      title: 'Emotional Intelligence Mastery',
      progress: 0,
      totalLessons: 20,
      completedLessons: 0,
      lastAccessed: 'Not started',
      totalHours: 0,
    },
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen texture-overlay flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full p-8 rounded-xl border border-silver/30 bg-card/80 backdrop-blur-md text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-silver/30 flex items-center justify-center bg-background">
            <Lock className="w-10 h-10 text-silver" />
          </div>
          <h1 className="text-3xl font-sans text-gradient-silver font-semibold mb-4">
            Học Luyện
          </h1>
          <p className="text-muted-foreground font-light leading-relaxed mb-8">
            Welcome to the sacred learning sanctuary. Please authenticate to access your
            transformative courses and continue your spiritual journey.
          </p>
          <button
            onClick={() => setIsAuthenticated(true)}
            className="w-full px-6 py-3 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-colors font-light"
          >
            Enter Sanctuary
          </button>
          <p className="text-xs text-muted-foreground/50 mt-4 font-light">
            Access restricted to registered practitioners
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen texture-overlay">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="w-20 h-20 mx-auto md:mx-0 mb-6 rounded-full border-2 border-silver/30 flex items-center justify-center bg-card">
                <GraduationCap className="w-10 h-10 text-silver" />
              </div>
              <h1 className="text-5xl md:text-6xl font-sans text-gradient-silver font-semibold mb-4">
                Học Luyện
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Your Sacred Learning Journey
              </p>
            </div>

            {/* Progress Overview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-6"
            >
              <div className="text-center px-6 py-4 rounded-lg bg-card/50 border border-border/50">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <Trophy className="w-5 h-5 text-silver" />
                  <span className="text-2xl font-sans text-silver">3</span>
                </div>
                <span className="text-sm text-muted-foreground font-light">Courses Enrolled</span>
              </div>
              <div className="text-center px-6 py-4 rounded-lg bg-card/50 border border-border/50">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <Clock className="w-5 h-5 text-silver" />
                  <span className="text-2xl font-sans text-silver">16h</span>
                </div>
                <span className="text-sm text-muted-foreground font-light">Learning Time</span>
              </div>
              <div className="text-center px-6 py-4 rounded-lg bg-card/50 border border-border/50">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-silver" />
                  <span className="text-2xl font-sans text-silver">23</span>
                </div>
                <span className="text-sm text-muted-foreground font-light">Lessons Completed</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div className="space-y-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-silver/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Course Progress Indicator */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl border-2 border-silver/30 flex items-center justify-center bg-background relative">
                    <svg className="w-20 h-20 -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-border/30"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-silver"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: course.progress / 100 }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                        strokeDasharray={220}
                        strokeDashoffset={220}
                      />
                    </svg>
                    <span className="absolute text-xl font-sans text-silver">{course.progress}%</span>
                  </div>
                </div>

                {/* Course Details */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-sans text-gradient-silver font-semibold mb-1">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 font-light">
                          <CheckCircle className="w-4 h-4" />
                          {course.completedLessons}/{course.totalLessons} lessons
                        </span>
                        <span className="font-light">• {course.totalHours} hours</span>
                        <span className="font-light">• Last: {course.lastAccessed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="w-full h-3 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                        className="h-full bg-gradient-to-r from-silver/50 to-silver rounded-full"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-colors font-light">
                      <PlayCircle className="w-4 h-4" />
                      Continue Learning
                    </button>
                    <button className="px-6 py-2 rounded-lg border border-border/50 text-foreground hover:border-silver/50 transition-colors font-light">
                      View Syllabus
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
