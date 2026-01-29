// FeatureCard.tsx
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const ExternalIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path d="M14 5h5v5" stroke="currentColor" strokeWidth="2" />
    <path d="M10 14L19 5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19 14v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

type CardProps = {
  id: string;
  image: string;
  title: string;
  desc: string;
  buttonText: string;
};

const FeatureCard = ({ image, title, desc, buttonText }: CardProps) => {
  // ✅ Base URL set kiya (Make sure ye .env mein ho, warna default localhost use hoga)
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // ✅ Image URL check: Agar "http" se shuru nahi ho raha, toh base url jor do
  const fullImageUrl = image.startsWith("http") 
    ? image 
    : `${API_URL}${image}`;

  return (
    <div className="relative h-95 rounded-[5px] overflow-hidden bg-gray-200">
      {/* ✅ Ab fullImageUrl use kiya */}
      <DirectionAwareHover imageUrl={fullImageUrl}>
        <div className="px-8 pb-5">
          <h3 className="text-white text-[21px] font-medium font-outfit">
            {title}
          </h3>

          <p className="mt-3 -mb-3.5 text-white/90 text-[14px] leading-6 max-w-[320px]">
            {desc}
          </p>

          <button
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-[5px]
              bg-[#EA580C] text-white text-sm transition-all duration-300
              hover:bg-orange-600 hover:scale-[1.03] cursor-pointer"
          >
            {buttonText}
            <ExternalIcon />
          </button>
        </div>
      </DirectionAwareHover>
    </div>
  );
};

export default FeatureCard;