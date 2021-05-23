import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Trans, Link } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MdSecurity } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { SiLinkedin } from 'react-icons/si';
import { FaHeart } from 'react-icons/fa';
import Div100vh from 'react-div-100vh';
import { Helmet } from 'react-helmet';
import 'normalize.css';

const StyledMain = styled.main`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 100%;
  background: linear-gradient(315deg, #141048 -26.94%, #47469F 73.06%), #D8D8D8;
  font-family: 'Mulish';
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    position: relative;
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    z-index: 2;
  }

  section {
    position: relative;
    top: -100px;
    width: 85%;
    z-index: 2;
  }

  footer {
    width: 85%;
    font-size: 12px;
    svg {
      font-size: 1.5em;
    }
  }

  input {
    width: 100%;
    height: 61px;
    background: rgba(255, 255, 255, 0.61);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
    border-radius: 28px;
    font-weight: 700;
    font-size: 15px;
    padding-left: 20px;
    &::placeholder {
      color: black;
    }
  }

  button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 14px;
    top: 7.5px;
    width: 46px;
    height: 46px;
    background: #FF714B;
    box-shadow: 0px 4px 4px rgba(50, 0, 0, 0.25);
    border-radius: 28px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.5rem;
    &:hover {
      background: #FA7100
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  h1 {
    font-family: 'Montserrat';
    font-size: 32px;
  }

  .gatsby-image-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    /* z-index: -1; */
  }

  .links {
    display: flex;
    align-items: center;
  }

  .link-wrapper {
    display: flex;
    align-items: center;
    margin: 0 20px;
    span {
      padding-left: 5px;
    }
  }

  .input-wrapper {
    position: relative;
    max-width: 472px;
    margin-top: 10%;
  }

  .top {
    position: relative;
    max-width: 472px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    z-index: 2;
    div {
      display: flex;
      align-items: center;
      margin-bottom: 13px;
    }
    span {
      padding-right:  7px;
    }
  }

  .bottom {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    margin: 13px 0;
  }

  .mobile-hidden {
    padding-right: 17px;
  }

  @media(max-width: 480px) {
    overflow: hidden;

    footer {
      font-size: 8px;
    }

    h1 {
      font-size: 20px;
    }

    input {
      height: 33px;
    }

    button {
      display: flex;
      align-items: center;
      right: 8px;
      top: 3px;
      width: 24px;
      height: 24px;
    }

    .input-wrapper {
      max-width: 293px;
    }

    .gatsby-image-wrapper {
      width: 1319px;
      left: 60px;
      top: 196px;
    }

    .description {
      padding: 0;
    }

    .mobile-hidden {
      display: none;
      padding: 0;

    }

    #hero {
      position: absolute;
      top: 43vh;
      left: 0;
      margin: 0;
    }
  }
`;

const Home = ({ pageContext: { i18n }, data: { shape } }) => {
  const actualLang = i18n.language;
  const image = getImage(shape);
  return (
    <Div100vh>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Hero</title>
        <link rel='canonical' href='http://www.herotec.ca' />
      </Helmet>
      <StyledMain>
        <header>
          <div className='logo'>
            <svg width='117' height='54' viewBox='15 -10 117 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#filter0_d)'>
                <path fillRule='evenodd' clipRule='evenodd' d='M38 11.9515V12.2016C36.1644 21.1697 29.0268 28.2296 20.0191 29.9515H20V25.1913C26.5356 23.6129 31.6837 18.4801 33.283 11.9515H38Z' fill='#FF714B'/>
                <path fillRule='evenodd' clipRule='evenodd' d='M33 12.9515C31.4348 19.3619 26.3961 24.4017 20 25.9515V17.1391C20 14.8352 21.8776 12.9515 24.1742 12.9515H33Z' fill='#47469F'/>
                <mask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='16' y='8' width='18' height='18'>
                  <path fillRule='evenodd' clipRule='evenodd' d='M16 8H33.6513V25.5971H16V8Z' fill='white'/>
                </mask>
                <g mask='url(#mask0)'>
                  <path fillRule='evenodd' clipRule='evenodd' d='M33.6514 7.99988C33.6447 9.41784 33.4686 10.7968 33.1437 12.1166H24.2996C21.9982 12.1166 20.1167 13.9981 20.1167 16.2992V25.1011C18.797 25.421 17.418 25.592 16 25.5971V16.0641C16 11.6293 19.6294 7.99988 24.0643 7.99988H33.6514Z' fill='#00C8FF'/>
                </g>
                <path fillRule='evenodd' clipRule='evenodd' d='M48.1734 10.9515H45V27.9515H48.1734V21.0784H55.8266V27.9515H59V10.9515H55.8266V17.8241H48.1734V10.9515Z' fill='white'/>
                <path fillRule='evenodd' clipRule='evenodd' d='M65.4148 23.2956L65.313 22.9396C65.2253 22.6327 65.1808 22.3002 65.1808 21.9516C65.1808 20.8921 65.5605 19.9799 66.3097 19.2398C67.0588 18.4998 67.9692 18.1247 69.016 18.1247C69.3602 18.1247 69.6964 18.1612 70.0149 18.2335L70.4008 18.3205L65.4148 23.2956ZM69.016 14.9515C67.0871 14.9515 65.4182 15.6411 64.0548 17.0014C62.6914 18.3622 62 20.0277 62 21.9516C62 23.8761 62.6914 25.5418 64.0548 26.9017C65.418 28.2619 67.0869 28.9515 69.016 28.9515C70.9449 28.9515 72.6174 28.2583 73.9873 26.8912C74.2915 26.5877 74.5607 26.2662 74.7891 25.9335L72.1113 24.2068C71.9969 24.3591 71.8705 24.505 71.7336 24.642C70.9928 25.3953 70.0779 25.7781 69.016 25.7781C68.6662 25.7781 68.3329 25.7336 68.0258 25.6461L67.6688 25.5438L75 18.2503C74.7113 17.8095 74.3705 17.3857 73.9849 16.9891C72.6176 15.6379 70.9449 14.9515 69.016 14.9515Z' fill='white'/>
                <path fillRule='evenodd' clipRule='evenodd' d='M82.0382 14.484H79V27.9515H82.0382V19.2051L82.0689 19.1506C82.2216 18.8799 82.4046 18.6281 82.6128 18.4021C83.2728 17.6867 84.075 17.2993 85 17.2492V13.9515C84.0374 13.9801 83.1426 14.2089 82.3378 14.6326L82.0382 14.7901V14.484Z' fill='white'/>
                <path fillRule='evenodd' clipRule='evenodd' d='M96.7006 24.6523C95.9541 25.3994 95.0453 25.7783 94.0001 25.7783C92.9406 25.7783 92.0282 25.3992 91.2884 24.6514C90.5485 23.9053 90.1732 22.9968 90.1732 21.9516C90.1732 20.8925 90.5487 19.9806 91.289 19.2405C92.0296 18.5002 92.9415 18.1247 94.0001 18.1247C95.0444 18.1247 95.9527 18.4998 96.7 19.2398C97.4477 19.9797 97.8268 20.8921 97.8268 21.9516C97.8268 22.9972 97.4479 23.906 96.7006 24.6523ZM98.9503 17.0017C97.5897 15.6411 95.924 14.9515 94.0001 14.9515C92.076 14.9515 90.4103 15.6411 89.05 17.0017C87.6896 18.362 87 20.0277 87 21.9516C87 23.8764 87.6896 25.5418 89.05 26.9017C90.4101 28.2619 92.0756 28.9515 94.0001 28.9515C95.9244 28.9515 97.5899 28.2619 98.9503 26.9017C100.31 25.5418 101 23.8764 101 21.9516C101 20.0277 100.31 18.3622 98.9503 17.0017Z' fill='white'/>
              </g>
              <defs>
                <filter id='filter0_d' x='0' y='0' width='117' height='53.9515' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix'/>
                  <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/>
                  <feOffset dy='8'/>
                  <feGaussianBlur stdDeviation='8'/>
                  <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'/>
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/>
                  <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/>
                </filter>
              </defs>
            </svg>
          </div>
          <div className='links'>
            <a href='http://www.hero-pro.biz'>
              <div className='link-wrapper' id='hero'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16.67 13.13C18.04 14.06 19 15.32 19 17V20H23V17C23 14.82 19.43 13.53 16.67 13.13Z' fill='white' />
                  <path d='M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12Z' fill='white' />
                  <path d='M9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6Z' fill='white' />
                  <path d='M9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13ZM15 18H3V17.01C3.2 16.29 6.3 15 9 15C11.7 15 14.8 16.29 15 17V18Z' fill='white' />
                </svg>
                <span>HERO PRO Service</span>
              </div>
            </a>
            <Link to='/' language={actualLang === 'en' ? 'fr' : 'en'}>
              <div className='link-wrapper'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z' fill='white' />
                </svg>
                <span>{actualLang === 'en' ? 'FR' : 'EN'}</span>
              </div>
            </Link>
          </div>
        </header>
        <section>
          <div className='title-wrapper'>
            <h1>
              <Trans>The world is evolving</Trans>
            </h1>
            <h1>
              <Trans>So are your WORKPLACES</Trans>
            </h1>
          </div>
          <div className='input-wrapper'>
            <input type='text' name='email' placeholder={actualLang === 'en' ? 'Subscribe to HERO' : 'Abonnez-vous à HERO'}/>
            <button>
              <HiOutlineMail/>
            </button>
          </div>
        </section>
        <footer>
          <div className='top'>
            <a href='http://privacy.herotec.ca/'>
              <div>
                <MdSecurity className='mobile-hidden'/>
                <span className='icon-mobile'><Trans>Terms & Conditions</Trans>
                </span>
              </div>
            </a>
            <a href='https://www.linkedin.com/company/hero-tech'>
              <div>
                <span><Trans>Follow us at</Trans>
                </span>
                <SiLinkedin/>
              </div>
            </a>
          </div>
          <div className='bottom'>
            <FaHeart className='mobile-hidden'/>
            <div className='description'>
              <p><Trans>Hero Tech is an equal opportunity workplace</Trans></p>
              <p><Trans>Hero is a pending registered trademark</Trans></p>
              <p><Trans>Powered by Hero Pro</Trans></p>
              <p><Trans>Hero Pro is an independent company owned by Hero Pro Corp</Trans></p>
            </div>
          </div>
          <GatsbyImage image={image} alt='background shape'/>
        </footer>
      </StyledMain>
    </Div100vh>
  );
};

export default Home;

export const query = graphql`
  query ($language: String!){
  locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    shape: file(relativePath: {eq: "shape.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
