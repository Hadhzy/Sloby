export const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const newSettings = [...state.settings, action.payload]
      return {
        ...state,
        settings: newSettings,
        isModalOpen: true,
        modalContent: "Item added to the list",
      }
    }
    if (action.type === "CLOSE_MODAL") {
      return { ...state, isModalOpen: false }
    }
    if (action.type === "NO_VALUE") {
      return { ...state, isModalOpen: true, modalContent: "Please enter a value" }
    }
    if (action.type === "REMOVE_ITEM") {
      const newSettings = state.settings.filter(
        (setting) => setting.id !== action.payload
      )
      return { ...state, settings: newSettings }
    }
    throw new Error("no matching action type")
  }