import React from 'react';
import MenuLateral from '../../../../components/menu-lateral';

export default class InvistaHomeEntradasCadastrar extends React.Component {
    state = {
        total_entradas: 0,
    };
    render() {
        return (
            <>
                <h2 className="text-center mt-4 mb-4">
                    Invista - Entradas - Cadastrar
                </h2>

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="col-3">
                        <MenuLateral />
                    </div>
                    <div className="col-9">
                        Total de entradas: {this.state.total_entradas}
                    </div>
                </div>
            </>
        );
    }
}
