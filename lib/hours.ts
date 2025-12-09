export interface Hours {
  day: string;
  open: string;
  close: string;
}

export const hours: Hours[] = [
  { day: "Monday", open: "10:30 AM", close: "9:00 PM" },
  { day: "Tuesday", open: "10:30 AM", close: "9:00 PM" },
  { day: "Wednesday", open: "10:30 AM", close: "9:00 PM" },
  { day: "Thursday", open: "10:30 AM", close: "9:00 PM" },
  { day: "Friday", open: "10:30 AM", close: "10:00 PM" },
  { day: "Saturday", open: "11:00 AM", close: "10:00 PM" },
  { day: "Sunday", open: "11:30 AM", close: "9:00 PM" },
];

export function getTodayHours(): Hours | null {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const dayIndex = today === 0 ? 6 : today - 1; // Convert to Monday = 0, Sunday = 6
  return hours[dayIndex] || null;
}

function removeZeroMinutes(time: string): string {
  return time.replace(/:00 /g, " ").replace(/:00$/g, "");
}

export function formatHours(hours: Hours): string {
  const open = removeZeroMinutes(hours.open);
  const close = removeZeroMinutes(hours.close);
  return `${open} - ${close}`;
}

export function getTodayHoursFormatted(): string {
  const today = getTodayHours();
  return today ? formatHours(today) : "Closed";
}

export interface GroupedHours {
  label: string;
  hours: Hours;
}

export function getGroupedHours(): GroupedHours[] {
  // Group consecutive days with same hours
  const grouped: GroupedHours[] = [];
  let currentGroup: Hours[] = [];
  let currentHours = "";

  hours.forEach((dayHours) => {
    const hoursStr = formatHours(dayHours);
    if (hoursStr === currentHours && currentGroup.length > 0) {
      currentGroup.push(dayHours);
    } else {
      if (currentGroup.length > 0) {
        const firstDay = currentGroup[0].day;
        const lastDay = currentGroup[currentGroup.length - 1].day;
        const label =
          currentGroup.length === 1
            ? firstDay
            : `${firstDay} - ${lastDay}`;
        grouped.push({ label, hours: currentGroup[0] });
      }
      currentGroup = [dayHours];
      currentHours = hoursStr;
    }
  });

  // Add the last group
  if (currentGroup.length > 0) {
    const firstDay = currentGroup[0].day;
    const lastDay = currentGroup[currentGroup.length - 1].day;
    const label =
      currentGroup.length === 1 ? firstDay : `${firstDay} - ${lastDay}`;
    grouped.push({ label, hours: currentGroup[0] });
  }

  return grouped;
}

