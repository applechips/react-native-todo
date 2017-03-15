import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 15,
  },
})

export default class Input extends Component {
  render() {
      const {onSubmit, placeholder} = this.props
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
      />
    )
  }
}
