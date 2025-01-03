import { useContext } from "react";
import {
  Modal,
  List,
  Fieldset,
  Tabs,
  Tab,
  Checkbox,
  ProgressBar,
  Avatar,
  TitleBar,
} from "@react95/core";
import { New16 } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

export default function Resume(props) {
  const showResume = props.show;
  const toggleShowResume = props.toggle;
  const handleCloseResume = () => {
    toggleShowResume(false);
  };

  const windowSmall = useWindowSize();

  // Define the default position
  const screenW = window.innerWidth * 0.04; // Initial width 50% of screen
  const screenH = -30;
  return (
    <>
      {showResume && (
        <Modal
          width="670px"
          // height="650px"
          icon={<New16 variant="16x16_4" />}
          title="Resume"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert("Help!");
              }}
            />,
            <Modal.Minimize />,
            <TitleBar.Close key="close" onClick={handleCloseResume} />,
          ]}
          // menu={[
          //   {
          //     name: (
          //       <>
          //         <u>F</u>ile
          //       </>
          //     ),
          //     list: (
          //       <List width="200px" className="dropdown-menu">
          //         <List.Item key="exit-item" onClick={handleCloseResume}>
          //           Exit
          //         </List.Item>
          //       </List>
          //     ),
          //   },
          //   {
          //     name: (
          //       <>
          //         <u>E</u>dit
          //       </>
          //     ),
          //     list: (
          //       <List width="200px" className="dropdown-menu">
          //         <List.Item key="copy-item">Copy</List.Item>
          //       </List>
          //     ),
          //   },
          // ]}
        >
          <Tabs defaultActiveTab="About">
            <Tab title="About">
              <h3>Hello! I'm Boston</h3>
              <Avatar src="./profilbilde.jpg" alt="" size="140px" />

              <p>a mechanical engineer</p>
              <Fieldset legend="About me">
                <p>
                  Im currently a student at Widener University
                  working for my bachelors in mechanical engineering.
                  Im a big part of the research teams at Widener University,
                  mainly focusing on material science and the development of
                  new manufacturing techniques.(3D printing, CNC machining, etc.)
                  See the "Papers" tab to read my published papers. Im just as
                  comfortable welding in the shop as I am writing data analysis code 
                  in the lab. I have a passion for design, learning and developing new skills.
                </p>
              </Fieldset>
              <Fieldset legend="Full Resume">
              <a href="https://github.com/bos-tn/myportfolio/blob/main/previewofresume.pdf">Get full resume PDF here! (preview) </a>
              </Fieldset>
            </Tab>
            <Tab title="Education">
              <Fieldset legend="Bachelor">
                <Checkbox readOnly checked>
                  <b>
                    Mechanical Engineering
                  </b>{" "}
                  at Widener University (Achieved 2025)
                </Checkbox>
              </Fieldset>
            </Tab>
            <Tab title="Experience">
              <Fieldset legend="Lab Manager">
                <Checkbox readOnly checked={false}>
                  <b> Widener University ME Lab</b>, where I managed the lab for 3D printing and AFM imaging
                  working under <a href="https://beslami.wordpress.com/">Babak Eslami, Ph.D. </a> (2023 - now)
                </Checkbox>
              </Fieldset>
            </Tab>
            <Tab title="Skills">
              <div
                style={
                  windowSmall
                    ? { height: window.innerHeight * 0.7, overflow: "auto" }
                    : null
                }
              >
                <div className="fieldset-container">
                  <Fieldset legend="Technical Skills">
                    <ul>
                      <li className="resume-skills">3D printing and Manufacturing</li>
                      <ProgressBar percent={95} width="200px" />
                      <li className="resume-skills">CAD Software</li>
                      <ProgressBar percent={90} width="200px" />
                      <li className="resume-skills">Testing and Measurment Tools</li>
                      <ProgressBar percent={88} width="200px" />
                      <li className="resume-skills">Data Analysis</li>
                      <ProgressBar percent={80} width="200px" />
                      <li className="resume-skills">Design Optimizaton</li>
                      <ProgressBar percent={78} width="200px" />
                      <li className="resume-skills">Programing and Scripting (mainly python)</li>
                      <ProgressBar percent={75} width="200px" />
                    </ul>
                  </Fieldset>
                  <Fieldset legend="Management Skills">
                    <ul>
                      <li className="resume-skills">Report Writing</li>
                      <ProgressBar percent={95} width="200px" />
                      <li className="resume-skills">Team Collaboration</li>
                      <ProgressBar percent={90} width="200px" />
                      <li className="resume-skills">Delegating</li>
                      <ProgressBar percent={89} width="200px" />
                    </ul>
                  </Fieldset>
                </div>
                <div className="lower-fieldset-container">
                  <Fieldset legend="Communication Skills">
                    <ul>
                      <li className="resume-skills">Presentations</li>
                      <ProgressBar percent={95} width="200px" />
                      <li className="resume-skills">Interpersonal Skills</li>
                      <ProgressBar percent={92} width="200px" />
                      <li className="resume-skills">Diagrams and Sketches</li>
                      <ProgressBar percent={90} width="200px" />
                    </ul>
                  </Fieldset>
                  <Fieldset legend="Soft Skills">
                    <ul className="center-content">
                      <li>
                        While at Widener University I have picked up a lot while managing the lab.
                        I have learned to work with a variety of people, to communicate effectively,
                        and at the same time get work done. This tab previews my comfort with these,
                        look to my full resume to see details in the About tab.
                      </li>
                    </ul>
                  </Fieldset>
                </div>
              </div>
            </Tab>
            <Tab title="Personality">
              <div
                style={
                  windowSmall
                    ? { height: window.innerHeight * 0.7, overflow: "auto" }
                    : null
                }
              >             
                <Fieldset legend="Team Role">
                  <ul>
                    <li className="resume-skills">
                      Direct and analytical
                    </li>

                    <li className="resume-skills">
                      Teamworker, Planer, and Implementer
                    </li>
                  </ul>
                </Fieldset>
                <Fieldset legend="Signature Strengths">
                  <ul>
                    <li className="resume-skills">Critical Thinking</li>
                    <li className="resume-skills">Problem-Solving</li>
                    <li className="resume-skills">Creativity</li>
                    <li className="resume-skills">Perseverance</li>
                    <li className="resume-skills">Leadership and Vision</li>
                    <li className="resume-skills">Adaptability</li>
                  </ul>
                </Fieldset>
              </div>
            </Tab>
          </Tabs>
        </Modal>
      )}
    </>
  );
}
