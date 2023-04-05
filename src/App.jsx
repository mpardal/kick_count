import Goku from "./Components/Goku.jsx";
import Vegeta from "./Components/Vegeta.jsx";
import {Component} from "react";

class App extends Component{

    state = {
        lifeVegeta: 100,
        lifeGoku: 100,
    }

    reduceLife = (param, param2) =>{
        if (param === 'Goku'){
            this.setState({
                    lifeVegeta: this.state.lifeVegeta - param2
            })
        }else{
            this.setState(prevState => {
                return{
                    lifeGoku: this.state.lifeGoku - param2
                }
            })

        }
    }
render() {
    return (
        <div className="container text-center text-4xl mx-auto">
            <h1>Goku vs Vegeta</h1>
            <hr/>
            <div className="flex flex-row justify-around">
                <Goku name="Goku" life={this.state.lifeGoku} reduceLife={this.reduceLife}/>
                <Vegeta name="Vegeta" life={this.state.lifeVegeta} reduceLife={this.reduceLife}/>
            </div>
        </div>
    )
}
}

export default App
