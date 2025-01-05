import type { NextPage } from "next";
import styles from "./PrivacyContent.module.css";

const PrivacyContent: NextPage = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.title}>
        <div className={styles.introTitle}>Privacy</div>
      </div>
      <div className={styles.content}>
        <div className={styles.paragraph}>
          <div className={styles.text}>
            We acknowledge and value the privacy considerations of our website
            users at www.violedu.com, as well as those utilizing the associated
            services. This privacy statement is presented to clarify the
            collection of information that occurs when visitors access the site
            and explain potential uses of such gathered information. By using
            any services on this site, you agree to the terms of this privacy
            policy. You shouldn’t use any services if you don’t agree with this
            privacy policy.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Information We Collect</div>
          <div className={styles.text}>
            We collect various types of information when you submit a lesson
            request, including your full name, email, age, years of playing the
            violin, country of residence, preferred teaching method (in person
            or online), and your chosen learning path (single or multiple
            lessons). This information is utilized to process your lesson
            requests, communicate with you about scheduling and updates, and
            enhance our platform and services. We may utilize your contact
            details to share updates about our platform and products with you.
            If you wish to discontinue receiving such communications, you can
            easily opt out using the options provided below.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Choice/Opt-Out</div>
          <div className={styles.text}>
            Our website may offer you the choice to subscribe to communications
            when we collect information from you. You can always choose to
            exclude yourself from any email list, thus stopping future
            communications. To remove your name from our list, you can also send
            an email to contact@violedu.com. Please attach the unwanted email to
            your request and explicitly express your desire to be removed from
            our mailing list.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>
            Information Sharing and Disclosure
          </div>
          <div className={styles.text}>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to third parties. We reserve the right to
            disclose user information under specific circumstances. This action
            may be undertaken when there is a reasonable basis to believe that
            the disclosure is essential for the identification, contact, or
            initiation of legal proceedings against an individual who might be
            causing harm or interference, whether intentional or unintentional,
            to the site's rights, property, other site users, or any other party
            at risk of harm due to such activities. Additionally, we may find
            ourself obligated to reveal personal information in compliance with
            lawful requests from public authorities. This includes instances
            where such disclosure is necessary to meet national security or law
            enforcement requirements.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Security</div>
          <div className={styles.text}>
            We are committed to ensure the security of your information. We
            implement a variety of security measures to maintain the safety of
            your personal information.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Links to External Sites</div>
          <div className={styles.text}>
            We are not responsible for the content or practices of third-party
            websites linked to our platform. We are also not responsible for any
            information that visitors might share with such linked websites.
            Visitors should refer to each website’s respective privacy policy
            and practices prior to disclosing any information.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Changes to this Privacy Policy</div>
          <div className={styles.text}>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page, and the date of the latest revision
            will be indicated at the bottom.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Contact Us</div>
          <div className={styles.text}>
            If you have any questions or concerns about our privacy policy,
            please contact us at contact@violedu.com.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Your Acceptance of These Terms</div>
          <div className={styles.text}>
            By using this website, you agree to follow the rules and limitations
            stated in this privacy policy. If you don't agree with these rules,
            please do not use this site. This privacy policy may be revised from
            time to time by updating this posting. You are bound by any such
            revisions and should therefore periodically visit this page to
            review the current privacy policy to which you are bound.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.text}>Last Updated: January 1, 2025</div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
