export interface Word {
  word: string;
  phonetic: string;
  meaning: string;
}

export interface Definition {
  meta:     Meta;
  hom:      number;
  hwi:      Hwi;
  fl:       string;
  def:      Def[];
  date:     string;
  shortdef: string[];
  ins?:     In[];
}

export interface Def {
  sseq: Array<Array<Array<SseqClass | string>>>;
  vd?:  string;
}

export interface SseqClass {
  sn?: string;
  dt:  Array<Array<DtClass[] | string>>;
}

export interface DtClass {
  t:  string;
  aq: Aq;
}

export interface Aq {
  auth: string;
}

export interface Hwi {
  hw:   string;
  prs?: PR[];
}

export interface PR {
  mw:    string;
  sound: Sound;
}

export interface Sound {
  audio: string;
  ref:   string;
  stat:  string;
}

export interface In {
  if: string;
}

export interface Meta {
  id:        string;
  uuid:      string;
  sort:      string;
  src:       string;
  section:   string;
  stems:     string[];
  offensive: boolean;
}
