import React from 'react';
import './News.css';

export class News extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.posts)
    }
    componentWillUnmount() {
        console.log('News', +this.props.posts);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 heading">
                        <h1>The News Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div>{this.props.posts.map(function (post, index) {
                            return (
                                <div className="row post" key={index}>
                                    <div className="col-xs-4">
                                        <img className="image" src={post.urlToImage} alt={post.title} />
                                    </div>
                                    <div className="col-xs-8">
                                        <div className="row post-title">
                                        <a href={post.url}>{post.title}</a>
                                        </div>
                                        <div className="row description">
                                            <p>{post.description}</p>
                                        </div>
                                        <div  className="row souce">
                                            <p>Source: {post.source.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
