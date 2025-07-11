const skills = [
  "TypeScript", "JavaScript", "Python", "C++", "React", "Deno", "Node.js", "SQL", "Git"
];

const interests = [
  "Artificial Intelligence", "Web Development", "Open Source", "UI/UX Design", "Cloud Computing"
];

export default function About() {
  return (
    <main class="min-h-screen bg-white text-gray-900 flex flex-col items-center py-12 px-4">
      <section class="max-w-2xl w-full bg-gray-50 rounded-xl shadow-lg p-8">
        <h1 class="text-4xl font-bold mb-4 text-blue-700">About Me</h1>
        <p class="text-lg mb-6">
          Hello! I'm <span class="font-semibold">[Your Name]</span>, a passionate Computer Science student with a love for building impactful software and exploring new technologies. I thrive on solving complex problems and continuously learning in the ever-evolving tech landscape.
        </p>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2 text-blue-600">Education</h2>
          <p>B.Sc. in Computer Science<br/>
          <span class="text-gray-600">[Your University], [Expected Graduation Year]</span></p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2 text-blue-600">Skills</h2>
          <ul class="flex flex-wrap gap-2">
            {skills.map(skill => (
              <li class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium" key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2 text-blue-600">Interests</h2>
          <ul class="flex flex-wrap gap-2">
            {interests.map(interest => (
              <li class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium" key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
