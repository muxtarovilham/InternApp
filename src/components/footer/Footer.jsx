import React from 'react'
import styles from './footer.module.css'


const Footer = () => {
  return (
    <div className={styles.container}>
       <div style={{width: '100%', height: '1px', backgroundColor: 'gray'}}></div>
        <div style={{width: '75%'}} className="row">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.badi}>
          <img src={process.env.PUBLIC_URL + '/images/Logo (6).png'} alt="Açıklama" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.badi}>
          <a href="">Body</a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.badi}>
          <a href="">Travel</a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.badi}>
          <a href="">Account</a>
          </div>
        </div>
      </div>


        <div className={styles.footers}>
      <div style={{width: '80%'}} className="row">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.red}>
            <p>We are location independent bloggers, digital influencers, small group tour organizers and world travelers with a serious passion for the sun, the sea and adventure.</p>
            <p>Eight years and 60-something countries later and we are still on the road.</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.red}>
            <p>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</p>
            <a href=''>T: +234 706 507 8544</a>
            <a href=''>E: info@redexplorers.com</a>
            <a href=''>W: www. redexplorers.com</a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.red}>
            <p>My List</p>
            <a href=''>My Requests</a>
            <a href=''>My Credits</a>
            <a href=''>My Info</a>
            <a href=''>Contact</a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.red}>
            <p>Travel</p>
            <a href=''>Why Travel</a>
            <a href=''>Become a Traveler</a>
            <a href=''>How Its Works</a>
            <a href=''>Traveling FAQs</a>
          </div>
        </div>
      </div>

<div className={styles.linegainsboro}></div>
      <div style={{width: '80%'}} className="row">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.red}>
            <img src="https://s3-alpha-sig.figma.com/img/f884/d7f5/f2129089b18c3edff993660811ac02e9?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0YDWsulpAVEEd9GOG86ajC1j0Em5jf2taRtpgc~~VB7W1Bi9wATMvRq7xP3AEHZatZUGCgBZEhKcTaS9Tm5ZZDjuZHWJYm8D-J7zY7pyY0b2DJJ1XJrigEFzupcGV8W5Y6hpJdgxiuBa3oWXW36zqztfQmy78sNyGOvK~tMfSAh2DVDdPXwRl0WkoFaXPf-VPAtgYPzkBlMATfT2LGicnXB7eNeKLC9Oc87hmOhUZGC04VQEC5ugAJMRVzgXnO6cnjC~~~5C7jmDFj7WkUHkeSnUXGwRM9jqNIaTr~SlDXH9AU7ZpwSBmfAFVyVUPUX1rbZRDaTfUOeDOJTNpAhQg__" alt="" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-2">
          <div className={styles.redicons}>
          <img style={{width: '13px', height: '20px'}} src={process.env.PUBLIC_URL + '/images/Vector (6).png'} alt="Açıklama" />
          <img style={{width: '21px', height: '17px'}} src={process.env.PUBLIC_URL + '/images/Vector (7).png'} alt="Açıklama" />
          <img style={{width: '27px', height: '17px'}} src={process.env.PUBLIC_URL + '/images/Group (1).png'} alt="Açıklama" />
          <img style={{width: '18px', height: '19px'}} src={process.env.PUBLIC_URL + '/images/Vector (8).png'} alt="Açıklama" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-7">
          <div className={styles.red}>
            <a href="">© 2021 RedExplorers. All rights reserved   |   Terms   |   Privacy   |   Site Map</a>
          </div>
        </div>
        </div>

        </div>
      
    </div>
  )
}

export default Footer