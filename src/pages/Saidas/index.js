import React from 'react';
import ListGroup from '../../components/list-group';
import ListGroupItem from '../../components/list-group-item';

class Saidas extends React.Component {
    state = {
        totalSaidas: 0,
    };
    render() {
        return (
            <>
                <h2 className="text-center mt-4 mb-4">Saidas</h2>

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="col-3">
                        <ListGroup title="Saidas">
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
                        Toal de saidas: {this.state.totalSaidas}
                    </div>
                </div>
            </>
        );
    }
}

export default Saidas;
