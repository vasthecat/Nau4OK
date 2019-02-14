import React, {Component} from 'react'


class Profile extends Component {

    state = {
        user: {}
    };

    componentWillMount() {
        this.setState({
            user: this.props.user
        })
    }

    render() {
        const form = (
            <section className="sign-in">
                <div className="sign-in-container">
                    <div className="sign-in-content display-flex">
                        <div className="sign-in-form">
                            <h2 className="form-title">User</h2>
                            <form className="register-form">

                                <div className="form-group">
                                        <input className="form-input" type="text" placeholder={this.state.user.username}/>
                                </div>
                                <div className="form-group" style={{'display': 'flex'}}>
                                    <input className="form-input flex-fill mr-1" type="text" placeholder={this.state.user.first_name} style={{'width': '50%'}}/>
                                    <input className="form-input flex-fill ml-1" type="text" placeholder={this.state.user.last_name} style={{'width': '50%'}}/>
                                </div>
                                <div className="form-group">
                                    <input className="form-input" type="email" placeholder={this.state.user.email}/>
                                </div>

                            </form>
                        </div>

                        <figure className="signup-image">
                            <img src={this.state.user.avatar} alt="" style={{'min-width': '300px', 'max-width': '300px', 'min-height': '300px', 'max-height': '300px'}}/>
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

        return (
            <div className="display-1" style={{'paddingTop': '100px'}}>{this.state.user.username}</div>
        )
    }

}

export default Profile;
