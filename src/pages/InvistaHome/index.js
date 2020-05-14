import React from 'react';
import MenuLateral from '../../components/menu-lateral';

export default class InvistaHome extends React.Component {
    state = {
        totalNotas: 0,
    };

    render() {
        return (
            <>
                <h2 className="text-center mt-4 mb-4">Invista - Principal</h2>

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="col-3">
                        <MenuLateral />
                    </div>
                    <div className="col-9">
                        Toal de Notas: {this.state.totalNotas}
                    </div>
                </div>
            </>
        );
    }
}