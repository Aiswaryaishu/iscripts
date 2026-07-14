import { useState } from 'react';
import { cn } from '../../lib/utils';

export interface FeatureItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: '1',
    name: 'Platform Engineers',
    description:
      'Builders who architect, develop, and optimize turnkey software platforms for fast deployment and long-term scalability.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=700&q=80',
  },
  {
    id: '2',
    name: 'Product Designers',
    description:
      'Designers crafting modern interfaces, admin dashboards, and mobile experiences that elevate product usability.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=700&q=80',
  },
  {
    id: '3',
    name: 'Innovation Specialists',
    description:
      'Innovators exploring new features, integrations, and platform capabilities to keep products market-ready.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=700&q=80',
  },
  {
    id: '4',
    name: 'Customization Experts',
    description:
      'Engineers tailoring workflows, branding, APIs, and business logic to match each client’s unique requirements.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&h=700&q=80',
  },
  {
    id: '5',
    name: 'Mobile Developers',
    description:
      'Specialists building companion apps and responsive mobile experiences that extend platform value on iOS and Android.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=700&q=80',
  },
  {
    id: '6',
    name: 'Support Engineers',
    description:
      'Dedicated technical experts providing installation help, troubleshooting, and ongoing platform assistance.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=700&q=80',
  },
];

interface FeatureShowcaseProps {
  features?: FeatureItem[];
}

export default function TeamShowcase({ features = DEFAULT_FEATURES }: FeatureShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = features.filter((_, i) => i % 3 === 0);
  const col2 = features.filter((_, i) => i % 3 === 1);
  const col3 = features.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-sans">
      {/* ── Left: photo grid ── */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((item) => (
            <PhotoCard
              key={item.id}
              item={item}
              className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((item) => (
            <PhotoCard
              key={item.id}
              item={item}
              className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((item) => (
            <PhotoCard
              key={item.id}
              item={item}
              className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: feature description list ── */}
      <div className="flex flex-col gap-5 pt-2 flex-1 w-full text-left">
        {features.map((item) => (
          <FeatureRow
            key={item.id}
            item={item}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
  item,
  className,
  hoveredId,
  onHover,
}: {
  item: FeatureItem;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-500',
        className,
        isDimmed ? 'opacity-40' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.65)',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Feature description section
───────────────────────────────────────── */

function FeatureRow({
  item,
  hoveredId,
  onHover,
}: {
  item: FeatureItem;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300 border-b border-slate-100 pb-4 last:border-b-0',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Title */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-[#e53935] w-5' : 'bg-slate-300',
          )}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-bold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-[#e53935]' : 'text-slate-800',
          )}
        >
          {item.name}
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 pl-[27px] text-xs md:text-sm font-semibold text-slate-500 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
