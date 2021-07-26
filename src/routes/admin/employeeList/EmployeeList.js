import BodyTable from "../pages/admin/leaveRequest/BodyTable";
export default class LeaveRequest extends Component {
  render() {
    return (
      <div className="leaveDetail">
        <a className="leaveDetail__header" style={{textDecoration:"none"}}>Employee List</a>
        <div className="leaveDetail__header--line"></div>
        <BodyTable />
      </div>
    );
  }
}
