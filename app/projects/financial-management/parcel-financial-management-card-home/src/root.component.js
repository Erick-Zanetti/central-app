import './root.component.scss';

export default function Root(props) {
  const go = () => {
    window.location.href = "financial-management";
  }

  return <div onClick={go} className="financial-management-card-home card-home">
    <span>Gestão Financeira</span>
  </div>
}
