/**
 * Description: Header for the league table
 */

import React, { Component } from 'react';
import HeadingType from "./HeadingType";
import Heading from "./Heading";
import {Grid} from "react-native-easy-grid";
import {Container, ListItem} from "native-base";

type Props = {
	headings: HeadingType[]
};

class LeagueTableHeader extends Component<Props> {

  render() {
    return (
        <Grid>
			{
				this.props.headings.map((heading: HeadingType): Heading => {
					return <Heading key={heading.slug} {...heading} />;
				})
			}

		</Grid>
    )
  }
}

export default LeagueTableHeader