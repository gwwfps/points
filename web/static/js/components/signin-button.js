import React, { Component } from 'react';

const callbackPrefix = 'googleSignin_';

export default class SigninButton extends Component {
  componentWillMount() {
    this.callbackId = Math.random().toString(16).substring(2);
    this.bindCallbacks('onSuccess', 'onFailure');
  }

  bindCallbacks(...methods) {
    for (let method of methods) {
      window[this.getCallbackName(method)] = ::this[method];
    }
  }

  getCallbackName(method) {
    return callbackPrefix + method + this.callbackId;
  }

  onSuccess(googleUser) {
    this.props.verify(googleUser.getAuthResponse().id_token);
  }

  onFailure() {
    window.alert('Failed to authenticate.');
  }

  render() {
    return (
      <div className="g-signin2" data-scope="profile" data-longtitle="true" theme="dark" data-width="200"
        data-onsuccess={this.getCallbackName('onSuccess')}
        data-onfailure={this.getCallbackName('onFailure')}>
      </div>
    );
  }
}
