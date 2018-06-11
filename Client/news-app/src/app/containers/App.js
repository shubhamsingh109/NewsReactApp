import React from 'react';
import { connect } from 'react-redux';
import { News } from '../components/News';
import { getPost } from '../actions/newsAction';

class App extends React.Component{
    componentDidMount(){
        this.props.getPost();
    }
    render(){
        return (
            <div className="container">
            <News posts={this.props.news}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log('mapping to props' + state.articles)
    return {
        news: state.articles
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        getPost : ()=>{
            dispatch(getPost());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);    