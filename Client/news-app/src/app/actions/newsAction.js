import axios from 'axios';

export function getPost() {
    return dispath => {
        fetch('http://localhost:8000/news')
            .then(result => {
                return result.json();
            })
            .then(data => {
                console.log(data.articles[0].title+ ' articles');
                dispath({
                    type: "GET_NEWS",
                    payload: data.articles
                });
            });
    };
}