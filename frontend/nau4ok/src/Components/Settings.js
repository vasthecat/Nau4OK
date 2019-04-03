import React, {Component} from 'react'

export default class Settings extends Component {

    render() {
        return (
            <div className="login-bg">
                <div className="login-overlay">
                    <div style={{'padding-top': '150px'}}>
                        <div className="floating-container settings-container">

                        {/*Avatar, Name, Surname, Nickname*/}
                        <div className="settings-upper">
                            <div className="settings-avatar-wrapper">
                                <div className="settings-avatar" style={{'background-image': 'url(' + require('../static/images/default-avatar.png') + ')'}}>
                                    <div className="settings-avatar-overlay"/>
                                </div>
                            </div>

                            <div style={{'display': 'flex', 'flex-direction': 'column', 'margin-top': '20px', 'width': '100%'}}>
                                <div style={{'display': 'flex', 'flex-direction': 'row'}}>
                                    <input className="form-input flex-fill mr-1" type="text" placeholder="Имя" style={{'width': '50%'}} required/>
                                    <input className="form-input flex-fill ml-1" type="text" placeholder="Фамилия" style={{'width': '50%'}} required/>
                                </div>

                                <input className="form-input" type="text" placeholder="Никнейм" required/>

                                <div style={{'display': 'flex', 'flex-direction': 'row'}}>
                                    <input className="form-input flex-fill mr-1" type="email" placeholder="E-mail" style={{'width': '50%'}} required/>
                                    <input className="form-input flex-fill mr-1" type="password" placeholder="Пароль" style={{'width': '50%'}} required/>
                                </div>
                            </div>
                        </div>

                        <textarea placeholder={"Ваша биография"} className="biography"/>

                        <div className="card-button btn--block card__btn">Применить</div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}