export const levels = [
  { level: 1, title: "Débutant", minPoints: 0, icon: "🌱" },
  { level: 2, title: "Apprenti", minPoints: 100, icon: "📖" },
  { level: 3, title: "Intermédiaire", minPoints: 300, icon: "📚" },
  { level: 4, title: "Avancé", minPoints: 600, icon: "🎓" },
  { level: 5, title: "Expert", minPoints: 1000, icon: "⭐" },
  { level: 6, title: "Maître", minPoints: 2000, icon: "👑" },
];

export function getLevelForPoints(points) {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (points >= levels[i].minPoints) {
      return levels[i];
    }
  }
  return levels[0];
}

export function getProgressToNextLevel(points) {
  const current = getLevelForPoints(points);
  const nextIndex = levels.findIndex((l) => l.level === current.level) + 1;

  if (nextIndex >= levels.length) return 1;

  const next = levels[nextIndex];
  const range = next.minPoints - current.minPoints;
  const progress = points - current.minPoints;

  return Math.min(progress / range, 1);
}
