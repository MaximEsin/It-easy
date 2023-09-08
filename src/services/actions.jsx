export function getLanguage(language) {
  return function (dispatch) {
    dispatch({
      type: "GET_LANG",
      data: language,
    });
  };
}
