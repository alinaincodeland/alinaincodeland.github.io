import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <div className="timeline-section">
      <h1 className="timeline-section-title">Professional trajectory</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="03.24 - 07.24"
        >
          <h4 className="timeline-title">Frontend Engineer</h4>
          <h5 className="timeline-subtitle">sofatutor GmbH</h5>

          <p>
            Honed my skills in Ruby on Rails, HAML, and BEM by crafting and
            running A/B tests to boost user retention, alongside implementing
            unit and integration tests.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="06.23 - 10.23"
        >
          <h4 className="timeline-title">Frontend Development Intern</h4>
          <h5 className="timeline-subtitle">plista GmbH</h5>

          <p>
            Mastered Angular, TypeScript, and Storybook by launching frontend
            features and working seamlessly with design and frontend teams using
            Git/Gitlab, Jira, and Figma.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="04.23 - 05.23"
        >
          <h4 className="timeline-title">Frontend Development Intern</h4>
          <h5 className="timeline-subtitle">Comgy GmbH</h5>

          <p>
            Revamped an internal business platform by substituting Vuetify 2
            framework with custom Tailwind CSS components.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="04.22 - 03.22"
        >
          <h4 className="timeline-title">Full Stack Web Development</h4>
          <h5 className="timeline-subtitle">
            DCI Digital Career Institute, Apprenticeship
          </h5>
          <p>
            Completed an intensive year-long training in the MERN stack,
            solidifying my web development expertise through hands-on exercises
            and collaborative projects.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="02.21 - 03.22"
        >
          <h4 className="timeline-title">People and Office Manager</h4>
          <h5 className="timeline-subtitle">Compado GmbH</h5>
          <p>
            Led the design and development of a new corporate website. Also took
            charge of planning and executing company events, managing perks &
            benefits, and handling on/off-boarding and office tasks.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
