import React from 'react';
import styles from './LearningPathCard.module.css';

type LearningPathType = 'Single' | 'Intensive' | 'Mastery' | undefined;

interface LearningPathCardProps {
  learningPath: LearningPathType;
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({ learningPath }) => {
  const renderCard = () => {
    switch (learningPath) {
      case 'Single':
        return (
            <div className={styles.single}>
            <div className={styles.top}>
              <div className={styles.title1}>Single</div>
              <div className={styles.price1}>
                $85
                <span className={styles.perSession}>/session</span>
              </div>
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
        );
      case 'Intensive':
        return (
            <div className={styles.intensive}>
            <div className={styles.top}>
              <div className={styles.title1}>Intensive</div>
              <div className={styles.price1}>
                $75
                <span className={styles.perSession}>/session</span>
              </div>
            </div>
            <div className={styles.text1}>
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
        );
      case 'Mastery':
        return (
            <div className={styles.mastery}>
            <div className={styles.top}>
              <div className={styles.title1}>Mastery</div>
              <div className={styles.price1}>
                $70
                <span className={styles.perSession}>/session</span>
              </div>
            </div>
            <div className={styles.text1}>
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
        );
      default:
        return;
    }
  };

  return <div>{renderCard()}</div>;
};

export default LearningPathCard;
