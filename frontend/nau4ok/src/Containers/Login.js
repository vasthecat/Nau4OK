import React from 'react';
import {Form, Icon, Input, Button, Spin} from 'antd';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>;


class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onAuth(values.userName, values.password);
            }
        });

    };

    render() {
        let errorMessage = '';
        if (this.props.error) {
            errorMessage = (
                'Неверный логин или пароль!'
            );
        }
        if (this.props.token){
            this.props.history.push('/');
        }

        const {getFieldDecorator} = this.props.form;


        return (
            <div className="login-bg">
                <div className="login-overlay">
                    <section className="sign-in">
                        <div className="sign-in-container">
                            <div className="sign-in-content display-flex">
                                <figure className="sign-in-image">
                                    <img src={require('../static/images/signin-image.jpg')} alt=""/>
                                </figure>

                                <div className="sign-in-form">
                                    <h2 className="form-title">Вход</h2>
                                    <form onSubmit={this.handleSubmit} className="register-form" id="register-form">
                                        <div className="form-group">
                                            {getFieldDecorator('userName', {
                                                rules: [{required: true, message: 'Введите свой никнейм!'}],
                                            })(
                                                <input className="form-input" type="text" placeholder="Никнейм"
                                                       required/>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            {getFieldDecorator('password', {
                                                rules: [{required: true, message: 'Введите свой пароль!'}],
                                            })(
                                                <input className="form-input" type="password" placeholder="Пароль"
                                                       required/>
                                            )}
                                        </div>
                                        <div className="form-group px-1">
                                            <input className="card-button btn--block" type="submit" name="signin"
                                                   id="signin" value="Войти"/>
                                        </div>

                                    </form>
                                    {errorMessage.split('\n').map(elem => {
                                        return <p className="error-style">{elem}</p>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        token: state.token,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);