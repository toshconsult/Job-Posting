import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ConferenceLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1726179612723-124312ff97a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            1st Annual TGM Christian Conference
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-2">
            & 5th Year Anniversary Celebration
          </p>
          <p className="italic text-lg">"Fill and Subdue" – Genesis 1:26-28</p>
        </motion.div>
      </div>

      {/* Purpose */}
      <motion.section
        className="py-12 px-6 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Conference Purpose</h2>
        <p className="text-lg">
          A transformational time of spiritual empowerment, equipping believers to
          positively influence their lives, families, and communities — while walking
          in God's authority in every area of life.
        </p>
      </motion.section>

      {/* Event Info */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold">📅 July 3rd - 6th, 2025</h3>
        <p className="mt-2 text-lg">📍 Location: To Be Announced</p>
      </section>

      {/* Speakers */}
      <motion.section
        className="py-12 px-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Powerful Line-Up of Speakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["Dr. Samuel Antwi-Boasiako", "Elizabeth Antwi", "Diana Hamilton", "Dr. Nana Wilmot-DeSouza", "Dr. Prince Antwi", "Mrs. Freda Asare"].map((name, i) => (
            <div key={i} className="text-center">
              <img
                src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                alt={name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg mb-2"
              />
              <p className="font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Sessions */}
      <section className="bg-white py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Conference Sessions Include:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-lg">
          {[
            "Impactful Word & Prayer Sessions",
            "Marriage Seminar",
            "Parenting Seminar",
            "Singles & Engaged Seminar",
            "Divorced Seminar",
            "Health & Wellness with Dr. Wilmot-DeSouza",
            "Extraordinary Worship Night with Diana Hamilton",
            "Ladies Night with Liz Antwi",
            "Millionaire Entrepreneur Workshop: Healthcare, IT/AI, Opportunities in Africa, Kingdom Impact"
          ].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Worship Leaders */}
      <motion.section
        className="bg-gray-100 py-12 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Ministering Worship Leaders</h2>
        <p className="text-lg mb-4 font-semibold">
          Guest Gospel Artist: <span className="text-pink-600">Diana Hamilton</span>
        </p>
        <p className="text-md">Grace Collingwoode • Mrs. Annie Akuamoah • Mrs. Thelma Ameyaw • Mrs. Adelaide Okyere Boateng (PharmD)</p>
      </motion.section>

      {/* Register CTA */}
      <section className="py-12 px-6 text-center bg-pink-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Register Now & Join The Movement</h2>
        <p className="mb-6">Lodging does not include food. Families with more than one child or children over age 10 are encouraged to reserve a private room.</p>
        <button className="bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-all">
          Register
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; 2025 TGM Ministries. All rights reserved.</p>
      </footer>
    </div>
  );
}