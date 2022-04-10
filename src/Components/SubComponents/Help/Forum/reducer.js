export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newSettings = [...state.questions, action.payload]
    return {
      ...state,
      questions: newSettings,
      security: true,
      isModalOpen: false,
    }
  }
  if (action.type === "CLOSE_MODAL") {
    return {...state, isModalOpen: false}
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Error! Please enter a value",
      modalType: "no-value",
    }
  }
  if (action.type === "REMOVE_ITEM") {
    const newQuestions = state.questions.filter(
        (question) => question.id !== action.payload
    )
    return {
      ...state,
      questions: newQuestions,
      isModalOpen: true,
      modalType: "item-removed",
      modalContent: "You successfully, removed that question",
    }
  }

  if (action.type === "DISCARD_ITEM") {
    const newQuestions = state.questions.filter(
        (question) => question.id !== action.payload
    )
    return {
      ...state,
      questions: newQuestions,
      isModalOpen: true,
      modalType: "item-removed",
      modalContent: "You successfully, rejected that question",
    }
  }


  if (action.type === "SECURITY_MODAL") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "You successfully, add an question!",
      modalType: "add-item",
      security: false
    }
  }
}
