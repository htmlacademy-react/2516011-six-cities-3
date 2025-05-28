import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/city-offers/city-offers';
import { cityData } from '../../utils/const';
import { getCityName } from '../../store/city-offers/selectors.ts';

function CitiesNavigation() {
  const currentCity = useAppSelector(getCityName);

  const dispatch = useAppDispatch();

  const handleCityClick = (city: string) => {
    dispatch(changeCity(cityData[city]));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(cityData).map((city) => (
            <li key={city} className="locations__item">
              <Link
                className={clsx('locations__item-link tabs__item', {
                  'tabs__item--active': city === currentCity,
                })}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCityClick(city);
                }}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesNavigation;
