import seaPlaners from "../SeaPlanners";

function Sala()
{ //animal
    return (
        <>
            <h5>Sala:</h5>
            {seaPlaners.map((value, index) => {if(value.type === 'animal') {return <div key={index}>{value.id} {value.type} <span style={{color: value.color}}>{value.name}</span> {value.color}</div>} else return null; } ) }
        </>
    )
}

export default Sala;