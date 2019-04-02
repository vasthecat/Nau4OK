import React from "react";
import {Form} from "antd";
import {connect} from "react-redux";
import * as actions from "../store/actions/auth";

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        erv: ''
    };

    handleSubmit = e => {
        let errorMsg = '';
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onAuth(
                    values.userName,
                    values.firstName,
                    values.lastName,
                    values.email,
                    values.password,
                    values.confirm,
                );

            } else {
                this.setState({erv: err.confirm.errors[0].message})
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("Пароли не совпадают!");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], {force: true});
        }
        callback();
    };

    generateErrors() {
        return this.props.user.user_comments.map(comment => {

        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        let errorMessage = '';

        if (this.props.error) {
            let error = this.props.error.response.data;
            if ('password1' in error){
                error.password1.map(e => {
                    errorMessage += e
                })
            }
            if ('username' in error){
                errorMessage = 'Пользователь с таким никнеймом уже существует!'
            }

            if ('email' in error){
                errorMessage = 'Пользователь с таким e-mail адресом уже зарегистрирован.'
            }
        }

        if (this.props.token){
            this.props.history.push('/');
        }


        return (
            <div className="login-bg">
                <div className="login-overlay">
                    <section className="sign-in">
                        <div className="sign-in-container">
                            <div className="sign-in-content display-flex">
                                <div className="sign-in-form">
                                    <h2 className="form-title">Регистрация</h2>
                                    <form onSubmit={this.handleSubmit} className="register-form" id="register-form">
                                        <div className="form-group">
                                            {getFieldDecorator("userName", {
                                                rules: [{required: true, message: "Введите свой никнейм!"}]
                                            })(
                                                <input className="form-input" type="text" placeholder="Никнейм"
                                                       required/>
                                            )}
                                        </div>
                                        <div className="form-group" style={{'display': 'flex'}}>
                                            {getFieldDecorator("firstName", {
                                                rules: [{required: true, message: "Введите своё имя!"}]
                                            })(
                                                <input className="form-input flex-fill mr-1" type="text"
                                                       placeholder="Имя" style={{'width': '50%'}} required/>
                                            )}

                                            {getFieldDecorator("lastName", {
                                                rules: [{required: true, message: "Введите свою фамилию!"}]
                                            })(
                                                <input className="form-input flex-fill ml-1" type="text"
                                                       placeholder="Фамилия" style={{'width': '50%'}} required/>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            {getFieldDecorator("email", {
                                                rules: [
                                                    {
                                                        type: "email",
                                                        message: "Введен неверный E-mail!"
                                                    },
                                                    {
                                                        required: true,
                                                        message: "Введите свой E-mail!"
                                                    }
                                                ]
                                            })(
                                                <input className="form-input" type="email" placeholder="E-mail"
                                                       required/>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            {getFieldDecorator("password", {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "Введите пароль!"
                                                    },
                                                    {
                                                        validator: this.validateToNextPassword
                                                    }
                                                ]
                                            })(
                                                <input className="form-input" type="password" placeholder="Пароль"
                                                       required/>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            {getFieldDecorator("confirm", {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "Повторите введенный пароль!"
                                                    },
                                                    {
                                                        validator: this.compareToFirstPassword
                                                    }
                                                ]
                                            })(
                                                <input className="form-input" type="password"
                                                       placeholder="Повторите пароль" required/>
                                            )}
                                        </div>

                                        <div className="form-group px-1">
                                            <input className="card-button btn--block" type="submit" name="signup"
                                                   id="signup" value="Зарегистрироваться"/>
                                        </div>
                                    </form>
                                    {this.state.erv}
                                    <br/>
                                    <p>{errorMessage}</p>
                                </div>

                                <figure className="signup-image">
                                    <img src={require('../static/images/signup-image.jpg')} alt=""/>
                                </figure>

                            </div>

                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        token: state.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, first_name, last_name, email, password1, password2) =>
            dispatch(
                actions.authSignup(username, first_name, last_name, email, password1, password2)
            )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedRegistrationForm);