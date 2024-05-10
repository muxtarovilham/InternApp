import React from 'react'
import styles from './aboutus.module.css'
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
            <img src="https://s3-alpha-sig.figma.com/img/4eb8/dee5/33c49579b23143897bac4ce6141aa6a4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gnCBDDqcwR3iJGdfGPS-22iMUYuqCwIUHmW7jzEHWWBjRY6FZvOyEwgbYEllv2ePFMsbZ0Fc8dzyosAqnkQSU347wiTQchMvMiDAmCD236qZxWiEGJaAIea2g8TCI3T32sMpTc8d4uIub4Bx6~auSNnsFawCgTgux26KesM-MGBSyiQsPlTRrcrijC3ak71vBX7hsZF7RIyntTDyTBThNy7rbA6PW7hme4latDZABf~Z7wmj-2TZPcxNRFrsEsCOodYPLW~0D9xsIJShgKknWJwzfFdZlitPicgCG66cY63~BjEKsuYedjV8h-LbVy1s0Lx-WeUIFVydhs-g3uXqHQ__" alt="" />
            </div>
            <h1>About us</h1>
          </div>

          <div style={{width: '90%', padding: '21px 0px 21px 0px'}} className="row">
            <div className="col-12 col-sm-6 col-lg-6">
              <div className={styles.history}>
                <h1>Hey, We are the Red Explorers Brief History <a href=""><Link style={{color: '#FFA500'}} to='/aboutus'>About Us</Link></a> </h1>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className={styles.history}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
                <p>Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. Adipiscing mauris </p>
              </div>
            </div>
          </div>

          <div style={{width: '90%', padding: '21px 0px 21px 0px'}} className="row">
            <div style={{display: 'flex', justifyContent: 'center'}} className="col-12">
              <div className={styles.history}>
                <img src="https://s3-alpha-sig.figma.com/img/c531/2df4/f6c2ddb67b002524570179d20d08935a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwWOPI5csQALPQjtieBo2C~3de0npNJTEyrdz07b15r0pt3ittqBSEfhXhyNX~HSnPsdoC~EyLcVeqhQ6xXC9aM~GfOoxDARs-iv1FzDLYM-NTEQMKw6IzUSPqknTjqgwAWBfE-xPILeK6xiiRCpCXMWKxVT57UUiz~NotKWQOyLwQLleSUujA0404lpYa7iFV9PN1mI7wAf0VlpoP9VNvoHNGZs2576TKfbgGSZKOPlw4mWZmCbd-iCLLP7B7UHijyPsuN0Wv3UrxCKmefs15iZmNb66j5Ubv2yGmtBmd9-WF146THzxG4Qm6kKYQPEx3z-uW~5qV2UOAyE6CQX7g__" alt="" />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className="col-12">
              <div className={styles.history}>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus. Nisl quam massa sapien tempor semper. Hac tempus pellentesque nibh duis ultrices. Senectus sagittis id ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci volutpat egestas fermentum. Sit turpis diam risus leo bibendum neque, quis in vitae. </p>
               <p>Praesent enim augue tellus vitae placerat purus pretium at massa. Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent rhoncus.</p>
              </div>
            </div>
          </div>

          <div style={{width: '90%', padding: '21px 0px 21px 0px'}} className="row">
            <div style={{display: 'flex', justifyContent: 'center'}} className="col-12 col-sm-6 col-lg-6">
              <div className={styles.history}>
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className="col-12 col-sm-6 col-lg-6">
            <div className={styles.history}>
                <h2>Who Are Red Explorers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className="col-12 col-sm-6 col-lg-6">
            <div className={styles.history}>
                <h2>About Our Cameraman</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.</p>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className="col-12 col-sm-6 col-lg-6">
            <div className={styles.history}>
                <h2>What you’ll Learn Here</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                <p>On Our Website You’ll find:</p>
                <ul>
                  <li>
                    <p> Lorem ipsum dolor sit amet, consectetur.</p>
                  </li>
                  <li>
                    <p> Lorem ipsum dolor sit amet, consectetur.</p>
                  </li>
                  <li>
                    <p> Lorem ipsum dolor sit amet, consectetur.</p>
                  </li>
                  <li>
                    <p> Lorem ipsum dolor sit amet, consectetur.</p>
                  </li>
                  <li>
                    <p> Lorem ipsum dolor sit amet, consectetur.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className={styles.backgroundgray}>
          <div style={{width: '85%'}} className="row">
            <div style={{display:'flex', justifyContent: 'center'}} className="col-12 col-sm-6 col-lg-3">
              <div className={styles.tesla}>
                <img src="https://s3-alpha-sig.figma.com/img/47ae/ac5d/7e56f7b59314ca496b746508efffdaa6?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gBmTy32bW3ENVDtTDxDV7DyEHXKPH34qwd~Oi6Cp-DTVCJ6XVp74YpuTRi~-OaVEjp-vFgKAU-A61Runjj5Ghf63T4p3Aa6cl9yFQzayrkvgFdIqMoNX7JZHMIrHc06iXiCYv~OM~bLC1hAI6IrXZCPJc0JumS37~B~Q5IOdvwcvoYntpwVni1TpABcrzWH~~CwGdhHaGss0YnlET5z2tkVxKPjo7OT2S0bjc2GCoFVm0IXRSC6cCc6xeelgUZzAoD-H8c6UUw9ogQShDhkXFjYf~cCpXQCY~FRDe65iLKn3XT~09Mh9EJF05bjX4LNLqXYm8HKXqYaFGSA7cfAanw__" alt="" />
              </div>
            </div>
            <div style={{display:'flex', justifyContent: 'center'}} className="col-12 col-sm-6 col-lg-3">
            <div className={styles.tesla}>
                <img src="https://s3-alpha-sig.figma.com/img/724a/7391/2a0653a33d9eaa9f4eb2ab18de8b4169?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6wOshPZMhO0v0HQR86uZ9OEteXm9WEjFjnjOCccMC4s6fqLXxMjtSo65gGTvUwIgJVuZcP2qbWC3pAbWasy3mmcBP3f12BWelYBpYDdI4qfAu7QU0w3jOtOjmEmseSqAbCwNkRxkPSyBdN2RrqdazbJfpijXupvo6qB0qc2u6NIe48Jfv4z786mA8eVOtJVOFY7VsfWKx-22YIxEyJocIeoYA70gxN4N5XK1CGiRRFKyCRUAoiU~hJeoJUNsDeal~A8Haw1dMm~-BYJBJ96jtXq1XwKeWZGUeKicjx2NtZz~ihpV1~0FiOGaC8Aa2QjyhqRU6fjIYb0iNdqPTFBYg__" alt="" />
              </div>
            </div>
            <div style={{display:'flex', justifyContent: 'center'}} className="col-12 col-sm-6 col-lg-3">
            <div className={styles.tesla}>
                <img src="https://s3-alpha-sig.figma.com/img/fe43/c991/245e3ac325ffb1834840816283ec554f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hk675TemsfBSeuVDcBtTYdnHOpSkwPGIkIF12fbnlRFK~bAsMwunvvaconprbMdNQgaK61HLN7YFSi5E8qz8DhL17IC7V6HpsRvy-W~pK7C9cyMmA4JIKP3CQckHjshi9Rs9OlSXekFYGv3oPismrfBkD6r60dl2K1yBSs4~D~FToSEMV~ZyQGJoGtAgqiongWSSaHDGLEKO~OibLxI0EkqIWdzGR~55hoA8fmBULp3uOLzXV3leF1t7TGZPFGgdd4nBTUjuvk1flWatGAWeLydiZlArJtxxf60Jo1ljZY780Yl4Xq1W4IIPPzDIq3E2is6YvYlI-LKVe4okU4Xf7w__" alt="" />
              </div>
            </div>
            <div style={{display:'flex', justifyContent: 'center'}} className="col-12 col-sm-6 col-lg-3">
            <div className={styles.tesla}>
                <img src="https://s3-alpha-sig.figma.com/img/22d6/602f/efb7f8d78d0dd05bf439172003d14bcb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZEuYMLO4ucYByP0GV0GLJq2WZL~Z8JvnKp6sZ~aD4qUBOqo76n-ZzIUsKUXXZ6LdCYUQE44X0QDXPcL7ylGpFDPuv9MAgQl130a9dUCSfxBRS9e0ApROQJmxo3z2QzU5geDFqCZyS0IWdXUT0ubXb3ZJ0EbWJtNKt1vWlueFWZBhQ7zz7DHOeGphOjZHbJwkhbphmmeY3OUZickGe~l-VJlPB-UcRm6MvE9RB2njRiuPlTRw-drpZSGWImaqgIYqIy3M1aPK7KR5RGY7dkcMisMUxcBzfSG7qi-ZNHEDjSl-kx04ARbcN5ItwBKZEzyFZkMe7jxCilO2bSSPuZZHQ__" alt="" />
              </div>
            </div>
          </div>
          </div>

          <div style={{width: '90%', padding: '21px 0px 21px 0px'}} className="row">
            <div className="col-12 col-sm-6 col-lg-6">
              <div className={styles.history}>
                <h1 style={{width: '80%'}}>What <a style={{color: '#FFA500'}} href="">Customer says</a> <a href=""><Link style={{color: '#000000'}} to='/aboutus'>About Us</Link></a> </h1>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className={styles.history}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut.</p>
              </div>
            </div>
          </div>

          <div style={{width: '85%', padding: '21px 0px 21px 0px'}} className="row">
            <div className="col-12 col-sm-4 col-lg-4">
              <div className={styles.histori}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
                <h1>Joy Kim</h1>
                <p>explorer</p>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <div className={styles.histori}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
                <h1>Joy Kim</h1>
                <p>explorer</p>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <div className={styles.histori}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
                <h1>Joy Kim</h1>
                <p>explorer</p>
              </div>
            </div>
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