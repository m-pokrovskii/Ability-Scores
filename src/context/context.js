import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer';
const GlobalContext = React.createContext();
const initialState = {
	racialAbilityModifier: {
		strength: -1,
		dexterity: +2
	},
	abilities: {
		pool: 25,
		base: {
			strength: 8,
			dexterity: 8,
			constitution: 8,
			intelligence: 8,
			wisdom: 8,
			charisma: 8
		},
		final: {
			strength: 8,
			dexterity: 8,
			constitution: 8,
			intelligence: 8,
			wisdom: 8,
			charisma: 8
		},
		baseMods: [{
			id: 'racialAbilityModifier',
			name: "Racial Ability Modifier. Elf",
			strength: -1,
			dexterity: +2,
		}, {
			id: 'levelUpStrength',
			name: "Level Up Stength",
			strength: +1,
		}],
		finalMods: [
			{
				id: 'bullStrength',
				name: "Bull Strength",
				strength: +4,
			},
			{
				id: 'catGrace',
				name: "Cat Grace",
				dexterity: +4,
			}
		]
	},
}

const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const increaseAbilityManualy = (name) => {
		dispatch({ type: 'INCREASE_ABILITY_MANUALY', payload: { name } })
	}

	const decreaseAbilityManualy = (name) => {
		dispatch({ type: 'DECREASE_ABILITY_MANUALY', payload: { name } })
	}

	useEffect(() => {
		dispatch({ type: 'INIT_ABILITIES' })
	}, [])


	return (
		<GlobalContext.Provider value={{
			...state,
			increaseAbilityManualy,
			decreaseAbilityManualy
		}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext);
}

export { GlobalContext, GlobalProvider }