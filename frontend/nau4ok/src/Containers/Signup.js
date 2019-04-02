import React from "react";
import {Form} from "antd";
import {connect} from "react-redux";
import * as actions from "../store/actions/auth";

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values);
            if (!err) {
                this.props.onAuth(
                    values.userName,
                    values.firstName,
                    values.lastName,
                    values.email,
                    values.password,
                    values.confirm,
                );
                this.props.history.push("/");
            } else {
                console.log(err);
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

    render() {
        const {getFieldDecorator} = this.props.form;

        const form = (
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
                                        <input className="form-input" type="text" placeholder="Никнейм"/>
                                    )}
                                </div>
                                <div className="form-group" style={{'display': 'flex'}}>
                                    {getFieldDecorator("firstName", {
                                        rules: [{required: true, message: "Введите своё имя!"}]
                                    })(
                                        <input className="form-input flex-fill mr-1" type="text" placeholder="Имя" style={{'width': '50%'}}/>
                                    )}

                                    {getFieldDecorator("lastName", {
                                        rules: [{required: true, message: "Введите свою фамилию!"}]
                                    })(
                                        <input className="form-input flex-fill ml-1" type="text" placeholder="Фамилия" style={{'width': '50%'}}/>
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
                                        <input className="form-input" type="email" placeholder="E-mail"/>
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
                                        <input className="form-input" type="password" placeholder="Пароль"/>
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
                                        <input className="form-input" type="password" placeholder="Повторите пароль"/>
                                    )}
                                </div>

                                <div className="form-group px-1">
                                    <input className="card-button btn--block" type="submit" name="signup" id="signup" value="Зарегистрироваться"/>
                                </div>
                            </form>
                        </div>

                        <figure className="signup-image">
                            <img src={require('../static/images/signup-image.jpg')} alt=""/>
                        </figure>
                    </div>
                </div>
            </section>
        );

        return (
            <div className="login-bg">
                <div className="login-overlay">
                    {form}
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