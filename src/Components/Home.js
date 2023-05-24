import React from "react";
import "./Styles.css/Home.css";
import { Link } from "react-router-dom";
import aarp from "../Images/aarp.png";
import forbes from "../Images/forbes.jpg";
import houseKeep from "../Images/housekeeping.jpg";
import marie from "../Images/marie.jpg";
import yahoo from "../Images/yahoo.png";
import newYork from "../Images/newyork.jpg";
import heartBeatIcon from "../Images/heartbeat.png";
import trustedImg from "../Images/trusted-img.jpg";
import moneDocumentIcon from "../Images/moneDocument.png";
import coinsIcon from "../Images/coinsIcon.jpg";
import treasuryIcon from "../Images/treasuryIcon.png";
import familyImg from "../Images/familyImage.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import freeWillLogo from "../Images/freeWillLogo.webp";

function Home() {
  return (
    <div>
      <div className="outer-first-home-component">
        <div className="first-home-component">
          <div className="peace-of-mind">
            <h1>Get peace of mind</h1>
            <p className="peace-text">
              It takes less than 20 minutes to write or update your legal will,
              for free.
              <a href="#" className="why-free-link">
                Why is it free?
              </a>
            </p>
            <button className="will-btn">
              <Link to="makeMyWill">Make my will</Link>
            </button>
            <hr />
            <p>
              If you live in california, we also offer a
              <Link to="revocable-living-trust" className="trust">
                free Revocable Living Trust!
              </Link>
            </p>
          </div>
          <div className="peace-of-mind-pic-home">
            <img
              src="https://www.freewill.com/media/momDaughter1x.ddf86267.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* emedia mentions */}
      <div className="media-outer-div">
        <div className="media-mentions">
          <div className="media-head">
            <h3>MEDIA MENTIONS</h3>
            <hr
              style={{
                width: 160,
              }}
            />
          </div>
          <div className="media-logos">
            <div className="logo">
              <img src={aarp} alt="" />
            </div>
            <div className="logo">
              <img src={newYork} alt="" />
            </div>
            <div className="logo">
              <img src={yahoo} alt="" />
            </div>

            <div className="logo">
              <img src={forbes} alt="" />
            </div>
            <div className="logo">
              <img src={houseKeep} alt="" />
            </div>
            <div className="logo">
              <img src={marie} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* freewill products */}
      <div className="freewill-products">
        <div className="left-products">
          <div className="products">
            <div className="icon heart-icon">
              <img src={heartBeatIcon} alt="heartbeat-icon" />
            </div>
            <div className="product-details">
              <h3>Living Will</h3>
              <p>
                Use an advance healthcare directive, or living will, to specify
                your healthcare wishes and appoint someone to make decisions on
                your behalf if you’re unable.
              </p>
              <button>
                <Link
                  to="/advanced-healthcare-directive"
                  className="product-link"
                >
                  Learn about living wills
                </Link>
              </button>
            </div>
          </div>
          <div className="products">
            <div className="icon coin-icon">
              <img src={coinsIcon} alt="heartbeat-icon" />
            </div>
            <div className="product-details">
              <h3>Durable Financial Power of Attorney (DFPOA)</h3>
              <p>
                Keep your financial accounts accessible and bills paid by
                appointing someone to make financial decisions on your behalf if
                you’re unable.
              </p>
              <button>
                <Link
                  to="durable-financial-power-of-attorney"
                  className="product-link"
                >
                  Learn about DFPOAs
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="right-products">
          <div className="products">
            <div className="icon money-icon">
              <img src={moneDocumentIcon} alt="moneyDocument" />
            </div>
            <div className="product-details">
              <h3>Beneficiary Designations</h3>
              <p>
                Document and distribute assets that your last will and testament
                does not cover, including 401(k)s, IRAs, and life insurance
                policies.
              </p>
              <button>
                <Link to="/beneficiary" className="product-link">
                  Learn about beneficiary designations
                </Link>
              </button>
            </div>
          </div>
          <div className="products">
            <div className="icon treasury-icon">
              <img src={treasuryIcon} alt="treasury-icon" />
            </div>
            <div className="product-details">
              <div className="california-only">
                <span>Only in California</span>
              </div>
              <h3>Revocable Living Trusts</h3>
              <p>
                Fulfill the functions of a last will and testament by placing
                your assets in a trust, and avoiding California’s lengthy
                probate process.
              </p>
              <button>
                <Link to="/beneficiary" className="product-link">
                  Learn about trusts
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="trusted-by-many-outer-div">
        <div className="trusted-by-many-inner-div">
          <div className="trusted-img">
            <img src={trustedImg} alt="" />
          </div>

          <div className="trusted-text">
            <h2>Trusted by thousands</h2>
            <p>
              Writing your own will can feel daunting — that’s why we worked
              with the nation's top legal experts to create our interactive
              online will maker. Enter your information, and we'll create a last
              will and testament customized to your wishes.
              <br />
              <br />
              We also have
              <Link to="/our-products" className="trust-link">
                other estate planning products
              </Link>
              available to help you get all your affairs in order.
            </p>
          </div>
        </div>
      </div>

      {/* why freewill section */}
      <div className="why-freewill-outer-div">
        <div className="why-freewill-inner-div">
          <div className="left-why-freewill-div">
            <span>Why is FreeWill free?</span>
            <p>
              Our mission is to enable you to do the most good for the people
              and causes you love, by providing free access to will-making
              services. We've partnered with 1150+ nonprofits who support our
              mission and help ensure you can create a will for free, while
              raising more than $7.5B+ in bequests to charities.
              <br />
              <br />
              One in six people who use FreeWill choose to leave a bequest to
              charity. They believe, as we do, that leaving a bequest to
              nonprofit organizations in your will can be an incredibly powerful
              way to make an impact for the causes you support.
            </p>
            <button className="will-btn">
              <Link to="will">Make your free Will Today</Link>
            </button>
          </div>
          <hr />
          <div className="right-why-freewill-outer-div">
            <div className="right-freewill-inner-div">
              <div className="reason-for-freeWill">
                <div className="icon">
                  <img src={heartBeatIcon} alt="heartbeat-icon" />
                </div>
                <span>100% free — no credit card required</span>
              </div>
              <div className="reason-for-freeWill">
                <div className="icon">
                  <img src={heartBeatIcon} alt="heartbeat-icon" />
                </div>
                <span>Supported by nonprofits</span>
              </div>
              <div className="reason-for-freeWill">
                <div className="icon">
                  <img src={heartBeatIcon} alt="heartbeat-icon" />
                </div>
                <span>We never sell your personal data</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how freewill-works */}

      <div className="how-freewill-works-outerDiv">
        <div className="how-freeWillWorks-inner-div">
          <div className="how-freeWillWorks-upper-div">
            <h2>How FreeWill works</h2>
            <div className="diff-hows">
              <div className="hows">
                <span>1. Fill out online</span>
                <p>
                  Just follow the step-by-step instructions to fill out the
                  necessary information for your forms.
                </p>
              </div>
              <div className="hows">
                <span>2. Print out documents</span>
                <p>
                  The information you provided is turned into precise legal
                  language, and provided back to you as a printable document.
                </p>
              </div>
              <div className="hows">
                <span>3. Sign and keep safe</span>
                <p>
                  Follow attached instructions to print, sign, and make your
                  document official. Keep it somewhere safe, but accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-freeWillWorks-lower-div">
        <div className="how-freeWillWorks-lowerInner-div">
          <div className="icon">
            <img src={heartBeatIcon} alt="" />
          </div>
          <p>
            We understand that online estate planning isn’t suitable for
            everyone. If you have complex needs, we encourage you to seek legal
            counsel. As you answer questions on FreeWill, we’ll point out where
            an attorney may be a better fit. We’ll also provide your responses
            in an easy-to-read summary, which you can print and bring to your
            attorney to save time.
          </p>
        </div>
      </div>

      {/* living a legacy section */}

      <div className="trusted-by-many-outer-div">
        <div className="trusted-by-many-inner-div livingLegacy-innerDiv">
          <div className="trusted-text legacy-text">
            <h2>Leave a lasting legacy</h2>
            <p>
              We’re on a mission to help people plan for the future while doing
              the most good for the people and causes they care about.
              <br />
              <br />
              By using FreeWill, you help keep this service free for everyone no
              matter their circumstances. If you choose to commit a small gift
              to a nonprofit, you’ll also be helping them continue their work
              for generations to come, all at no cost to you during your
              lifetime.
              <Link to="/our-products" className="trust-link">
                other estate planning products
              </Link>
              available to help you get all your affairs in order.
            </p>
            <button
              className="will-btn
            "
            >
              <Link to="will">Make your free Will Today</Link>
            </button>
          </div>
          <div className="trusted-img family-imgDiv">
            <img src={familyImg} alt="" />
          </div>
        </div>
      </div>

      <div className="statistics-OuterDiv">
        <div className="statistics-innerDiv">
          <figure>
            <span className="figure-number">757K+</span>
            <figcaption>
              <p>Wills Created</p>
            </figcaption>
          </figure>
          <figure>
            <span className="figure-number">$7.5B</span>
            <figcaption>
              <p>Committed to nonprofits</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="faqS-OuterDiv">
        <div className="faqs-innerDiv">
          <div className="faq-heading">
            <span>Frequently asked questions</span>
          </div>
          <div className="faqs-content">
            <span>Can I edit my documents after I'm done?</span>
            <p>
              You can update your documents on FreeWill at any time, free of
              charge. We know life is always changing, and we're here to help
              you keep your wishes up to date.
            </p>
            <br />

            <span>Where can I learn more?</span>
            <p>
              <Link to="learn" className="learn-blog">
                Visit the FreeWill blog
              </Link>
              to read articles about the important world of estate planning.
              Below are also some popular resources to help you get started:
            </p>
            <br />

            <div className="faqs-link">
              <Link to="/learn/estate-planning">
                <span>Estate planning</span>
              </Link>
              <Link to="reasons-to-have-a-will">
                <span>10 reasons to have a will</span>
              </Link>
              <Link to="last-will-vs-living-will">
                <span>Last will vs. living will</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* try freewill today */}

      <div className="try-freewill-outerDiv">
        <div className="try-freeWill-innerDiv">
          <div className="try-freewill-today-left-div">
            <span>Try FreeWill today</span>
            <div className="freeWill-trials">
              <p>100% free</p>
              <p>Done in under 20 minutes</p>
            </div>
          </div>
          <div className="try-freewill-today-right-div">
            <button className="will-btn">Create a will now-its free!</button>
          </div>
        </div>
      </div>

      <div className="footer-links-outerDiv">
        <div className="footer-links-innerDiv">
          <div className="footer-links-upperDiv">
            <div className="web_logo links-div">
              <Link to="/home" className="home_link link">
                <img src={freeWillLogo} alt="free-will-logo" />
              </Link>
            </div>
            <div className="freewill-footerLinks">
              <div className="links-div">
                <span>FOR INDIVIDUALS</span>
                <Link to="/profits">Products</Link>
                <Link to="/donateStocks">Donate stock</Link>
                <Link to="/donateCrypto">Donate Crypto</Link>
                <Link to="/help">Glossary</Link>
                <Link to="/learn">Blog</Link>
                <Link to="/fags">FAQ</Link>
              </div>
              <div className="links-div">
                <span>FOR NONPROFITS</span>
                <Link to="/freeWillPlatform">For nonprofits</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/caseStudies">Case studies</Link>
                <Link to="/webinars">Nonprofits webinars</Link>
                <Link to="/demo-request">Request a demo</Link>
                <br />
                <span>FOR LAWYERS</span>
                <Link to="/supportForLawyers">Support for T&E lawyers</Link>
                <Link to="/becomeFreewillFellow">Become a freeWill Fellow</Link>
              </div>
              <div className="links-div">
                <span>ABOUT US</span>
                <Link to="/whoWeAre">Who we are</Link>
                <Link to="/career">Careers</Link>
                <Link to="/security">Security</Link>
                <Link to="/accessibility">Accessibility</Link>
                <Link to="/press">Press</Link>
                <span>CONTACT US</span>
                <Link to="/help">Help center</Link>
                <a
                  href="mailto:help@freewill.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Contact us
                </a>
                <span>FOLLOW US</span>
                <Link>
                  <div className="socialMedia-icon">
                    <FacebookOutlinedIcon />
                    <p>Facebook</p>
                  </div>
                </Link>
                <Link>
                  <div className="socialMedia-icon">
                    <LinkedInIcon />
                    <p>LinkedIn</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-links-lowerDiv">
            <div className="copyRight">
              <span>
                Copyright © 2023 FreeWill Co., a Delaware Public Benefit
                Corporation. All rights reserved. FreeWill offers online
                self-help solutions for common estate planning needs and related
                educational content. Estate planning may implicate both state
                and federal laws, and estate planning needs will differ based on
                personal circumstance and applicable law. FreeWill is not a law
                firm and its services are not substitutes for an attorney’s
                advice. The information here is provided for educational
                purposes only and is not intended to provide, and should not be
                construed as providing legal or tax advice. This information is
                general in nature and is not intended to serve as the primary or
                sole basis for investment or tax-planning decisions. Use of
                FreeWill’s services is subject to the{" "}
                <Link to="terms">Terms of Service</Link> &
                <Link to="privacy">Privacy Notice.</Link>
              </span>
            </div>

            <div className="footer-legal-div">
              <div className="trustPilot">
                <img
                  src="https://www.freewill.com/media/trustpilot.1f25cec2.png"
                  alt="trustpilot logo"
                />
              </div>
              <div className="accreditedBusiness">
                <img
                  src="https://www.freewill.com/media/bbb.a5014bc7.png"
                  alt="bbb logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
