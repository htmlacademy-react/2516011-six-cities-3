export interface BaseCardProps {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
}

export interface FavoriteCardProps extends BaseCardProps {
  image: string;
}

export interface PlaceCardProps extends BaseCardProps {
  previewImage: string;
  isFavorite: boolean;
}
