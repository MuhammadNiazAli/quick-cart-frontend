import React from "react";
import { Briefcase, Users, Rocket } from "lucide-react";

const JoinOurTeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join Our Team
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We’re always looking for passionate, creative, and driven people who
            want to build meaningful ecommerce experiences together.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Grow Your Career With Us
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At our company, we value innovation, collaboration, and personal
              growth. Whether you’re a developer, designer, marketer, or
              operations expert, you’ll find opportunities to learn, grow, and
              make an impact.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Flexible Work Environment
                  </h4>
                  <p className="text-sm text-gray-600">
                    Work remotely or from our office with flexible hours that
                    fit your lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Collaborative Culture
                  </h4>
                  <p className="text-sm text-gray-600">
                    Be part of a supportive team that values ideas, creativity,
                    and teamwork.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Rocket className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Growth & Learning
                  </h4>
                  <p className="text-sm text-gray-600">
                    Upskill with real-world projects, mentorship, and career
                    development opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ready to Join Us?
            </h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Explore open positions and become part of a team that’s shaping
              the future of ecommerce.
            </p>

            <button
              className="
                w-full
                rounded-full
                bg-orange-600
                px-6
                py-3
                text-white
                font-semibold
                transition
                hover:bg-orange-500
              "
            >
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeamSection;
