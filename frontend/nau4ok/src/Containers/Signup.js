import React from "react";
import {Form, Input, Icon, Button, Select} from "antd";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import * as actions from "../store/actions/auth";

const FormItem = Form.Item;
const Option = Select.Option;

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
                // this.props.history.push("/");
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
            callback("Two passwords that you enter is inconsistent!");
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

        const deprecatedForm = (
            <Form onSubmit={this.handleSubmit} style={{'padding-top': 200}}>
                <FormItem>
                    {getFieldDecorator("userName", {
                        rules: [{required: true, message: "Please input your username!"}]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                            placeholder="Username"
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator("firstName", {
                        rules: [{required: true, message: "Please input your first name!"}]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                            placeholder="First name"
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator("lastName", {
                        rules: [{required: true, message: "Please input your last name!"}]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                            placeholder="Last name"
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator("email", {
                        rules: [
                            {
                                type: "email",
                                message: "The input is not valid E-mail!"
                            },
                            {
                                required: true,
                                message: "Please input your E-mail!"
                            }
                        ]
                    })(
                        <Input
                            prefix={<Icon type="mail" style={{color: "rgba(0,0,0,.25)"}}/>}
                            placeholder="Email"
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator("password", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your password!"
                            },
                            {
                                validator: this.validateToNextPassword
                            }
                        ]
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator("confirm", {
                        rules: [
                            {
                                required: true,
                                message: "Please confirm your password!"
                            },
                            {
                                validator: this.compareToFirstPassword
                            }
                        ]
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
                            type="password"
                            placeholder="Password"
                            onBlur={this.handleConfirmBlur}
                        />
                    )}
                </FormItem>


                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{marginRight: "10px"}}
                    >
                        Signup
                    </Button>
                    Or
                    <NavLink style={{marginRight: "10px"}} to="/login/">
                        login
                    </NavLink>
                </FormItem>
            </Form>
        );

        const form = (
            <section className="sign-in">
                <div className="sign-in-container">
                    <div className="sign-in-content display-flex">
                        <div className="sign-in-form">
                            <h2 className="form-title">Sign up</h2>
                            <form onSubmit={this.handleSubmit} className="register-form" id="register-form">

                                <div className="form-group">
                                        <input className="form-input" type="text" placeholder="Your Usernameame"/>
                                </div>
                                <div className="form-group" style={{'display': 'flex'}}>
                                    <input className="form-input flex-fill mr-1" type="text" placeholder="Your Name" style={{'width': '50%'}}/>
                                    <input className="form-input flex-fill ml-1" type="text" placeholder="Your Last Name" style={{'width': '50%'}}/>
                                </div>
                                <div className="form-group">
                                    <input className="form-input" type="email" placeholder="Your E-mail"/>
                                </div>
                                <div className="form-group">
                                        <input className="form-input" type="password" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                        <input className="form-input" type="password" placeholder="Repeat password"/>
                                </div>

                                <div className="form-group ml-1" style={{'display': 'flex'}}>
                                    <input className="form-input-checkbox" type="checkbox" name="agree-terms" id="agree-terms"/>
                                    <label className="pl-2" htmlFor="agree-terms" style={{'white-space': 'nowrap'}}>
                                        I agree all statements in  <a href="#">Terms of service</a>
                                    </label>
                                </div>

                                <div className="form-group px-1">
                                    <input className="card-button btn--block" type="submit" name="signup" id="signup" value="Sign up"/>
                                </div>
                                
                            </form>
                        </div>

                        <figure className="signup-image">
                            <img src={require('../static/signup-image.jpg')} alt=""/>
                        </figure>
                    </div>
                </div>
            </section>
        );

        return (
            <div>
                <div className="login-bg"><div className="login-overlay"></div></div>
                {form}
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