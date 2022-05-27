import seaPlaners from "../SeaPlanners";

function Narvas (props)
{
    let oddness = (props.odd === 'true');
    return(<>
        {seaPlaners.map((value, index) => {if(value.type === 'animal' && ((oddness && (value.id % 2)) || !(oddness || (value.id % 2) )))
        {return <div key={index}>{value.id} {value.type} <span style={{color: value.color}}>{value.name}</span> {value.color}</div>} else return null; } ) }
    </>);
}

export default Narvas;