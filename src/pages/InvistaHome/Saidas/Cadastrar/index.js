import React from 'react';
import MenuLateral from '../../../../components/menu-lateral';

export default class InvistaHomeSaidasCadastrar extends React.Component {
    state = {
        total_saidas: 0,
    };
    render() {
        return (
            <>
                <h2 className="text-center mt-4 mb-4">
                    Invista - Saidas - Cadastrar
                </h2>

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="col-3">
                        <MenuLateral />
                    </div>
                    <div className="col-9">
                        Total de saidas: {this.state.total_saidas}
                    </div>
                </div>
            </>
        );
    }
}
