import {SORT_OPTIONS} from '../../utils/const';

type SortOption = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];

interface SortFormProps {
  currentSort: SortOption;
}

function SortForm({ currentSort }: SortFormProps) {
  const ifIsOpen = true;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {ifIsOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SORT_OPTIONS).map((option) => (
            <li
              key={option}
              className={`places__option ${option === currentSort ? 'places__option--active' : ''}`}
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortForm;
