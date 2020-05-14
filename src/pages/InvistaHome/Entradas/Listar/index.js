import React from 'react';
import MenuLateral from '../../../../components/menu-lateral';

export default class InvistaHomeEntradasListar extends React.Component {
    render() {
        return (
            <>
                <h2 className="text-center mt-4 mb-4">
                    Invista - Entradas - Listar
                </h2>

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="col-3">
                        <MenuLateral />
                    </div>
                    <div className="col-9">listar entradas</div>
                </div>
            </>
        );
    }
}
