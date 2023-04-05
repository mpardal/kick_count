import {Component} from "react";

const countHits = (WrappedComponent, power) => {

    class CountHits extends Component{

        state =  {
            hits: 0
        }

        handleClick = () => {
            this.setState(prevState => {
                return{
                    hits: prevState.hits + 1,
                }
            })
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.state !== prevState){
                const compName = WrappedComponent.name
                this.props.reduceLife(compName, power)
            }
        }

        render() {
            return <WrappedComponent handleClick={this.handleClick} hocState={this.state} {...this.props} />
        }
    }
    return CountHits
}

export default countHits