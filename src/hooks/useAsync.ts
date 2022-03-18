import { useEffect, useState } from "react";

interface State<T> {
  error: Error | null;
  data: T | null;
  stat: "idle" | "loading" | "success" | "error";
}

interface Options {
  manual?: boolean;
}

const defaultState: State<null> = {
  error: null,
  data: null,
  stat: "idle",
};

export const useAsync = <T>(initialState?: State<T>, options?: Options) => {
  const { manual = true } = options || {};
  const [state, setState] = useState<State<T>>({
    ...defaultState,
    ...initialState,
  });

  const setData = (data: T) => {
    setState({
      ...state,
      data,
      stat: "success",
      error: null,
    });
  };

  const setError = (error: Error) => {
    setState({
      ...state,
      error,
      stat: "error",
      data: null,
    });
  };

  const run = async (promise: Promise<T>) => {
    if (!promise || !promise.then()) {
      throw new Error("Promise must be a valid promise");
    } else {
      setState({
        ...state,
        stat: "loading",
      });
      try {
        const data = await promise;
        setData(data);
        return data;
      } catch (error) {
        setError(error as any);
        return error;
      }
    }
  };
  //
  // useEffect(() => {
  //   if (manual) return;
  //   run();
  // }, []);
  //

  // const run = async (fn: () => Promise<T>) => {
  //   setState({
  //     ...state,
  //     stat: "loading"
  //   });
  //
  //   try {
  //     const data = await fn();
  //     setData(data);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  return {
    isLoading: state.stat === "loading",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
    isIdle: state.stat === "idle",
    run,
    setData,
    setError,
    data: state.data,
  };
};
