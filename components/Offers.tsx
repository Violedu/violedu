import { useEffect, useRef, useState, useCallback } from 'react';
import { animate } from "motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "./Offers.module.css";
import { useLearningPath } from "../components/LearningPathContext";

const Offers: NextPage = () => {
  const router = useRouter();
  const { setLearningPath } = useLearningPath();

  const introTitleRef = useRef<HTMLDivElement>(null);
  const offers1Ref = useRef<HTMLDivElement>(null); // Ref for the offers1 div
  const moneyBackGuaranteeRef = useRef<HTMLDivElement>(null);
  const freeAssessmentSessionRef = useRef<HTMLDivElement>(null);

  // State variables to track if animations have run
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedOffers, setHasAnimatedOffers] = useState(false);
  const [hasAnimatedMoneyBackGuarantee, setHasAnimatedMoneyBackGuarantee] = useState(false);
  const [hasAnimatedFreeAssessmentSession, setHasAnimatedFreeAssessmentSession] = useState(false);

  const onButtonClick = useCallback(() => {
    setLearningPath("Single");
    router.push("/request");
  }, [router]);

  const onButton1Click = useCallback(() => {
    setLearningPath("Intensive");
    router.push("/request");
  }, [router]);

  const onButton2Click = useCallback(() => {
    setLearningPath("Mastery");
    router.push("/request");
  }, [router]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (introTitleRef.current && !hasAnimatedTitle) {
            animate(introTitleRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
            setHasAnimatedTitle(true); // Set the flag to true after animation
          }
          if (offers1Ref.current && !hasAnimatedOffers) {
            animate(offers1Ref.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2 });
            setHasAnimatedOffers(true); // Set the flag to true after animation
          }
          if (moneyBackGuaranteeRef.current && !hasAnimatedMoneyBackGuarantee) {
            animate(moneyBackGuaranteeRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.8 });
            setHasAnimatedMoneyBackGuarantee(true); // Set the flag to true after animation
          }
          if (freeAssessmentSessionRef.current && !hasAnimatedFreeAssessmentSession) {
            animate(freeAssessmentSessionRef.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 1.0 });
            setHasAnimatedFreeAssessmentSession(true); // Set the flag to true after animation
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (introTitleRef.current) {
      observer.observe(introTitleRef.current);
    }
    if (offers1Ref.current) {
      observer.observe(offers1Ref.current);
    }
    if (moneyBackGuaranteeRef.current) {
      observer.observe(moneyBackGuaranteeRef.current);
    }
    if (freeAssessmentSessionRef.current) {
      observer.observe(freeAssessmentSessionRef.current);
    }

    return () => {
      if (introTitleRef.current) {
        observer.unobserve(introTitleRef.current);
      }
      if (offers1Ref.current) {
        observer.unobserve(offers1Ref.current);
      }
      if (moneyBackGuaranteeRef.current) {
        observer.unobserve(moneyBackGuaranteeRef.current);
      }
      if (freeAssessmentSessionRef.current) {
        observer.unobserve(freeAssessmentSessionRef.current);
      }
    };
  }, [hasAnimatedTitle, hasAnimatedOffers, hasAnimatedMoneyBackGuarantee, hasAnimatedFreeAssessmentSession]); // Depend on animation flags

  return (
    <div className={styles.offers} data-scroll-to="offersContainer">
      <div className={styles.title}>
        <div
          className={styles.introTitle}
          ref={introTitleRef}
          style={{ opacity: 0, transform: 'translateY(24px)' }} // Initial style to hide and position the element
        >
          <p className={styles.chooseTheLearning}>Choose The Learning Path</p>
          <p className={styles.chooseTheLearning}>That Fits Your Needs.</p>
        </div>
      </div>
      <div className={styles.offers1} ref={offers1Ref} style={{ opacity: 0, transform: 'translateY(24px)' }}>
        <div className={styles.single}>
          <div className={styles.top}>
            <div className={styles.title1}>Single</div>
            <div className={styles.price1}>
              80€
              <span className={styles.perSession}>/session</span>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.text}>Request a lesson</div>
            </button>
          </div>
          <div className={styles.text1}>
            <div className={styles.features}>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>1 x 45 min session</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  In-depth work on a musical section
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Study material recommendation
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Personalized exercise plan
                </div>
              </div>
            </div>
            <div className={styles.textChild} />
            <div className={styles.suitableText}>
              <div className={styles.title2}>
                <div className={styles.title3}>Suitable for</div>
              </div>
              <div className={styles.suitable}>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.minSession}>
                    Advanced technique training
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.minSession}>
                    Troubleshooting specific issues
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.intensive}>
          <div className={styles.top}>
            <div className={styles.title1}>Intensive</div>
            <div className={styles.price1}>
              70€
              <span className={styles.perSession}>/session</span>
            </div>
            <button className={styles.button} onClick={onButton1Click}>
              <div className={styles.text}>Request a lesson</div>
            </button>
          </div>
          <div className={styles.text3}>
            <div className={styles.features}>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>4 x 45 min session</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  2 x feedback on recorded video
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Guidance for effective practice
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Theory and composition review
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Extensive work on a musical piece
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Study material recommendation
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Personalized exercise plan
                </div>
              </div>
            </div>
            <div className={styles.textChild} />
            <div className={styles.suitableText}>
              <div className={styles.title2}>
                <div className={styles.title3}>Suitable for</div>
              </div>
              <div className={styles.suitable}>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.minSession}>
                    Advanced technique training
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.minSession}>
                    Preparation for recitals or auditions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mastery}>
          <div className={styles.top}>
            <div className={styles.title1}>Mastery</div>
            <div className={styles.price1}>
              65€
              <span className={styles.perSession}>/session</span>
            </div>
            <button className={styles.button} onClick={onButton2Click}>
              <div className={styles.text}>Request a lesson</div>
            </button>
          </div>
          <div className={styles.text5}>
            <div className={styles.features}>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>8 x 45 min session</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  4 x feedback on recorded video
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Extensive work on a musical piece
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>Progress tracking</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Mock recitals or auditions
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Study material recommendation
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.minSession}>
                  Personalized exercise plan
                </div>
              </div>
            </div>
            <div className={styles.textChild} />
            <div className={styles.suitableText}>
              <div className={styles.title2}>
                <div className={styles.title3}>Suitable for</div>
              </div>
              <div className={styles.suitable}>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.minSession}>
                    Development of versatile repertoire
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.minSession}>
                    Long-term skill development
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.minSession}>
                    In-depth review of musical works
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.minSession}>
                    Preparation for recitals or auditions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.garantee} ref={moneyBackGuaranteeRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
          <img className={styles.imageIcon} alt="" src="/image6@2x.png" />
          <div className={styles.text6}>
            <div className={styles.garanteeText}>Money Back Guarantee</div>
            <div className={styles.garanteeTitle}>
              All learning paths include a 14-day money back guarantee. If you
              are not satisfied, get your money back.
            </div>
          </div>
        </div>
        <div className={styles.garantee} ref={freeAssessmentSessionRef} style={{ opacity: 0, transform: 'translateY(24px)' }}>
          <img className={styles.imageIcon1} alt="" src="/image7@2x.png" />
          <div className={styles.text6}>
            <div className={styles.garanteeText}>Free Assessment Session</div>
            <div className={styles.garanteeTitle}>
              A free and short assessment is necessary to define your goals and
              evaluate your current skill level. This ensures a tailor-made
              learning experience right from the beginning.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
