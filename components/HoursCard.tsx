"use client";

import { Clock } from "lucide-react";
import { getTodayHoursFormatted } from "@/lib/hours";

export default function HoursCard() {
  const todayHours = getTodayHoursFormatted();

  return (
    <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-lg shadow-lg p-2.5 flex items-center gap-2 z-10">
      <div className="bg-[#15803d] rounded-full p-1.5">
        <Clock size={14} className="text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-700 font-body">Open Today</span>
        <span className="text-sm font-bold text-gray-800 font-body">
          {todayHours}
        </span>
      </div>
    </div>
  );
}

