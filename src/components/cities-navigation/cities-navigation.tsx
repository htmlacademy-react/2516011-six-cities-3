import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { CITIES } from '../../utils/const';

function CitiesNavigation() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city} className="locations__item">
              <Link className={clsx('locations__item-link tabs__item', {
                'tabs__item--active': city === 'Amsterdam',
              })} to="#"
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
