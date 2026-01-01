import { Verb } from "@/types";

interface CardProps {
  verb: Verb;
}

export default function Card({ verb }: CardProps) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title h4">{verb.italian}</h2>
          <p className="card-text text-muted">{verb.english}</p>
        </div>
      </div>
    </div>
  );
}
