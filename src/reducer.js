const reducer = (state, action) => {
	switch (action.type) {
		case "INIT_ABILITIES": {
			return {
				...state
			}
		}
		case "INCREASE_ABILITY_MANUALY": {
			const abilityName = action.payload.name;
			let baseAbilityValue = state.abilities.base[abilityName];
			let pool = state.abilities.pool;
			if (baseAbilityValue < 18 && pool > 0) {
				pool--;
				baseAbilityValue++;
			}
			return {
				...state,
				abilities: {
					...state.abilities,
					pool,
					base: {
						...state.abilities.base,
						[abilityName]: baseAbilityValue
					},
					final: {
						...state.abilities.final,
						[abilityName]: baseAbilityValue + 1
					}
				}
			}
		}
		case "DECREASE_ABILITY_MANUALY": {
			const abilityName = action.payload.name;
			let baseAbilityValue = state.abilities.base[abilityName];
			let pool = state.abilities.pool;
			if (baseAbilityValue > 8 && pool < 25) {
				pool++;
				baseAbilityValue--;
			}

			return {
				...state,
				abilities: {
					...state.abilities,
					pool,
					base: {
						...state.abilities.base,
						[abilityName]: baseAbilityValue
					}
				}
			}
		}
		case "DECREASE_ABILITY_POOL": {
			let { pool } = state.abilities;
			pool = (pool > 0) ? pool - 1 : pool;
			return {
				...state,
				abilities: {
					...state.abilities,
					pool: pool
				}
			}
		}
		case "INCREASE_ABILITY_POOL": {
			let { pool } = state.abilities;
			pool = (pool < 25) ? pool + 1 : pool;
			return {
				...state,
				abilities: {
					...state.abilities,
					pool: pool
				}
			}
		}
		default: {
			return state
		}
	}
}

export default reducer;