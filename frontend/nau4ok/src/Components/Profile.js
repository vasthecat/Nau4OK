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
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="profile-section">
                            <div className="profile-container">
                                <img src={this.state.user.avatar} alt="" className="profile-avatar"/>

                                <div className="profile-content">
                                    <div className="user-fullname">{this.state.user.first_name} {this.state.user.last_name}</div>
                                    <div>Username: {this.state.user.username}</div>
                                    <div>E-mail: {this.state.user.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <section className="activities">
                            <div className="user-activity">
                                <div className="activity-content">
                                    <h2>Комментарий к статье <a href="/articles/1">"First article"</a></h2>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper maximus ante in pharetra. Pellentesque vitae metus quis ante maximus condimentum rhoncus commodo dolor. Suspendisse consectetur vel enim gravida viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam diam felis, dictum vitae rhoncus nec, accumsan in purus. Donec non libero vestibulum, mattis leo nec, dignissim lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec hendrerit arcu at ex lacinia finibus eu in leo. Ut in nulla mi. Nunc ultrices, ipsum non iaculis accumsan, lectus nisl tincidunt purus, id tempor ante justo consectetur mi. Nullam molestie nibh ipsum, vitae fermentum nisi dignissim ut. Proin eget justo eget odio condimentum blandit.
                                </div>
                            </div>
                            <div className="user-activity">
                                <div className="activity-content">
                                    <h2>Комментарий к статье <a href="/articles/1">"First article"</a></h2>

                                    Pellentesque hendrerit quis eros ac fringilla. Donec vitae velit in nisl sollicitudin sodales.
                                    Pellentesque quis placerat nibh. Vestibulum ipsum dolor, iaculis sit amet consequat id, laoreet vel massa.
                                    Curabitur eu libero venenatis, ullamcorper nisi vitae, placerat nisl.
                                    Maecenas in magna mattis, vulputate ex molestie, mollis nisl. Praesent ac tempus dolor.
                                    Vivamus vitae sem pharetra, dictum velit at, laoreet tellus. Morbi at faucibus diam.
                                    Integer faucibus sodales purus sed vestibulum. Nunc ut fermentum eros, ac tincidunt metus.
                                    Proin id ipsum eros. Cras ultricies eros eget erat pulvinar commodo. Maecenas ultricies posuere sagittis.
                                </div>
                            </div>
                            <div className="user-activity">
                                <div className="activity-content">
                                    <h2>Комментарий к статье <a href="/articles/1">"First article"</a></h2>
                                    Mauris ut dolor eu sapien placerat pharetra a ac quam. Aenean consequat lorem vel metus rutrum elementum. Proin iaculis, magna at fringilla tincidunt, velit est vulputate tortor, vel pellentesque odio massa non ante. Phasellus convallis augue vitae pellentesque bibendum. Praesent tempus consequat massa ac gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla luctus diam id pharetra dictum. Maecenas vulputate dolor diam, sed auctor odio imperdiet et.
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="login-bg">
                <div className="login-overlay">
                    {form}
                </div>
            </div>
        );

        return (
            <div className="display-1" style={{'paddingTop': '100px'}}>{this.state.user.username}</div>
        )
    }

}

export default Profile;
