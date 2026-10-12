import type { CSSProperties } from "react";
import { Icon } from "../../../components/shared/icons";
import { PILLAR_SCENES } from "../content";

/**
 * The three small moving scenes at the top of the statement cards.
 * They are drawn with plain HTML; all the motion lives in home.css under
 * "3. Statement + three summary cards → scenes", and only plays while the
 * card is active (the card gets the class `is-active`).
 * Words, names and amounts come from PILLAR_SCENES in ../content.ts.
 */

/** 01 · A class board. Students slide from the left class to the right one, one by one. */
export function RecordsScene() {
  const { from, to, students, tag } = PILLAR_SCENES.records;

  return (
    <div className="scene scene-records">
      {/* A pretend app: thin side rail and a header */}
      <div className="scene-rail">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="scene-app">
        <div className="scene-bars">
          <i style={{ width: "38%" }} />
          <i style={{ width: "22%" }} />
        </div>

        <div className="class-board">
          {[from, to].map((className, column) => (
            <div key={className} className="class-column">
              <span className="class-name">{className}</span>
              {students.map((student, i) => {
                const heldBack = "heldBack" in student && student.heldBack;
                // Held-back students stay in the first class; everyone else moves across.
                const role = column === 0 ? (heldBack ? "stays" : "leaves") : heldBack ? "never" : "arrives";
                return (
                  <span
                    key={student.initials}
                    className={`student-chip is-${role}`}
                    style={{ "--i": i } as CSSProperties}
                  >
                    <b>{student.initials}</b>
                    {student.name}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <span className="scene-tag">{tag}</span>
    </div>
  );
}

/** 02 · An invoice. The bar fills while the transfer is matched, then the status turns to paid. */
export function MoneyScene() {
  const { number, title, amount, pending, done } = PILLAR_SCENES.money;

  return (
    <div className="scene scene-money">
      <div className="invoice-card">
        <div className="invoice-top">
          <span>{number}</span>
          <span className="invoice-avatar">
            <Icon name="family" size={12} />
          </span>
        </div>
        <p className="invoice-title">
          <Icon name="naira" size={15} />
          {title}
        </p>
        <strong className="invoice-amount">{amount}</strong>
        <div className="invoice-progress">
          <i />
        </div>
        <div className="invoice-status">
          <span className="status-chip is-pending">
            <span className="status-dots">
              <i />
              <i />
              <i />
            </span>
            {pending}
          </span>
          <span className="status-chip is-done">
            <Icon name="check" size={13} />
            {done}
          </span>
        </div>
      </div>
    </div>
  );
}

/** 03 · The audit log, scrolling past like a code file. Approvals are marked green or amber. */
export function ApprovalsScene() {
  const { lines } = PILLAR_SCENES.approvals;

  return (
    <div className="scene scene-approvals">
      {/* The list is drawn twice so the scroll loops without a jump */}
      <ol className="log-track">
        {[...lines, ...lines].map((line, i) => (
          <li key={i} className={`log-line ${line.tone ? `is-${line.tone}` : ""}`} aria-hidden={i >= lines.length}>
            <span className="log-time">{line.time}</span>
            <span className="log-action">{line.action}</span>
            <span className="log-detail">{line.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
