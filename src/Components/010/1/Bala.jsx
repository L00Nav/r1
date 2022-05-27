import seaPlaners from "../SeaPlanners";
  

function Bala()
{
    return(
        <div>{
            seaPlaners.map((sm, index) => <div key={index}>{sm.id} {sm.type} <span style={{color: sm.color}}>{sm.name}</span> {sm.color}</div>)
        }</div>
    );
}

export default Bala;