import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Trans, Link } from 'gatsby-plugin-react-i18next';
import 'normalize.css';

const StyledMain = styled.main`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(315deg, #141048 -26.94%, #47469F 73.06%), #D8D8D8;
  font-family: 'Mulish';
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  header {
    position: relative;
    width: 85%;
    display: flex;
    justify-content: space-between;
  }

  section {
    position: relative;
    top: -100px;
    width: 85%;
  }

  footer {
    width: 85%;
    position: relative;
  }

  input {
    width: 100%;
    height: 61px;
    background: rgba(255, 255, 255, 0.61);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
    border-radius: 28px;
    &::placeholder {
      color: black;
      font-weight: 700;
      font-size: 15px;
      padding-left: 20px;
    }
  }

  button {
    position: absolute;
    right: 14px;
    top: 7.5px;
    width: 46px;
    height: 46px;
    background: #FF714B;
    box-shadow: 0px 4px 4px rgba(50, 0, 0, 0.25);
    border-radius: 28px;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    &:visited {
      color: white;
    }
  }

  h1 {
    font-family: 'Montserrat';
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
    z-index: 2;
  }

  .shape {
  }

  .top {
    max-width: 472px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    div {
      display: flex;
      align-items: center;
      margin-bottom: 13px;
    }
    span {
      padding: 0 17px;
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    margin: 13px 0;    
  }

  .description {
    padding: 0 17px;
    p {
      margin: 0;
    }
  }

  @media(max-width: 480px) {
    font-size: 12px;

    #hero {
      position: absolute;
      top: 52vh;
      left: 0;
      margin: 0;
    }
  }
`;

const Home = ({ pageContext: { i18n } }) => {
  const actualLang = i18n.language;
  return (
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
          <div className='link-wrapper' id='hero'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M16.67 13.13C18.04 14.06 19 15.32 19 17V20H23V17C23 14.82 19.43 13.53 16.67 13.13Z' fill='white' />
              <path d='M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12Z' fill='white' />
              <path d='M9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6Z' fill='white' />
              <path d='M9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13ZM15 18H3V17.01C3.2 16.29 6.3 15 9 15C11.7 15 14.8 16.29 15 17V18Z' fill='white' />
            </svg>
            <span>HERO PRO Service</span>
          </div>
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
          <input type='text' placeholder={actualLang === 'en' ? 'Subscribe to HERO' : 'Abonnez-vous à HERO'}/>
          <button>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z' fill='white'/>
            </svg>
          </button>
        </div>
      </section>
      <footer>
        <div className='top'>
          <div>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z' fill='white'/>
            </svg>
            <span><Trans>Terms & Conditions</Trans>
            </span>
          </div>
          <div>
            <span><Trans>Follow us at</Trans>
            </span>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z' fill='white'/>
            </svg>
          </div>
        </div>
        <div className='bottom'>
          <div><svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z' fill='white'/>
          </svg>
          </div>
          <div className='description'>
            <p><Trans>Hero Tech is an equal opportunity workplace</Trans></p>
            <p><Trans>Hero is a pending registered trademark</Trans></p>
            <p><Trans>Powered by Hero Pro</Trans></p>
            <p><Trans>Hero Pro is an independent company owned by Hero Pro Corp</Trans></p>

          </div>
        </div>
      </footer>
    </StyledMain>
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
  }
`;
