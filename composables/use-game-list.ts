import {Game} from "~/interfaces/Game";
import axios from "axios";


export default async function (){
    let games: Array<Game>

    const [response] = await Promise.all([
        axios.get<Array<Game>>('http://public.connectnow.org.uk/applicant-test/', {
            proxy: false
        })
    ]);


    const json = await response.data;
    games = json

    return games
}
