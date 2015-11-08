import { LABELS } from '../constants/tournament-phases';
import formatDate from './date';

export default function formatPhase(tournament) {
  const start = formatDate(tournament.start_date);
  const status = LABELS[tournament.phase];

  return `${status} - Started on ${start}`;
}
