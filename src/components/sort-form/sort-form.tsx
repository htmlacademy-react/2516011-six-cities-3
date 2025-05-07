import { useState } from 'react';
import { SortOptions } from '../../utils/const';
import { SortOption } from '../../types/sort';

interface Props {
  currentSort: SortOption;
  onSortChange: (option: SortOption) => void;
}

function SortForm({ currentSort, onSortChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: SortOption) => {
    onSortChange(option);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortOptions).map((option) => (
            <li
              key={option}
              className={`places__option ${option === currentSort ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleOptionClick(option)}
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
