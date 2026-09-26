// Edit this file to update the visible content of the website.
export const profile = {
  name: 'Yijin Fang',
  role: 'PhD Candidate in Psychology',
  institution: 'Tsinghua University',
  location: 'Beijing, China',
  email: 'fangyijin2021@gmail.com',
  googleScholar: 'https://scholar.google.com/citations?user=T43T5qcAAAAJ&hl=zh-CN&oi=ao',
  github: 'https://github.com/yijin-fang',
  photo: '/photo.png',
};

export type Publication = {
  year: string;
  authors: string;
  title: string;
  venue?: string;
  venuePrefix?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  pdf?: string;
};

// For a PDF link, add the file to /public/papers and set pdf to
// '/papers/your-file-name.pdf'. The link opens the PDF directly.
export const publications: Record<string, Publication[]> = {
  Published: [
    {
      year: '2026',
      authors: 'Fang, Y., & Christie, S.',
      title: 'Knowing less, exploring more? Metacognitive regulation of knowledge in explore-exploit decisions.',
      venuePrefix: 'In ',
      venue: 'Proceedings of the 48th Annual Meeting of the Cognitive Science Society',
      pdf: '/papers/fang-christie-2026-knowing-less-exploring-more.pdf',
    },
    {
      year: '2026',
      authors: 'Fang, Y., Chang, A., & Christie, S.',
      title: 'Effects of encouraging vs. reflective feedback on children\'s explore-exploit decisions.',
      venuePrefix: 'In ',
      venue: 'Proceedings of the 48th Annual Meeting of the Cognitive Science Society',
      pdf: '/papers/fang-chang-christie-2026-feedback.pdf',
    },
    {
      year: '2025',
      authors: 'Fang, Y., Yang, H. A., & Christie, S.',
      title: 'Early experiences shape children\'s explore-exploit decisions: Evidence from the rural-urban gap.',
      venuePrefix: 'In ',
      venue: 'Proceedings of the 47th Annual Meeting of the Cognitive Science Society',
      pdf: '/papers/fang-yang-christie-2025-early-experiences.pdf',
    },
    {
      year: '2024',
      authors: 'Fang, Y., Yang, H., & Christie, S.',
      title: 'The effect of perceived vs. factual knowledge on exploration.',
      venuePrefix: 'In ',
      venue: 'Proceedings of the 46th Annual Meeting of the Cognitive Science Society',
      pdf: '/papers/fang-yang-christie-2024-perceived-factual-knowledge.pdf',
    },
    {
      year: '2022',
      authors: 'Lyu, J., Fang, Y., Fan, W., Yang, H., & Christie, S.',
      title: 'Early play serves as a foundation for lifelong learning.',
      venue: 'Early Child Development',
      volume: '1',
      pages: '9–23',
      pdf: '/papers/lyu-et-al-2022-early-play.pdf',
    },
    {
      year: '2020',
      authors: 'Christie, S., Lyu, J., Fang, Y., & Han, X.',
      title: 'The cognitive science of designing urban spaces for children.',
      venue: 'Landscape Architecture Frontiers',
      volume: '8',
      issue: '2',
      pages: '84–99',
      pdf: '/papers/christie-et-al-2020-urban-space-design.pdf',
    },
  ],
  'Under review': [
    {
      year: '—',
      authors: 'Masters, A. S., Robinson, J., Gibbs, H., Lyu, J., Fang, Y., Christie, S., Golinkoff, R. M., & Hirsh-Pasek, K.',
      title: 'Parents\' understanding of playful learning in the United States and China.',
      venue: 'Frontiers in Education',
    },
  ],
  'In preparation': [
    {
      year: '—',
      authors: 'Fang, Y., Yang, H. A., Zhang, Y., & Christie, S.',
      title: 'Explore-exploit decisions between rural and urban children in middle childhood.',
    },
    {
      year: '—',
      authors: 'Fang, Y., & Christie, S.',
      title: 'Knowing less, exploring more? How knowledge base affects explore-exploit decisions.',
    },
    {
      year: '—',
      authors: 'Fang, Y., Zheng, Y., & Christie, S.',
      title: 'Scaffolding relational abstraction: Does broader comparison promote broader transfer?',
    },
  ],
};
