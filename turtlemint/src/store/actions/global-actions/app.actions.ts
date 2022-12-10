import {
  UPDATE_LOADING_STATUS,
  SET_ERROR,
} from "../../constants/redux-constants";
import { HTTPStatusCode } from "../../../common/enums";
import { executeRequestAsync } from "../../../services/network-helper";
// import { userLogout } from "../UserActions";

export const fetchAsync = async (
  dispatch: any,
  requests: any[] = [],
  dataUpdateFunctions?: any,
  isUpdateLoading: boolean = true
) => {
  try {
    if (isUpdateLoading) {
      dispatch(updateLoadingStatus(true));
    }
    const tasks: any[] = requests.map((req: any) => executeRequestAsync(req));
    const apiResponses = await Promise.all(tasks);
    for (let index = 0; index < apiResponses.length; index++) {
      if (HTTPStatusCode.UNAUTHORIZED === apiResponses[index].status) {
        // dispatch(userLogout(() => {}));
        console.log("Logged out");
      }
      if (
        ![
          HTTPStatusCode.OK,
          HTTPStatusCode.CREATED,
          HTTPStatusCode.ACCEPTED,
          HTTPStatusCode.NO_CONTENT,
        ].includes(apiResponses[index].status)
      ) {
        const error = apiResponses[index].error;
        dispatch({
          type: SET_ERROR,
          payload: error,
        });
        dispatch(updateLoadingStatus(false));
        return apiResponses[index];
      }
      if (dataUpdateFunctions) {
        dispatch(dataUpdateFunctions[index](apiResponses[index]));
      }
    }
  } catch (e) {
    dispatch({
      type: SET_ERROR,
      payload: e,
    });
  } finally {
    dispatch(updateLoadingStatus(false));
  }
};

export const clearErrors = () => ({ type: SET_ERROR, payload: null });

export const updateLoadingStatus = (payload: any) => ({
  type: UPDATE_LOADING_STATUS,
  payload: payload,
});
