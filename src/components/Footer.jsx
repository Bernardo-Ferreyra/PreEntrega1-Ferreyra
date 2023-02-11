import './styles/footer.css'

const Footer = () => {
  return (
    
    <>
    <div className="section p-5">
        <div className="container">
            <div className="row">

                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Information</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li>Pages</li>
                            <li>Our Team</li>
                            <li>Feuchers</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li>Monitoring Grader</li>
                            <li>Video Tutorial</li>
                            <li>Term &amp; Service</li>
                            <li>Zeeko API</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Help</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li>Sign Up</li>
                            <li>Login</li>
                            <li>Terms of Services</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                        <p className="contact-info mt-4">Contact us if need help withanything</p>
                        <p className="contact-info">+01 123-456-7890</p>
                        <div className="mt-5">
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="facebook footer-social-icon bi bi-facebook"></i></li>
                                <li className="list-inline-item"><i className="twitter footer-social-icon bi bi-twitter"></i></li>
                                <li className="list-inline-item"><i className="google footer-social-icon bi bi-google"></i></li>
                                <li className="list-inline-item"><i className="apple footer-social-icon bi bi-apple"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div className="text-center mt-5">
            <p className="footer-alt mb-0 f-14">2023 © BerniStore, All Rights Reserved</p>
        </div>

    </div>
    </>
    
  )
}

export default Footer

