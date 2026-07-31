"use client";
import { IBatches } from "@/types";
import moment from "moment";
import { motion } from "framer-motion";
import React from "react";
import group from "@/public/icons/group-white.svg";
import groupGreen from "@/public/icons/group-green.svg";
import calendarBlue from "@/public/icons/calender-blue.svg";
import { getWhatsAppLink } from "@/utils";
import ResilientImage from "@/components/ui/ResilientImage";

interface ICourseBatchSectionProps {
  batches: IBatches[];
  duration: number;
}

const CourseBatchSection: React.FC<ICourseBatchSectionProps> = ({ batches, duration }) => {
  const today = new Date();

  const runningBatches = batches.filter((batch) => {
    const region = batch.batch_regions?.[0];
    if (!region?.start_date) return false;

    const weeksPassed =
      (today.getTime() - new Date(region.start_date).getTime()) /
      (1000 * 60 * 60 * 24 * 7);

    return weeksPassed >= 0 && weeksPassed <= duration;
  });

  const upcomingBatches = batches.filter((batch) => {
    const region = batch.batch_regions?.[0];
    if (!region?.start_date) return false;

    return new Date(region.start_date) > today;
  });

  return (
    <section className="bg-[#0B1120] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Ambient Glass Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 mb-12"
        >
          <div>
            <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-full px-4 py-1.5 text-xs w-fit mb-4 flex items-center justify-center gap-2 text-emerald-300 font-bold shadow-2xs">
              <div className="bg-emerald-400 w-2 h-2 rounded-full animate-pulse" />
              <span>Live Online Training</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 font-bricolage-grotesque leading-tight">
              Batch Schedule
            </h2>

            <p className="text-slate-400 text-sm sm:text-base">
              All batches are 100% live online via Zoom with interactive 1-on-1 Q&A
            </p>

            <p className="text-slate-400 text-sm mt-2 font-medium">
              🌍 Global Regions: India • UK • USA • Canada
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 lg:p-6 flex items-center gap-4 lg:gap-5 shadow-lg">
              <div className="bg-emerald-500/20 border border-emerald-500/30 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                <ResilientImage src={groupGreen} fallbackSrc={groupGreen} alt="group" className="w-7 h-7" />
              </div>
              <div>
                <div className="text-white text-3xl font-extrabold font-bricolage-grotesque">
                  {runningBatches.length}
                </div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Currently Running
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 lg:p-6 flex items-center gap-4 lg:gap-5 shadow-lg">
              <div className="bg-indigo-500/20 border border-indigo-500/30 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                <ResilientImage src={calendarBlue} fallbackSrc={calendarBlue} alt="calendar" className="w-7 h-7" />
              </div>
              <div>
                <div className="text-white text-3xl font-extrabold font-bricolage-grotesque">
                  {upcomingBatches.length}
                </div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Upcoming Batches
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

          {/* RUNNING */}
          <div>
            <div className="flex items-center gap-3 w-full mb-6">
              <h3 className="text-cyan-400 font-extrabold text-xs tracking-wider uppercase">
                IN SESSION ({runningBatches.length})
              </h3>
              <div className="grow h-[1px] bg-slate-800" />
            </div>

            {runningBatches.length === 0 ? (
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center text-slate-400 text-sm">
                No active running batches right now. Check upcoming batches below!
              </div>
            ) : (
              <div className="space-y-4">
                {runningBatches.map((batch) => {
                  const region = batch.batch_regions?.[0];
                  if (!region?.start_date) return null;
                  const startDate = new Date(region.start_date);

                  const week =
                    Math.min(
                      duration,
                      Math.ceil(
                        (today.getTime() - startDate.getTime()) /
                          (1000 * 60 * 60 * 24 * 7)
                      )
                    ) || 1;

                  const progress = (week / duration) * 100;

                  return (
                    <motion.div
                      key={batch.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 shadow-xl"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                        <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center p-2 rounded-2xl shrink-0">
                          <ResilientImage src={group} fallbackSrc={group} alt="group" className="w-6 h-6" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                            <div>
                              <div className="bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 px-3 py-0.5 text-[11px] w-fit rounded-full font-bold mb-1.5">
                                IN SESSION
                              </div>
                              <div className="text-white text-base sm:text-lg font-bold font-bricolage-grotesque">
                                {batch.name}
                              </div>

                              <div className="text-slate-400 text-xs mt-0.5">
                                {batch.class_days?.join("/")}
                              </div>
                            </div>

                            <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold self-start whitespace-nowrap shadow-xs">
                              Week {week} of {duration}
                            </div>
                          </div>

                          <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden mt-3">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                              style={{ width: `${progress}%` }}
                            />
                          </div>

                          <div className="text-right text-slate-400 text-xs font-semibold mt-1.5">
                            {Math.round(progress)}% complete
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* UPCOMING */}
          <div>
            <div className="flex items-center gap-3 w-full mb-6">
              <h3 className="text-indigo-300 font-extrabold text-xs tracking-wider uppercase">
                OPEN FOR ENROLMENT ({upcomingBatches.length})
              </h3>
              <div className="grow h-[1px] bg-slate-800" />
            </div>

            {upcomingBatches.length === 0 ? (
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center text-slate-400 text-sm">
                Next batches are being scheduled. Click "WhatsApp to Enroll" to reserve your seat!
              </div>
            ) : (
              <div className="space-y-4">
                {upcomingBatches.map((batch) => {
                  const region = batch.batch_regions?.[0];

                  return (
                    <motion.div
                      key={batch.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/10 shadow-xl"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-0.5 text-[11px] w-fit rounded-full font-bold mb-1.5">
                            UPCOMING
                          </div>
                          <div className="text-white text-base sm:text-lg font-bold font-bricolage-grotesque">
                            {batch.name}
                          </div>
                          <div className="text-slate-400 text-xs mt-0.5">
                            Starts: {region?.start_date ? moment(region.start_date).format("DD MMM YYYY") : "TBA"} • {batch.class_days?.join("/")}
                          </div>
                        </div>

                        <a
                          href={getWhatsAppLink(`Hi Cloud Edge Solutions, I want to reserve a seat for batch ${batch.name}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg shrink-0 text-center"
                        >
                          Reserve Seat
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseBatchSection;
