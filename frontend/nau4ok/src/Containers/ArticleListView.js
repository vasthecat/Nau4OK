import React, {Component} from 'react'
import ArticleCard from '../Components/ArticleCard'
import axios from 'axios'
import Scrollchor from 'react-scrollchor';


class ArticleList extends Component {
    state = {
        articles: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8000/api/articles').then(res => {
            this.setState({
                articles: res.data,
            });
        });
    }

    render() {
        var i = 0;
        const articleElements = this.state.articles.map(article => {
            i++;
            const isBigSized = (i - 4) % 7 === 0 || i % 7 === 0;
            const liClass = (isBigSized ? "cards__item--big" : "cards__item");
            return (
                <li className={liClass}>
                    <ArticleCard article={article}/>
                </li>
            )
        });

        return (
            <div>
                <header className="nau4ok-header">
                    <div className="bg-img">
                        <div className="overlay"></div>
                    </div>

                    <div className="header-wrapper text-center">
                        <div className="header-content container">
                            <div className="col-md-10 offset-md-1">
                                <div className="display-3 text-center">Lorem ipsum dolor sit amet</div>
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Morbi maximus risus at sapien dapibus, eget tempus felis tempor.
                                    Aliquam erat volutpat. Vivamus at felis diam. Aliquam fringilla odio arcu, sit
                                    amet venenatis purus commodo sit amet. Praesent tristique a justo at condimentum.
                                    Integer vitae arcu quis felis fermentum tincidunt a a ligula. Nulla pretium purus
                                    ut ante venenatis, condimentum varius sapien luctus. Maecenas sit amet justo sit
                                    amet sapien aliquet pretium in in risus. Sed id consequat est. Vestibulum eros ante,
                                    vehicula eu sem a, aliquam blandit odio. Nullam non congue orci.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Scrollchor to="#articleList" className="nav-link arrow-scroll" animate={{offset: -100, duration: 600}}>
                        <div className="arrow-container mx-auto">
                            <div>
                                <div className="chevron"/>
                                <div className="chevron"/>
                                <div className="chevron"/>
                                <span className="arrow-text">Scroll to articles</span>
                            </div>
                        </div>
                    </Scrollchor>
                </header>

                <div className="container" id="articleList">
                    <div className="display-3 col-md-10 offset-md-1 text-center my-5" >You may be
                        intrested:
                    </div>
                    <ul className="cards">
                        {articleElements}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArticleList;
