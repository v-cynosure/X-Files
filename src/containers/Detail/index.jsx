import React, { Component } from 'react'
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper'
import { CSSTransitionGroup } from 'react-transition-group'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import styles from './index.scss'

class MyStepper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stepIndex: 0,
            avatar: '',
            sex: '男',
            isSingle: 'yes',
            phoneNumber: '',
            hometown: '',
            signature: '',
            github: '',
            linkedin: '',
            twitter: '',
            hobbies: [],
            skills: []
            
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Step1 key={0} />
            case 1:
                return <Step2 key={1} />
            case 2:
                return <Step3 key={2} />
            default:
                return <Step1 key={3} />
        }
    }

    handleNext() {
        window.scrollTo(0, 0)
        const { stepIndex } = this.state
        this.setState({
            stepIndex: stepIndex + 1,
        })
        if (stepIndex >= 2) {
            // handleFinish

            this.props.history.push('./')
        }
    }

    handlePrev() {
        window.scrollTo(0, 0)
        const { stepIndex } = this.state
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 })
        }
    }
    
    render() {
        const { stepIndex } = this.state
        const contentStyle = { margin: '0 16px' }
        const group = ['基本信息', '技能爱好', '工作贡献']
        return (
            <div className={styles.main}>
                <div style={{ width: '70%', maxWidth: '80%', margin: 'auto' }}>
                    <Stepper activeStep={stepIndex}>
                        {group.map((item, index) => (
                            <Step key={index}>
                                <StepLabel>{item}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div style={contentStyle}>
                        <div>
                            <div>
                                <CSSTransitionGroup
                                  transitionName="fade"
                                  transitionEnterTimeout={200}
                                  transitionLeaveTimeout={200}
                                >
                                    {this.getStepContent(stepIndex)}
                                </CSSTransitionGroup>
                            </div>
                            <div style={{ marginTop: 12 }}>
                                <FlatButton
                                  label="Back"
                                  disabled={stepIndex === 0}
                                  onClick={this.handlePrev}
                                  style={{ marginRight: 12 }}
                                />
                                <RaisedButton
                                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                                  primary
                                  onClick={this.handleNext}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyStepper
