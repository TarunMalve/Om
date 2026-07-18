// Core Civilizational Ontology & Scripture Types
export interface Translation {
  id: string;
  language: string;
  translator: string;
  text: string;
}

export interface Commentary {
  id: string;
  author: string;
  language: string;
  text: string;
  philosophicalSchool?: string; // e.g., Advaita, Dvaita, Vishishtadvaita
}

export interface Verse {
  id: string;
  scriptureId: string;
  chapterNumber: number;
  verseNumber: number;
  sanskrit: string;
  transliteration: string; // IAST transliteration
  wordByWord: Array<{
    sanskrit: string;
    english: string;
    grammar?: string;
  }>;
  translations: Translation[];
  commentaries: Commentary[];
  tags: string[];
}

export interface Chapter {
  id: string;
  scriptureId: string;
  chapterNumber: number;
  title: string;
  titleTransliteration: string;
  summary: string;
  versesCount: number;
}

export interface Scripture {
  id: string;
  title: string;
  titleTransliteration: string;
  category: 'Vedas' | 'Upanishads' | 'Gita' | 'Itihasa' | 'Puranas' | 'Darshanas' | 'Sutras';
  description: string;
  chaptersCount: number;
  language: string;
  era?: string;
}

// Human Learning Experience (HLX) Types
export type LearningLevel = 'novice' | 'intermediate' | 'advanced' | 'scholar';

export interface UserProgress {
  userId: string;
  level: LearningLevel;
  activePathId?: string;
  completedVerseIds: string[];
  lastReadVerseId?: string;
  xp: number;
  streak: number;
  lastActiveDate?: string;
}

export interface Flashcard {
  id: string;
  verseId: string;
  front: string; // Sanskrit or question
  back: string;  // Translation or explanation
  nextReviewDate: string;
  intervalDays: number;
  easeFactor: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: LearningLevel;
  steps: Array<{
    id: string;
    type: 'read_verse' | 'read_chapter' | 'quiz' | 'reflection';
    targetId: string;
    xpAward: number;
  }>;
}

// Knowledge Graph & Concept Types
export type NodeType = 'Scripture' | 'Verse' | 'Person' | 'Place' | 'Concept' | 'Deity' | 'Dynasty' | 'Festival' | 'Temple';

export interface GraphNode {
  id: string;
  label: string;
  type: NodeType;
  description: string;
  metadata?: Record<string, any>;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  relationType: string; // e.g., 'MENTIONS', 'BORN_IN', 'CONTRIBUTES_TO', 'COSMIC_FLOW'
  description?: string;
}

export interface KnowledgeGraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// Cultural Themes, Festivals, & Pilgrimage Types
export interface FestivalTheme {
  primaryAccent: string; // HSL value or class name
  secondaryAccent: string;
  backgroundGradient: string;
  accentGlow: string;
  iconName: string;
}

export interface Festival {
  id: string;
  name: string;
  sanskritName?: string;
  date: string; // ISO date string
  theme: FestivalTheme;
  description: string;
  rituals: string[];
  suggestedReadings: string[]; // scriptureId or verseId references
}

export interface Temple {
  id: string;
  name: string;
  deity: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    state: string;
    country: string;
  };
  historicalEra?: string;
  architectureType?: string; // e.g., Dravidian, Nagara, Vesara
  ritualsList: string[];
  timelineEvents: Array<{
    year: number;
    event: string;
    description: string;
  }>;
}
