import Image from "next/image";

// React component. A JS function that returns the UI.
// responsive, modern UI, thanks to Next.js
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col md:flex-row items-center gap-12 py-20">
        {/* TEXT */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-6">
            Manifesto
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Knocked down. <br /> Came back up. <br /> Stronger.
          </h1>
          <p className="mt-8 text-lg text-neutral-400 max-w-xl">
            Autoimmune disease. Crippling anxiety. Depression. I climbed out of all of them by
            rebuilding my body and mind from the ground up. Here's what worked.
          </p>
          <div className="mt-10 flex gap-5 text-sm text-neutral-400">
            <a href="https://www.instagram.com/mishotiman/" target="_blank" rel="noreferrer" className="hover:text-neutral-100 transition">Instagram</a>
            <a href="#contact" className="hover:text-neutral-100 transition">Email</a>
          </div>
        </div>

        {/* PORTRAIT */}
        <div className="w-56 h-56 md:w-72 md:h-72 shrink-0 rounded-full overflow-hidden border border-neutral-800">
          <Image
            src="/profile-photo.jpg"
            alt="Michail portrait"
            width={288}
            height={288}
            className="w-full h-full object-cover object-[18%_50%]"
            priority
          />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-800" />

      {/* ABOUT */}
      <section id="about" className="py-24">
        <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
          About
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          The short version.
        </h2>
        <div className="space-y-5 text-lg text-neutral-300 leading-relaxed max-w-2xl">
          <p>
            My name is Michail. At 17, I was a teenager obsessed with strength training, gaining
            24+ kg of muscle in two and a half years. At 20, I was diagnosed with ulcerative colitis —
            an autoimmune disease with no cure — and lost the body I'd built. The following years I was
            drowning in fear about my health declining. Crippling anxiety and depression plagued me daily for
            years. I didn't know what to do, so I started studying and trying different stuff.
          </p>
          <p>
            I looked into scientific tools for improving physical and mental health. I learned everything
            I could about how the body heals, and how the mind recovers. I had faith for the future, but I had
            to do the work every day, and it was difficult. Slowly, over the months and years, things started to change,
            my anxiety improved, depression lifted, and I regained 10+ kg of muscle.
          </p>
          <p>
            I experimented on myself with various tools, backed by real science. Now, here I share what worked.
          </p>
        </div>
      </section>

      <div className="border-t border-neutral-800" />

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-24">
        <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
          Achievements
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          Highlights from my road so far.
        </h2>
        <ul className="space-y-3 text-neutral-300 max-w-2xl list-disc list-outside pl-6 marker:text-red-400">
          <li>Gained 24+ kg muscle mass in 2.5 years in high school.</li>
          <li>Regained 10+ kg muscle mass in 3 years with an active autoimmune disease.</li>
          <li>Improved autoimmune disease condition with altering exercise, nutrition, rest, and mindset in 1 year time.</li>
          <li>Recovered from crippling anxiety on hour-to-hour basis in 2 years.</li>
          <li>Recovered completely from moderate depression in 6 months.</li>
          <li>Awarded Junior Black Belt in Taekwondo at age 10.</li>
          <li>Held multiple European region records in a video game (World of Tanks).</li>
          <li>In Calisthenics, full planche hold 4+ seconds.</li>
          <li>In Calisthenics, front lever hold 19+ seconds.</li>
        </ul>
      </section>

      <div className="border-t border-neutral-800" />

      {/* CONTRIBUTIONS */}
      <section id="contributions" className="py-24">
        <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
          Contributions
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          How I&apos;ve helped people around me.
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-10">
          A growing list of ways I&apos;ve contributed to the people around me.
        </p>
        <ul className="space-y-3 text-neutral-300 max-w-2xl list-disc list-outside pl-6 marker:text-red-400">
          <li>
            <strong className="text-neutral-100">Training:</strong> Coached 10+ people on building strength, hypertrophy, and/or achieving particular Calisthenics goals.
          </li>
          <li>
            <strong className="text-neutral-100">Nutrition:</strong> Guided 10+ people toward healthier eating habits tailored to their goals and individual lifestyle.
          </li>
          <li>
            <strong className="text-neutral-100">Empowerment:</strong> Empowered ~100 people to change an existing habit or start a new one, by providing them with science-backed tools. (e.g., in training, morning practice, meditation, sleep, stress management, mindset)
          </li>
        </ul>
      </section>

      <div className="border-t border-neutral-800" />

      {/* INTERESTS */}
      <section id="interests" className="py-24">
        <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
          Interests
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          What pulls my attention.
        </h2>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="border border-neutral-700 rounded-full px-4 py-1.5 text-sm text-neutral-300">Strength Training</span>
          <span className="border border-neutral-700 rounded-full px-4 py-1.5 text-sm text-neutral-300">HRV & Cardio Training</span>
          <span className="border border-neutral-700 rounded-full px-4 py-1.5 text-sm text-neutral-300">Longevity</span>
          <span className="border border-neutral-700 rounded-full px-4 py-1.5 text-sm text-neutral-300">Peak Performance</span>
          <span className="border border-neutral-700 rounded-full px-4 py-1.5 text-sm text-neutral-300">Happiness</span>
          <span className="border border-neutral-700 rounded-full px-4 py-1.5 text-sm text-neutral-300">Empowerment & Leadership</span>
          <span className="border border-neutral-700 rounded-full px-4 py-1.5 text-sm text-neutral-300">The Brain & Consciousness</span>
        </div>

        {/* Paragraphs */}
        <div className="space-y-8 max-w-2xl">
          <div>
            <h3 className="font-semibold text-lg mb-2">Strength Training</h3>
            <p className="text-neutral-400 leading-relaxed">
              I started doing Calisthenics in 2017. Alongside that, I was curious to learn how to gain strength and hypertrophy,
              and do so fast. Over the years, I have learned the best scientifically proven ways to gain strength and muscle mass,
              and I have come to acquire those in great quantities. I like discussions around gym, nutrition, sleep, and tools for gaining strength and muscle mass
              and I regularly help people achieve their physique goals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">HRV & Aerobic Training</h3>
            <p className="text-neutral-400 leading-relaxed">
              It wasn't until I got myself a WHOOP band that I started caring about Heart Rate Variability (HRV) more.
              It is a great indicator of how your nervous system and body are performing. The higher the HRV, the more adaptable and responsive the body and nervous system are
              to stress, whether physical or mental. My love for doing aerobic training, or cardio, most often, in the form of running, dates back to 2022. Back then
              I was very keen on learning how to make the brain healthier and how one can increase his own (fluid) intelligence. It turns out that doing regular aerobic training
              was one of the very few ways in which you can objectively increase your intelligence, althought not by much. This is what got me started doing regular running sessions ever since.
              Plus, the fact that aerobic training induces growth of new capillaries and nerve cells in the brain sounds really cool, at least to me.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Longevity</h3>
            <p className="text-neutral-400 leading-relaxed">
              When I was in my teenage years, I had a particular fear that something may be wrong with my heart. It was an irrational thought since all the doctors
              were telling me my heart is in perfect condition. Later, in 2022 I was diagnosed with Ulcerative Colitis, an autoimmune disease for which there isn't a cure.
              There was a period of a few years where my body & mind were under serious stress. I was drowning in fear that my health was declining and whether I would be able to live
              a normal life. So what did I do in that moment? I started learning. I started learning everything that science knows about how to rejuvenate the body. I learned about ways to
              improve your sleep, what foods to eat, and what daily things you should do in order to be full of energy and vitality even at the age of 80. One of my agenda items is to go
              kayaking with my grandchildren in my 80s, honestly, I am quite excited for that.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Peak Performance</h3>
            <p className="text-neutral-400 leading-relaxed">
              "What is the difference between being 1st and being in the top 10?", I asked myself at the age of 19. Actually, my relationship with peak performance starts way back
              in primary school when I got my black belt in taekwondo (age 10), and in my teen years, when I was setting European records in a video game I used to play (World of Tanks).
              I have always wanted to learn what differentiates the champions from all the rest. This is how I got into learning about peak performance - the science on how to perform at your best,
              physically or mentally. Learning how to ramp up my focus, memory, and cognition has been very helpful in my university years when I had to cram for an exam, or wanted to learn a new
              subject faster.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Happiness</h3>
            <p className="text-neutral-400 leading-relaxed">
              How many of us can sit alone, quietly with ourselves, and feel okay with ourselves and with our life? Feel like we are doing enough, like we are enough?
              From my experience, talking to other people around me, the answer is: very few. There is always a lingering feeling inside us that we have not done enough, that we are a failure.
              And perhaps when we find the "right" person, or earn X amount of money, or something similar, then we would finally be happy and content and feel great. But we have to
              realize this is just an illusion, isn't it? So I posed the question, "Why can't I just be happy now?", and the answer is: I can! I look at happiness as a practice, a set of things you can do regularly,
              rather than as a persistent elated feeling of euphoria. Life consists of 'ups' and 'downs', and it is not possible to only experience 'ups'. However, given the right tools you can learn
              how to bounce back up when you are knocked down (and do so quicker!), and how to prevent yourself from falling further down than you already are.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Empowerment & Leadership</h3>
            <p className="text-neutral-400 leading-relaxed">
              Plenty of us feel like we are "weak" - a sense that life is happening to us, and we don't have much control over it. We can't achieve our dream physique, we can't have our
              dream job, we can't do X, or Y, and we feel "stuck", in the same way we felt yesterday, and the day before that. I have certainly felt that way before. Now, I am here to change that.
              I see potential in each of us to achieve what we want, I am here to tell you just that. You are more than your thoughts and the feelings you are experiencing. You can change, and
              become the person you want. I have pulled myself out from the deepest trenches, from the darkest moments, and I know for a fact that it is possible, and that you can do it as well.
              I love to encourage people around me, whether to exercise more, to eat healthier, or by lifting their mood after a negative experience in their life. I see myself as a natural leader
              and a person who inspires others to believe in themselves.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">The Brain & Consciousness</h3>
            <p className="text-neutral-400 leading-relaxed">
              Some people go through life without really appreciating the magnificence and perplexity of consciousness and the human brain. The eye-opening moment for me was during my final year of high school, when I took THC for the first time.
              I am not advising you do the same, by the way. The experience was terrifying, for a few hours I felt something was "broken" with reality and my consciousness. It was radically different, the way I perceived reality had changed
              in a fundamental way. In that experience I realized that I didn't have any idea how misunderstood consciousness is by people. As a side note, I had recurring panic attacks from the experience and a crippling anxiety that plagued me
              for years. We think we know something about reality and the nature of our mind, but we know very little. As much as it was terrifying, this single experience also sparked my interest
              to learn more about how the brain works and what consciousness is, and how it comes to be. Since then I have been experimenting on myself with meditation and nootropic substances like Alpha GPC, Lion's mane, Bacopa, etc. (but no hard drugs, I'm off that),
              in a quest to discover more about the brain and myself.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-800" />

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
          Contact
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          Get in touch.
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-6">
          If you want to connect with me, please use the links below to reach me.
        </p>
        <a
          href="mailto:mishotiman@gmail.com"
          className="inline-block border border-neutral-700 px-5 py-2.5 rounded-md text-sm hover:bg-neutral-900 transition"
        >
          mishotiman@gmail.com
        </a>
        <a
          href="https://www.instagram.com/mishotiman/"
          target="_blank"
          rel="noreferrer"
          className="inline-block border border-neutral-700 px-5 py-2.5 rounded-md text-sm hover:bg-neutral-900 transition"
        >
          Instagram
        </a>
      </section>

      <footer className="border-t border-neutral-800 py-10 text-sm text-neutral-500 text-center">
        © {new Date().getFullYear()} Michail. Build the body & mind. Built with Next.js.
      </footer>
    </main>
  );
}