import React from "react"

export default function Contact() {
  return (
    <div>
      <section id="four">
        <div class="container">
          <h3>Send me an Email :</h3>
          <p>
            Please contact me if you would like to work on a project together,
            or just want to chat.
          </p>
          <form method="post" action="POST" data-netlify="true">
            <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="6"
                ></textarea>
              </div>
              <div class="col-12">
                <div class="verify" data-netlify-recaptcha="true"></div>

                <ul class="actions">
                  <li>
                    <input type="submit" class="primary" value="Send Message" />
                  </li>
                  <li>
                    <input type="reset" value="Reset Form" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
