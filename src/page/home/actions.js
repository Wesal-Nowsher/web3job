export const activetagf = (value) => async (dispatch) => {
    console.log("value",value);
    dispatch({
        type: "activetag",
        payload:value
    })
};