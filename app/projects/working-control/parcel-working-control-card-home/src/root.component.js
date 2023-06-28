import './root.component.scss';

export default function Root(props) {
  const go = () => {
    window.location.href = "working-control";
  }

  return <div onClick={go} className="working-control-card-home card-home">
    <span>Gestão Financeira</span>
  </div>
}
