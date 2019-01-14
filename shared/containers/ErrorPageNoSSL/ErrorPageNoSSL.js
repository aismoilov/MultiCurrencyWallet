import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './ErrorPageNoSSL.scss'

import FormattedMessage from 'react-intl'


@cssModules(styles)
export default class ErrorPageNoSSL extends Component{
  render () {
    return (
      <div styleName="page">
        <h3 styleName="header">
          <FormattedMessage id="error15" defaultMessage="Error: This page does not support secure connection (https)" />
        </h3>
      </div>
    )
  }

}
