import {Component} from "react";
import countHits from "./CountHits.jsx";
import vegeta from "../assets/Vegeta.webp"

class Vegeta extends Component{
    render() {
        const {name, handleClick, hocState, life} = this.props

        return(
            <div className="flex flex-col gap-8">
                <img src={vegeta} alt="vegeta" width="250"/>
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
                        <td>
                            {hocState.hits}
                        </td>
                        { life > 0 ?
                        <td>
                            {life}
                        </td>
                                :
                            <td>
                                KO
                            </td>
                            }
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default countHits(Vegeta , 8)