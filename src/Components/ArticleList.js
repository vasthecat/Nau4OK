import React from 'react'
import Article from './Article'

export default function ArticleList({ articles }) {
    // var elements = [];
    // var temp = [];
    // var j = 0;
    // articles.forEach(function (item, i, arr) {
    //     i++;
    //     var isBigSized = (i - 4) % 7 === 0 || i % 7 === 0;
    //     if (isBigSized) {
    //         j += 2
    //     } else {
    //         j++
    //     }
    //     temp.push(<Article article={item} isBigSized={isBigSized}/>);
    //     // elements[elements.length - 1].push(<Article article={item} isBigSized={isBigSized}/>);
    //     if (j % 3 === 0) {
    //         elements.push(<div className="row mb-4">{temp}</div>);
    //         temp = [];
    //     }
    //     j %= 3;
    // });
    var i = 0;
    const articleElements = articles.map(article => {
        i++;
        return (<Article article={article} isBigSized={(i - 4) % 7 === 0 || i % 7 === 0}/>)
    });

    return (
        <div className="row no-gutters">{articleElements}</div>
    )
    // return (
    //     <div>{elements}</div>
    // )
}
