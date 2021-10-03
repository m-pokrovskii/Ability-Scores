import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
// TODO
// 1. Add race modifier
// 2. ability scores pool
// 3. calculate ability mofifier
const Abilities = () => {
	const { racialAbilityModifier, abilities, increaseAbilityManualy, decreaseAbilityManualy } = useGlobalContext();
	const { pool } = abilities;

	const getAbilityValue = (name) => {
		return abilities.base[name];
	}
	const getFinalAbilityValue = (name) => {
		return abilities.base[name] + racialAbilityModifier[name] || abilities.base[name];
	}
	const getAbilityMod = (name) => {
		return Math.floor((getFinalAbilityValue(name) - 10) / 2);
	}
	return (
		<div>
			<pre>
				{JSON.stringify(abilities.final)}
			</pre>
			<div className="ability-pool" style={{ textAlign: 'left' }}>{pool}</div>
			<table>
				<thead>
					<tr>
						<td>Ability</td>
						<td>Base</td>
						<td>Final</td>
						<td>Mod</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{Object.keys(abilities.base).map((name, index) => {
						return (
							<tr key={name}>
								<td>
									<div>
										{name}
									</div>
								</td>
								<td>
									<div>
										{getAbilityValue(name)}
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
									<button onClick={() => increaseAbilityManualy(name)}>+</button>
									<button onClick={() => decreaseAbilityManualy(name)}>-</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div >
	)
}

export default Abilities
