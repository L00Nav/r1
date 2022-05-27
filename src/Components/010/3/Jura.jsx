import seaPlaners from "../SeaPlanners";
import Sala from "./Sala";
import Valtis from "./Valtis";
import Laivas from "./Laivas";

function Jura()
{ //feesh
    return (
        <>
            <h4>Jura:</h4>
            {seaPlaners.map((value, index) => {if(value.type === 'fish') {return <div key={index}>{value.id} {value.type} <span style={{color: value.color}}>{value.name}</span> {value.color}</div>} else return null; } ) }
            <Sala></Sala>
            <Valtis></Valtis>
            <Laivas></Laivas>

        </>
    );
}


export default Jura;