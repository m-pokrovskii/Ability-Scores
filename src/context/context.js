import React, { useContext, useReducer, useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import reducer from '../reducer';
import { initialState } from '../data/initialState';
const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useImmerReducer(reducer, initialState)
	const increaseAbilityManualy = (name) => {
		dispatch({ type: 'INCREASE_ABILITY_MANUALY', payload: { name } })
	}

	const decreaseAbilityManualy = (name) => {
		dispatch({ type: 'DECREASE_ABILITY_MANUALY', payload: { name } })
	}

	const handleRaceSelect = (e) => {
		dispatch({ type: 'HANDLE_RACE_SELECT', payload: { raceId: e.target.value } })
	}
	const handleHumanMod = ({ e, raceId }) => {
		dispatch({ type: 'HANDLE_PLUS_TWO_TO_ONE_ABILITY_SCORE', payload: { abilityName: e.target.value, raceId } })
	}

	const resetAbilities = () => {
		dispatch({ type: 'RESET_ABILITIES', payload: { initPointBuy: initialState } })
	}

	useEffect(() => {
		dispatch({ type: 'UPDATE_MOD' })
	}, Object.keys(state.abilities).map((name) => {
		return state.abilities[name].final;
	}))

	useEffect(() => {
		dispatch({ type: "APPLY_RACE_MODS" })
	}, [state.baseMods])


	return (
		<GlobalContext.Provider value={{
			...state,
			increaseAbilityManualy,
			decreaseAbilityManualy,
			resetAbilities,
			handleRaceSelect,
			handleHumanMod
		}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext);
}

export { GlobalContext, GlobalProvider }