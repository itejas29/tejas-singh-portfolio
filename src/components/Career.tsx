import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Metis Intellisystem Ltd</h5>
              </div>
              <h3>May–Jun 2026</h3>
            </div>
            <p>
              Worked on AI automation and software development projects, contributing to real world client solutions, internal tools, and workflow automation initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Winner</h4>
                <h5>Breach FinTech Hackathon</h5>
              </div>
              <h3>Jan 2026</h3>
            </div>
            <p>
              Built AttackSimulator AlphaCore, a cybersecurity platform simulating phishing attacks with real-time user interaction tracking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>2nd Runner Up</h4>
                <h5>Tic Tac Toe Hackathon – DAIICT</h5>
              </div>
              <h3>Mar 2026</h3>
            </div>
            <p>
              <strong>Project: Agentic AI MCP</strong> <br />
              Built an Agentic AI system that automated tasks across multiple platforms through natural language prompts. Integrated tools such as GitHub, Jira, Slack, Email, and other services so users could perform multi-step workflows using a single prompt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
