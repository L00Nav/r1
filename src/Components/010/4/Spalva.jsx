import seaPlaners from "../SeaPlanners";

function Spalva()
{
    return(<>
        <h4>Spalva:</h4>
        {seaPlaners.slice().sort((a, b) => {return a.color.localeCompare(b.color)}).map(
            (entry, index) => <div key={index}>{entry.id} {entry.type} <span style={{color: entry.color}}>{entry.name}</span> {entry.color}</div>
        )}
    </>);
}

export default Spalva;