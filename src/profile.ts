/**
 * ═══════════════════════════════════════════════════════════════════════
 *  YOUR PROFILE — this is the main file you edit. (The other one is
 *  src/theme.ts, where you pick your look.)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Everything here flows automatically to:
 *   - /api/whoami and /api/profile  (what the course platform reads)
 *   - your home page and /about     (what humans read)
 *
 * Because both pages and APIs read from THIS one object, they can never
 * disagree, and "pages match the API" is one of the graded checks.
 *
 * Fill in every field, replace the placeholder photo, and you're done.
 */

export const profile = {
  /** Your name as you want it to appear everywhere. */
  displayName: "Ibrahim Malik",

  /** Your UD email — must match the one you signed into the course with. */
  email: "ibmalik@udel.edu",

  /** Where you're from. Shows on your roster card and /about. */
  hometown: "Dar-es-salaam, Tanzania",

  /**
   * 2 to 4 fun facts (the grader checks the count!). Real ones: they're
   * how classmates find something to say hello about.
   */
  funFacts: [
    "I speak Swahili, and 'hakuna matata' really is a way of life back home.",
    "I enjoy reading Sufi poetry and reflective philosophy whenever I get a quiet moment away from screens.",
  ],

  /** One decision you're proud of, in a sentence. */
  decisionImProudOf:
    "To stand in quiet gratitude for the path I have chosen: to let the heart be my compass, and to walk beside my daughters as a keeper of wonder, warmth, and unseen magic.",

  /**
   * Your photo. Replace public/photo.svg with a real photo of you
   * (e.g. put photo.jpg in the public/ folder and change this to "/photo.jpg").
   * It must be a real image file: the grader fetches it and checks.
   */
  photoPath: "/photo.jpg",

  /**
   * Who can see your roster card:
   *   "class"          — your classmates and the professor (recommended)
   *   "professor-only" — just the professor
   */
  rosterVisibility: "class" as "class" | "professor-only",

  /** A one-line tagline for your home page. Make it yours. */
  tagline:
    "A humble traveler on the path, learning with gratitude and serving with kindness.",

  /**
   * A short bio for your home page: two or three sentences, written like
   * a person, not a resume. What are you studying? What do you care about?
   */
  bio: "My journey has carried me from the coast of Dar es Salaam, Tanzania to the University of Delaware, where I continue to grow as both a student and a father. I believe that true learning happens through curiosity, patience, and kindness toward the people we meet along the way. I am excited to build new things in this course and share good company with my classmates.",

  /**
   * Your GitHub repo URL. The course platform reads this from /api/health to
   * verify you have ≥ 5 commits spread over days (not one bulk dump).
   * Example: "https://github.com/your-username/your-repo"
   */
  repoUrl: "https://github.com/ibrahim-atelier/my-site",
};


