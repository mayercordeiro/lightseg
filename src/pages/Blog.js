import React from 'react';
import styles from './Blog.module.css';

class Blog extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('https://lightseg.com.br/lsapi/wp-json/wp/v2/artigos')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
            });
    }

    render() {
        return (
            <div className={styles.blog}>
                <ul>
                    {this.state.linguagens.map(item => (
                        <li key={item.id}>
                            <p><b>Nome:</b> {item.id}</p>
                            <div>{item.title.rendered}</div>
                            <p><b>Ano de criação:</b> {item.acf.resumo}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Blog;