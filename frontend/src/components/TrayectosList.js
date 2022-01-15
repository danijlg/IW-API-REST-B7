export default function TrayectosList({lista}) {
    return(
        <table>
                <thead>
                    <tr>
                        <th>Conductor</th>
                        <th>Coche</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Fecha</th>
                        <th>Hora Salida</th>
                        <th>Duracion</th>
                        <th>Plazas</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            lista.map(trayectoList=>{
                                if(trayectoList.detail === undefined){
                                    return(
                                        <tr className="set_row">
                                            <td key="Trayecto Driver">{trayectoList.driver}</td>
                                            <td key="Trayecto Car">{trayectoList.car}</td>
                                            <td key="Trayecto Source">{trayectoList.source}</td>
                                            <td key="Trayecto Destiny">{trayectoList.destiny}</td>
                                            <td key="Trayecto Date">{trayectoList.date}</td>
                                            <td key="Trayecto Departure">{trayectoList.departure_time}</td>
                                            <td key="Trayecto Duration">{trayectoList.estimated_duration}</td>
                                            <td key="Trayecto Places">{trayectoList.places_offered}</td>
                                            <td key="Trayecto Price">{trayectoList.price}</td>
                                        </tr>
                                        
                                    )
                                }
                            })
                        }
                </tbody>
        </table>
    );
}