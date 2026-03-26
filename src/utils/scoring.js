const POINTS_CORRECT = 10;
const BONUS_FIRST_TRY = 5;
const BONUS_PERFECT_SESSION = 20;

export function calculateSessionPoints(answers) {
  let basePoints = 0;
  let bonusPoints = 0;

  for (const answer of answers) {
    if (answer.correct) {
      basePoints += POINTS_CORRECT;
      if (answer.firstTry) {
        bonusPoints += BONUS_FIRST_TRY;
      }
    }
  }

  const perfectSession = answers.length > 0 && answers.every((a) => a.correct && a.firstTry);
  if (perfectSession) {
    bonusPoints += BONUS_PERFECT_SESSION;
  }

  return {
    basePoints,
    bonusPoints,
    totalPoints: basePoints + bonusPoints,
    perfectSession,
  };
}
