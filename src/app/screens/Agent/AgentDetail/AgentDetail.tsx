import { useParams } from "react-router-dom";

export function AgentDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>AgentDetail:{id}</h1>
    </div>
  );
}
