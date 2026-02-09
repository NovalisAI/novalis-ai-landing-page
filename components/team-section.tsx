import * as React from "react";

interface TeamMember {
  name: string;
  image: string;
  role?: string;
}

interface SimpleTeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
  className?: string;
}

const SimpleTeamSection = React.forwardRef<
  HTMLDivElement,
  SimpleTeamSectionProps
>(({ title, description, members, className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={"w-full py-16 bg-white " + (className || "")}
      {...props}
    >
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
          {title}
        </h2>
        <p className="max-w-2xl text-gray-600 mb-8 text-base md:text-lg">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 border border-gray-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-3 border border-gray-300"
              />
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {member.name}
              </div>
              {member.role && (
                <div className="text-sm text-gray-500 mb-1">{member.role}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SimpleTeamSection.displayName = "SimpleTeamSection";

export { SimpleTeamSection };
