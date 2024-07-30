export type BudgetActions = { type: "add-Budget", payload:{budget: number}} // tipo de dati BudgetActions
export type BudgetState = { budget: number} // tipo de dato BudgetState

export const intialState:BudgetState = { // constante initialState de tipo BudgetState
    budget: 0
}

export const budgetReducer = ( 
    state: BudgetState = intialState, 
    action: BudgetActions
) =>{ // Mi reducer que  tiene atributos state y action con sus respetivos tipos de datos

    if (action.type === "add-Budget") { // mi condicional para validar ejecutar algo dependiendo lo que setee el dispatch
        return {
            ...state, budget: action.payload.budget // lo que hace mi condicional, copia del state y budget
        }
    }
    return state    
}