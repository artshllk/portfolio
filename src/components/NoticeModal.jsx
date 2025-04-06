"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function NoticeModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 grid place-items-center p-4"
        >
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-yellow-500 p-6 mx-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-4 text-gray-700">
              <h2 className="text-2xl font-bold text-yellow-600 flex items-center gap-2">
                <span role="img" aria-hidden="true">
                  &#9888;
                </span>
                Professional Notice
              </h2>

              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  As a{" "}
                  <strong className="text-blue-600">
                    QA Automation Engineer
                  </strong>
                  , these projects serve primarily as a playground for
                  sharpening my JavaScript skills. They are not necessarily
                  indicative of my professional QA capabilities.
                </p>

                <p>
                  My day-to-day involves a blend of{" "}
                  <strong className="text-green-600">manual testing</strong> and{" "}
                  <strong className="text-purple-600">automation</strong>, with
                  contributions encompassing reliability, performance, and
                  streamlined CI/CD pipelines.
                </p>

                <p>
                  For a deeper dive into my automation work, visit my{" "}
                  <a
                    href="https://github.com/artshllk"
                    className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  . Feel free to contact me directly if you're interested in
                  collaborating or wish to explore my professional experience
                  further and discover what I can bring to your team.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
