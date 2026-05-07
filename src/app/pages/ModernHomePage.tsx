import ModernHero from '../components/modern/ModernHero';
import ModernWork from '../components/modern/ModernWork';
import ModernServices from '../components/modern/ModernServices';
import ModernAboutSplit from '../components/modern/ModernAboutSplit';
import ModernSkills from '../components/modern/ModernSkills';
import ModernExperience from '../components/modern/ModernExperience';
import ModernContact from '../components/modern/ModernContact';

export default function ModernHomePage() {
  return (
    <main className="lg:pl-64">
      <ModernHero />
      <ModernWork />
      <ModernServices />
      <ModernAboutSplit />
      <ModernSkills />
      <ModernExperience />
      <ModernContact />
    </main>
  );
}
