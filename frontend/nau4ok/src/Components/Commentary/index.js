import React, {Component} from 'react'

export default class Commentary extends Component {

    render() {
        const img = require('../../static/images/avatar.jpg');

        return (
            <div className="floating-container comment-container">
                <img src={img} className="avatar-medium comment-avatar"/>
                <div className="comment-content">
                    <div className="comment-username">Username</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus eget libero blandit
                        ornare at non nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos. Maecenas eros nibh, placerat eget arcu sit amet, eleifend tristique elit. Maecenas a diam
                        eu quam aliquet lobortis nec eget lectus. Pellentesque eget accumsan arcu, vel fringilla nunc. Nunc
                        rhoncus a purus ultricies pulvinar. Vestibulum et magna mi. Mauris augue libero, rhoncus vel consequat
                        sed, vulputate nec turpis. Fusce in odio elementum, lobortis ipsum sit amet, dignissim mi. Suspendisse
                        quis odio bibendum, consequat est ut, ultricies nibh. Nam bibendum faucibus risus vel pulvinar. Curabitur
                        vestibulum, augue non efficitur euismod, elit nisi porttitor tortor, eu porta massa nisi a eros. Aliquam
                        et egestas dolor. Proin in condimentum justo.
                    </div>
                </div>
            </div>
        );
    }

}
