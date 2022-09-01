import './root.component.scss';

export default function Root(props) {
  const go = () => {
    window.location.href = "portfolio";
  }

  return <div onClick={go} className="parcel-portfolio-card-home card-home">
    <span>Portfolio</span>
  </div>
}
