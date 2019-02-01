import React, {Component} from 'react'
import './style.css'


class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const {article, isBigSized} = this.props;

        const colClass = "col-lg-" + (isBigSized ? 8 : 4) + " col-md-" + (isBigSized ? 12 : 6);

        return (
            <div className={colClass}>
                <div className="card" style={{height: '400px'}}>
                    <div className="card-body card_bg">
                        <div className="container">

                            <div className="row">
                                <h2 className="col-12 text-center card-title">
                                    {article.title}
                                </h2>
                            </div>

                            <div className="row">
                                <div className="col-2"></div>

                                {/*Horizontal line*/}
                                <div
                                    className="col-8"
                                    style={{'height': '2px', 'background-color': 'rgb(255, 236, 132)'}}
                                ></div>

                                <div className="col-2"></div>
                            </div>

                            <div className="row">
                                <p className="col-12 card-text my-4">
                                    {article.body.split(" ").slice(0, (isBigSized ? 100 : 50)).join(" ")}
                                </p>
                            </div>

                            <div className="row">
                                <h4 className="col-12 card-text">Creation date: {article.date}</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article;
