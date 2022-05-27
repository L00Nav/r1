import seaPlaners from "../SeaPlanners";

function Tipas()
{
    return(<>
        <h4>Tipas:</h4>
        {seaPlaners.slice().sort((a, b) => {return a.type.localeCompare(b.type)}).map(
            (entry, index) => <div key={index}>{entry.id} {entry.type} <span style={{color: entry.color}}>{entry.name}</span> {entry.color}</div>
        )}
    </>);
}

export default Tipas;