

import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {

    const [ aValue, setAvalue ] = useLocalStorage('values', initialValue)


    return [ aValue, setAvalue ];
}

export default useDarkMode;