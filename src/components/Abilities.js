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
		<div class="ability-scores">
			<div className="ability-scores-ui ui-panel">
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
					{(raceId === 'human' || raceId === 'halfElf' || raceId === 'halfElfKindredRaised') &&
						<select onChange={(e) => {
							handleHumanMod({ e, raceId });
						}} name="humanRaceSelector" id="humanRaceSelector">
							{Object.keys(abilities).map(abilityName =>
								<option key={abilityName} value={abilityName}>{abilityName}</option>
							)}
						</select>
					}
				</div>
				<table cellSpacing="0" cellPadding="0" className="ability-scores-table">
					<thead>
						<tr>
							<td>Ability Name</td>
							<td>Base Stats</td>
							<td>Racial Bonus</td>
							<td>Ability Points</td>
							<td>Modifier</td>
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
										<div className="ability-scores-table__ap">
											<button
												className="ability-scores-table__ap-decrease"
												onClick={() => decreaseAbilityManualy(name)}>
												-
											</button>
											<div className="ability-scores-table__ap-value">
												{getFinalAbilityValue(name)}
											</div>
											<button
												className="ability-scores-table__ap-increase"
												onClick={() => increaseAbilityManualy(name)}>
												+
											</button>
										</div>
									</td>
									<td>
										<div>
											{getAbilityMod(name)}
										</div>
									</td>
								</tr>
							)
						})}
						<tr>
							<td colSpan='5'><button onClick={() => resetAbilities()}>Reset</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="ability-scores-desc ui-panel">Description</div>
			<div className="ability-scores-image ui-panel">Image</div>
		</div >
	)
}

export default Abilities
