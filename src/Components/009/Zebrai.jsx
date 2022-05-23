function Zebrai (props)
{
    let colore = '';
    if (props.colore == 1) //why the error?
        colore = 'blue';
    else if (props.colore == 2)
        colore = 'red';
    else
        colore = 'purple';
    return (
        <>
            <h1 style={{color: colore}}>Zebrai ir Bebrai</h1>
        </>
    );
}

export default Zebrai;