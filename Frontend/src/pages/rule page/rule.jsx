// import { Link } from "react-router-dom"; 

/* <Link to="/studentLogin" className="back-login">
Back to Login</Link> */
import { Link } from "react-router-dom";
import "./rule.css";

function HostelRules() {
  return (
    <div className="rules-container">

      {/* Header */}
      <header className="header">
        Hostel Management – Rules & Regulations
      </header>

      <div className="rules-columns">

        {/* ========== GENERAL RULES ========== */}
        <div className="rule-section">
          <h2>General Rules and Regulations</h2>
          <ul>
            <li>Smoking, alcohol, & narcotics consumption is strictly prohibited in and around the hostel premises.</li>
            <li>Strict adherence to the prescribed dress code is required. Decency in dressing is must.</li>
            <li>Birthday and other celebrations are strictly prohibited in hostel.</li>
            <li>The Management and staff will not be responsible for personal belongings.</li>
            <li>Students must keep the room and campus clean. Defacing walls furniture is strictly prohibited.</li>
            <li>Students must turn all off the electrical equipment and lights before leaving their rooms.</li>
            <li>Students are not allowed to use electrical heaters, induction, etc in rooms.</li>
            <li>Students are no allowed to form organize any political group or activities in their rooms.</li>
            <li>No outsider/ students / Guest will be allowed in the hostel</li>
            <li>Any complaints regarding electric equipment, plumbing etc is required to be entered in the (complaint box)</li>
            <li>Students should not enter rooms of others students without permission.</li>
            <li>Collection of funds of any sort should never be done for any purpose without the permission of the Chief Warden.</li>
            <li>Display of information of any sort in the Hostel notice boards or at any other place in the Hostel without the permission of Hostel superintendent is prohibited.</li>
            <li>Students should wear proper dress while in their Rooms, Mess Hall and on Hostel premises.</li>
            <li>Students During the stay in the hostel will be governed by the management rules.</li>
            <li>SILENCE : Strict Silence Shall Be Observed In Hostel From 11 Pm To 5:30 Pm No Music/Loud Talking Audible Outside The Room</li>
            <h2>Visitors Instructions</h2>
            <ul>
            <li>Visitor are not allowed Beyond the visitors  room.</li>
            <li>Visitors other than mentioned and noted at the time of admission will not be allowed to enter the premises.</li>
          </ul>
          </ul>
        </div>

        {/* ========== MESS RULES ========== */}
        <div className="rule-section">
          <h2>Mess Rules</h2>
          <ul>
            <li>No meal or refreshment shall be served to boarders outside the dining hall except with the permission of the warden in case of emergency.</li>
            <li>Neither the committee nor any other students have the right to stop food or other mess facilities for any bona fide students of the mess. If any such act is found, the student shall be expelled from the hostel and mess by the warden with immediate effect.</li>
            <li>Students should treat all the mess workers with courtesy. Misbehaving with any staff or using abusive language against them will result in the immediate expulsion of the student after due enquiry.</li>
            <li>Any grievance or suggestion by the committee should be reported to the warden.</li>
            <li>Students should sign the mess entry register kept in the mess for the requirement of non-vegetarian food (chicken/eggs/mutton) one day prior, as per the menu and requirement.</li>
            <li>Hostelites found violating the rules and regulations of the mess and hostel are liable to be expelled from the hostel.2</li>
            <li>Use napkin while dining</li>
          </ul>
          <h2>Mess Timing</h2>
          <ul>
            <li>Break Fast- 7:00 AM To 9:00 AM</li>
            <li>Lunch- 9:00 AM To 2:30 PM</li>
            <li>Dinner- 7:15 PM To 8:30 PM</li>
          </ul>
        </div>

        {/* ========== LIBRARY RULES ========== */}
        <div className="rule-section">
          <h2>Library Rules</h2>
          <ul>
            <li>Maintain silence at all times.</li>
            <li>Books must be returned within 14 days.</li>
            <li>Late return will result in a fine.</li>
            <li>Keep mobiles on silent mode.</li>
            <li>Damaged or lost books must be replaced.</li>
          </ul>
          <h2>Students In-Out Rules</h2>
          <ul>
            <li>Students can be permitted to visit their home town once in month only with the written permission from their parents.</li>
            <li>Students are not allowed to leave hostel with any of the visitors.</li>
            <li>No specific night out permitted to students of hostel</li>
            <li>Students are not allowed to have night outs or late coming for any kind of family function/celebrations/gatherings or social events outside.</li>
            <li>Hostel administration can deny entry to any of the visitors.</li>
          </ul>
        </div>

      </div>


      <footer className="footer">
        © 2025 Hostel Management System | All Rights Reserved
      </footer>
    </div>
  );
}

export default HostelRules;




