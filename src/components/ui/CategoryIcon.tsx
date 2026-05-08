// src/components/ui/CategoryIcon.tsx
// SVG-иконки для категорий каталога. Стилистические силуэты фасадов.

interface IconProps {
  slug: string;
  className?: string;
}

export default function CategoryIcon({ slug, className = "w-12 h-12" }: IconProps) {
  switch (slug) {
    case "pvh-standart":
      // Простая фрезеровка — прямоугольная рамка
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="12" y="12" width="24" height="24" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      );

    case "pvh-premium":
      // Премиум — сложная фрезеровка с двумя рамками
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="4" y="4" width="40" height="40" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9" y="9" width="30" height="30" stroke="currentColor" strokeWidth="1.2"/>
          <rect x="14" y="14" width="20" height="20" stroke="currentColor" strokeWidth="1"/>
          <line x1="9" y1="24" x2="14" y2="24" stroke="currentColor" strokeWidth="1"/>
          <line x1="34" y1="24" x2="39" y2="24" stroke="currentColor" strokeWidth="1"/>
        </svg>
      );

    case "plastic":
      // HPL — диагональная штриховка (фактура пластика)
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="6"  y1="14" x2="42" y2="14" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          <line x1="6"  y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          <line x1="6"  y1="30" x2="42" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          <line x1="6"  y1="38" x2="42" y2="38" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
        </svg>
      );

    case "patina":
      // Патина — рамка с декоративным углом
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 12 L12 6 M36 6 L42 12 M42 36 L36 42 M12 42 L6 36" stroke="currentColor" strokeWidth="1"/>
          <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1"/>
        </svg>
      );

    case "enamel":
      // Эмаль — гладкая поверхность с бликом
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1.5" rx="2"/>
          <path d="M12 12 L20 12 L12 20 Z" fill="currentColor" opacity="0.15"/>
        </svg>
      );

    case "stone":
      // Камень — текстура мрамора
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 18 Q16 14 22 18 T34 18" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
          <path d="M14 28 Q20 24 26 28 T38 28" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
          <path d="M10 36 Q18 32 26 36" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
        </svg>
      );

    case "door-panels":
      // Дверная панель — высокий прямоугольник
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="14" y="4" width="20" height="40" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="18" y="10" width="12" height="14" stroke="currentColor" strokeWidth="1"/>
          <rect x="18" y="28" width="12" height="12" stroke="currentColor" strokeWidth="1"/>
        </svg>
      );

    case "kupe":
      // Шкаф-купе — две раздвижных створки
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="4" y="8" width="20" height="32" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="24" y="8" width="20" height="32" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="20" x2="14" y2="28" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="34" y1="20" x2="34" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );

    case "radius":
      // Радиусный — закруглённый угол
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <path d="M6 42 L6 18 Q6 6 18 6 L42 6 L42 42 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 42 L12 22 Q12 12 22 12 L42 12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      );

    case "decor-elements":
      // Декоративный элемент — карниз/багет
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="4" y="14" width="40" height="6" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="4" y="22" width="40" height="3" stroke="currentColor" strokeWidth="1"/>
          <rect x="4" y="27" width="40" height="8" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );

    case "headboards":
      // Спинка кровати — широкая верхняя дуга
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <path d="M4 42 L4 16 Q4 6 14 6 L34 6 Q44 6 44 16 L44 42 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M10 36 L10 18 Q10 12 16 12 L32 12 Q38 12 38 18 L38 36" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
        </svg>
      );

    case "decors":
      // Декор-накладка — мелкие декоративные элементы
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="8" width="36" height="6" stroke="currentColor" strokeWidth="1.2"/>
          <rect x="6" y="20" width="36" height="6" stroke="currentColor" strokeWidth="1.2"/>
          <rect x="6" y="32" width="36" height="6" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="12" cy="11" r="1" fill="currentColor"/>
          <circle cx="36" cy="11" r="1" fill="currentColor"/>
          <circle cx="12" cy="23" r="1" fill="currentColor"/>
          <circle cx="36" cy="23" r="1" fill="currentColor"/>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
  }
}
