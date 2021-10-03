export const fighter = {
	description: {
		name: "Fighter",
		description: "",
		bab: 'full',
		hitPoints: '+6',
	},
	leveling: {
		1: {
			bab: "+1",
			fortSave: "+2",
			refSave: "+0",
			willSave: "+0",
			feats: [
				{
					name: "Bonus Combat Feat",
					options: []
				}
			],
		},
		2: {
			bab: "+2",
			fortSave: "+3",
			refSave: "+0",
			willSave: "+0",
			feats: [
				{
					name: "Bonus Combat Feat",
					options: []
				},
			],
			extra: [
				{
					name: "Bravery",
					modyfier: "+1",
				}
			]

		},
		3: {
			bab: "+3",
			fortSave: "+3",
			refSave: "+1",
			willSave: "+1",
			extra: [
				{
					name: "Armor Training",
					modyfier: "+1"
				}
			]
		},
		4: {
			bab: "+4",
			fortSave: "+4",
			refSave: "+1",
			willSave: "+1",
			feats: [
				{
					name: "Bonus Combat Feat",
					options: []
				},
			],
		},
		5: {
			bab: "+5",
			fortSave: "+4",
			refSave: "+1",
			willSave: "+1",
			feats: [
				{
					name: "Weapon training",
					options: []
				}
			]
		},
	}
}