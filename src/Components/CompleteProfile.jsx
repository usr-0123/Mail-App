import "./CompleteProfile.css";

const CompleteProfile = () => {
  return (
    <div className="complete-profile">
      <div>Complete Your Profile</div>
      <div className="scale">
        <progress value={80} max={100}></progress>
        <p>80%</p>
      </div>
    </div>
  );
};

export default CompleteProfile;
