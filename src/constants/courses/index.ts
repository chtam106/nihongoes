import { n1Course } from './n1.ts'
import { n2Course } from './n2.ts'
import { n3Course } from './n3.ts'
import { n4Course } from './n4.ts'
import { n5Course } from './n5.ts'
import type { Course, CourseLevel, Lesson } from './types.ts'

export * from './types.ts'

export const COURSE_LEVELS: CourseLevel[] = ['n5', 'n4', 'n3', 'n2', 'n1']

export const courses: Record<CourseLevel, Course> = {
  n5: n5Course,
  n4: n4Course,
  n3: n3Course,
  n2: n2Course,
  n1: n1Course,
}

export const courseList: Course[] = COURSE_LEVELS.map((level) => courses[level])

export function isCourseLevel(value: string): value is CourseLevel {
  return (COURSE_LEVELS as string[]).includes(value)
}

export function getCourse(level: CourseLevel): Course {
  return courses[level]
}

export function getLesson(level: CourseLevel, id: string): Lesson | undefined {
  return courses[level].lessons.find((lesson) => lesson.id === id)
}

export function coursePath(level: CourseLevel): string {
  return `/${level}`
}

export function lessonPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}`
}

export function lessonExercisePath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/exercise`
}

export function lessonListeningPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/listening`
}

export function lessonReadingPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/reading`
}

export function lessonHasReading(lesson: Lesson): boolean {
  return Boolean(lesson.reading && lesson.reading.length > 0)
}

export const COURSE_SITEMAP_PATHS: string[] = COURSE_LEVELS.flatMap((level) => {
  const { lessons } = courses[level]

  return [
    coursePath(level),
    ...lessons.map((lesson) => lessonPath(level, lesson.id)),
    ...lessons.map((lesson) => lessonExercisePath(level, lesson.id)),
    ...lessons.map((lesson) => lessonListeningPath(level, lesson.id)),
    ...lessons.filter(lessonHasReading).map((lesson) => lessonReadingPath(level, lesson.id)),
  ]
})
