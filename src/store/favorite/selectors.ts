import { State } from '../../types/state';
import { NameSpace } from '../../utils/const';

export const getFavorites = (state: State) => state[NameSpace.Favorite].favorites;
export const getIsFavoritesLoading = (state: State) => state[NameSpace.Favorite].isFavoritesLoading;
