import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            counteur: () => setInterval(() => {
                this.setState({

                    seconds: this.state.seconds === 59 ? 0 : this.state.seconds+ 1,
                    minutes: this.state.seconds === 59 ? this.state.minutes+ 1 :this.state.minutes

                });
            }, 1000)
        }
        this.time = 0
    };

    componentDidMount() {
        this.time = this.state.counteur()
    }
    componentWillUnmount() {
        clearInterval(this.time)
    }
    render() {

        return (
            <div>
              
                <p>  {this.state.minutes} : {this.state.seconds}</p>

            </div>
        )
    }
}