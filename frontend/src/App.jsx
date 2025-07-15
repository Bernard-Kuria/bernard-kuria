import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

import FrontPage from "./Front_page/Front-page.jsx";

library.add(faXmark);
library.add(faSortUp);
library.add(faSortDown);
library.add(faArrowsRotate);
import "./App.css";

const initialMilestones = [
  {
    id: "milestone1",
    year: 2023,
    title: "1st Place JKUAT Hackathon",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "The KAPS Hackathon was hosted by JKUAT in 2024 and featured over 50 projects. The projects were grouped into different classes such as Health, APIs, robotics, Finance, as so on. My group's project 'AfyaPulse' was one which was featured under APIs. The team consisted of 5 members; 2 mechatronics undergrads, 2 electrical undergrads and 1 business undergrad, where I was the supervisor. I coordinated all the activities and ensured we met the deadlines. The project was about a health monitoring device which we built its prototype. Basically, the device was made to monitor the health conditions of patients who are suffering from chronic illnesses. Our project was highly competitive because of it's creativity, scalability and potential for implementing it to a business.",
      },
      {
        type: "paragraph",
        content:
          "The device was initially targetting diabetic patients and it consisted of:",
      },
      {
        type: "list",
        items: [
          "Sensors: blood oxygen levels, body temp, pulse rate,...",
          "A software to detect the signs in real time",
          "A system to send text alerts to your phone in case of vital sign reading",
          "A microchip to gather data and send to a server",
          "Detecting pandemic signs such as covid by reading common signs from users in a certain place",
          "Sending alerts to a medical facility (still improving)",
        ],
      },
    ],
  },
  {
    id: "milestone2",
    year: 2024,
    title: "E-NEXUS Start-up",
    bubbleSize: 250,
    description: [
      {
        type: "paragraph",
        content:
          "E-Nexus is an online platform that connects e-waste producers and consumers through e-commerce as well as stramlining the collection process by organizations. We prioritize combating environmental and health risks associated with e-waste. By doing so, we aim to create employment opportunities and support the growth of local businesses.",
      },
    ],
  },
  {
    id: "milestone3",
    year: 2023,
    title: "3rd place Mt Kenya Hackathon",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "Mt-Kenya Hub is an institute located in Nyeri that helps people with ideas to grow them into a business. Check them out here: https://mtkenyahub.com/ea/. It is headed by Savio Wambugu who is also the president of the Association of Countrywide Innovation Hubs. They hold hackathons anually --usually towards the end of the year. The project that I pitched during that hackathon was my E-Nexus startup, which is now in the process of being made into a startup. E-NEXUS is an online platform that connects e-waste producers and consumers through e-commerce as well as stramlining the collection process by organizations. We prioritize combating environmental and health risks associated with e-waste. By doing so, we aim to create employment opportunities and support the growth of local businesses.",
      },
      {
        type: "paragraph",
        content: "At that time, my team consisted of three members:",
      },
      {
        type: "list",
        items: [
          "Bernard Kuria (Me)",
          "Esther Njeri (Electrical and Control undergrad)",
          "Katasi Kolia (Mechatronics undergrad)",
        ],
      },
    ],
  },
  {
    id: "milestone4",
    year: 2024,
    title: "AfyaPulse Start-up",
    bubbleSize: 250,
    description: [
      {
        type: "paragraph",
        content:
          "This startup is still not launched yet, but here's a glimpse of what we're working on",
      },
      {
        type: "paragraph",
        content:
          "AfyaPulse is a product aimed at helping people living with chronic diseases live normal lives. This is achieved by developing a wearable device which will help monitor the patients in real-time, alert both the patient and the doctor in case of emergencies and provide statistical analysis to help one manage his/her health in a way that is simple and informative. We also provide web-services to help the doctor manage his patients, prioritise on important tasks and ease evaluation-related work by accessing individual patient data.",
      },
    ],
  },
  {
    id: "milestone5",
    year: 2023,
    title: "Self-Balancing Robot",
    bubbleSize: 150,
    description: [
      {
        type: "paragraph",
        content:
          "Robotic mobility has witnessed a transformation over time with the introduction of two wheeled robots which are not only flexible but also have a better, sophisticated control system. Their stability control mechanisms are very different from the already existing conventional ones in that they can be able to navigate different terrains while maintaining their upright position. This gives them an upper hand thus much consideration for commercial purposes and entertainment for example in healthcare systems.",
      },
      {
        type: "paragraph",
        content:
          "This project covers the development of the robot, designing, testing, experimenting and optimizing its control variables in order to come up with a stable system that is safe to use. To achieve this, the structural components of the robot for example the plates, supports and motors were designed in SolidWorks software before carrying out stress analysis to check their viability. The Arduino micro controller was programmed so as to run the control algorithm and was also used to receive and process data from the sensors i.e., the Motion Processing Unit (MPU 6050). This project integrates stabilized motion control seamlessly, allowing the two wheeled robot to move and rotate without compromising its stability.",
      },
    ],
  },
  {
    id: "milestone6",
    year: 2024,
    title: "Job at KEDA Ceramics",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "KEDA Ceramics is a company that is located in Kajiado county, Kenya (not their main office) where they manufacture tiles. Check them out here https://www.twyfordtile.com/",
      },
      {
        type: "paragraph",
        content:
          "Despite working there for 8 months, I was able to learn quite a lot. I gained real-life skills in the industry sector that push me even to date to help me work in various sectors. Within my first three months, I was temporarily promoted to section leader in one of the sections in the company. I showed good potential to work in different conditions and my productivity was quite high. If it were not for the fact that I got another job opportunity, I would've been promoted to even higher rankings.",
      },
    ],
  },
  {
    id: "milestone7",
    year: 2025,
    title: "Internship at onQ Kenya",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "onQ Global is a call center company located in Nyeri county, Kenya. I start my internship there on March 3rd 2025 and up to date I'm still employed there. Based on the client I was given, my work is to receive calls from customers and help them book vehicles. You can check them out here https://www.onqglobal.com/",
      },
    ],
  },
  {
    id: "milestone8",
    year: 2025,
    title: "This portfolio website",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "Basically, the agenda of this portfolio website your browsing right now, is to publisize my work and showcase my skills. A platform where I'm only restricted by my own creativity.",
      },
    ],
  },
  {
    id: "milestone9",
    year: 2024,
    title: "Graduated from Dedan Kimathi University",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "Yeah, that's right. I studied a bachelor's degree in Mechatronics engineering at Dedan Kimathi University of Technology and graduated with a 2nd honors degree. I studied from 2019 to 2024. Check out the University here https://www.dkut.ac.ke/",
      },
    ],
  },
  {
    id: "milestone10",
    year: 2022,
    title: "Participant at ElectronicWings Competition",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "This was a small project that I worked on in my fourth year of studies at dedan kimathi. It was an international competition from a company based in India. In my project, I made a small wooden house to show how electronics can be used to automate a house. Therefore I made a circuit to control all the electronic appliances in a house. I also worked with my colleague to who made a mobile app, therefore every applicance could be implemented from a mobile app. Check them out here https://www.electronicwings.com/",
      },
      {
        type: "paragraph",
        content:
          "Check out more about my project here https://www.electronicwings.com/users/IsaiahBernard/projects/2433/iot-based-home-automation-system",
      },
    ],
  },
  {
    id: "milestone11",
    year: 2023,
    title: "Participant at World Engineering Day Hackathon",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "I worked on this project for sometime in 2024, but I was not sure where to present it. So when I heard about the world engineering Day Hackathon, I knew I had to sieze that opportunity. It's the same E-NEXUS project that is discussed later on in this website. Check out their website here https://worldengineeringday.net/listing/world-engineering-day-for-sustainable-development-2/",
      },
    ],
  },
  {
    id: "milestone12",
    year: 2021,
    title: "First paid job",
    bubbleSize: 200,
    description: [
      {
        type: "paragraph",
        content:
          "Oh, what can I say here 😅, I was so over my head with this but I had full confidence in myself. I worked on this project in 2022. This was a master's civil engineering student's project, she wanted someone to automate her project because there was a lot of manual adjustments. In the end, it was one of the best embedded systems project I've ever done. Find the full description below:",
      },
    ],
  },
];

const AboutMe = {
  "Top Skills": {
    front: "What I'm good At",
    back: (
      <ul>
        <li>Web Dev</li>
        <li>Embedded Systems</li>
        <li>UI/UX</li>
        <li>Electronics Integration</li>
        <li>IoT</li>
      </ul>
    ),
  },
  "Biggest Achievements": {
    front: "Proud Moments",
    back: (
      <ul>
        <li>1st Place at JKUAT Hackathon</li>
        <li>Founded E-NEXUS</li>
        <li>Built a self-balancing robot</li>
      </ul>
    ),
  },
  "Passion Projects": {
    front: "What I Build for Fun",
    back: (
      <ul>
        <li>tech demos</li>
        <li>Smart Systems</li>
        <li>tools for local businesses</li>
      </ul>
    ),
  },
  "Fun Fact": {
    front: "Bet You Didn't Know 😏",
    back: (
      <ul>
        <li>I once cycled 43km (Follow me on Strava)</li>
        <li>I'm an excellent cook, dancer and driver 😎</li>
        <li>I own a startup company 🥵</li>
        <li>I debug code late in the night</li>
        <li>I love adventure: Hicking, site-seeing, you name it</li>
      </ul>
    ),
  },
  "My Work Style": {
    front: "How I Work",
    back: (
      <ul>
        <li>Creative</li>
        <li>Curious</li>
        <li>Fast when focused</li>
        <li>Loves a clean UI and reusable code</li>
      </ul>
    ),
  },
  "Random Life Truth": {
    front: "Something I believe",
    back: "You don't need to be ready, just say yes, show up, and figure it out",
  },
};

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <FrontPage
                  AboutMe={AboutMe}
                  initialMilestones={initialMilestones}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
