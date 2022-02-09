import React, { useEffect, useRef } from "react";

const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'

export default function Paypal(props) {
    const paypal = useRef()

    function Reservar(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ passenger: JSON.parse(sessionStorage.getItem('user')).id, journey: props.trayecto.id})
        };
        fetch(URL_BASE + 'crud/reserva/', requestOptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .then(data => this.setState({ postId: data.id }));
        
        //window.location.reload();
        alert("Reserva añadida correctamente");
    }

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Viaje",
                            amount: {
                                currency: "EUR",
                                value: props.trayecto.price
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                Reservar();
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}