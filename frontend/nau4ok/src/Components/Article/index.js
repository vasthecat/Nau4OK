import React, {Component} from 'react'
import './style.css' // TODO Why doesn't style imports with "import './style.less'"


class Article extends Component {
    render() {
        const {article} = this.props;
        const paragraphs = article.body.split('\n').map(par => {
            return <p className="paragraph">{par}</p>
        });

        return (
            <div>
                <img src={require('../../static/image.jpg')} alt="Article" className="img-fluid"/>
                <h1 className="display-3 mt-5">
                    {article.title}
                </h1>

                <div className="my-4 d-flex flex-row">
                    <div className="p-2">
                        <img src={require('../../static/image.jpg')} alt="User avatar" className="avatar"/>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="ml-2 mt-1">
                            <div className="d-flex flex-row">
                                <h2>John Doe</h2>
                                <button type="button" className="btn btn-primary btn-sm mx-3 mt-1 mb-2">Follow</button>
                            </div>
                        </div>
                        <div className="ml-2 mt-1">An journalist</div>
                    </div>
                </div>
                {paragraphs}
            </div>
        );
    }
}


export default Article;
