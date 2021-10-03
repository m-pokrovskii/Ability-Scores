export const swordSaint = {
	description: {
		name: "Sword Saint",
		description: "",
		bab: 'half',
		hitPoints: '+5',
	},
	leveling: {
		1: {
			bab: "+0",
			fortSave: "+2",
			refSave: "+0",
			willSave: "+2",
			feats: [
				{
					name: "Chosen Weapon",
					options: []
				}
			],
			extra: [
				{
					name: "Canny Defense"
				},
				{
					name: "Spell Combat"
				},
				{
					name: "Arcane Pool",
					modyfier: "+1"
				},
				{
					name: "Spell Combat"
				},
				{
					name: "Cantrips"
				}
			]
		},
		2: {
			bab: "+1",
			fortSave: "+3",
			refSave: "+0",
			willSave: "+3",
			feats: [
				{
					name: "Bonus Combat Feat",
					options: []
				},
			],
			extra: [
				{
					name: "SpellStrike",
				}
			]

		},
		3: {
			bab: "+2",
			fortSave: "+3",
			refSave: "+1",
			willSave: "+3",
			feats: [
				{
					name: "Magus Arcana",
					options: []
				}
			]
		},
		4: {
			bab: "+3",
			fortSave: "+4",
			refSave: "+1",
			willSave: "+3",
			extra: [
				{
					name: "Perfect Strike"
				}
			]
		},
		5: {
			bab: "+3",
			fortSave: "+4",
			refSave: "+1",
			willSave: "+4",
			feats: [
				{
					name: "Magus Bonus Feat",
					options: []
				}
			],
			extra: [
				{
					name: "Arcane Weapon (+2)",
					modyfier: "+2"
				}
			]
		},
	}
}