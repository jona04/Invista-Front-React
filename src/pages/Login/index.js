import React from 'react';

// import logo from '../../assets/logo-thebrindes.png';

import Card from '../../components/card';
import FormLabelGroup from '../../components/form-label-group';

import './styles.css';

export default class Login extends React.Component {
    state = {
        usuario: '',
        senha: '',
    };

    entrar = () => {
        console.log(this.state.usuario, this.state.senha);
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
                                        value={this.state.usuario}
                                        onChange={(e) =>
                                            this.setState({
                                                usuario: e.target.value,
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
                                        value={this.state.senha}
                                        onChange={(e) =>
                                            this.setState({
                                                senha: e.target.value,
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
                                Sign in
                            </button>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
