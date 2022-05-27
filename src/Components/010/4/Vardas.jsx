import seaPlaners from "../SeaPlanners";

function Vardas()
{
    return(<>
        <h4>Vardas:</h4>
        {seaPlaners.slice().sort((a, b) => {return a.name.localeCompare(b.name)}).map(
            (entry, index) => <div key={index}>{entry.id} {entry.type} <span style={{color: entry.color}}>{entry.name}</span> {entry.color}</div>
        )}
    </>);
}

export default Vardas;