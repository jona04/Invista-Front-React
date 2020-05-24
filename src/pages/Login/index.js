import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';
import { AuthContext } from '../../provedorAutenticacao';

import Card from '../../components/card';
import FormLabelGroup from '../../components/form-label-group';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        mensagemErro: null,
    };

    entrar = () => {
        // console.log(this.state.usuario, this.state.senha);

        api.post('/api/token/', {
            username: this.state.username,
            password: this.state.password,
        })
            .then((response) => {
                localStorage.setItem('token', response.data.access);
                localStorage.setItem('usuario', this.state.username);

                this.props.history.push('#/inicio');
            })
            .catch((error) => {
                this.setState({ mensagemErro: error.message });
            });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <Card title="Login">
                            <div className="row">
                                <p className="text-danger">
                                    {this.state.mensagemErro}
                                </p>
                            </div>
                            <form className="form-signin">
                                <FormLabelGroup
                                    label="Usuario"
                                    htmlFor="usuarioInput"
                                >
                                    <input
                                        value={this.state.username}
                                        onChange={(e) =>
                                            this.setState({
                                                username: e.target.value,
                                            })
                                        }
                                        type="text"
                                        id="inputusuario"
                                        autoComplete="off"
                                        className="form-control"
                                        placeholder="Usuario"
                                        required
                                        autoFocus
                                    />
                                </FormLabelGroup>

                                <FormLabelGroup
                                    label="Password"
                                    htmlFor="inputPassword"
                                >
                                    <input
                                        value={this.state.password}
                                        onChange={(e) =>
                                            this.setState({
                                                password: e.target.value,
                                            })
                                        }
                                        type="password"
                                        id="inputPassword"
                                        className="form-control"
                                        placeholder="Password"
                                        autoComplete="off"
                                        required
                                    />
                                </FormLabelGroup>
                            </form>
                            <button
                                className="btn btn-lg btn-primary btn-block text-uppercase"
                                onClick={this.entrar}
                            >
                                Entrar
                            </button>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

Login.contextType = AuthContext;

export default withRouter(Login);

Login.propTypes = {
    history: PropTypes.object,
};
