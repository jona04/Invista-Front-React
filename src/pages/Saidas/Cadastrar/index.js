import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListGroup from '../../../components/list-group';
import ListGroupItem from '../../../components/list-group-item';
import ApiService from '../../../services/api';

class SaidasCadastrar extends React.Component {
    state = {
        total_entradas: 0,
        descricao: '',
        valor: '',
        origem: 0,
        mensagemErro: null,
    };

    constructor() {
        super();
        this.service = new ApiService();
    }

    cadastrar = () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        this.service
            .post(
                '/api/saidas/',
                {
                    descricao: this.state.descricao,
                    valor: this.state.valor,
                    origem: this.state.origem,
                },
                config
            )
            .then((response) => {
                console.log(JSON.stringify(response));
                this.props.history.push('#/saidas/listar');
            })
            .catch((error) => {
                this.setState({ mensagemErro: error.message });
            });
    };

    change = (e) => {
        this.setState({ origem: parseInt(e.target.value) });
    };
    render() {
        return (
            <>
                <h2 className="text-center mt-4 mb-4">
                    Invista - Saidas - Cadastrar
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">
                                    Enviar foto
                                </label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleFormControlFile1"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="descricao"
                                    placeholder="Descrição"
                                    autoComplete="off"
                                    value={this.state.descricao}
                                    onChange={(e) =>
                                        this.setState({
                                            descricao: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="valor">Valor</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="valor"
                                    placeholder="Valor"
                                    autoComplete="off"
                                    value={this.state.value}
                                    onChange={(e) =>
                                        this.setState({
                                            valor: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">
                                    Origem
                                </label>
                                <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                    onChange={this.change}
                                    value={this.state.origem}
                                >
                                    <option value="0">INVISTA</option>
                                    <option value="1">THE BRINDES</option>
                                </select>
                            </div>
                        </form>
                        <button
                            className="btn btn-lg btn-primary btn-block text-uppercase"
                            onClick={this.cadastrar}
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(SaidasCadastrar);

SaidasCadastrar.propTypes = {
    history: PropTypes.object,
};
