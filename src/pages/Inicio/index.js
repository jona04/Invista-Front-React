import React from 'react';

export default class Inicio extends React.Component {
    state = {
        notasInvista: 0,
        notasTheBrindes: 0,
    };
    render() {
        return (
            <>
                <h2>Inicio</h2>

                <u>
                    <li>Total notas Invista: {this.notasInvista}</li>
                    <li>Total notas The Brindes: {this.notasTheBrindes}</li>
                </u>
            </>
        );
    }
}
