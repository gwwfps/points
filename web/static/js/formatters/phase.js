import formatDate from './date';

export default function formatPhase(tournament) {
  const completed = tournament.phase > 2;
  const start = formatDate(tournament.start);

  if (completed) {
    const end = formatDate(tournament.end);
    return `Completed - Ran from ${start} to ${end}`;
  } else {
    return `In progress - Started on ${start}`;
  }
}
