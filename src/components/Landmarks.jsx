// Simple flat silhouette icons representing each campus city — used in
// place of a generic decorative pattern on the branch cards.

export function LahoreLandmark(props) {
  // Stylised mosque silhouette (domes + minarets), referencing Lahore's
  // Mughal-era architecture.
  return (
    <svg viewBox="0 0 160 100" fill="none" {...props}>
      <rect x="10" y="70" width="140" height="8" fill="currentColor" opacity="0.9" />
      <rect x="16" y="40" width="10" height="34" fill="currentColor" opacity="0.85" />
      <path d="M21 40 a5 8 0 0 1 5 0" fill="currentColor" opacity="0.85" />
      <circle cx="21" cy="34" r="3.5" fill="currentColor" opacity="0.85" />
      <rect x="134" y="40" width="10" height="34" fill="currentColor" opacity="0.85" />
      <path d="M139 40 a5 8 0 0 1 5 0" fill="currentColor" opacity="0.85" />
      <circle cx="139" cy="34" r="3.5" fill="currentColor" opacity="0.85" />
      <rect x="38" y="50" width="84" height="24" fill="currentColor" />
      <path d="M38 50 a42 22 0 0 1 84 0 Z" fill="currentColor" />
      <rect x="76" y="16" width="8" height="14" fill="currentColor" />
      <path d="M64 30 a16 14 0 0 1 32 0 Z" fill="currentColor" />
      <circle cx="80" cy="14" r="3" fill="currentColor" />
      <rect x="46" y="58" width="12" height="16" rx="6" fill="currentColor" opacity="0.35" />
      <rect x="102" y="58" width="12" height="16" rx="6" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

export function FaisalabadLandmark(props) {
  // Stylised clock-tower silhouette, referencing Faisalabad's Ghanta Ghar
  // (Clock Tower), the city's best-known landmark.
  return (
    <svg viewBox="0 0 160 100" fill="none" {...props}>
      <rect x="10" y="76" width="140" height="6" fill="currentColor" opacity="0.9" />
      <rect x="22" y="58" width="34" height="18" fill="currentColor" opacity="0.7" />
      <rect x="104" y="58" width="34" height="18" fill="currentColor" opacity="0.7" />
      <rect x="64" y="20" width="32" height="56" fill="currentColor" />
      <path d="M64 20 L80 4 L96 20 Z" fill="currentColor" />
      <circle cx="80" cy="36" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="80" y1="36" x2="80" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="36" x2="85" y2="39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="70" y="58" width="20" height="18" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
