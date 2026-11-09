export interface EventItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  category: string;
  fullDate?: string;
  venue?: string;
}

export interface NoticeItem {
  id: string;
  date: string;
  title: string;
  category: 'Academic' | 'Admission' | 'Event' | 'General';
  isNew?: boolean;
}

export interface CalendarEvent {
  day: number;
  month: number; // 0-indexed (7 = August)
  year: number;
  title: string;
  type: 'holiday' | 'exam' | 'event' | 'activity';
  description?: string;
}
