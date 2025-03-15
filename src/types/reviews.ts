export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface Review {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
