import BodyTable from "../pages/admin/leaveRequest/BodyTable";
export default class LeaveRequest extends Component {
  render() {
    return (
      <div className="leaveDetail">
        <a className="leaveDetail__header" style={{textDecoration:"none"}}>Employee Leave Request</a>
        <div className="leaveDetail__header--line"></div>
        <div className="leaveDetail__button">
          <button className="leaveDetail__button--style">Leave Request</button>
        </div>
        <BodyTable />
      </div>
    );
  }
}
