import { routes } from '@/constants/routes.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { ParticlePractice } from './_components/particle-practice.tsx';
import { createParticleRound } from './_components/particle-questions.ts';

export const generateMetadata = createMetadata(routes.practice.particles);

export default function Page() {
  return <ParticlePractice initialRound={createParticleRound()} />;
}
