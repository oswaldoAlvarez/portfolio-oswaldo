const initialState = {
  appInfo: {},
};

export default function (state, action) {
  switch (action.type) {
    case "SET_APP_INFO":
      return { ...state, appInfo: action.payload };

    default:
      return { ...state };
  }
}
