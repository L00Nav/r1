import seaPlaners from "../SeaPlanners";

function Laivas()
{ //car
    return (
        <>
            <h5>Laivas:</h5>
            {seaPlaners.map((value, index) => {if(value.type === 'car') {return <div key={index}>{value.id} {value.type} <span style={{color: value.color}}>{value.name}</span> {value.color}</div>} else return null; } ) }
        </>
    )
}

export default Laivas;