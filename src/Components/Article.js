import React, {Component} from 'react'


class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const {article, isBigSized} = this.props;
        const centerCSS = {'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'};

        var style = {'height': '300px'};
        const _ = (isBigSized ? {'float': 'right'} : centerCSS);
        for (var key in _) { style[key] = _[key] }

        const image = <img src={require('../static/ae.png')} alt="hmm" style={style} />;


        const body = <section style={{width: (isBigSized ? "50%": "100%")}}>{article.body.split(" ").slice(0, (isBigSized ? 40 : 20)).join(" ")}</section>;

        const colClass = "col-lg-" + (isBigSized ? 8 : 4) + " col-md-12";
        return (
            <div className={colClass}>
                <div className="card" style={{height: '100%'}}>
                {/*<div className="card" style={{height: '400px'}}>*/}
                    <div className="card-header">
                        <h2>
                            {article.title}
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={this.handleClick}
                                style={{float: 'right'}}
                            >
                                Click
                            </button>
                        </h2>
                    </div>
                    <div className="card-body">
                        {image}
                        {body}
                        <h3>Creation date: {article.date}</h3>
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
