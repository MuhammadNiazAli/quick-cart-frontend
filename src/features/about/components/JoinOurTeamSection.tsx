"use client";

import React from "react";
import { Briefcase, Users, Rocket } from "lucide-react";

const JoinOurTeamSection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Join Our Team
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            We are building real-world web products and always welcome people
            who love coding, learning, and shipping meaningful projects.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Grow Your Career With Us
            </h3>

            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              We work on real full-stack projects, animated UIs, and scalable
              systems. If you enjoy problem solving and clean code, you will
              feel at home here.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Flexible Work Style
                  </h4>
                  <p className="text-sm text-gray-600">
                    Remote or onsite work with flexible schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Strong Team Culture
                  </h4>
                  <p className="text-sm text-gray-600">
                    Open communication, code reviews, and teamwork.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Rocket className="h-5 w-5 text-orange-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Learning & Growth
                  </h4>
                  <p className="text-sm text-gray-600">
                    Work on real projects and grow your technical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Ready to Build With Us?
            </h3>

            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              If you love web development and want to work on meaningful
              products, we would love to hear from you.
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
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeamSection;
