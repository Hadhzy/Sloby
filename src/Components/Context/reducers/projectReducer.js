import { v4 as uuidv4 } from "uuid";



export const projectReducers = (state, action) => {

    switch(action.type) {
        case "ADD_PROJECT": 
            return [...state, {
                name: action.project.name,
                description: action.project.description,
                type: action.project.type,
                id: uuidv4()
            }]
        
        case "REMOVE_PROJECT":  
            return state.filter(project => project.id !== action.id)  
            
        default: 
            return state
    }

}