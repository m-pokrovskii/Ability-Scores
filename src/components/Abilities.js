import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
import races from '../data/races';
// TODO
// Add subraces
const Abilities = () => {
	const {
		abilities,
		pool,
		baseMods,
		raceId,
		increaseAbilityManualy,
		decreaseAbilityManualy,
		resetAbilities,
		handleRaceSelect,
		handleHumanMod
	} = useGlobalContext();

	const getBaseAbilityValueWithRacial = (name) => {
		const racialAbilityModifier = baseMods['racialAbilityModifier'];
		return abilities[name].base + racialAbilityModifier.affect[name] || abilities[name].base;
	}
	const getBaseAbilityValue = (name) => {
		return abilities[name].base;
	}
	const getRacialModValue = (name) => {
		return baseMods.racialAbilityModifier.affect[name];
	}

	const displayRacialModValue = (name) => {
		return ((getRacialModValue(name) > 0) ? `+${getRacialModValue(name)}` : getRacialModValue(name)) || 0
	}
	const getFinalAbilityValue = (name) => {
		return abilities[name].final;
	}
	const getAbilityMod = (name) => {
		return abilities[name].mod;
	}
	return (
		<div>
			<div className="ability-pool" style={{ textAlign: 'left' }}>{pool}</div>
			<div className="select-race-container" style={{ textAlign: 'left' }}>
				<select onChange={handleRaceSelect} name="select-race" id="select-race">
					<option defaultValue value="">Select a race</option>
					{Object.keys(races).map((race) => {
						return (
							<option key={races[race].id} value={races[race].id}>
								{races[race].name}
							</option>
						)
					})}
				</select>
				{(raceId === 'human' || raceId === 'half-elf') &&
					<select onChange={handleHumanMod} name="humanRaceSelector" id="humanRaceSelector">
						{Object.keys(abilities).map(abilityName =>
							<option key={abilityName} value={abilityName}>{abilityName}</option>
						)}
					</select>
				}
			</div>
			<table>
				<thead>
					<tr>
						<td>Ability</td>
						<td>Base</td>
						<td>Race Mod</td>
						<td>Final</td>
						<td>Mod</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{Object.keys(abilities).map((name) => {
						return (
							<tr key={name}>
								<td>
									<div>
										{name}
									</div>
								</td>
								<td>
									<div>
										{getBaseAbilityValueWithRacial(name)}
									</div>
								</td>
								<td>
									<div>
										{displayRacialModValue(name)}
									</div>
								</td>
								<td>
									<div>
										{getFinalAbilityValue(name)}
									</div>
								</td>
								<td>
									<div>
										{getAbilityMod(name)}
									</div>
								</td>
								<td>
									<button onClick={() => decreaseAbilityManualy(name)}>-</button>
									<button onClick={() => increaseAbilityManualy(name)}>+</button>
								</td>
							</tr>
						)
					})}
					<tr>
						<td colSpan='6'><button onClick={() => resetAbilities()}>Reset</button></td>
					</tr>
				</tbody>
			</table>
		</div >
	)
}

export default Abilities
