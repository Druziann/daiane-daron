export interface DailyTask {
  day: string;
  focus: string;
  post: string;
  stories: string;
  icon: 'offer' | 'video' | 'social' | 'interaction' | 'store' | 'alert';
}

export interface Metric {
  name: string;
  value: number;
  color: string;
}

export interface StrategyItem {
  title: string;
  description: string;
  action: string;
}