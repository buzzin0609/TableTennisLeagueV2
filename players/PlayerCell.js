/**
 * Description: Table cell for player info
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import type {PlayerModel} from "./Player";
import type {HeadingModel} from "../leagueTable/HeadingType";
import {Col, Grid, Row} from "react-native-easy-grid";
import playerCellStyles from "./playerCellStyles";
import HeadingType from "../leagueTable/HeadingType";
import Text from "../layout/Text";
import {Container, ListItem} from "native-base";

type Props = {
	player: PlayerModel,
	columns: HeadingType[]
}

class PlayerCell extends Component<Props> {
  state = {};

  render() {
    return (
		<Grid>
			{
				this.props.columns.map((heading: HeadingType): Col => {
					return (
						<Col key={heading.slug} style={playerCellStyles.cell} size={heading.size}>
							<Text style={playerCellStyles.text}>{this.props.player[heading.slug]}</Text>
						</Col>
					);
				})
			}
		</Grid>
    )
  }
}

export default PlayerCell
