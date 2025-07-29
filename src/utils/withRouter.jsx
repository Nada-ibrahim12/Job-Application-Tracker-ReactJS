import { useParams, useNavigate } from "react-router-dom";

export function withRouter(Component) {
  return function Wrapper(props) {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
  };
}
