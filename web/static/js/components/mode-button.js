import React, { Component } from 'react';
import { IconButton } from 'material-ui';
import { History } from 'react-router';
import reactMixin from 'react-mixin';

@reactMixin.decorate(History)
export default class ModeButton extends Component {
  render() {
    return (
      <div className="u-pull-right">
        <IconButton iconClassName="material-icons" tooltip={this.props.tooltip} onClick={::this.onClick}>{this.props.icon}</IconButton>
      </div>
    );
  }

  onClick() {
    this.history.pushState(null, this.props.route);
  }
}
