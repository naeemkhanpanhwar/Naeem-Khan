const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>
                                    Copyright @{new Date().getFullYear()}, <a href="#">Naeem Khan</a> All
                                    Rights Reserved.
                                </p>
                            </div>
                            <ul className="footer-bottom-nav">
                                <li><a href="https://github.com/naeemkhanpanhwar/">Github</a></li>
                                <li><a href="https://www.instagram.com/naeemkhan_110/">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/naeem786/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer