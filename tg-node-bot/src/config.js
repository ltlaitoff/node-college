const APIKeys = {
	PERSONNEL_UNITS: 'personnel_units',
	TANKS: 'tanks',
	ARMOURED_FIGHTING_VEHICLES: 'armoured_fighting_vehicles',
	ARTILLERY_SYSTEMS: 'artillery_systems',
	MLRS: 'mlrs',
	AA_WARFARE_SYSTEMS: 'aa_warfare_systems',
	PLANES: 'planes',
	HELICOPTERS: 'helicopters',
	VEHICLES_FUEL_TANKS: 'vehicles_fuel_tanks',
	WARSHIPS_CUTTERS: 'warships_cutters',
	CRUISE_MISSILES: 'cruise_missiles',
	UAV_SYSTEMS: 'uav_systems',
	SPECIAL_MILITARY_EQUIP: 'special_military_equip',
	ATGM_SRBM_SYSTEMS: 'atgm_srbm_systems'
}

const DEFAULT_COMMANDS = [
	{ command: 'start', description: 'start' },
	{
		command: 'help',
		description: 'help'
	}
]

const emoji = {
	[APIKeys.PERSONNEL_UNITS]: '🤭',
	[APIKeys.TANKS]: '',
	[APIKeys.ARMOURED_FIGHTING_VEHICLES]: '',
	[APIKeys.ARTILLERY_SYSTEMS]: '',
	[APIKeys.MLRS]: '',
	[APIKeys.AA_WARFARE_SYSTEMS]: '',
	[APIKeys.PLANES]: '',
	[APIKeys.HELICOPTERS]: '',
	[APIKeys.VEHICLES_FUEL_TANKS]: '',
	[APIKeys.WARSHIPS_CUTTERS]: '',
	[APIKeys.CRUISE_MISSILES]: '',
	[APIKeys.UAV_SYSTEMS]: '',
	[APIKeys.SPECIAL_MILITARY_EQUIP]: '',
	[APIKeys.ATGM_SRBM_SYSTEMS]: ''
}

const triggers = {
	[APIKeys.PERSONNEL_UNITS]: ['орк', 'рос', 'люд'],
	[APIKeys.TANKS]: ['танк'],
	[APIKeys.ARMOURED_FIGHTING_VEHICLES]: [],
	[APIKeys.ARTILLERY_SYSTEMS]: [],
	[APIKeys.MLRS]: [],
	[APIKeys.AA_WARFARE_SYSTEMS]: [],
	[APIKeys.PLANES]: ['літак'],
	[APIKeys.HELICOPTERS]: ['гелікоптерів'],
	[APIKeys.VEHICLES_FUEL_TANKS]: [],
	[APIKeys.WARSHIPS_CUTTERS]: [],
	[APIKeys.CRUISE_MISSILES]: [],
	[APIKeys.UAV_SYSTEMS]: [],
	[APIKeys.SPECIAL_MILITARY_EQUIP]: [],
	[APIKeys.ATGM_SRBM_SYSTEMS]: []
}

const translateOutput = {
	[APIKeys.PERSONNEL_UNITS]: {
		ua: 'Орків'
	},
	[APIKeys.TANKS]: {
		ua: 'Танків'
	},
	[APIKeys.ARMOURED_FIGHTING_VEHICLES]: {
		ua: ''
	},
	[APIKeys.ARTILLERY_SYSTEMS]: {
		ua: ''
	},
	[APIKeys.MLRS]: {
		ua: ''
	},
	[APIKeys.AA_WARFARE_SYSTEMS]: {
		ua: ''
	},
	[APIKeys.PLANES]: {
		ua: 'Літаків'
	},
	[APIKeys.HELICOPTERS]: {
		ua: 'Гелікоптерів'
	},
	[APIKeys.VEHICLES_FUEL_TANKS]: {
		ua: ''
	},
	[APIKeys.WARSHIPS_CUTTERS]: {
		ua: ''
	},
	[APIKeys.CRUISE_MISSILES]: {
		ua: ''
	},
	[APIKeys.UAV_SYSTEMS]: {
		ua: ''
	},
	[APIKeys.SPECIAL_MILITARY_EQUIP]: {
		ua: ''
	},
	[APIKeys.ATGM_SRBM_SYSTEMS]: {
		ua: ''
	}
}

module.exports = {
	DEFAULT_COMMANDS,
	APIKeys,
	emoji,
	triggers,
	translateOutput
}
