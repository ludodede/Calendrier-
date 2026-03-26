export function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function createSession(questions, count = 10) {
  const picked = shuffleArray(questions).slice(0, count);
  return picked.map((q) => {
    if (!q.options) return q;
    const correctOption = q.options[q.correct];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctOption);
    return { ...q, options: shuffledOptions, correct: newCorrectIndex };
  });
}

export function getDailyChallenge(allExercises, date = new Date()) {
  const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const seed = [...dateStr].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  // Deterministic shuffle using seed
  const exercises = [...allExercises];
  let current = seed;
  for (let i = exercises.length - 1; i > 0; i--) {
    current = (current * 1103515245 + 12345) & 0x7fffffff;
    const j = current % (i + 1);
    [exercises[i], exercises[j]] = [exercises[j], exercises[i]];
  }

  return exercises.slice(0, 10).map((q) => {
    if (!q.options) return q;
    const correctOption = q.options[q.correct];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctOption);
    return { ...q, options: shuffledOptions, correct: newCorrectIndex };
  });
}

export function isDailyChallengeCompleted(lastDate) {
  if (!lastDate) return false;
  const last = new Date(lastDate);
  const today = new Date();
  return (
    last.getFullYear() === today.getFullYear() &&
    last.getMonth() === today.getMonth() &&
    last.getDate() === today.getDate()
  );
}
