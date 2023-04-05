import goku from "../assets/Goku.png"

import countHits from "./CountHits.jsx";
import {Component} from "react";

class Goku extends Component{


    render(){
        const {name, handleClick, hocState, life} = this.props

        return(
            <div className="flex flex-col gap-8">
                <img src={goku} alt="Goku" width={250}/>
                { life > 0 ?
                <button onClick={handleClick} className="border mt-10">{name} frappe</button>
                    :
                <button className="border mt-10">Mort</button>
            }

                <table>
                    <thead>
                        <tr>
                            <th>Coups</th>
                            <th>Vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>

                            { life > 0 ?
                                <td> {life} </td>
                                :
                                <>
                                    <td> KO </td>
                                </>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Goku, 10)