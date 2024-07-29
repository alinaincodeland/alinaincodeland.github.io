import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <div class="timeline-section" id="trajectory">
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
            Developed competency in Ruby, HAML and BEM by running A/B tests to
            improve user retention and implementing unit and integration tests.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="06.23 - 10.23"
        >
          <h4 className="timeline-title">Frontend Development Intern</h4>
          <h5 className="timeline-subtitle">plista Gmbh</h5>

          <p>
            Developed competency in Angular, TypeScript, and Storybook by
            successfully deploying frontend features and collaborating with
            design and frontend teams using Git/Gitlab, Jira, and Figma.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="04.23 - 05.23"
        >
          <h4 className="timeline-title">Frontend Development Intern</h4>
          <h5 className="timeline-subtitle">Comgy GmbH</h5>

          <p>
            Substituted Vuetify 2 framework on an internal business platform
            with Tailwind CSS custom components.
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
            One-year full-time training in MERN stack where I consolidated my
            web development skills through practical exercises and group
            projects.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="02.21 - 03.22"
        >
          <h4 className="timeline-title">People and Office Manager</h4>
          <h5 className="timeline-subtitle">Compado GmbH</h5>
          <p>
            Coordinated the design and development of a new corporate website.
            Planned and executed company events, perks & benefits,
            on/off-boarding and office tasks.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
