import { debounce } from 'lodash';
import { useCallback } from 'react';

const useDebouncedSearch = onSearch => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    debounce(event => onSearch(event.target.value), 1000),
    []
  );
};

export default useDebouncedSearch;
