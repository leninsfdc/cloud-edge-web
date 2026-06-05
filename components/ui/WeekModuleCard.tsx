

import check from "@/public/icons/check-purple.svg"
import Image from "next/image";

interface WeekModuleCardProps {
  label: string;
  title: string;
  points: string[];
  defaultOpen?: boolean;
}

export default function WeekModuleCard({
  label,
  title,
  points,
  defaultOpen = true,
}: WeekModuleCardProps) {
  return (
    <div className="bg-white border border-[#D8DEE9] rounded-3xl overflow-hidden">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#EEF2FF] text-[#6366F1] text-sm font-semibold px-4 py-2 rounded-lg uppercase">
            {label}
          </div>

          <h3 className="text-[#1E293B] text-2xl font-bold">
            {title}
          </h3>
        </div>

        <button className="text-slate-400">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 15L12 9L18 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {defaultOpen && (
        <div className="border-t border-[#E5E7EB] px-6 py-5">
          <ul className="space-y-5">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-5 h-5 rounded-full bg-[#6366F1] flex items-center justify-center mt-0.5 shrink-0">
                  <Image src={check} alt="check" className=" w-4 h-4" />
                </div>

                <span className="text-[#475569] text-lg">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}