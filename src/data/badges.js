export const badges = [
  {
    id: "first_exercise",
    title: "Premier pas",
    description: "Complétez votre premier exercice",
    icon: "🎯",
    condition: (stats) => stats.exercisesCompleted >= 1
  },
  {
    id: "streak_3",
    title: "En forme !",
    description: "Maintenez une série de 3 jours",
    icon: "🔥",
    condition: (stats) => stats.streak >= 3
  },
  {
    id: "streak_7",
    title: "Une semaine !",
    description: "Maintenez une série de 7 jours",
    icon: "💪",
    condition: (stats) => stats.streak >= 7
  },
  {
    id: "points_100",
    title: "Centurion",
    description: "Atteignez 100 points",
    icon: "⭐",
    condition: (stats) => stats.totalPoints >= 100
  },
  {
    id: "points_500",
    title: "Demi-millier",
    description: "Atteignez 500 points",
    icon: "🌟",
    condition: (stats) => stats.totalPoints >= 500
  },
  {
    id: "points_1000",
    title: "Millionnaire",
    description: "Atteignez 1000 points",
    icon: "👑",
    condition: (stats) => stats.totalPoints >= 1000
  },
  {
    id: "perfect_score",
    title: "Sans faute !",
    description: "Obtenez un score parfait",
    icon: "💯",
    condition: (stats) => stats.hasPerfectScore === true
  },
  {
    id: "exercises_10",
    title: "Assidu",
    description: "Complétez 10 exercices",
    icon: "📚",
    condition: (stats) => stats.exercisesCompleted >= 10
  },
  {
    id: "exercises_25",
    title: "Passionné",
    description: "Complétez 25 exercices",
    icon: "🏆",
    condition: (stats) => stats.exercisesCompleted >= 25
  },
  {
    id: "accuracy_80",
    title: "Précis",
    description: "Maintenez 80% de réussite",
    icon: "🎯",
    condition: (stats) => stats.totalAnswers > 10 && (stats.correctAnswers / stats.totalAnswers) >= 0.8
  }
]

export function getUnlockedBadges(stats) {
  if (!stats) return []
  return badges.filter((badge) => badge.condition(stats))
}

export function getNewBadges(stats, previousBadgeIds = []) {
  const unlocked = getUnlockedBadges(stats)
  return unlocked.filter((badge) => !previousBadgeIds.includes(badge.id))
}
