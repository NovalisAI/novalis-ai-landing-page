"use client";

interface TeamMember {
  name: string;
  role: string;
  color: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Amélie Laurent",
    role: "Founder & CEO",
    color: "blue",
    bio: "Former co-founder of Openium. Early staff at Spotify and Clearbit.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
  },
  {
    name: "Nikolas Gibbons",
    role: "Engineering Manager",
    color: "purple",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Sienna Hewitt",
    role: "Product Manager",
    color: "orange",
    bio: "Former PM for Linear, Lambda, School, and Oh Deck.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
  },
  {
    name: "Lily-Rose Chedjou",
    role: "Designer",
    color: "pink",
    bio: "Former frontend dev for Linear, Copilot, and Postorgit.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Zahra Christensen",
    role: "Backend Developer",
    color: "red",
    bio: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
  },
  {
    name: "Caitlyn King",
    role: "Product Designer",
    color: "green",
    bio: "Founding design team at Figma. Former Stripe and Tile.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        .image-container {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .member-image {
          transition: transform 0.3s ease;
        }

        .team-member-card:hover .member-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(to top, #b8860b 0%, rgba(184, 134, 11, 0) 100%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-member-card:hover .image-overlay {
          opacity: 0.15;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-primary mb-2">Our team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Leadership team
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            We're a cross-disciplinary team with a wealth of experience that
            loves to create great experiences for our customers.
          </p>
        </div>

        {/* Team Grid - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="team-member-card">
              <div className="flex gap-4 sm:gap-6">
                {/* Image */}
                <div className="flex-shrink-0 image-container">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="member-image w-24 h-24 sm:w-32 sm:h-32 object-cover"
                  />
                  <div className="image-overlay" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {member.bio}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="inline-block text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 19c11 0 17-9 17-16.6 0-.25 0-.5 0-.75A12.1 12.1 0 0023 4.1c-1.1.5-2.3.8-3.6.95 1.3-.8 2.3-2 2.8-3.5-1.2.7-2.6 1.2-4 1.5-1.2-1.3-2.9-2.1-4.8-2.1-3.6 0-6.6 2.9-6.6 6.6 0 .5.05 1 .15 1.5C7 7 3.7 5.1 1.5 2.2c-.6 1-1 2.3-1 3.6 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 6.4-.5.15-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2 2.8-.5 0-1 0-1.5-.1 2.9 1.9 6.4 3 10.1 3z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="inline-block text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.5 2h-17C2.1 2 1 3.1 1 4.5v15C1 20.9 2.1 22 3.5 22h17c1.4 0 2.5-1.1 2.5-2.5v-15C23 3.1 21.9 2 20.5 2zM8 19H5v-9h3v9zm-1.5-10.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM19 19h-3v-4.4c0-1.1-.4-1.9-1.4-1.9-1 0-1.5.6-1.8 1.3-.1.2-.1.5-.1.7V19h-3v-9h3v1.2c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1V19z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="inline-block text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Website"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
