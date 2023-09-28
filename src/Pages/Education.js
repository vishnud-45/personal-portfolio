import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Education() {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2016 - 2018"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Keshav Reddy School
        </h3>
        <p> SSC - 88%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018 - 2020"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Aspirants IIT Academy
        </h3>
        <p> Intermediate - 94%</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2024"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          VNR VJIET
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
        </h4>

        <p> Computer Science-8.19</p>
        
      </VerticalTimelineElement>


     
    </VerticalTimeline>
  </div>
  )
}

export default Education