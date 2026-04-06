'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#252525]"
        >
          <div className="loader-wrapper">
            <div className="loader-box-wrap">
              <div className="loader-box one" />
              <div className="loader-box two" />
              <div className="loader-box three" />
              <div className="loader-box four" />
              <div className="loader-box five" />
              <div className="loader-box six" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
