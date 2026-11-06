export type ConferenceStatus = 'Open' | 'Closed' | 'TBA'

export interface ConferenceEntry {
  name: string
  focus: string
  status: ConferenceStatus
  /** YYYY-MM-DD or YYYY-MM-DD HH:MM TZ, or "—" when TBA / next cycle unknown */
  deadline: string
  url: string
  /** Fixed pattern: Conf: DATE–DATE, Place. Extra: … Cycle: … */
  notes: string
}

export interface NearTermEntry {
  name: string
  milestone: string
  url: string
}

/** Snapshot as of 2026-11-06 Hong Kong. Deadlines change — verify official URLs before submitting. */
export const SNAPSHOT_NOTE =
  'Deadline snapshot as of 2026-11-06 (Hong Kong). Times use the conference timezone (often AoE). Confirm on the official page before submitting.'

export const bioinformaticsConferences: ConferenceEntry[] = [
  {
    name: 'ISMB/ECCB 2027',
    focus: 'Flagship computational biology (ISCB)',
    status: 'Open',
    deadline: '2027-01-14 23:59 AoE',
    url: 'https://www.iscb.org/ismbeccb2027/',
    notes: 'Conf: 2027-07-18–2027-07-22, Copenhagen. Extra: Bioinformatics proceedings.',
  },
  {
    name: 'RECOMB 2027',
    focus: 'Algorithmic computational molecular biology',
    status: 'Closed',
    deadline: '—',
    url: 'https://recomb.org/recomb2027/',
    notes: 'Conf: 2027-05-17–2027-05-20, TBA. Cycle: abstract 2026-10-28 AoE; paper 2026-11-04 AoE.',
  },
  {
    name: 'RECOMB-Seq (+ satellites)',
    focus: 'Sequencing algorithms and satellite themes',
    status: 'TBA',
    deadline: '—',
    url: 'https://recomb-seq.github.io/',
    notes: 'Conf: TBA, TBA. Extra: satellite ≠ main RECOMB. Cycle: CFP TBA.',
  },
  {
    name: 'PSB 2027',
    focus: 'Pacific Symposium on Biocomputing',
    status: 'Open',
    deadline: '2026-12-01 23:59 PT',
    url: 'https://psb.stanford.edu/',
    notes: 'Conf: 2027-01-03–2027-01-07, Hawaii. Extra: poster track. Cycle: full papers closed.',
  },
  {
    name: 'ECCB (standalone years)',
    focus: 'European Conference on Computational Biology',
    status: 'TBA',
    deadline: '—',
    url: 'https://eccb2026.org/',
    notes: 'Conf: TBA, TBA. Extra: 2027 joint with ISMB — use ISMB/ECCB 2027.',
  },
  {
    name: 'GIW / ISCB-Asia 2026',
    focus: 'Asia-Pacific genomics and bioinformatics',
    status: 'Closed',
    deadline: '—',
    url: 'https://giw2026.ksbi.or.kr/',
    notes: 'Conf: 2026-11-17–2026-11-20, Seoul. Extra: ISCB Asia. Cycle: next edition TBA.',
  },
  {
    name: 'APBC',
    focus: 'Asia Pacific Bioinformatics Conference',
    status: 'TBA',
    deadline: '—',
    url: 'https://www.apbc2026.com/home/key-dates',
    notes: 'Conf: TBA, TBA. Extra: regional Asia venue. Cycle: 2026 finished; 2027 TBA.',
  },
  {
    name: 'ACM-BCB 2027',
    focus: 'Bioinformatics and health informatics (ACM)',
    status: 'Open',
    deadline: '2027-03-19 AoE',
    url: 'https://acm-bcb.org/',
    notes: 'Conf: 2027-08-10–2027-08-13, Boston. Cycle: abstract 2027-03-19 AoE; paper 2027-03-26 AoE.',
  },
  {
    name: 'IEEE BIBM',
    focus: 'Bioinformatics and biomedicine',
    status: 'Closed',
    deadline: '—',
    url: 'https://ieeebibm.org/BIBM2026/',
    notes: 'Conf: 2026-12-01–2026-12-04, Dallas. Extra: many workshops. Cycle: 2027 TBA.',
  },
  {
    name: 'ICIBM',
    focus: 'Intelligent Biology and Medicine',
    status: 'TBA',
    deadline: '—',
    url: 'https://icibm2026.iaibm.org/important-dates',
    notes: 'Conf: TBA, TBA. Extra: mid-size specialty meeting. Cycle: 2026 finished; next TBA.',
  },
]

export const csVenues: ConferenceEntry[] = [
  {
    name: 'NeurIPS',
    focus: 'General ML; bioinformatics / genomics ML',
    status: 'TBA',
    deadline: '—',
    url: 'https://neurips.cc/Conferences/2026/Dates',
    notes: 'Conf: TBA, TBA. Extra: CCF-A; workshops ≠ main. Cycle: 2026 main closed; 2027 TBA (~May).',
  },
  {
    name: 'ICML 2027',
    focus: 'General ML; scientific foundation models',
    status: 'TBA',
    deadline: '—',
    url: 'https://icml.cc/Conferences/2027/Dates',
    notes: 'Conf: TBA, TBA. Extra: CCF-A; main vs workshop. Cycle: 2027 dates TBA (~late Jan AoE historically).',
  },
  {
    name: 'ICLR 2027',
    focus: 'Representation learning; biology applications',
    status: 'Closed',
    deadline: '—',
    url: 'https://iclr.cc/Conferences/2027/Dates',
    notes: 'Conf: 2027-04-26–2027-04-28, TBA. Extra: CCF-A. Cycle: abstract 2026-09-18 AoE; paper 2026-09-25 AoE.',
  },
  {
    name: 'AAAI-27',
    focus: 'General AI; health / biology applications',
    status: 'Closed',
    deadline: '—',
    url: 'https://aaai.org/conference/aaai/aaai-27/main-technical-track-call/',
    notes: 'Conf: 2027-02-16–2027-02-23, Montreal. Extra: CCF-A. Cycle: main track closed.',
  },
  {
    name: 'IJCAI 2027',
    focus: 'General AI; AI and Health / AI4Science',
    status: 'Open',
    deadline: '2027-01-04 AoE',
    url: 'https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/',
    notes: 'Conf: 2027-08-07–2027-08-13, Kyoto. Extra: CCF-A. Cycle: abstract 2027-01-04 AoE; paper 2027-01-11 AoE.',
  },
  {
    name: 'KDD 2027',
    focus: 'Data mining; genomics / health data',
    status: 'TBA',
    deadline: '—',
    url: 'https://kdd2027.kdd.org/research-track-call-for-papers/',
    notes: 'Conf: TBA, TBA. Extra: two submission cycles. Cycle: Aug closed; Feb cycle TBA.',
  },
  {
    name: 'WWW / TheWebConf 2027',
    focus: 'Web / data; occasional biomedical graph fit',
    status: 'Open',
    deadline: '2026-11-09 AoE',
    url: 'https://www2027.thewebconf.org/important-dates/',
    notes: 'Conf: TBA, TBA. Extra: short-paper track. Cycle: abstract 2026-11-09 AoE; paper 2026-11-16 AoE.',
  },
  {
    name: 'CVPR 2027',
    focus: 'Computer vision; medical / biomedical imaging',
    status: 'Open',
    deadline: '2026-11-10 AoE',
    url: 'https://cvpr.thecvf.com/Conferences/2027/Dates',
    notes: 'Conf: TBA, TBA. Extra: imaging-focused; main vs workshop. Cycle: reg 2026-11-10 AoE; submit 2026-11-16 AoE.',
  },
  {
    name: 'MICCAI',
    focus: 'Medical image computing',
    status: 'TBA',
    deadline: '—',
    url: 'https://conferences.miccai.org/2027/en/',
    notes: 'Conf: TBA, Auckland. Extra: medical imaging. Cycle: 2026 closed; 2027 TBA (~Feb historically).',
  },
  {
    name: 'CHIL 2027',
    focus: 'Health, Inference, and Learning (AHLI)',
    status: 'Open',
    deadline: '2027-02-03',
    url: 'https://chil.ahli.cc/submit/call-for-papers/',
    notes: 'Conf: TBA, TBA. Extra: clinical genomics + ML. Cycle: confirm timezone on OpenReview.',
  },
  {
    name: 'ML4H',
    focus: 'Machine Learning for Health (AHLI)',
    status: 'TBA',
    deadline: '—',
    url: 'https://ml4h.ahli.cc/submit/call-for-papers/',
    notes: 'Conf: TBA, TBA. Extra: Proceedings vs Findings. Cycle: 2026 closed; next TBA.',
  },
]

export const nearTermActions: NearTermEntry[] = [
  {
    name: 'WWW 2027 short papers',
    milestone: '2026-11-09 AoE',
    url: 'https://www2027.thewebconf.org/important-dates/',
  },
  {
    name: 'CVPR 2027',
    milestone: '2026-11-10 AoE',
    url: 'https://cvpr.thecvf.com/Conferences/2027/Dates',
  },
  {
    name: 'PSB 2027 posters',
    milestone: '2026-12-01 23:59 PT',
    url: 'https://psb.stanford.edu/keydates/',
  },
  {
    name: 'IJCAI 2027',
    milestone: '2027-01-04 AoE',
    url: 'https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/',
  },
  {
    name: 'ISMB/ECCB 2027',
    milestone: '2027-01-14 23:59 AoE',
    url: 'https://www.iscb.org/ismbeccb2027/',
  },
  {
    name: 'CHIL 2027',
    milestone: '2027-02-03',
    url: 'https://chil.ahli.cc/submit/call-for-papers/',
  },
  {
    name: 'ACM-BCB 2027',
    milestone: '2027-03-19 AoE',
    url: 'https://acm-bcb.org/',
  },
]
