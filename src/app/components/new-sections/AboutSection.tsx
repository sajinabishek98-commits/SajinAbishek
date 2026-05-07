import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#141414] mb-3">About Me</h2>
        <p className="text-lg text-[#737373] mb-8">
          Passionate about solving real-world problems through thoughtful design
        </p>

        <div className="space-y-6 text-lg text-[#737373] leading-relaxed">
          <p>
            I'm a Product Designer with over 3 years of experience in crafting
            user-centric digital experiences. I've worked on multiple startup and
            client projects at Turbostart, where I contributed to end-to-end
            product design—from understanding user needs to delivering intuitive
            and scalable solutions.
          </p>

          <p>
            Alongside my full-time role, I've also taken on freelance UI design
            projects, helping clients enhance usability and create visually
            engaging interfaces. I'm passionate about solving real-world problems
            through design and continuously improving products through thoughtful
            user experience and collaboration.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
