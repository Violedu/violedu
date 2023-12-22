import type { NextPage } from "next";
import styles from "./TermsContent.module.css";

const TermsContent: NextPage = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.title}>
        <div className={styles.introTitle}>Terms</div>
      </div>
      <div className={styles.content}>
        <div className={styles.paragraph}>
          <div className={styles.title1}>
            Lesson Duration and Future Acceptance
          </div>
          <div className={styles.text}>
            Each individual lesson has a duration of 45 minutes. Purchasing
            current lessons doesn’t guarantee future enrollment. Decisions about
            subsequent lessons will be made separately.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Student Responsibilities</div>
          <div className={styles.text}>
            Students are expected to attend punctually and adequately prepared.
            This entails instrumental practice, ensuring a stable internet
            connection, functional audio/video equipment, a charged device, and
            having all necessary sheet music ready (for an online lesson). If
            rescheduling a lesson is needed, the student should provide a
            24-hour notice. Recording lessons without consent or sharing
            instructional material is prohibited. Being late will not extend the
            standard 45-minute lesson duration.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>
            Live Lessons at Student's Residence
          </div>
          <div className={styles.text}>
            Live lessons are conducted at the student's residence within the
            Stuttgart town area. The student must provide a suitable environment
            conducive to learning, including a quiet space and proper lighting.
            The student is responsible for ensuring the safety and security of
            the location where the lesson will take place. In cases where the
            residence environment is deemed unsuitable for instruction (e.g.,
            excessive noise, inadequate space), the teacher reserves the right
            to cancel or reschedule the lesson.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Free Assessment Session</div>
          <div className={styles.text}>
            An invitation to an assessment session does not guarantee immediate
            enrollment into the program. This session provides an opportunity
            for the teacher to assess the student's proficiency level and ensure
            compatibility between the teacher's methodology and the individual
            needs and goals of the student. Its primary aim is to establish
            mutual understanding, thus optimizing the learning experience. The
            session will be conducted online and lasts for 30 minutes. Please
            note, the teacher reserves the right to decline enrollment if these
            criteria are not met during the session
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Level Determination</div>
          <div className={styles.text}>
            Admission to the program typically requires a minimum of 10 years of
            experience playing the instrument, given the program's advanced
            level. Nevertheless, students with less experience are encouraged to
            apply and will be assessed during the free session to determine
            their eligibility for the program.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Payment</div>
          <div className={styles.text}>
            Each lesson/learning path is payable via bank account provided via
            e-mail. Service and transaction fees are the responsibility of the
            student.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Rescheduling</div>
          <div className={styles.text}>
            Any requests for rescheduling must be made with a minimum 24-hour
            notice. Rescheduled lessons should be within two weeks and subject
            to the Teacher's availability. Valid reasons for rescheduling
            include physical injury (supported by evidence), health challenges
            (with a medical certificate), or mourning. Failing to reschedule
            within the timeframe of 3 days, without valid reasons, will not be
            accommodated.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>
            Lesson Cancellation or Changes by Teacher
          </div>
          <div className={styles.text}>
            The teacher may need to cancel or reschedule a live or online lesson
            due to unforeseen circumstances or emergencies. In such cases,
            reasonable efforts will be made to reschedule the lesson at a
            mutually convenient time.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Ending the Agreement</div>
          <div className={styles.text}>
            The teacher reserves the right to terminate the agreement for
            several reasons including failure to follow the lessons guidelines,
            mistreatment, payment issues, behavioral concerns, or other valid
            grounds. In the event of termination for these reasons, the Student
            remains responsible for payment. No further monthly payments are
            required post-termination; however, any previously made payments
            will be retained as compensation for any inconvenience caused.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Money Back Garantee</div>
          <div className={styles.text}>
            All learning paths include a 14-day money back garantee. Refund
            request should be made within 14 days from the date of enrollment or
            purchase. The guarantee might apply to specific circumstances such
            as dissatisfaction with the teaching methodology, course content, or
            instructor interaction. The refund policy does not cover cases where
            a student has violated the terms of service or engaged in
            misconduct.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Changes to this Terms Policy</div>
          <div className={styles.text}>
            We may update this terms policy from time to time. Any changes will
            be posted on this page, and the date of the latest revision will be
            indicated at the bottom.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Contact Us</div>
          <div className={styles.text}>
            If you have any questions or concerns about our terms policy, please
            contact us at contact@violedu.com.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.title1}>Your Acceptance of These Terms</div>
          <div className={styles.text}>
            By using this website, you agree to follow the rules and limitations
            stated in this terms policy. If you don't agree with these rules,
            please do not use this site. This terms policy may be revised from
            time to time by updating this posting. You are bound by any such
            revisions and should therefore periodically visit this page to
            review the current terms policy to which you are bound.
          </div>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.text}>Last Updated: January 1, 2024</div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;
