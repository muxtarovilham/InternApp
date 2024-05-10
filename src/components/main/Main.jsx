import React from 'react'
import styles from './main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Main = () => {
  return (
    <div className={styles.container}>
            <div className={styles.leave}>
        <img src="https://s3-alpha-sig.figma.com/img/3193/27d7/ac580d4100a92d4c163dbdaadf6d71ce?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNcMHwwx9qZuV0qqRIhUPKiWlzbPSxdnqNTL5xSBIkbDFnCdoV6AVxcpPe~5ZHyYwdA4cMnHq5yi-cKtV7oDpet0bHq2DOOXlApFdxa~-vXzwLmkCkJjCxomqzGJN~mwdyDFAyFnWF-iACI6hMC2InZqZu5qL8etiG0Q2LZyU~Z6oLPMl~hdVIAIzs8TUd67RX3uNGA7573VmeA2KciZLpaPfEEoRmnqtzGhLoccv6rupVVM9WzMn~3H7kCQe37-W6VQMbflobY2tx4LweVxOnsoxrojEMbTVkQY3Is~6snnjZLwi36YvtCxx9l1t5iFg1MCj~KCb3rmPcFVY-~Xzg__" alt="" />
        <div className={styles.wordz}>
          <p>THE COUNTER: <small>70</small> Countries    <small>1036</small> Cities </p>
          <h1>Leave your mark on all 
over the world  </h1>
<button>Read More</button>
<div className={styles.scroll}>
  <p>Scroll Down to Continue</p>
  <img src={process.env.PUBLIC_URL + '/images/Group 97.png'} alt="Açıklama" />
</div>
        </div>
      </div>
      <div className={styles.aboutme}>
        <div style={{width: '95%'}} className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.albums}>
              <div style={{width: '95%'}} className="row">
              <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start'}} className="col-12">
                  <div className={styles.about}>
                    <h3>About Me</h3>
                    <img src={process.env.PUBLIC_URL + '/images/Rectangle 33.png'} alt="Açıklama" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque sed d.</p>
                    <button>Read More</button>
                  </div>
                </div>
                <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">

                  <div className={styles.about}>
                    <h3>Categories</h3>
                    <ul>
                      <li>
                        <h4>Europe</h4>
                        <h4>(11)</h4>
                      </li>
                      <li>
                        <h4>Mountains</h4>
                        <h4>(11)</h4>
                      </li>
                      <li>
                        <h4>Traveling Video</h4>
                        <h4>(11)</h4>
                      </li>
                      <li>
                        <h4>Beauty of Seas</h4>
                        <h4>(11)</h4>
                      </li>
                      <li>
                        <h4>Cuisine</h4>
                        <h4>(11)</h4>
                      </li>
                      <li>
                        <h4>Guides for traveler</h4>
                        <h4>(11)</h4>
                      </li>
                      <li>
                        <h4>Other</h4>
                        <h4>(11)</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%'}} className={styles.about}>
                    <h3>Popular Post</h3>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%'}} className={styles.caravan}>
                  <img style={{width: '100%', height: '100%'}} src={process.env.PUBLIC_URL + '/images/image 6.png'} alt="Açıklama" />
                  <div className={styles.years}>
                  <p>September 17, 2018 - Tips & Tricks</p>
                  <h5>Finding Love & home in Tbilisi, Georgia</h5>
                  <div className={styles.turns}>
                    <button className={styles.turnimg}>
                  <img src={process.env.PUBLIC_URL + '/images/Vectorr.png'} alt="Açıklama" />
                    </button>
                    <button className={styles.turnimg}>
                  <img src={process.env.PUBLIC_URL + '/images/Vectorl.png'} alt="Açıklama" />
                    </button>
                  </div>
                  </div>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%'}} className={styles.about}>
                    <h3>Recent Post</h3>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%', backgroundColor: 'transparent', gap: '7px'}} className={styles.about}>
                   <div className={styles.georgia}>
                    <img src="https://s3-alpha-sig.figma.com/img/82d1/c457/5c3a40076ac93f71161f20924115a57e?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CIhYMpRRAuOwyO2FSCQqI8gtThYaq~wJXp1eE3-ZeJwaYG47BvHNC82YmGRuK7vl2opCrgM0eE1pXpB8fHlyMykrS5AjQ59h9q7FO8OtxiJE1VRCEZgVAg~MTUpiwKzOhXK4eClcubn6Cic2eOJ4TLI01djXU8lVveTEOoQWAVB1OpM-QM0vFtsy-CkH-62PaGSsAHXLapyyjThWnV1xpft7StIPBohgj3fxfEytzHdArH8oEvEIyYFuyoqB~Ry8Zfmwm-Q2uczBlWZgwC3WFSVtXjsgtnNi2PS-FP-SpF8EIb7cYvzdhZaD1dJ5m7RFfzhuIqYHsjyEMhv9-oH6Iw__" alt="" />
                    <div className={styles.wordsz}>
                      <p>September 17, 2018 - Tips & Tricks</p>
                      <h1>Finding Love & home in Tbilisi, Georgia</h1>
                    </div>
                   </div>
                   <div className={styles.georgia}>
                    <img src="https://s3-alpha-sig.figma.com/img/9b01/dae6/c779486a69c98a314042ce7b73ef2fc0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ap6-qfBDdHdA7iiwgJene81dEL8Q6AU69HaZCewEHZGTxPd5WqXSlovqpCD3bTl4hkGx6fbOe9b~31TyydTJvv80ehkb4XPG8Yq2ZSf4NcHuWxb-~pqrQVS-AEVywekAxOxbT4bJyWjVCC5O9E0-K0ez1xtKQfiW-SjQJ1K-rsG1P~ORCS~kMcsBEQOM2dmLKaBUpMF7u8JbP0QcAAX3uQxPiLXKzZJrpd7TJvY9maW5gq3sDppHcgjNGFP6DJ884AHba~Uxo7UaBiNP2GM1U272LS2Oavf4alzj1XXHVqF798IcfpYRbZQGFYwBXqqTqpaTTwZPHEegVS5H4rWICw__" alt="" />
                    <div className={styles.wordsz}>
                      <p>September 17, 2018 - Tips & Tricks</p>
                      <h1>Finding Love & home in Tbilisi, Georgia</h1>
                    </div>
                   </div>
                   <div className={styles.georgia}>
                    <img src="https://s3-alpha-sig.figma.com/img/9b01/dae6/c779486a69c98a314042ce7b73ef2fc0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ap6-qfBDdHdA7iiwgJene81dEL8Q6AU69HaZCewEHZGTxPd5WqXSlovqpCD3bTl4hkGx6fbOe9b~31TyydTJvv80ehkb4XPG8Yq2ZSf4NcHuWxb-~pqrQVS-AEVywekAxOxbT4bJyWjVCC5O9E0-K0ez1xtKQfiW-SjQJ1K-rsG1P~ORCS~kMcsBEQOM2dmLKaBUpMF7u8JbP0QcAAX3uQxPiLXKzZJrpd7TJvY9maW5gq3sDppHcgjNGFP6DJ884AHba~Uxo7UaBiNP2GM1U272LS2Oavf4alzj1XXHVqF798IcfpYRbZQGFYwBXqqTqpaTTwZPHEegVS5H4rWICw__" alt="" />
                    <div className={styles.wordsz}>
                      <p>September 17, 2018 - Tips & Tricks</p>
                      <h1>Finding Love & home in Tbilisi, Georgia</h1>
                    </div>
                   </div>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%', gap: '21px', textAlign: 'center', padding: '14px'}} className={styles.about}>
                    <h3>Gear I Use</h3>
                    <h3>What’s in My Bag??</h3>
                    <small style={{fontSize: '24px', fontWeight: '300', color: 'gray', width: '66%'}}>Unfortunately, there is no “one-size-fits-all” when it comes to travel packing lists.</small>
                    <button>View Details</button>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%'}} className={styles.about}>
                    <h3>Product That I Have</h3>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%', backgroundColor: 'transparent', gap: '7px'}} className={styles.about}>
                   <div className={styles.georgia}>
                    <img src="https://s3-alpha-sig.figma.com/img/d762/9191/7ffe44df45f61f0fbdf3a39282fe2409?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MLM5U-9xgjdofpW1ccymcPruHkkT81DWVZmXnBnWpNokMTLfKkENWzwJZBfUIPstL2GLCKM-z9~Z5gE3nI8E~K76ox1BLBPvGeHmWee663kq5hJHJZEuDaxDIphHr0NAenS4~SiHljgMGU~em8~rMjetNEPogcCzKGjKhjrXoHk2rhZ8mzpOtMd6pjXBpVM7SGJxmjbJw76SesBczyoCEQupQKOXXcCdaYcQF0IswsT9d~Lw1XXo058rjEWGXCxoQyYJ~-TrQF60Ja3oFAM1l1y2uzR~nqmbzWRUH4hkIuNvWGnCp4RvlFDneQxSGW-ZrDyV4gK0P793Ws6upzgRTg__" alt="" />
                    <div className={styles.wordsz}>
                      <p>September 17, 2018 - Tips & Tricks</p>
                      <h1>Finding Love & home in Tbilisi, Georgia</h1>
                    </div>
                   </div>
                   <div className={styles.georgia}>
                    <img src="https://s3-alpha-sig.figma.com/img/8f81/213b/ba4c72b7b048084a1a8b47d17d970bc7?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fidcEZ4bqor4pelj5rqSYtsCVaZ~DKxwY8PQc-coQW0peGU4OA7sKbPmNrIWpHZJQE33o5LGJhVkyYjlJB6Crp4NRD3doNPq-KJXzTARf8nHsEvj-yogCAhhDGvWKAZJdbjmLjP-0ksxfqvOHPQ3rmAaUasNTCSVi834a9USlw1PcwKT9V8HvmrTphecGsoluEjlNOGVdZUpX0vzzPJLb5zBwS7aQyovoqspug3ZfSbVm7sWtbsOPqK7EWlduY2dqbDN-q~OJ97ktvkO6MZn~zmyvhN2oTlQdYoepXHRoh8~YwKmDZnHl6vem6EYjH4a14MXCtImTMMKEzTq4G1n9Q__" alt="" />
                    <div className={styles.wordsz}>
                      <p>September 17, 2018 - Tips & Tricks</p>
                      <h1>Finding Love & home in Tbilisi, Georgia</h1>
                    </div>
                   </div>
                   <div className={styles.georgia}>
                    <img src="https://s3-alpha-sig.figma.com/img/96a3/b0d7/cd51775015f8e695d1e83b7b0c203de0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L2k85rKJ2CeSi7oFaPcaXNGTdyGH~IOpjWlvBoeFpc~xZnYZElPSYzZzD0lE~DklNI4LL0~~L6uAwBTg~FXgi1jTEdFDDygJgQshAKws4Kz2lwqTKADRSiVxtMxa7Zj8wxEr1hyLbAKFQH9z3FEJJHGk9RpgTLZRlg9O7rmMvfAQIrv~xeEeHYz8fqSrTiF5p1OUyeSlMeb7E1-qo~-KYXLtDXJ9nxBXghrs32zU9y2CMqxFhv9aqE79JKEruP5XD29YtxMbnixqAfhk7Wx7lCS~xI0GwfyNc3oR2Rvaptfr5OZQiTymH9x2~FcQDUVFeLvmNHvv7FKB5D8TSm4deA__" alt="" />
                    <div className={styles.wordsz}>
                      <p>September 17, 2018 - Tips & Tricks</p>
                      <h1>Finding Love & home in Tbilisi, Georgia</h1>
                    </div>
                   </div>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%'}} className={styles.about}>
                    <h3>Get In Touch</h3>
                  </div>
                </div>
                <div style={{height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}} className="col-12">
                  <div style={{minHeight: '10%', backgroundColor: 'transparent'}} className={styles.about}>
                    <div style={{width: '90%'}} className="row">
                      <div className="col-12 col-lg-6">
                        <div className={styles.facebook}>
                          <button>
                  <img src={process.env.PUBLIC_URL + '/images/Vector (2).png'} alt="Açıklama" />
                  <div className={styles.likes}>
                    <p style={{display: 'contents'}}>65.5K</p>
                    <p>Likes</p>
                  </div>
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className={styles.facebook}>
                          <button style={{backgroundColor: '#60B7FE'}}>
                  <img style={{width: '30px', height: '24px'}} src={process.env.PUBLIC_URL + '/images/Group.png'} alt="Açıklama" />
                  <div className={styles.likes}>
                    <p style={{display: 'contents'}}>105K</p>
                    <p>Followers</p>
                  </div>
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className={styles.facebook}>
                          <button style={{backgroundColor: '#FE2C3C'}}>
                  <img style={{width: '30px', height: '21px'}} src={process.env.PUBLIC_URL + '/images/Vector (3).png'} alt="Açıklama" />
                  <div className={styles.likes}>
                    <p style={{display: 'contents'}}>1.5M</p>
                    <p>Subscribers</p>
                  </div>
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-md-12">
                        <div className={styles.facebook}>
                          <button style={{backgroundColor: '#E14D93'}}>
                  <img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL + '/images/akar-icons_instagram-fill.png'} alt="Açıklama" />
                  <div className={styles.likes}>
                    <p style={{display: 'contents'}}>85K</p>
                    <p>Followers</p>
                  </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div style={{justifyContent: 'center', alignItems: 'start'}} className={styles.albums}>
            <div style={{width: '90%'}} className="row">
              <div style={{height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start'}} className="col-12">
                <div style={{backgroundColor: 'white'}} className={styles.traveler}>
                  <img src="https://s3-alpha-sig.figma.com/img/9fc8/0f07/279d233660c305a025a0b4ae4a4d6ba0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LxXXw7oK~OD04ykMw6qNpt~sUHUsxswBp5zIMYUzvYKEzvwCihIllOBxhWfQHd~rIU6y8DJVeSrzNteOz~J2mfIwpKjvDdGMUrDr9c20YoXpdTua~Sh2f2XaV8eJbCKex9MpavrJpHn3iq6f-CQz3akrx6DLh0-Wi8uwjmeP8Q5rtEW5VWCQHcFoCTv07f7xJKQbbji9cEcmNgQavUzDUdiyVbMTp8fjH0qVYfPTmv5MHesihOF3NLw3U9-dm747sqqLnVTplbY0QNoQcfYGPjjCb-bdSl4HgHj8SGJNpJfIPRy0hzVye0gBW14F-LgoDWrfA4IJ9JqQJjKwOG5TxQ__" alt="" />
                  <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '6px', height: '32px', backgroundColor: '#FFA500'}}></div>July, 15, 2021 - Tips and Tricks </p>
                  <h1>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</small>
                  <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Penang, Malaysia </p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{height: '100%', padding: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="col-12">
                <div className={styles.traveler}>
                  <div style={{width: '105%'}} className="row">
                    <div className="col-12 col-lg-6">
                      <div className={styles.alex}>
                        <img src="https://s3-alpha-sig.figma.com/img/6eb7/d56c/4a8997ea744a8f99af4e84061e3e7283?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoPjJYi9rlnWgQF6KhLZvnRX4d2WSzzTWdvBbzJAkWz-Cg6E1FwO~sKYAR1PdY0m-ZjzXGh~PMValfUyTSCJvoCJ8JMYjZ4fBy-DnT8KcJ-3f8oClGtAXi8ZXxtRNp-oVEF7d9CDEbr51jQgEV6yjKoTfnrvwHR2ft2NmMKC9hpuUkesfKh5d5izSJ7jBQxTYgT7iMcmd5QThB860M88EzYBVJieI9wODw5ZtwNSrY3bgOBIvREhimSlN5Dt5jCQgWd1oFuaHOzPJ3LkOCsgAYXN~jpWSk~Ui1Ci8XizQH0AMXaW4NW1jEgYavUhsIfx8WI3~Q-a34iEXfMDCFixqw__" alt="" />
                        <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '3px', height: '24px', backgroundColor: '#FFA500'}}></div>September 17, 2021 - Tips & Tricks </p>
                        <h1>Have you read The Beach by Alex?</h1>
                        <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Georgia</p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className={styles.alex}>
                        <img src="https://s3-alpha-sig.figma.com/img/efd8/7565/631316571d18591e7a8d7963b5cfd33f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ba4I0rlTNeIP~3FpVPI2J9Q4yFzc1Pj5eaB5fGO3TiiGa2sXy5WVP1c4TgXw7550ojkQuJ2eZxqsWXvvMuT4hbgO4sSSGWECGb~iUMRX1njtu~5MQvJY8ao5JFdTkv5u5y0qmfa3fXzBQ1aggNruMbWzKK795PPGltx6hXK2as~1GclWXk0uDizR51MaXuL1faLzZv0rkUYIXdK6wDNNhytajzMPzYG0SFwrgI-sOgazYFbrTy7ncFGhLWe-ZTeBYB3CNR8mtIKBoKNVjRJOi-nCNfBgoACOZtursPO-5jjarqXiAYnVeVTaxgI2Lp5BlBH56Ei6XLpJ2H-IWBaClQ__" alt="" />
                        <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '3px', height: '24px', backgroundColor: '#FFA500'}}></div>September 17, 2021 - Tips & Tricks </p>
                        <h1>The writer actually live in Philippines</h1>
                        <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Georgia</p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div style={{height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start'}} className="col-12">
                <div style={{backgroundColor: 'white'}} className={styles.traveler}>
                  <img src="https://s3-alpha-sig.figma.com/img/d3bb/e34d/28227eca1cddcb26022493f86ab60093?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SBl2p4iqxifK3U8SCmFl9fEouMKauQf7P7hGl93Guwh5PUQXl1clewCuTeVfXRjnMfB4csjuBClK77xk-J0Sls4wZL-iY8c-1FYnCYQiXmx2S868-WTh1cV455OaIn0LW-Q6hFozqugi3yiGwP46gUZ7OV813F0R8z7RNP2uEjXQD~hftJ-3STyar1eE0ZBi6ZuXhyMvfZYnsj36oldgU5pe8IsjNsjEtXuSZb3ltapEaa8zYsidggDUJgiPBEeTGJTJgPtPCNgLKrH28YT~PxVo0~yipSZlBhjrETytdEEIEvRgwGesfCbImBae4YHGn-ButIE20GSCdQhoOilgHA__" alt="" />
                  <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '6px', height: '32px', backgroundColor: '#FFA500'}}></div>July, 15, 2021 - Tips and Tricks </p>
                  <h1>Finding Love & home in Tbilisi, Georgia </h1>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</small>
                  <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Penang, Malaysia </p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', paddingTop: '14px'}} className="col-12">
                <div className={styles.purchase}>
                  <img src="https://s3-alpha-sig.figma.com/img/e048/d8c3/dae4341a0ad299e1522e58450fa89181?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d7yCmEDyhPSgb9~xFdtMSQd~eFqzeANtm0RYlTxaE090F3SQwu-svBp2VGr2jS99H1FcqDhaos5fc8R7HE0aVaS7UXh0tcnmeFsTrrW2nLxUkLkebBpxJQ30OE-B6zbj2QkS37qUoRMgT4sSwF~ERKa9taIltYDODB8pxsE~IROocIlFd3OBGQrFOexJEdlu943I3tN7SgQT6CglxU1wtsNEsF4tFxQITSREMq10bY4zEoOpRljJ3TFm4N5bpO-5~daLdHKRjCQY5unIvx2VHB7heYYzqtfWoNDKiV98C7i5p7w08NTFIVVpBXW-Gx1pQ3KageMPclfZ~6rSJEcXhw__" alt="" />
                  <div className={styles.purchasewords}>
                  <h2>Want  <h4>Me to Purchase</h4>  Something For You That isn’t available in your Country?</h2>
                  <button>Place Order</button>
                  </div>
                </div>
                </div>
                <div style={{height: '100%', padding: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="col-12">
                <div className={styles.traveler}>
                  <div style={{width: '105%'}} className="row">
                    <div className="col-12 col-lg-6">
                      <div className={styles.alex}>
                        <img src="https://s3-alpha-sig.figma.com/img/e504/77a0/7da0c4b8809c4461a3446b394529ee9c?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwZpH4EoCd8TN7xY2K5Ad5uCJeWG9gtEpULDtATfD4x-uwjfwJM5s5Ixz0cJU2-zVwSh1jgV0zYgNoDciRwz~ORHAh0hf3oJPEIsRaWq0Fa-kaoH2jJbo8IIJfKYiR2BvGEC-lJesiP9tAI9tlpRPdtwpqgUvppgSKSP4zp6qafc-0DP4LelXT5pB-RU6QTGQ99jpkztV76zRQn2mAp5cd29bgTpG-WMxAZe4zDeSD06hozLeXBs9McZbqhCxrF4FXN9X5SEBa23A290zrmUOPLiGcAC89gv4s~TriIUb5raykpLh~mWVGTVUAaKpha1Kdoa8aGhB~~N0Ln8qXqwXg__" alt="" />
                        <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '3px', height: '24px', backgroundColor: '#FFA500'}}></div>September 17, 2021 - Tips & Tricks </p>
                        <h1>Get away from the maddening Crowds</h1>
                        <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Georgia</p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className={styles.alex}>
                        <img src="https://s3-alpha-sig.figma.com/img/62c9/4625/3438839414b01eb48cc0fb46f35e12bc?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daPjO7rtAccKtPwehJxshmCPXHdslwuDa7DazIeJ8uXBVtP2fyPOhJ6MO0ZeS2czx8IVzZi4VLfaeSwmBDk4ah4xazIBHKXrML076Om-C8DHEO-y0xvnhsrkcCDnkxh8040nl8DkPS4NrO1GDclpnAzG9jyYOGo2-hH26vjTba0R1kSA9aSV1vuof7GyvZbb0YIPlps8fY3B7NGgP-Bv4WiC5SS4gGDssGXs6Y1xZC4pw9VdPe2F310ZMCR0Y-C9NWgTw7cq6GHR-AUYDT3HpXr2gntlXNV3-Xe9r13OWPmwO08mgNVM0H3QTqrwc4SFsYbW~9z4D~V0QVp3Z412wA__" alt="" />
                        <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '3px', height: '24px', backgroundColor: '#FFA500'}}></div>September 17, 2021 - Tips & Tricks </p>
                        <h1>Matsumoto Castle is considered one of</h1>
                        <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Georgia</p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div style={{height: '100%', padding: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="col-12">
                <div className={styles.traveler}>
                  <div style={{width: '105%'}} className="row">
                    <div className="col-12 col-lg-6">
                      <div className={styles.alex}>
                        <img src="https://s3-alpha-sig.figma.com/img/6288/d3c7/ac4ae8c1eebe2e8b4e98c7559228df4e?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPzEBMj14IFCS13mP-G~VDwjJrieLImdXEO0vO8MzrWbOlhis~oulvhQQnhutRjdFwALQWlEX5X~DK~3FHO7z4Dff-oMWW~X3vvKrHeD~UgoNRMCYjV7autVdn4hqGiH3pOh9wdeSSk6pnUhpf0CfYgFKbU0g-5blcOFpCICmjR1bd5b3DgFZTrTUYk3MTdDkZ5BdRtOwsC8XCxSIZEnEdnPw707ROQZvIOqjn1EkAX61eyIB9wxjPJDi58D0C10fsKggFP7N5KrMqLRtoyy~Vjibd-6WXZduvhNXpyW0mXRqMRMwrqRrdhSGotYPI7iD8Wc8GeHgRpyR8QwAOlgeA__" alt="" />
                        <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '3px', height: '24px', backgroundColor: '#FFA500'}}></div>September 17, 2021 - Tips & Tricks </p>
                        <h1>Many buildings especially in Japan</h1>
                        <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Georgia</p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className={styles.alex}>
                        <img src="https://s3-alpha-sig.figma.com/img/0c43/e7cb/75e376a438ee53a28d608fb68d19d2e1?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HUHh7lu5DB7CMUjmouhiiPNxLH7sypBGpQMOFHn07FQO20GHsWUBaAgeLuAEY4aDn0D8JWBwalV9fZnCaGF21k92mj5e-LSmWdeneibp-uwNgrixdzwszxzwK67C-nLNec9wn~Xinq6yf0pi9Lux-3tNy4HmL1XfeiaO~PwrLtdmlMNbUyPEkCzJNcTkBSbcfz4NZ42L0UfQ~Hho3TgelOyZ5kCIifE-xb33eTKRDbnnEBc0-L3RqSDbgLf~GlhUjfXwaZgtpQdMPIXSPA0-GyOLnwhk-RCxlHn5dffTabocakRNeR0~N85l195aWTSqPU0xqdGMOdT2FvevVLexdw__" alt="" />
                        <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '3px', height: '24px', backgroundColor: '#FFA500'}}></div>September 17, 2021 - Tips & Tricks </p>
                        <h1>There are roughly 1200 semiwild dear</h1>
                        <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Georgia</p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div style={{height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start'}} className="col-12">
                <div style={{backgroundColor: 'white'}} className={styles.traveler}>
                  <img src="https://s3-alpha-sig.figma.com/img/d3bb/e34d/28227eca1cddcb26022493f86ab60093?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SBl2p4iqxifK3U8SCmFl9fEouMKauQf7P7hGl93Guwh5PUQXl1clewCuTeVfXRjnMfB4csjuBClK77xk-J0Sls4wZL-iY8c-1FYnCYQiXmx2S868-WTh1cV455OaIn0LW-Q6hFozqugi3yiGwP46gUZ7OV813F0R8z7RNP2uEjXQD~hftJ-3STyar1eE0ZBi6ZuXhyMvfZYnsj36oldgU5pe8IsjNsjEtXuSZb3ltapEaa8zYsidggDUJgiPBEeTGJTJgPtPCNgLKrH28YT~PxVo0~yipSZlBhjrETytdEEIEvRgwGesfCbImBae4YHGn-ButIE20GSCdQhoOilgHA__" alt="" />
                  <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '6px', height: '32px', backgroundColor: '#FFA500'}}></div>July, 15, 2021 - Tips and Tricks </p>
                  <h1>Finding Love & home in Tbilisi, Georgia </h1>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</small>
                  <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Penang, Malaysia </p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{height: '100%', padding: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="col-12">
                <div className={styles.traveler}>
                  <div style={{width: '105%'}} className="row">
                    <div className="col-12 col-lg-6">
                      <div className={styles.alex}>
                        <img src="https://s3-alpha-sig.figma.com/img/6eb7/d56c/4a8997ea744a8f99af4e84061e3e7283?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoPjJYi9rlnWgQF6KhLZvnRX4d2WSzzTWdvBbzJAkWz-Cg6E1FwO~sKYAR1PdY0m-ZjzXGh~PMValfUyTSCJvoCJ8JMYjZ4fBy-DnT8KcJ-3f8oClGtAXi8ZXxtRNp-oVEF7d9CDEbr51jQgEV6yjKoTfnrvwHR2ft2NmMKC9hpuUkesfKh5d5izSJ7jBQxTYgT7iMcmd5QThB860M88EzYBVJieI9wODw5ZtwNSrY3bgOBIvREhimSlN5Dt5jCQgWd1oFuaHOzPJ3LkOCsgAYXN~jpWSk~Ui1Ci8XizQH0AMXaW4NW1jEgYavUhsIfx8WI3~Q-a34iEXfMDCFixqw__" alt="" />
                        <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '3px', height: '24px', backgroundColor: '#FFA500'}}></div>September 17, 2021 - Tips & Tricks </p>
                        <h1>Have you read The Beach by Alex?</h1>
                        <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Georgia</p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className={styles.alex}>
                        <img src="https://s3-alpha-sig.figma.com/img/efd8/7565/631316571d18591e7a8d7963b5cfd33f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ba4I0rlTNeIP~3FpVPI2J9Q4yFzc1Pj5eaB5fGO3TiiGa2sXy5WVP1c4TgXw7550ojkQuJ2eZxqsWXvvMuT4hbgO4sSSGWECGb~iUMRX1njtu~5MQvJY8ao5JFdTkv5u5y0qmfa3fXzBQ1aggNruMbWzKK795PPGltx6hXK2as~1GclWXk0uDizR51MaXuL1faLzZv0rkUYIXdK6wDNNhytajzMPzYG0SFwrgI-sOgazYFbrTy7ncFGhLWe-ZTeBYB3CNR8mtIKBoKNVjRJOi-nCNfBgoACOZtursPO-5jjarqXiAYnVeVTaxgI2Lp5BlBH56Ei6XLpJ2H-IWBaClQ__" alt="" />
                        <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '3px', height: '24px', backgroundColor: '#FFA500'}}></div>September 17, 2021 - Tips & Tricks </p>
                        <h1>The writer actually live in Philippines</h1>
                        <div className={styles.malaysia}>
                    <div className={styles.penang}>
                    <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
                    <p>Georgia</p>
                    </div>
                    <div className={styles.penang}>
                    <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
                    <p>Comment (52) </p>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            </div>
           
        </div>

      
      </div>
      <div className={styles.collage}>
        <button>Follow @ instagram</button>
          <img src="https://s3-alpha-sig.figma.com/img/8e29/8cc5/a78e32f5eec41eabd53a637aaa2974ba?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ErcsoYxARu-tBFviuf6swxmKyv9I7shNBptOBjr9Sw4zQqDIUAyMfIr-aLdWiR6bDD8OH4hug-Z4reLaFWlYd4XmmGYkc4AqQw8Cge03fbH3qKwzRbj1zjBjOEhpgfLG6pg2XIqZC~T84zQGsEzYd8IvwqLRFjyO9-soXyP5MRDVQHb~63VYwgEPI6ExpTDfupy1AjItPZg7kGt5XWfwdaoK-QlB5rhqPLF6fCC4vgTpFPE71ykNuzaGTSKcU33K2XyPoLZSwM6nK300wtA5SWftn-sYzC7rv~W5C8uiT3QRBG1SLR5ZR-qG0pnjUpLinsTlQgdoOph56mXJ8tum1A__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/0691/120b/338331aea2ff56e92efef9e53cf6077a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=puxLURKVzsyMvf5INy8-o5ep-yMDPwrDc0a~gkXRTlrnifrCyzNIOMBEzwYmcNHkKYHs5btemZTrFQ6-kATCaqJ8~x2RAiYVJFtzJoUxJewcBCgxIMNFPypJwR0z2XHk08fsJimf1Z5PMhydxAQkJh9G6osha44Psj~m0d0PU2-PlqnCOe5D~DbQp1EH0YHsCESGSHK0RarZ3wXEhvvxHRZ6T~vrs0XKw4TALott685dOuQbD50p~GriZpb-4VeTzhnrrcOc9hqdxY0BVp4WOTD0zem1aVWgrWVFxoVYErEugrUaZ-utxTZKAvyhQnAgAqLULf-V62kwwiYGWO8XxA__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/fbcb/503f/a4a434de03e7fccbcff5571b45ceca11?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FMXH7aRomvLuOkhMwfSofV0K-vl85-BEFkvqOr~1ju~vqfvqYP4bCH3pykAdnrCSFPRhpGIeVM4teHK2zWEr6aabAI2fIEt4knoO9q4hiA0iuV-yIKQtot~ThrAbjggr~yZHpf7WL8yhRL-q5VQqec6ZfQnnRT1MNMpwojP7aSP~~7I1G-6q6BEZkwmSzKDT93NnweE3K8hAXHvb6oz6HmGpISnsnGz3Y7MyQ4U1f9FkKM4~RR1ukRHSRb0I9F8aIgyQZo7pNSma~sUKedW0xPURmqNxkz76XApZ9RyGyW8wCZlgkFAQlJxoz-~B-Ipr2umMTIBpsNmHEGDNNdFPYg__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/6e0a/9a5b/b7d1499f6a67d3d9c4563eecaee1d8ff?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mprnH1g4PrxDywSTSC8gw~LkfoTuISlFUE7L7M-oz07Kp9cd2sm9BP9~T05l8MhJc2dOE3ALJOYNoUO3fA-MICHknn1w8lkGCsMpYzyw8k81v~9669szgD7zLLKUBGHDnSwm5VfaEigXUYGX8~uENMMYbDpIvrdVMoRMiKxRLfRzs-mBfyiWrNcgcxIbBIDtVcppP-4V2~P9uT9~DBzm0mEzSlX3p3cS0UYhg5RLQLVNuJ6ECxuyl-pZSZGRI5QGkMlXh-V6CPTqs9apf2UZuBqA7SF6gP7y2qnjC9O7kjcoEpRVb90N2l1i5Tmrk9KuYRqtvkOePsTqz2kplReMzA__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/3372/f7e8/0e20bd800690500e3602a1de7a1825ce?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msAg853pUQqg2nUiqg-~IeIPOAT1MaPMYWmbpEa6D2HgciwfDQcFv8rShUlvVHGeMlI6s~5XMCQ7Nw5upo-xT6j3c1Voa1zYaZf~HapsfZwKikTL6A~-wsWVXfn8Kq6RP5K-2jYSvhIcFgGjsa8jOFI4Mab8yj9yVHgjU3lEHMeSPZkG7x1j~1dNTQfgMg~aHBdCjG21hvy-DPYSPjLEsHB0avjbkHMBo1C5Mq8Iad~fxpvev51VhdYsP0K-6NFqBVGdD9mc0hn9xWW4Ii5UCKUXK2UeART6bBtVOcB8aiUDFsUNJ6eUotiw1gxdBIy12J6Sx4NU3XQQ7gLfeiVb1A__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/5e2f/d394/0d8bd5fc5e0c6a9a37de301ca5fff530?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bePPU71VtvJnZzxY~P9E6YMwKkwXXd5IcWAuxTx8TIeogLLKanLZlDm0fcgf2pbx-Ok6jUMubf-2AgnzV0Fhpl-4TnnXPeilGK~jmOiFq3i5aWSPmuulJU1dW3f1KTNjyZYFy9WPqwHT5yfaH2n7SdslNuavRvjeTe0~L4UITdFOwvG83IA8kvGHmblUM5~Qi-BjG7UhWi7IYPkMVXzvaC85Y3NEvyWMAKicee9IpgivoUl8LajjdCnFMUX3Ks9aXDxLJDdjB4oVP8pQniFwjZQyYexmM5EiZsowzNDnFXfsM~wH9M3fN~8PWgEcnclRsXhxmaGPe-XCFd2jAnwJeA__" alt="" />
          <img src="https://s3-alpha-sig.figma.com/img/ff36/208b/08161224f8f7547d2e663ec85c817143?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrgqNMQYoYUBXjuEF1ETaf48OLYzHcosynECvO4I4fl5j7wa961pu907NaC-AP2nAXaLN7jfz3kyvUzkdsTDthHSioPYGoxuoRORMMm1aEUZHGRsKlxsnybZRfk5KuenYIPvdMyxJlzFmceKBcCDKcGPreRuvNFVW-VZy~SGyMAYO5RfzsJehsgvXGiQ88pYriMGdB9CwOQns4rqEJSToLBiVMQcsE-OwSnYkQeRM2wxw9B6GYeH2raHqawy-jQ-tlM7cLpNthEvKwLlTnUNfRTFBNWP5b8A5q1TkjL5yRwaWVX6NEUG1h9QVXthSM8UnxpqTlfaVYcX8H1Yc6qewQ__" alt="" />
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
  )
}

export default Main