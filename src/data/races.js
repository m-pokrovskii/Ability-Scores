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
			affect: {
				strength: +2
			}
		}
	}
}
export default races;