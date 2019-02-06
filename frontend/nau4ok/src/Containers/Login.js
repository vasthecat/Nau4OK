import React from 'react';
import { Form, Icon, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
        this.props.history.push('/');
      }
    });
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

    const { getFieldDecorator } = this.props.form;

    const form = (
        <Form onSubmit={this.handleSubmit} className="login-form">

            <FormItem>
            {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
            </FormItem>

            <FormItem>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
            </FormItem>

            <FormItem>
            <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Login
            </Button>
            Or
            <NavLink
                style={{marginRight: '10px'}}
                to='/signup/'> signup
            </NavLink>
            </FormItem>
        </Form>
    );

    const form2 = (
        <section className="sign-in">
            <div className="sign-in-container">
                <div className="sign-in-content display-flex">
                    <figure className="sign-in-image">
                        <img src={require('../static/signin-image.jpg')} alt=""/>
                    </figure>
                    
                    <div className="sign-in-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input className="form-input" type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input className="form-input" type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input className="form-input-checkbox" type="checkbox" name="remember-me" id="remember-me"/>
                                <label className="pl-2" htmlFor="remember-me">Remember me</label>
                            </div>
                            <div className="form-group px-1">
                                <input className="btn btn--block" type="submit" name="signin" id="signin" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );


    return (
        <div>
            <div className="login-bg"><div className="login-overlay"></div></div>
            {errorMessage}
            {this.props.loading ? <Spin indicator={antIcon} /> : form2}
        </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);