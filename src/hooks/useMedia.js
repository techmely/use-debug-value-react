import { useDebugValue, useEffect, useState } from "react";

export function useMedia(query, initialState = false) {
  const [state, setState] = useState(initialState);
  useDebugValue(`${query} => ${state}`)

  useEffect(() => {
    const mql = window.matchMedia(query);
    function onChange() {
      setState(Boolean(mql.matches));
    }

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
}
