import React, { Component } from 'react';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui';

export default class TournamentTable extends Component {
  render() {
    return (
      <Table selectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn># Participants</TableHeaderColumn>
            <TableHeaderColumn>Created</TableHeaderColumn>
            <TableHeaderColumn>Stage</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        </TableBody>
      </Table>
    );
  }
}
