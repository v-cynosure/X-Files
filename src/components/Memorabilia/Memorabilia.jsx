import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import styles from './Memorabilia.scss'

class Memorabilia extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(type, value) {
        const { onUploadData, contributes, index } = this.props
        const newContributes = contributes.slice()
        newContributes[index][type] = value
        onUploadData({ contributes: newContributes })
    }

    renderDelButton() {
        return (
            <div className={styles['btn-wrap']}>
                <FlatButton
                  label="Delete"
                  primary
                  onClick={this.props.onDelete}
                />
            </div>
        )
    }

    renderButton() {
        return (
            <div className={styles['button-fields']}>
                <FlatButton
                  primary
                  label="Submit"
                  onClick={this.props.onClose}
                />
            </div>
        )
    }

    render() {
        const {
            style,
            startTime,
            endTime,
            text,
            hasButton,
            isDeletable,
        } = this.props
        return (
            <div className={styles.paper} style={style}>
                <DatePicker
                  hintText="请选择开始时间"
                  defaultDate={startTime || new Date()}
                  onChange={(ev, date) => { this.handleChange('startTime', date) }}
                />
                <DatePicker
                  hintText="请选择结束时间"
                  defaultDate={endTime || new Date()}
                  onChange={(ev, date) => { this.handleChange('endTime', date) }}
                />
                <TextField
                  hintText="description"
                  multiLine
                  rows={1}
                  value={text}
                  onChange={(ev, value) => { this.handleChange('duty', value) }}
                />
                {isDeletable && this.renderDelButton()}
                {hasButton && this.renderButton()}
            </div>
        )
    }
}

export default Memorabilia
