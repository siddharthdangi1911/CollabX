import AnimatedSection from "@/components/AnimatedSection";
import TeamCard from "@/components/TeamCard";

export default function AboutScreen() {
    return (
        <div className="bg-[#181818] text-gray-900">
            <section className="relative min-h-screen flex items-center justify-center bg-[#303030] rounded-t-lg">
                <div className="absolute inset-0" />
                <AnimatedSection>
                    <div className="relative z-10 max-w-5xl text-center px-6">
                        <h1 className="text-6xl font-bold text-white mb-6">
                            Born from Collaboration
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Real people. Real work. Real opportunity.
                        </p>

                        <div className="flex justify-center gap-4">
                            <button className="px-8 py-4 bg-white text-black rounded-xl">
                                Join Community
                            </button>
                            <button className="px-8 py-4 border border-white text-white rounded-xl">
                                Explore Projects
                            </button>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
            <section className="bg-white">
                <section className="max-w-6xl mx-auto px-6 py-28 items-start justify-start">
                    <AnimatedSection>
                        <div className="items-start justify-start flex flex-col">
                            <h2 className="text-4xl font-semibold mb-8">Our Story</h2>
                            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                                CollabX began as an idea during JEE preparation—when the gap between
                                effort and opportunity was deeply felt. That experience shaped a
                                belief that talent should be judged by execution, not access.
                            </p>
                        </div>
                    </AnimatedSection>
                </section>
            </section>
            <section className="bg-gray-50 py-28 px-6 mx-auto">
                <div className="max-w-6xl mx-auto px-6 flex flex-col gap-50">
                    <AnimatedSection>
                        <div className="items-end justify-end flex flex-col">
                            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                                We aim to become a global platform where students grow by
                                solving real industry problems—not just by collecting certificates or resumes.
                                At the heart of CollabX is a strong, interactive community, inspired by platforms like Reddit,
                                where users openly discuss ideas, share knowledge, learn trending skills, showcase projects, and help each other grow.
                            </p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div>
                            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
                            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                                CollabX envisions a future where learning is practical, teamwork is a core skill,
                                and talent is judged by execution and impact rather than background or college tier.
                                Our community-driven approach ensures that growth is continuous, peer-supported, and transparent.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
            <section className="bg-white">
                <section className="max-w-6xl mx-auto px-6 py-28">
                    <AnimatedSection>
                        <h2 className="text-4xl font-semibold text-center mb-16">
                            The People Behind CollabX
                        </h2>
                    </AnimatedSection>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <AnimatedSection>
                            <TeamCard
                                name="Name 1"
                                role="Role 1"
                                image="/globe.svg"
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <TeamCard
                                name="Name 2"
                                role="Role 2"
                                image="/globe.svg"
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <TeamCard
                                name="Name 3"
                                role="Role 3"
                                image="/globe.svg"
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <TeamCard
                                name="Name 4"
                                role="Role 4"
                                image="/globe.svg"
                            />
                        </AnimatedSection>
                    </div>
                </section>
            </section>
            <section className="bg-black text-white py-28 text-center">
                <AnimatedSection>
                    <h2 className="text-4xl font-bold mb-6">
                        Build real things. Together.
                    </h2>
                    <p className="text-gray-400 mb-10">
                        Join a community where execution matters.
                    </p>
                    <button className="px-10 py-4 bg-white text-black rounded-xl">
                        Get Started
                    </button>
                </AnimatedSection>
            </section>
        </div >
    );
}
