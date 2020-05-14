import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Card from '../../components/card';
import FormLabelGroup from '../../components/form-label-group';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    };

    entrar = async () => {
        // console.log(this.state.usuario, this.state.senha);
        try {
            const resposta = await api.post('/token/', this.state);

            localStorage.setItem('token', resposta.data.access);
            this.props.history.push('#/inicio');
        } catch (error) {
            console.log('Error', JSON.stringify(error));
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <Card title="Login">
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

export default withRouter(Login);

Login.propTypes = {
    history: PropTypes.object,
};
