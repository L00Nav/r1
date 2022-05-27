import seaPlaners from "../SeaPlanners";

function Valtis()
{ //man
    return (
        <>
            <h5>Valtis:</h5>
            {seaPlaners.map((value, index) => {if(value.type === 'man') {return <div key={index}>{value.id} {value.type} <span style={{color: value.color}}>{value.name}</span> {value.color}</div>} else return null; } ) }
        </>
    )
}

export default Valtis;