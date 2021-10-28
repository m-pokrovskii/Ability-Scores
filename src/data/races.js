const races = {
	tiefling: {
		id: "tiefling",
		name: "Tiefling",
		description: "Description Tiefling",
		heritages: [],
		racialAbilityModifier: {
			id: 'racialAbilityModifier',
			name: "Racial Ability Modifier",
			affect: {
				strength: +2,
				intelligence: +2,
				charisma: -2
			}
		}
	},
	elf: {
		id: "elf",
		name: "Elf",
		description: "Description Elf",
		racialAbilityModifier: {
			id: 'racialAbilityModifier',
			name: "Racial Ability Modifier",
			affect: {
				strength: -2,
				intelligence: +2,
				dexterity: +2
			}
		}
	},
	human: {
		id: "human",
		name: "Human",
		description: "Description Human",
		racialAbilityModifier: {
			id: 'racialAbilityModifier',
			name: "Racial Ability Modifier",
			affect: {}
		}
	},
	halfElf: {
		id: "halfElf",
		name: "Half-Elf",
		description: "Description Half Elf",
		racialAbilityModifier: {
			id: 'racialAbilityModifier',
			name: "Racial Ability Modifier",
			affect: {}
		}
	},
	halfElfKindredRaised: {
		id: "halfElfKindredRaised",
		name: "Half-Elf. Kindred-Raised",
		description: "Description Half-Elf. Kindred-Raised",
		racialAbilityModifier: {
			id: 'racialAbilityModifier',
			name: "Racial Ability Modifier",
			affect: {
				charisma: +2
			}
		}
	}
}
export default races;