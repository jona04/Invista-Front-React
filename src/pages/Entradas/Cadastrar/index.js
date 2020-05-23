import React from 'react';

import ListGroup from '../../../components/list-group';
import ListGroupItem from '../../../components/list-group-item';

class EntradasCadastrar extends React.Component {
    render() {
        return (
            <>
                <h2 className="text-center mt-4 mb-4">Entradas - Cadastrar</h2>

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="col-3">
                        <ListGroup title="Entradas">
                            <ListGroupItem
                                href="#/entradas/listar"
                                label="Listar"
                            ></ListGroupItem>
                            <ListGroupItem
                                href="#/entradas/cadastrar"
                                label="Cadastrar"
                            ></ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="col-9">entradas</div>
                </div>
            </>
        );
    }
}

export default EntradasCadastrar;
