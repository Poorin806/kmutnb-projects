import PropTypes from "prop-types";

export default function EmployeeList({
  employeeList,
  openModal,
  deleteEmployee,
}) {
  return (
    /* 
      Outer container:
      - w-full: full width of parent
    */
    <div className="w-full">
      {/* 
        Table element:
        - w-full: full width
        - border-collapse: collapse table borders
        - border: outer border
        - border-gray-400: medium gray border color
      */}
      <table className="w-full border-collapse border border-gray-400">
        {/* Table header */}
        <thead>
          <tr>
            {/* 
              Header cells:
              - border: cell border
              - border-gray-300: light gray border
              - px-2: horizontal padding (8px)
              - py-1: vertical padding (4px)
            */}
            <th className="border border-gray-300 px-2 py-1">ID</th>
            <th className="border border-gray-300 px-2 py-1">Name</th>
            <th className="border border-gray-300 px-2 py-1">Age</th>
            <th className="border border-gray-300 px-2 py-1">Position</th>
            <th className="border border-gray-300 px-2 py-1">Actions</th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
          {employeeList.map((row) => (
            <tr key={row.id}>
              {/* 
                Data cells:
                - border: cell border
                - border-gray-300: light gray border
                - px-2: horizontal padding (8px)
                - py-1: vertical padding (4px)
              */}
              <td className="border border-gray-300 px-2 py-1">{row.id}</td>
              <td className="border border-gray-300 px-2 py-1">{row.name}</td>
              <td className="border border-gray-300 px-2 py-1">{row.age}</td>
              <td className="border border-gray-300 px-2 py-1">
                {row.position}
              </td>

              {/* 
                Actions cell:
                - flex: horizontal layout for buttons
                - items-center: vertical alignment
                - gap-4: spacing between buttons (16px)
                - border: cell border
                - border-gray-300: light gray border
                - px-2 py-1: padding
              */}
              <td className="flex items-center gap-4 border border-gray-300 px-2 py-1">
                {/* 
                  Edit button:
                  - h-6: height 24px
                  - w-16: width 64px
                  - rounded: border-radius
                  - bg-yellow-400: yellow background
                  - text-white: white text
                  - outline-none: remove default focus outline
                */}
                <button
                  className="h-6 w-16 rounded bg-yellow-400 text-white outline-none"
                  onClick={() => openModal(row)}
                >
                  Edit
                </button>

                {/* 
                  Delete button:
                  - same layout as Edit, but red background
                */}
                <button
                  className="h-6 w-16 rounded bg-red-400 text-white outline-none"
                  onClick={() => {
                    if (window.confirm("Are you sure?")) {
                      deleteEmployee(row.id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

EmployeeList.propTypes = {
  employeeList: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};
