function ItemListContainer () {
    return (
        <>
        
        <Main
        nombre= "Veronica"
        apellido= "Carrizo"/>
        

        </>
        

    )
}



const Main = (props) => {
    console.table (props.nombre)

    return(
        <main className="conten-item">
            <h3>Bienvenido a la tienda online de {props.nombre}
            {props.apellido} Peluquerias</h3>
        </main>
    )
}


export default ItemListContainer;



