/**
 * Combines CSS classes using standard conditions.
 * Simple implementation to avoid external dependencies during initialization phase.
 */
export function cn(...inputs: Array<string | undefined | null | boolean | Record<string, boolean>>): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

/**
 * Basic Sanskrit Transliteration Helper
 * Maps common devanagari letters to IAST characters (for display formatting).
 */
export function transliterateDevanagari(text: string): string {
  const mapping: Record<string, string> = {
    'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū',
    'ऋ': 'ṛ', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
    'क': 'ka', 'ख': 'kha', 'ग': 'ga', 'घ': 'gha', 'ङ': 'ṅa',
    'च': 'ca', 'छ': 'cha', 'ज': 'ja', 'झ': 'jha', 'ञ': 'ña',
    'ट': 'ṭa', 'ठ': 'ṭha', 'ड': 'ḍa', 'ढ': 'ḍha', 'ण': 'ṇa',
    'त': 'ta', 'थ': 'tha', 'द': 'da', 'ध': 'dha', 'न': 'na',
    'प': 'pa', 'फ': 'pha', 'ब': 'ba', 'भ': 'bha', 'म': 'ma',
    'य': 'ya', 'र': 'ra', 'ल': 'la', 'व': 'va', 'श': 'śa',
    'ष': 'ṣa', 'स': 'sa', 'ह': 'ha',
    'ँ': 'm̐', 'ं': 'ṃ', 'ः': 'ḥ', '्': ''
  };

  return text
    .split('')
    .map(char => mapping[char] || char)
    .join('');
}

/**
 * Format active date relative to Hindu Solar/Lunar festivals
 * Maps simple calendar dates to active festivals (Stub representation)
 */
export function getActiveFestival(dateString?: string): string | null {
  const targetDate = dateString ? new Date(dateString) : new Date();
  const month = targetDate.getMonth(); // 0-indexed (0 is January)
  const date = targetDate.getDate();

  // Representative solar/lunar calendar matches
  if (month === 0 && date === 14) return 'makara_sankranti';
  if (month === 2 && date === 8) return 'mahashivratri';
  if (month === 7 && date === 15) return 'raksha_bandhan';
  if (month === 7 && date === 25) return 'janmashtami';
  if (month === 9 && date === 24) return 'diwali';
  if (month === 9 && date === 10) return 'dussehra';
  
  return null;
}

/**
 * Accessibility helper: Focus Trapping
 */
export function trapFocus(element: HTMLElement, e: KeyboardEvent) {
  const focusableEls = element.querySelectorAll<HTMLElement>(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  );
  
  if (focusableEls.length === 0) return;

  const firstFocusable = focusableEls[0];
  const lastFocusable = focusableEls[focusableEls.length - 1];

  const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) return;

  if (e.shiftKey) {
    if (document.activeElement === firstFocusable) {
      lastFocusable.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusable) {
      firstFocusable.focus();
      e.preventDefault();
    }
  }
}
