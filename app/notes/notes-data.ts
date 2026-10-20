export type Note = {
  title: string;
  date: string;
  displayDate: string;
  summary: string;
  pdf: string;
};

// Add new notes at the top so the directory stays in reverse chronological order.
// To update an existing note, replace its PDF in /public/notes without changing
// the filename or this entry.
export const notes: Note[] = [
  {
    title: 'When Observation Becomes Evidence: Knowledge, Hypothesis Spaces, and the Dynamics of Exploration',
    date: '2026-10-20',
    displayDate: 'October 20, 2026',
    summary: 'Observation does not become evidence by itself. Its evidential meaning depends on the learner\'s knowledge, expectations, and hypothesis space; exploration connects changes in the external world with changes in internal representation',
    pdf: '/notes/When_Observation_Becomes_Evidence.pdf',
  },
];
