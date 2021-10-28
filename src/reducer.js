import races from "./data/races";
const reducer = (draft, action) => {
	switch (action.type) {
		case "RESET_ABILITIES": {
			console.log(action.type);
			const { abilities, baseMods } = draft;
			const { abilities: initAbilities, pool: initPool } = action.payload.initPointBuy;
			const racialMods = baseMods.racialAbilityModifier.affect;
			Object.keys(abilities).forEach((abilityName) => {
				abilities[abilityName].base = initAbilities[abilityName].base || initAbilities[abilityName].base
				abilities[abilityName].final = initAbilities[abilityName].final + racialMods[abilityName] || initAbilities[abilityName].final
			})
			draft.pool = initPool
			return;
		}
		case "APPLY_RACE_MODS": {
			console.log(action.type);
			const { abilities, baseMods } = draft;
			const racialMods = baseMods.racialAbilityModifier.affect;
			Object.keys(abilities).forEach((abilityName) => {
				abilities[abilityName].final = abilities[abilityName].base + racialMods[abilityName] || abilities[abilityName].base;
			})
			return
		}
		case "APPLY_OTHER_MODS": {
			console.log('APPLY_OTHER_MODS');
			const { abilities, baseMods, otherMods } = draft;
			const racialMods = baseMods.racialAbilityModifier.affect;
			Object.keys(racialMods).forEach((abilityName) => {
				abilities[abilityName].final += racialMods[abilityName];
			})

			Object.keys(otherMods).forEach((modId) => {
				const mod = otherMods[modId];
				Object.keys(mod.affect).forEach((abilityName) => {
					abilities[abilityName].final = abilities[abilityName].final + mod.affect[abilityName];
				})
			})
			return;
		}
		case "UPDATE_MOD": {
			console.log(action.type);
			const { abilities } = draft;
			const updateAbilities = { ...abilities };
			Object.keys(abilities).forEach((abilityName) => {
				abilities[abilityName].mod = Math.floor((updateAbilities[abilityName].final - 10) / 2);
			})
			return;
		}

		case "INCREASE_ABILITY_MANUALY": {
			console.log(action.type);
			const abilityName = action.payload.name;
			const { abilities } = draft;
			const { pool } = draft;
			let baseAbilityValue = abilities[abilityName].base;
			let finalAbilityValue = abilities[abilityName].final;
			let pointValue = 1;

			if (baseAbilityValue >= 7 && baseAbilityValue < 8) {
				pointValue = 2
			} else if (baseAbilityValue >= 9 && baseAbilityValue < 13) {
				pointValue = 1
			} else if (baseAbilityValue >= 13 && baseAbilityValue < 15) {
				pointValue = 2
			} else if (baseAbilityValue >= 15 && baseAbilityValue < 17) {
				pointValue = 3
			} else if (baseAbilityValue >= 17) {
				pointValue = 4
			} else {
				pointValue = 1
			}

			if (baseAbilityValue < 18 && (pool - pointValue) > 0) {
				draft.pool = pool - pointValue;
				abilities[abilityName].base = baseAbilityValue + 1;
				abilities[abilityName].final = finalAbilityValue + 1;
			}
			return;
		}
		case "DECREASE_ABILITY_MANUALY": {
			console.log(action.type);
			const abilityName = action.payload.name;
			const { abilities } = draft;
			const { pool } = draft;
			let baseAbilityValue = abilities[abilityName].base;
			let finalAbilityValue = abilities[abilityName].final;
			let pointValue = 1;

			if (baseAbilityValue >= 7 && baseAbilityValue <= 8) {
				pointValue = 2
			} else if (baseAbilityValue >= 8 && baseAbilityValue <= 13) {
				pointValue = 1
			} else if (baseAbilityValue >= 13 && baseAbilityValue <= 15) {
				pointValue = 2
			} else if (baseAbilityValue >= 15 && baseAbilityValue <= 17) {
				pointValue = 3
			} else if (baseAbilityValue >= 17) {
				pointValue = 4
			} else {
				pointValue = 1
			}
			if (baseAbilityValue > 7) {
				draft.pool = pool + pointValue;
				abilities[abilityName].base = baseAbilityValue - 1;
				abilities[abilityName].final = finalAbilityValue - 1;
			}
			return;
		}
		case "HANDLE_RACE_SELECT": {
			const { raceId } = action.payload;
			if (raceId) {
				const race = races[raceId];
				draft.baseMods['racialAbilityModifier'] = race.racialAbilityModifier;
				draft.raceId = raceId;
			} else {
				draft.raceId = "";
				draft.baseMods.racialAbilityModifier.affect = {};
			}
			return;
		}
		case "HANDLE_HUMAN_MOD": {
			console.log(action.type);
			const abilityName = action.payload.abilityName;
			const racialAbilityModifier = draft.baseMods.racialAbilityModifier;
			racialAbilityModifier.affect = {};
			racialAbilityModifier.affect[abilityName] = +2;
			return;
		}
		case "HANDLE_PLUS_TWO_TO_ONE_ABILITY_SCORE": {
			console.log(action.type);
			const { raceId, abilityName } = action.payload;
			const racialAbilityModifier = draft.baseMods.racialAbilityModifier;
			const defaultRacialAbilityModifier = races[raceId].racialAbilityModifier.affect;
			racialAbilityModifier.affect = { ...defaultRacialAbilityModifier };
			racialAbilityModifier.affect[abilityName] = racialAbilityModifier.affect[abilityName] + 2 || 2;
			return;
		}
		default: {
			return draft
		}
	}
}

export default reducer