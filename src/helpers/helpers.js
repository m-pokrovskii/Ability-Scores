const getAbilityValue = (name, abilities) => {
	return abilities.base[name];
}
const getFinalAbilityValue = (name, abilities, racialAbilityModifier) => {
	return abilities.base[name] + racialAbilityModifier[name] || abilities.base[name];
}
const getAbilityMod = (name) => {
	return Math.floor((getFinalAbilityValue(name) - 10) / 2);
}


export { getAbilityValue, getFinalAbilityValue, getAbilityMod };