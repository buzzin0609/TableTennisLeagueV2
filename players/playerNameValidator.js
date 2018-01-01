// @flow

import typeof Player from "./Player";

export default function playerNameValidator(name: string, players: Array<Player>): boolean {
	name = name.toLowerCase();
	return players.every((player: Player): boolean => player.name.toLowerCase() !== name);
}