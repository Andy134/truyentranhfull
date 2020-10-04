import React, { Component } from 'react';
// import styles from './Footer.css';

class Footer extends Component {
    render() {
        return (
            // <div style={{ background: `#FFF` }} className={styles.footer}>
            //     <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
            //     <p><a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p>
            // </div>

            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
                </div>
                {/* <!-- /.container --> */}
            </footer>
        );
    }
}

export default Footer;
