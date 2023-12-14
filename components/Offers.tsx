import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./Offers.module.css";

const Offers: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/Request1");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/Request1");
  }, [router]);

  const onButton2Click = useCallback(() => {
    router.push("/Request1");
  }, [router]);

  return (
    <div className={styles.offers} data-scroll-to="offersContainer">
      <div className={styles.title}>
        <div className={styles.introTitle}>
          <p className={styles.chooseTheLearning}>Choose The Learning Path</p>
          <p className={styles.chooseTheLearning}>That Fits Your Needs.</p>
        </div>
      </div>
      <div className={styles.offers1}>
        <div className={styles.single}>
          <div className={styles.top}>
            <div className={styles.title1}>Single</div>
            <div className={styles.price}>80 €</div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.text}>Request a lesson</div>
            </button>
          </div>
          <div className={styles.text1}>
            <div className={styles.features}>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>45 min session</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  In-depth work on a musical section
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  Study material recommendation
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
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
                  <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                  <div className={styles.minSession}>
                    Advanced technique training
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/violedu/icon.svg" />
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
            <b className={styles.title4}>Intensive</b>
            <div className={styles.price1}>295 €</div>
            <button className={styles.button} onClick={onButton1Click}>
              <div className={styles.text}>Request a lesson</div>
            </button>
          </div>
          <div className={styles.text3}>
            <div className={styles.features}>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>4 x 45 min session</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  2 x feedback on recorded video
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  Guidance for effective practice
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  Theory and composition review
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  Extensive work on a musical piece
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  Study material recommendation
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
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
                  <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                  <div className={styles.minSession}>
                    Advanced technique training
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                  <div className={styles.minSession}>
                    Preparation for auditions or recitals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mastery}>
          <div className={styles.top}>
            <b className={styles.title4}>Mastery</b>
            <div className={styles.price1}>595 €</div>
            <button className={styles.button} onClick={onButton2Click}>
              <div className={styles.text}>Request a lesson</div>
            </button>
          </div>
          <div className={styles.text5}>
            <div className={styles.features}>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>8 x 45 min session</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  4 x feedback on recorded video
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  Extensive work on a musical piece
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>Progress tracking</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>Mock auditions</div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                <div className={styles.minSession}>
                  Study material recommendation
                </div>
              </div>
              <div className={styles.line}>
                <img className={styles.icon} alt="" src="/violedu/icon.svg" />
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
                  <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                  <div className={styles.minSession}>
                    Development of versatile repertoire
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                  <div className={styles.minSession}>
                    Long-term skill development
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/violedu/icon.svg" />
                  <div className={styles.minSession}>
                    In-depth rewiew of musical works
                  </div>
                </div>
                <div className={styles.line}>
                  <img className={styles.icon} alt="" src="/violedu/icon.svg" />
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
        <div className={styles.garantee}>
          <img
            className={styles.imageIcon}
            alt=""
            src="/violedu/image6@2x.png"
          />
          <div className={styles.text6}>
            <div className={styles.garanteeText}>Money Back Garantee</div>
            <div className={styles.garanteeTitle}>
              All learning paths include a 14-day money back garantee. If you
              are not satisfied, get your money back.
            </div>
          </div>
        </div>
        <div className={styles.garantee}>
          <img
            className={styles.imageIcon1}
            alt=""
            src="/violedu/image7@2x.png"
          />
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
