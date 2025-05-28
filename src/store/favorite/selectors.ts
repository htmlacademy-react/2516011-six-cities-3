import { State } from '../../types/state';
import { NameSpace } from '../../utils/const';

export const getFavorites = (state: State) => state[NameSpace.Favorite].favorites;
export const getIsFavoritesLoading = (state: State) => state[NameSpace.Favorite].isFavoritesLoading;
export const getHasFavoritesBeenLoaded = (state: State): boolean => state[NameSpace.Favorite].hasFavoritesBeenLoaded;
export const getFavoriteCount = (state: State): number => state[NameSpace.Favorite].favorites.length;
