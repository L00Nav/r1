import seaPlaners from "../SeaPlanners";

function Namas (props)
{
    let oddness = (props.odd === 'true');
    return(<>
        {seaPlaners.map((value, index) => {if (value.type === 'man' && ( (oddness && (value.id % 2) ) || !(oddness || (value.id % 2) ) ) )
        {return <div key={index}>{value.id} {value.type} <span style={{color: value.color}}>{value.name}</span> {value.color}</div>} else return null; } ) }
    </>);
}

export default Namas;