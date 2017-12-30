/**
 * Description: Main league table
 */

import React, { Component } from 'react';
import {Container, Content, List} from "native-base";
import LeagueTableHeader from "./LeagueTableHeader";
import headingList from './headingList';
import type {PlayerModel} from "../players/Player";
import LeagueTableBody from "./LeagueTableBody";
import {Grid} from "react-native-easy-grid";
import PlayerType from "../players/Player";
import StateWrapper from "../state/StateWrapper";

class LeagueTable extends Component<Props> {
  render() {
    return [
		<LeagueTableHeader key={'league-header'} headings={headingList} />,
		<StateWrapper key={`league-body`} stateProps={'players'}>
			<LeagueTableBody />
		</StateWrapper>
	]
  }
}

export default LeagueTable