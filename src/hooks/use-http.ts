import { useReducer, useCallback } from "react";

function httpReducer(_, action) {
  switch (action.type) {
    case 'send_request': {
      return {
        data: null,
        error: null,
        status: 'pending',
      };
    }
    case 'success': {
      return {
        data: action.data,
        error: null,
        status: 'success',
      };
    }
    case 'error': {
      return {
        data: null,
        error: action.errorMessage,
        status: 'error',
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

interface IHttpState {
  error: string | null;
  status: string | null
}

function useHttp(sendRequest, isRequestSending = false) {
  const initialHttpState:IHttpState  = {
    error: null,
    status: isRequestSending ? 'pending' : null,
  };
  const [httpState, dispatch] = useReducer(httpReducer, initialHttpState);

  const sendHttpRequest = useCallback(
    async function (requestData: any) {
      dispatch({ type: 'send_request' });
      try {
        await sendRequest(requestData);
        dispatch({ type: 'success'});
      } catch (error) {
        dispatch({
          type: 'error',
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [sendRequest]
  );

  return {
    sendHttpRequest,
    ...httpState,
  };
}

export default useHttp;