function Kurmis()
{
    let zxz = 33;
    return (
        <>
            
            <h2 style={
                {
                    color: 'pink',
                    backgroundColor: 'skyblue',
                    padding: zxz + 'px'
                }
            }>Kurmis</h2>
            <span> Urvinis padaras Nr. {zxz > 20 ? "blub blub" : "no blubs"}</span>
        </>
    );
}

export default Kurmis;