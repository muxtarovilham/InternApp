import React, { useEffect } from 'react'
import styles from './tips.module.css'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../../redux/tipTodoSlicer';


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
            <img src="https://s3-alpha-sig.figma.com/img/733f/caf7/b94c9140eb46c2332bcd868d37c3f5d2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jHmy7mH1veEqGPNQVcKOSaDfKFs5NYpckNIMDpErOnACCjDN6PxcDLHxXUd-b9-R8vJ6ympHghUNb6Z9GlVjbAm7~i04SbIo6--b6zuf-gy1YGfduENYaXUN1RV66vhBYY4h5tUjRtnfR56lI~3qaWaPcFvxfH5CChaVbA6mHkt96DxucuSzBZu48mTR6NYeKRvppdbxRsLKrzz91QZ2w3gn7QVrtsxfR48GS0pqduMTgPmOVK481AIneTK5yoGwn7C-8flKsarhTgohorW2RXxyJtQNvx08ca09-sxxutNnlPWg0Bt4kR1BYFzfzuK2DYwadfoB8hggVKGaNSL4UA__" alt="" />
            </div>
            <h1>Travel Tips</h1>
          </div>

          <div style={{width: '90%', padding: '21px 0px 21px 0px'}} className="row">
            <div className="col-12 col-sm-6 col-lg-6">
              <div className={styles.history}>
                <h1>Maintaining your <a style={{color: '#FFA500', textDecoration: 'none'}} href="">privacy</a> during travels.</h1>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className={styles.history}>
                <p>Molestie aliquam sit lacus, sem vulputate sed magnis eu. Non nec at lobortis enim, feugiat fermentum lobortis gravida in. Tellus tincidunt amet, egestas sit. Feugiat faucibus eu magna dolor, turpis dignissim. Facilisis purus nibh vitae arcu. In tellus in amet nulla. Rutrum orci purus neque blandit cursus volutpat nisl morbi egestas. Adipiscing porta quis turpis ut nulla morbi. Varius id tempor, ipsum leo.
vivamus rhoncus, augue risus. Ornare posuere scelerisque a at. Ut nunc neque at commodo nulla egestas eros. Ullamcorper a eu nulla diam nec pulvinar sit dui nec. Mauris sed vestibulum vitae massa. Ac morbi ut velit ac suscipit id. Venenatis scelerisque ut nam ultrices tortor integer. Odio ullamcorper rutrum <a style={{color: '#FFA500', textDecoration: 'none'}} href="">read more</a></p>
              </div>
            </div>
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
      <p style={{display: 'flex', paddingLeft: '14px', color: 'gray'}}> {todo.date} </p>
      <h2 style={{backgroundColor: '#0336FF', color: 'white', width: '100%', padding: '14px 0px 14px 7px'}}>{todo.name}</h2>
      <div style={{width: '90%', height: '1px', backgroundColor: 'gainsboro'}}></div>
      <div className={styles.malaysia}>
      <div className={styles.penang}>
      <img style={{width: '21px', height: '21px'}} src='https://s3-alpha-sig.figma.com/img/3a4c/71bc/90713d43da9a351110a2386cbc9250ee?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U9Chw9Rk-d1LV9X1PiEzeRGluwt3CyAD7G6m6gGr-n1~4pD9pi0A2GeisEZirFO1GciEfDoFxBmETchGyinjsgDi5C3-rTLj0xU9AXvr4wlig2KDNhg9fNh1vRd5bLtU7AYMJlfKPgBgNpgfrZl~axDMnr-fDaP~C6X5UNBBDM0N7~y9VYDhGIjwfrIxonkrOy9AjM8H-Z2a~ZvrWCztc0Nfo6xJ-XIKpDI0Qpj8Gm1bPwguT-0VgAvhn-PtP9pM4~A5YzCDzg5jh13GOMnIZFuWUhOWsSrmzzc74k9CjtBV82qnUErZgEXUjWaQkTKC2KahAi7lebAew3Vby95BAQ__' alt="Açıklama" />
      <p>{todo.country} </p>
      </div>
      <div className={styles.penang}>
      <img style={{width: '21px', height: '21px'}} src='https://s3-alpha-sig.figma.com/img/a03e/7f97/8417edc811efe6bf6ff065c350462607?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AlqzbGIhTeg7Qn0W2~aHsqrfHNvzHoq6ZYl2YIkZT0Fq1aYv0ZqiKXB5roNH6a5B72WTVXdyhSJhIIJ53qi4XTY2yQB7eBdu1Yf7corKzqB-oTtlvDnxiw8zqXBXLt~FmbbL2BvNXZqoxGOsshYdA3AlZxaVMqNmEKtqyuxYOj8-18eOCPhM36r4wpHDZWKiDLfXXmo2UO4YKPm1zCMX--~uX9dEbj0sO~umfo-FXP8RL1PKUnTkHw1w~esJEbKLABTu2gsLqcbs1cuV4sAPsjMpneBqDhGa7BN8cIf~3Z5TBsjt65QsFvH5etiGBXEc3SAcMPFzro9sSveMTX7Bkw__' alt="Açıklama" />
      <p>{todo.comment} Comment</p>
      </div>
      <div className={styles.penang}>
      <img style={{width: '21px', height: '21px'}} src='https://s3-alpha-sig.figma.com/img/0684/7846/906c613a4d48612821815ca1d15966f5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQAA0uGtOIMtUPoABOBdB0dD5K59NDWO~fGbh30d~PmvpxiGaosP2TWrTYPSHJ00oYbOKMmbnCPQlaI20zywn2JIvhLyhnrO2iFzYQHRrT7Dh4LtHJzjQ-hN5gq9Zjlw-V5ZpwMlgvMwP3zqi7k2XiGVor58Z7dwTW3HL3fIS26oQiSCWjgw9CHKMfAeZ1UbyGhkQlX2z5gqYaR95utecN7DcnZ4e8SxTSNp6ClDU7Vo-~vqbg-ktP3mGFEc8-zXLqBn7DbBs7YgfGA2Aa88XcIEg9-opOnJ5tPfRKG7FynvOju3ItDh-bgZIurDNnrRwfs~fI7hbf7S-MUvzXQKyA__' alt="Açıklama" />
      <p>{todo.comment} of 5</p>
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








          
        </div>

        <Footer/>
    </div>
  )
}

export default Home