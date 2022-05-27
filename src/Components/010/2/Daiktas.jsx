import seaPlaners from "../SeaPlanners";

function makeTheList(index)
{
    let theList = [];
    for (let i = index; i < seaPlaners.length; i += 2)
    {
        theList.push(<div key={i}>{seaPlaners[i].id} {seaPlaners[i].type} <span style={{color: seaPlaners[i].color}}>{seaPlaners[i].name}</span> {seaPlaners[i].color}</div>)
    }
    return theList;
}
  

function Daiktas(props)
{
    return (<div style={{margin: '10px 0'}}>{makeTheList(props.index)}</div>);
}

export default Daiktas;