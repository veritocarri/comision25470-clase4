const Main  = (props) => {
    console.table (props.nombre)

    return(
        <main className="conten-main">
            <h3>Bienvenido a la tienda online de {props.nombre}
            {props.apellido} Peluquerias</h3>
        </main>
    )
}
export default Main;