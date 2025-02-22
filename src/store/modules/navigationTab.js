export const ADD_TAB = "tab/add";
export const VIEW_TAB = "tab/view";

const initialState = {
  tab: "add",
};

export default function navigationTabReducer(
  state = initialState,
  dispatchedAction
) {
  switch (dispatchedAction.type) {
    case ADD_TAB:
      return { ...state, tab: "add" };
    case VIEW_TAB:
      return { ...state, tab: "view" };
    default:
      return state;
  }
}

export const setActiveTab = (tab) => {
  if (tab === "add") return { type: ADD_TAB };
  else return { type: VIEW_TAB };
};

export const getSelectedNavigationTab = (state) => state.navigationTab.tab;
