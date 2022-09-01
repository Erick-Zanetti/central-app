import './root.component.scss';

export default function Root(props) {
  const go = () => {
    window.location.href = "to-do-list";
  }

  return <div onClick={go} className="parcel-to-do-list-card-home card-home">
    <span>ToDo List</span>
  </div>
}
