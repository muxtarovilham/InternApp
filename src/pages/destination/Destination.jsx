import React, { useEffect } from 'react'
import styles from './destination.module.css'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../../redux/todoSlicer';


const Home = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.todo)
    useEffect(() => {
      dispatch(fetchTodo())
    }, [])
    console.log(data);


  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.container}>
          <div className={styles.aboutus}>
            <div className={styles.ima}>
            <img src="https://s3-alpha-sig.figma.com/img/bf2a/6577/5a30927cfe6dbbf14b99385c030a99cd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuNPBycZpBYfqJa0iK0yrQhPzx9dz~OU9jgem2XpBZdPjjYBH1prd~XKBtgaB8Pu1osbhn~Rn7qL2IZkvrwqGrh1T6n3YA1L2zGtqkH9xxzu8g8W0KYvuu8P63-OlGS0EsZLEW21Twfg-9YLboF8vQ1ELyuQ3QRqaH7gNgRhqf90ng0m5oyxNRhFD2a~cHPo~Tj24DgPf9QhaU94bkG~WZPYpyd74Kn1v9BPkHQHXl9dCbX3Hz0mJdE4nCiO~2X-7kxgj37IV33RgPvOXAvLShJpi4sKL1-QB2a7BG1OXg-lgemMGzrFxDtfdj~Zl04Pjb90GZhKD6MpFCTeNGOgWA__" alt="" />
            </div>
            <h1>Destination</h1>
          </div>

          <div style={{width: '90%', padding: '21px 0px 21px 0px'}} className="row">
            <div className="col-12 col-sm-8 col-lg-8">
              <div className={styles.history}>
                <h1><a style={{color: '#FFA500'}} href="">Where do?</a> you want to go?</h1>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <div className={styles.history}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
              </div>
            </div>
          </div>

          <div className={styles.continent}>
          <ul>
            <li>
              <h2>South America</h2>
            </li>
            <li>
              <h2>North America</h2>
            </li>
            <li style={{backgroundColor: '#0336FF'}}>
              <h2 style={{color: 'white'}}>Europe</h2>
            </li>
            <li>
              <h2>Africa</h2>
            </li>
            <li>
              <h2>Asia</h2>
            </li>
            </ul> 
          </div>

  <div style={{width: '90%'}} className="row">
        {
        data.isLoading ? <h1>Loading...</h1> :
        data.data ? (
        data.data.map(todo => {
        return (
          

  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="col-12 col-sm-6 col-lg-4">
    <div className={styles.tbilisi}>
      <img src={todo.image} alt="" />
      <div className={styles.words}>
      <p style={{display: 'flex', gap: '7px'}}> <div style={{width: '6px', height: '32px', backgroundColor: '#FFA500'}}></div>{todo.date} </p>
      <h2>{todo.name}</h2>
      <div style={{width: '90%', height: '1px', backgroundColor: 'gainsboro'}}></div>
      <div className={styles.malaysia}>
      <div className={styles.penang}>
      <img style={{width: '18px', height: '25px'}} src={process.env.PUBLIC_URL + '/images/Vector (4).png'} alt="Açıklama" />
      <p>{todo.country} </p>
      </div>
      <div className={styles.penang}>
      <img style={{width: '23px', height: '16px'}} src={process.env.PUBLIC_URL + '/images/Vector (5).png'} alt="Açıklama" />
      <p>Comment ({todo.comment}) </p>
      </div>
    </div>
      </div>
    </div>
  </div>


        )
        })
        ) : (
        <p>No data available</p>
        )
        }

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

        <Footer/>
    </div>
  )
}

export default Home