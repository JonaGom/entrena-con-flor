import { membershipAxes } from "@/data/content";

export default function PlanAxesTable() {
  return (
    <div className="max-w-4xl mx-auto overflow-x-auto">
      <table className="w-full border-collapse text-left min-w-[560px]">
        <thead>
          <tr>
            <th className="text-[13px] uppercase tracking-wide text-muted font-bold pb-3 pr-4 w-1/4">
              &nbsp;
            </th>
            <th className="text-[13px] uppercase tracking-wide text-accent-dark font-bold pb-3 px-4">
              Solo 1 disciplina
            </th>
            <th className="text-[13px] uppercase tracking-wide text-accent-dark font-bold pb-3 px-4">
              Full Access · 1 mes
            </th>
            <th className="text-[13px] uppercase tracking-wide text-white font-bold pb-3 px-4 bg-accent rounded-t-xl">
              Full Access · 3 meses
            </th>
          </tr>
        </thead>
        <tbody>
          {membershipAxes.map((row, i) => (
            <tr key={row.axis} className="align-top">
              <td
                className={
                  "text-sm font-semibold pr-4 py-4 " + (i !== 0 ? "border-t border-accent-light" : "")
                }
              >
                {row.axis}
              </td>
              <td
                className={
                  "text-sm text-muted px-4 py-4 " + (i !== 0 ? "border-t border-accent-light" : "")
                }
              >
                {row.single}
              </td>
              <td
                className={
                  "text-sm text-muted px-4 py-4 " + (i !== 0 ? "border-t border-accent-light" : "")
                }
              >
                {row.full1}
              </td>
              <td
                className={
                  "text-sm px-4 py-4 bg-accent-light " +
                  (i === membershipAxes.length - 1 ? "rounded-b-xl" : "")
                }
              >
                {row.full3}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
