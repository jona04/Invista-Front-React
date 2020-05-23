import React from 'react';
import ListGroup from '../../../components/list-group';
import ListGroupItem from '../../../components/list-group-item';

export default class SaidasListar extends React.Component {
    state = {
        total_saidas: 0,
    };
    render() {
        return (
            <>
                <h2 className="text-center mt-4 mb-4">
                    Invista - Saidas - Listar
                </h2>

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="col-3">
                        <ListGroup title="Entradas">
                            <ListGroupItem
                                href="#/saidas/listar"
                                label="Listar"
                            ></ListGroupItem>
                            <ListGroupItem
                                href="#/saidas/cadastrar"
                                label="Cadastrar"
                            ></ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="col-9">
                        Total de saidas: {this.state.total_saidas}
                    </div>
                </div>
            </>
        );
    }
}
