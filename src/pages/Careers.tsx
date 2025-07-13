import { motion } from 'framer-motion';

export default function Careers() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-muted-foreground">
              No current openings available.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}