import React, { useRef } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios';

export default function Contact() {
  const URL = 'http://localhost:6162';
  const contname = useRef();
  const contemail = useRef();
  const contsubject = useRef();
  const contmessage = useRef();

  const contactsave = (e) => {
    e.preventDefault();
    try {
      const Contact = {
        name: contname.current.value,
        email: contemail.current.value,
        Subject: contsubject.current.value,
        message: contmessage.current.value
      }
      axios.post(`${URL}/add-query`, Contact).then((res) => {
        //console.log(res.status);
        alert("Success Posted!");
      })
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <>
      <Header></Header>
      {/* Header start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 ">Contact</h3>

        </div>
      </div>
      {/* Header End */}

      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Contact Us</h5>
            <h1 className="mb-0">Contact For Any Query</h1>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <div className="bg-white rounded p-4">
                <div className="text-center mb-4">
                  <i className="fa fa-map-marker-alt fa-3x text-primary" />
                  <h4 className="text-primary">
                    <address />
                  </h4>
                  <p className="mb-0">
                    123 MET Collage, <br /> Nashik, India
                  </p>
                </div>
                <div className="text-center mb-4">
                  <i className="fa fa-phone-alt fa-3x text-primary mb-3" />
                  <h4 className="text-primary">Mobile</h4>
                  <p className="mb-0">+91 9098984980</p>
                  <p className="mb-0">+91 1234567890</p>
                </div>
                <div className="text-center">
                  <i className="fa fa-envelope-open fa-3x text-primary mb-3" />
                  <h4 className="text-primary">Email</h4>
                  <p className="mb-0">info@India.com</p>
                  <p className="mb-0">info@MET.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-2">Send us a message</h3>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and working
                contact form with Ajax &amp; PHP in a few minutes. Just copy and paste
                the files, add a little code and you're done.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        name="name"
                        placeholder="Your Name"
                        ref={contname}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        name="email"
                        placeholder="Your Email"
                        ref={contemail}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        name="Subject"
                        placeholder="Subject"
                        ref={contsubject}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0"
                        placeholder="Leave a message here"
                        name="message"
                        style={{ height: 160 }}
                        ref={contmessage}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={contactsave}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12">
              <div className="rounded">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
