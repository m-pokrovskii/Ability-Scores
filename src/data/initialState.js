export const initialState = {
	pool: 29,
	abilities: {
		strength: {
			base: 10,
			final: 10,
			mod: 0
		},
		dexterity: {
			base: 10,
			final: 10,
			mod: 0
		},
		constitution: {
			base: 10,
			final: 10,
			mod: 0
		},
		intelligence: {
			base: 10,
			final: 10,
			mod: 0
		},
		wisdom: {
			base: 10,
			final: 10,
			mod: 0
		},
		charisma: {
			base: 10,
			final: 10,
			mod: 0
		}
	},
	raceId: "",
	baseMods: {
		racialAbilityModifier: {
			id: 'racialAbilityModifier',
			name: "Racial Ability Modifier",
			affect: {}
		}
	},
	otherMods: {
		// racialAbilityModifier: {
		// 	id: 'racialAbilityModifier',
		// 	name: "Racial Ability Modifier. Hafling",
		// 	affect: {
		// 		strength: -2,
		// 		dexterity: +2,
		// 		charisma: +2,
		// 	}
		// },
		// bullStrength: {
		// 	id: 'bullStrength',
		// 	name: "Bull Strength",
		// 	affect: {
		// 		strength: +2,
		// 	}
		// },
		// dogStrength: {
		// 	id: 'dogStrength',
		// 	name: "DOG Strength",
		// 	affect: {
		// 		strength: +2,
		// 	}
		// },
		// catGrace: {
		// 	id: 'catGrace',
		// 	name: "Cat Grace",
		// 	affect: {
		// 		dexterity: +4,
		// 	}
		// }
	}
}
