// Bulk-expanded endpoint that provides some data for WvW
// objectives.

// GET /v2/wvw/objectives
[ "95-43", "38-17", ... ]

// GET /v2/wvw/objectives?id=95-43
{
	id        : "95-43",
	type      : "Camp",
	map_type  : "GreenHome",
	map_id    : 95,
	sector_id : 349,
	name      : "Hero's Lodge",
	coord     : [
		6931.58,
		14502.1
	]
}

// GET /v2/wvw/objectives?page=0&page_size=3
[
	{
		id        : "968-85",
		type      : "Resource",
		map_type  : "EdgeOfTheMists",
		map_id    : 968,
		sector_id : 495,
		name      : "Tytone Perch Reactor",
		coord     : [
			7852.89,
			9855.56
		],
		marker   : "https://render.guildwars2.com/..."
	},
	{
		id        : "94-32",
		type      : "Keep",
		map_type  : "RedHome",
		map_id    : 94,
		sector_id : 956,
		name      : "Etheron Hills",
		coord     : [
			11212.6,
			10929.3
		]
	},
	{
		id        : "38-11",
		type      : "Tower",
		map_type  : "Center",
		map_id    : 38,
		sector_id : 485,
		name      : "Aldon's Ledge",
		coord     : [
			9417.39,
			14790.7
		]
	}
]

// Additional notes
//
// type is one of the following values:
//   * Camp
//   * Castle
//   * Keep
//   * Mercenary
//   * Tower
//   * Ruins
//   * Resource
//   * Generic
//   * Spawn
//
// map_type is one of the following:
//   * Center (EB)
//   * BlueHome (Blue BL)
//   * RedHome (Red BL) 
//   * GreenHome (Green BL)
//   * ObsidianSanctum
//   * EdgeOfTheMists
//
// coord and sector_id may not be present on all objects. When one is
// missing the other will be too -- the coord is the sector centroid.
//
// marker may not be present on all objects.
//
// The objective ID is the concatenation of the map_id and the internal
// objective ID -- there are some backend changes that make the borderlands
// literal copies of one another, except with different objective name
// strings (and colors). In the new system, an objective doesn't correspond
// to any map, but simultaneously all maps that it or it's copies are on.
// Or something to that note.
