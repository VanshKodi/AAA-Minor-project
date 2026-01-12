import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureCard from './FeatureCard';
import attendanceIcon from '../assets/people-attendence.svg';
import docIcon from '../assets/documents-docmanagement.svg';
import cloIcon from '../assets/achievement-clo_attainment.svg';
import aiIcon from '../assets/Sparkles--ai_tools.svg';

function GroupExample() {
  return (
    <Row xs={1} md={2} xl={4} className="g-4">
      <Col>
        <FeatureCard
          title="Attendance Analysis"
          description="Upload attendance Excel files and automatically generate Attendence reports "
          icon={<img src={attendanceIcon} alt="Attendance" width="50" height="50" />}
        />
      </Col>

      <Col>
        <FeatureCard
          title="Document Management"
          description="Organize documents for your organization so everything falls into one place."
          icon={<img src={docIcon} alt="Documents" width="50" height="50" />}
        />
      </Col>

      <Col>
        <FeatureCard
          title="CLO Attainment"
          description="Upload CLO-wise details to automatically generate CLO attainment sheets for academic evaluation."
          icon={<img src={cloIcon} alt="CLO" width="50" height="50" />}
        />
      </Col>
      
      <Col>
        <FeatureCard
          title="AI Chatbot"
          description="AI-chat with documents (RAG) present in document storage for context aware results."
          icon={<img src={aiIcon} alt="AI" width="50" height="50" />}
        />
      </Col>
    </Row>
  );
}

export default GroupExample;
