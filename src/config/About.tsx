import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import WazuhIcon from '@/components/technologies/wazuh';
import { NumpadIcon } from '@phosphor-icons/react/dist/ssr';

export const mySkills = [
  <ReactIcon key="react" />,
  <Bun key="bun" />,
  <JavaScript key="javascript" />,
  <TypeScript key="typescript" />,
  <MongoDB key="mongodb" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <NumpadIcon key="prisma" />,
  <WazuhIcon key="wazuh" />,  
];

export const about = {
  name: 'Muhammad Usman Samar',
  description: `I'm a Cyber Security Researcher and Open Source Contributor, I love building products to solve real-world problems`,
};
