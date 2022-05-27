import Akvariumas from "./Akvariumas";
import Garazas from "./Garazas";
import Namas from "./Namas";
import Narvas from "./Narvas";


function Pasaulis()
{
    return(<>
    <h3>Odd:</h3>
    <h4>Akvariumas:</h4>
    <Akvariumas odd='true'></Akvariumas>
    <h4>Garazas:</h4>
    <Garazas odd='true'></Garazas>
    <h4>Namas:</h4>
    <Namas odd='true'></Namas>
    <h4>Narvas:</h4>
    <Narvas odd='true'></Narvas>
    
    <h3>Even:</h3>
    <h4>Akvariumas:</h4>
    <Akvariumas odd='false'></Akvariumas>
    <h4>Garazas:</h4>
    <Garazas odd='false'></Garazas>
    <h4>Namas:</h4>
    <Namas odd='false'></Namas>
    <h4>Narvas:</h4>
    <Narvas odd='false'></Narvas>
    </>);
}

export default Pasaulis;