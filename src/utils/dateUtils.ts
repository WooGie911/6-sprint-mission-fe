import {
  format,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

export function formatUpdatedAt(dateString: string): string {
  const date: Date = new Date(dateString);
  const now: Date = new Date();

  const diffInSeconds: number = differenceInSeconds(now, date);
  if (diffInSeconds < 60) {
    return "방금 전";
  }

  const diffInMinutes: number = differenceInMinutes(now, date);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours: number = differenceInHours(now, date);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays: number = differenceInDays(now, date);
  if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  }

  return format(date, "yyyy.MM.dd hh:mm a");
}
