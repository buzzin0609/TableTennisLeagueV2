/**
 * Description: List of league table headings
 */

import HeadingType from "./HeadingType";

const headingList = [
	new HeadingType({
		name: 'Player',
		slug: 'name',
		size: 2
	}),
	new HeadingType({
		name: 'Pld',
		slug: 'gamesPlayed'
	}),
	new HeadingType({
		name: 'W',
		slug: 'wins'
	}),
	new HeadingType({
		name: 'L',
		slug: 'losses'
	}),
	new HeadingType({
		name: 'RP',
		slug: 'rankPoints',
		size: 1.5
	})
];

export default headingList;
