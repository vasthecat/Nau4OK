import React, {Component} from 'react'


export default class Footer extends Component {

    render() {
        const logo = require('../static/images/digitalwind_logo.png');

        return (
            <footer className="container-fluid">
                <div className="row footer-container">
                    <div className="col-lg-4" style={{'margin-bottom': '30px'}}>
                        <div className="footer-heading">Навигация</div>
                        <div className="footer-list">
                            <a href="#" className="footer-link">
                                Научок.рф
                            </a>

                            <a href="/login" className="footer-link">
                                Войти в систему
                            </a>

                            <a href="/signup" className="footer-link">
                                Зарегистрироваться
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4" style={{'margin-bottom': '50px'}}>
                        <div className="footer-heading">Контакты</div>
                        <div className="footer-list">
                            <a href="#" className="footer-link">
                                Telegram-канал
                            </a>

                            <a href="#" className="footer-link">
                                Группа ВКонтакте
                            </a>

                            <a href="#" className="footer-link" style={{'margin-top': '10px'}}>
                                Электронная почта:
                                example@научок.рф
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4" style={{'margin-bottom': '20px'}}>
                        <a href="http://www.digitalwind.ru/"><img src={logo} alt=""/></a>
                    </div>
                </div>
            </footer>
        )

    }

}
