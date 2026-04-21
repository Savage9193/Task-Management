import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ open, title, onClose, children }: ModalProps) => (
  <AnimatePresence>
    {open ? (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-lg rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-2xl dark:border-slate-700/80 dark:bg-slate-900/95"
          onClick={(event) => event.stopPropagation()}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
          {children}
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);
