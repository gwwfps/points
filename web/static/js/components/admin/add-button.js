import React from 'react';
import { FloatingActionButton } from 'material-ui';

import MaterialIcon from '../material-icon';
import history from '../../history';


export default function AddButton(props) {
  return (
    <div className="u-pull-right">
      <FloatingActionButton mini={true} onClick={() => history.pushState(null, props.route)}>
        {MaterialIcon('add')}
      </FloatingActionButton>
    </div>
  );
}
