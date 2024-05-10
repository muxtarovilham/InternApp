import React, { useEffect } from 'react'
import styles from './contact.module.css'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const Home = () => {

 

  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.container}>
          <div className={styles.aboutus}>
            <div className={styles.ima}>
            <img src="https://s3-alpha-sig.figma.com/img/34f8/7a66/5db126de0cfab8234973eeea4e2ac421?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oJPKOKABDX2bNPp8w4SKvVG3530CvAvRt7PRzzevW3Pl5KMnHJzBQY41Vlamk6wSBdbE1Yj~hAPHFpIWef5It9ywesW6nxu2Xji18aNxmVL3h-esVe6HkqKjjeGjL1JGvzFaFLkjd5~ToBOTWO4o1HXy1ryJ2zBf3zSqqBwlf0eME4z-40fcizkFuqP7xnPWC79zi5JHrBc9tYz20PACkpnI0zS6DI9Ynluu-cgeJwKnzUvfeVySqWOpogUOJg2yAlNXxjOjblWPk1zhyBrN81Yr~-6Y3HNX2vLt8J4wv7qOWiNTxB4hgryDUIfAWR1MWtAE2IxjK7hwgL~Whdllig__" alt="" />
            </div>
            <h1>Contact</h1>
          </div>



<div className={styles.register}>
<h1>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</h1>
<form action="">
<div style={{width: '95%'}} className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className={styles.imput}>
      <input type="text" placeholder='First Name'/>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
  <div className={styles.imput}>
      <input type="text" placeholder='Last Name'/>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
  <div className={styles.imput}>
      <input type="email" placeholder='Email'/>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
  <div className={styles.imput}>
      <input type="text" placeholder='Subject'/>
    </div>
  </div>
  <div className="col-12">
  <div style={{width: '98%'}} className={styles.imput}>
      <textarea placeholder='Message'></textarea>
    </div>
  </div>
  <div className="col-12">
  <div className={styles.imput}>
      <button>Submit</button>
    </div>
  </div>
</div>
</form>
</div>
   




        

          <div className={styles.collage}>
        <button>Follow @ instagram</button>
          <img src="https://s3-alpha-sig.figma.com/img/b633/595a/3fd5b7ea42eace7913faa13909b55315?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nN~AEnmjxdKLIgnbdD9bax5rN6w8qomJ64JzIt7gucJhJyv8Iv46YA0cjd7kkU7hNtOkBiJKQk-fv4iWRaEFDQCGy~kE-SYa2QNfdOjplFhIYAHmSYEq6db3Bu9i~wYFC3rxGMzndPgb2uF6mBP23sSkrNamo8ItnWYp4465R3i9pzKkatE1I~PLErgGLQCSPzYDGgPZFUznmsA3UgzNHswqHHdO6VJw5ZyVFT4bQnDp~m0eGMlAGYG5tstvhSV2kuV7ezGNJTiPJSDPlnpE2a9CulzHiZaH~DpoG13y9hdg8JO4Pmccz5VTXPSpWxUHTipWKbq9nPwKHsgIXWTSEg__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/316a/25cb/e252bce0609b27d044baff86e3347c37?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UyZ90KvXz1VBND7EmkTZPzYzNKse7YfixfQj6lNhP8QqtmseK3dPluyIlthYO03G3gQqenoXwY0hglHi4XC84YlkB4UiNdYbVTQKl2Ht2IsPl1jR82zn9wa7cVcCgS2ebqbpOKOQUE4CJpUEx2UxrcvydXFJqXrQO6B4AYeePrr58hK3v1~o1LFxJJuoOiGpQQr2233G7UO-UK1v5Fncle2kXaGIs98kBhpu97Qpmrc0c-W8QW7~PQCQq9drcAs93T0al7aAgaOyP6iNzFLVaIzSk78qgC0f3em8r9BfyB4dloeg00L6QpZfsj76CwhbxrR2nJcugk-He-4Yz5LNrA__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/d57e/6b10/7dc50f97ae6ae4559835b35f009bdf5d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JjS5gSq1oQDZhaNaKvIwhAKX9WvfY1yjhkQ8ng0yZ7wWG38ZHgh3TVfRknRD1WG0~bXRqTrRSMcu0TtJrWZMUk2MHrw13L4id5oSB1tH9q2hSNxrnX~ADFSRblD36xih1iRJb0jx78ueA1rTYHuI2B3KkRsETPuTALHb2ITu5ufMtjsePf5dfEdO2E7pTesNk3kpMC2MV6Y~QipuqwIeTP1xABUkQ07eMVE0DUOLDOWMgGL1qMCUVG0C~gcogdZ9ngYtfDhPtZHz9w0TGyAxVWeR-bxBIu9oPZOlkBZmVVWkTNCrt65XozqZfT9joyK~DrfEeM6q9eAlz-ABxonXtA__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/daca/32bb/992aff20c270e9a61d3db120bf864f41?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvujg06-Jq1buEmkR8qLPIhnucl5cK5Po906LaVB4jnB-lQutW3n6Tg1t~v64LL5tXDvVE8SlYwFJ61Ldq--qUUAA4BtuoQzAN2XqSFbevuMXH11e7w9VAGoNylrqbCVWhDgwtd~2w7gRbnVJ3scHUxtOsuBFDp6O3nlnKulKumHpYHs8xkZvikjgmoErNjpfVHiP1XRUlivyaHcwcCyWhPe9xheXr96VyNWTfi7pnXkPa6FPUkt7EzYrOq3KdKbJnmGzh3eQ-17GnLZxI-musDSb~0UxSF2u4peBf-Br2TWKBGaopjFkEuZLo57cSuqNbEtXDA3CPqIbcXqKa~8tg__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/4f23/bad9/7a4819b6b926273d4b961a42b70a951e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f-sMOHVyazK5WAsf9hm0c4Hb1umSSm3Ei~9u~zorQFJwBXL~Cmfmysmaker9x3f3LIVG4n4vwuX-tgqzV~eJIAVT1QDXbE0dfNarfPO2c77TMt9Jde0P9ja8mKdP--uYGeFmrb3r-THQxgxL2nVJjFVPTCzYkTYmcuKazonSUJXBnu2c0kw-K-Yg3q8dv05z7Uu-CyzrUZQ2fAdfpCslTEgF1vrOC13CBrNOqHOGJuPRK~LSI063haJdXe75XhppRj5TXYBghjqlEeyPnoXr9ogKFUbajDDFfhwTl2dVQkgPW3Yffam-0~g7V5c8auKLF-uGw-nZRUbiiswpymZtIA__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/94dc/deca/51d30963aee338b1d21c6bae5d559db5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHnGEkNSA6bk1bhTlcwwDJP6z8FI-s1KjxKGk1oyLXSgCHU87aLU8lXXbS2Rpm4EPC-hvHahd9XtKFYAuQT0wABnFQmrvZSPilnpE55Beht5~PzQ5mrsT2sCehUWY4d-hOWfvKQj6r6x83u1PhmgXcQMxHFgtFosyHrx4b5-0NgIrqiCERqhKpXkG3g0jBPOqaxqmMoB3VdAh5SeEbwCQw1nwcBMNuuCXLx3gdIIISDNiNWPxyUzZM-raEyWPDcOUN-Zjy9K7r82y8R0AYoWZ8rPJ8GK6sAKaUhPEdkYnZ-iRdq58TQ3F~sNMKNscv~HDTcA4opbJLW~cBJ9cYlgqg__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/f84b/05bb/075dd2d8db0807106e20699fa4b6424c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8sJLG4v1IodIO4NYhHOiNGePm1zx7WsRHGTcWE8QDXm-Xju~baxZjymZm5Mg8vAWgSmwfGd2AhpiXgDhb5ig5WbJtWelcDU35dRzgusuEJrknuERDAEMyzWK8ThFanLyQJvKRdHVFzpRnEWI3r9GDuU1tnRSUvtClxlKwjtzLjZAQ5aaYLFp5wlYSAx5ouYc7OsteCM2U-yIlTXjRCRP6bpitwSmLmQcMMhiADCQsn0zLbLBCDlA0yurgs6XyOyROgW3PqylVcrthZD-VQlVftM3u0Ju-GpI43JRWWTFOaszPLzadRoI3L0aXvO3SYY1X0MuAB0eXpdWNSX~eE8Kw__" alt="" />
        </div>

        <div style={{width: '77%'}} className="row">
          <div className="col-12 col-lg-6 col-sm-6">
            <div className={styles.join}>
              <h1>Join <h2>98,641</h2> Monthly Readers. Subscribe Today!</h1>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-sm-6">
            <div className={styles.join}>
              <form action="">
                <input type="text" placeholder='Email Address'/>
                <button type='submit'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

          
        </div>

        <Footer/>
    </div>
  )
}

export default Home